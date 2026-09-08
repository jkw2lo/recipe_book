const fs=require('fs'),{JSDOM}=require('jsdom');
const OUT='/sessions/confident-amazing-ramanujan/mnt/outputs';
const HTML=fs.readFileSync(OUT+'/recipe-book.html','utf8');
const mk=()=>new JSDOM(HTML,{runScripts:'dangerously',url:'https://local/rb',pretendToBeVisual:true});
let fail=0; const eq=(g,x,l)=>{ if(String(g)!==String(x)){console.log('FAIL '+l+' -> '+g);fail++;} else console.log('  ok  '+l+' = '+g); };
const dom=mk(), w=dom.window, d=w.document, $=s=>d.querySelector(s), $$=s=>[...d.querySelectorAll(s)];
const click=el=>el.dispatchEvent(new w.MouseEvent('click',{bubbles:true}));
const type=(el,v)=>{ el.value=v; el.dispatchEvent(new w.Event('input',{bubbles:true})); };

console.log('[step 1 — prompt]');
click($('#add-toggle'));
eq($('#add-panel').classList.contains('hidden'),false,'panel opens');
type($('#add-src'),'https://example.com/miso-soup');
const p=$('#add-prompt').value;
eq(p.includes('https://example.com/miso-soup'),true,'source is embedded in the prompt');
eq(p.includes('"uses"')&&p.includes('"passive"')&&p.includes('"claimed"'),true,'schema fields present');
eq(p.includes('time.active')&&p.includes('waiting'),true,'explains honest timing');
eq(p.length>1200,true,'prompt is substantive ('+p.length+' chars)');

console.log('\n[step 2 — import a well-formed recipe]');
const before=$$('.card').length;
const good=JSON.stringify({
  title:'Test Miso Soup', cuisine:'Japanese', tags:['soup'],
  source:{site:'Example',url:'https://example.com/miso-soup',author:'Someone'},
  servings:{base:2,unit:'servings',min:1,max:6},
  time:{active:10,passive:5,cook:10}, claimed:15,
  components:[{id:'broth',label:'Broth'},{id:'finish',label:'Finish'}],
  ingredients:[
    {key:'dashi',comp:'broth',name:'Dashi',us:{qty:2,unit:'cups'},metric:{qty:480,unit:'ml'}},
    {key:'miso',comp:'finish',name:'Miso paste',us:{qty:2,unit:'Tbsp'},metric:{qty:30,unit:'g'}},
    {key:'scallion',comp:'finish',name:'Scallion',us:{qty:1,unit:''},metric:{qty:1,unit:''},optional:true}],
  steps:[
    {comp:'broth',text:'Heat the dashi.',detail:'Warm the dashi in a pot.',uses:['dashi'],mins:10},
    {comp:'finish',text:'Whisk in miso off the heat.',detail:'Off heat, whisk the miso in.',uses:['miso'],mins:3,tip:'Never boil miso.'},
    {comp:'finish',text:'Rest 5 min.',detail:'Let it sit.',uses:[],mins:5,passive:true},
    {comp:'finish',text:'Top with scallion.',detail:'Garnish.',uses:['scallion'],mins:2}],
  notes:['A test recipe.']});
$('#add-json').value=good; click($('#add-import'));
eq($$('.card').length,before+1,'card count went up by one');
eq($('#add-status').className.includes('ok'),true,'success status');
console.log('      status: '+$('#add-status').textContent);

console.log('\n[imported recipe behaves like a built-in]');
click($$('.card').find(c=>c.querySelector('h3').textContent.includes('Test Miso')));
eq($('#d-title').textContent,'Test Miso Soup','opens');
eq($$('#d-ings h5').map(h=>h.textContent).join('|'),'Broth|Finish','components grouped');
eq($$('#d-steps li').length,4,'all steps render');
eq($$('#d-steps .tbtn').length,4,'timer buttons on timed steps');
eq($('#d-chips').textContent.includes('25 min'),true,'total time computed (10+5+10)');
eq(!!$('#d-claim')&&!$('#d-claim').classList.contains('hidden'),true,'claimed-vs-real warning fires (15 vs 25)');
$$('#mode button').find(b=>b.dataset.m==='eff').dispatchEvent(new w.MouseEvent('click',{bubbles:true}));
eq($$('#d-eff .bind').length>0,true,'uses[] bound ingredients to steps in efficient view');
console.log('      efficient step 1 binds: '+[...$$('#d-eff li')[0].querySelectorAll('.bind')].map(b=>b.textContent.trim()).join(', '));
$('#back').dispatchEvent(new w.MouseEvent('click',{bubbles:true}));

console.log('\n[persistence]');
const saved=w.localStorage.getItem('recipebook.v2');
eq(JSON.parse(saved).custom.length,1,'stored in custom[]');
// seed storage BEFORE the page scripts run, which is what a real reload looks like
const dom3=new JSDOM(HTML,{runScripts:'dangerously',url:'https://local/rb',pretendToBeVisual:true,
  beforeParse(win){ win.localStorage.setItem('recipebook.v2',saved); }});
eq([...dom3.window.document.querySelectorAll('.card h3')].some(h=>h.textContent.includes('Test Miso')),true,'survives reload');
eq(dom3.window.document.querySelectorAll('.card').length,before+1,'and only once (no duplicate merge)');

console.log('\n[bad input is rejected, not swallowed]');
const d4=dom3.window.document, w4=dom3.window;
const c4=el=>el.dispatchEvent(new w4.MouseEvent('click',{bubbles:true}));
c4(d4.querySelector('#add-toggle'));
const n0=d4.querySelectorAll('.card').length;
d4.querySelector('#add-json').value='not json at all'; c4(d4.querySelector('#add-import'));
eq(d4.querySelectorAll('.card').length,n0,'garbage adds nothing');
eq(d4.querySelector('#add-status').className.includes('err'),true,'error shown');
console.log('      '+d4.querySelector('#add-status').textContent);
d4.querySelector('#add-json').value='{"title":"No Steps"}'; c4(d4.querySelector('#add-import'));
eq(d4.querySelectorAll('.card').length,n0,'incomplete recipe rejected');
console.log('      '+d4.querySelector('#add-status').textContent);

console.log('\n[tolerates markdown fences]');
d4.querySelector('#add-json').value='```json\n'+good.replace('Test Miso Soup','Fenced Soup')+'\n```';
c4(d4.querySelector('#add-import'));
eq(d4.querySelectorAll('.card').length,n0+1,'fenced JSON still imports');
console.log(fail?'\n'+fail+' FAILURES':'\nAll import checks passed.');
process.exit(fail?1:0);
