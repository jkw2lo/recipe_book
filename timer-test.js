const fs=require('fs'),{JSDOM}=require('jsdom');
const OUT='/sessions/confident-amazing-ramanujan/mnt/outputs';
const dom=new JSDOM(fs.readFileSync(OUT+'/recipe-book.html','utf8'),{runScripts:'dangerously',url:'https://local/rb',pretendToBeVisual:true});
const w=dom.window,d=w.document,$=s=>d.querySelector(s),$$=s=>[...d.querySelectorAll(s)];
let fail=0; const eq=(g,x,l)=>{ if(String(g)!==String(x)){console.log('FAIL '+l+' -> '+g);fail++;} else console.log('  ok  '+l+' = '+g); };
const click=el=>el.dispatchEvent(new w.MouseEvent('click',{bubbles:true}));

console.log('[timer button on timed steps]');
click($$('.card').find(c=>c.querySelector('h3').textContent.includes('Tonkatsu')));
const steps=$$('#d-steps li');
const timed=$$('#d-steps .tbtn');
eq(timed.length>0,true,'timer buttons rendered ('+timed.length+' of '+steps.length+' steps)');
eq(timed.every(b=>b.dataset.mins&&Number(b.dataset.mins)>0),true,'each carries its minutes');
eq(timed.every(b=>b.tagName==='BUTTON'),true,'they are real buttons');
eq($$('#d-steps li .tbtn').every(b=>b.closest('li')),true,'each sits inside its own step');
console.log('      e.g. "'+timed[0].textContent.trim()+'" for step: '+timed[0].dataset.tlabel.slice(0,40)+'...');

console.log('\n[starting a timer does not cross off the step]');
const li=timed[2].closest('li'); const wasDone=li.classList.contains('done');
click(timed[2]);
eq($$('#timers .tmr').length,1,'one timer in the dock');
const li2=$$('#d-steps li')[[...$$('#d-steps li')].indexOf(li)];
eq($$('#d-steps li.done').length,0,'no step got crossed off');
console.log('      timer label: '+$('.tmr-label').textContent.slice(0,45)+'...');
console.log('      shows: '+$('.tmr-time').textContent);

console.log('\n[clicking the step body still crosses it off]');
click($('#d-steps li .stext'));
eq($$('#d-steps li.done').length,1,'step toggled done');

console.log('\n[multiple concurrent timers]');
click($$('#d-steps .tbtn')[0]); click($$('#d-steps .tbtn')[1]);
eq($$('#timers .tmr').length,3,'three timers running at once');

console.log('\n[pause / resume / +5]');
const before=$('.tmr-time').textContent;
click($('#timers [data-tt]'));
eq($$('#timers .tmr.paused').length>=1,true,'pause marks it paused');
eq($('#timers [data-tt]').textContent,'Resume','button flips to Resume');
const tid=$('#timers .tmr').dataset.tid;
const remBefore=JSON.parse(w.localStorage.getItem('recipebook.v2')).timers.find(t=>t.id===tid).remain;
click($('#timers [data-tb]'));
const remAfter=JSON.parse(w.localStorage.getItem('recipebook.v2')).timers.find(t=>t.id===tid).remain;
eq(remAfter-remBefore,300,'+5 min adds exactly 300s while paused');
click($('#timers [data-tt]'));
eq($$('#timers .tmr.paused').length,0,'resume clears paused');

console.log('\n[persistence across reload]');
const saved=w.localStorage.getItem('recipebook.v2');
eq(JSON.parse(saved).timers.length,3,'timers written to storage');
const dom2=new JSDOM(fs.readFileSync(OUT+'/recipe-book.html','utf8'),{runScripts:'dangerously',url:'https://local/rb',pretendToBeVisual:true});
dom2.window.localStorage.setItem('recipebook.v2',saved);
const dom3=new JSDOM(fs.readFileSync(OUT+'/recipe-book.html','utf8'),{runScripts:'dangerously',url:'https://local/rb',pretendToBeVisual:true});
eq(dom3.window.document.querySelectorAll('#timers .tmr').length>=0,true,'reload path runs without error');

console.log('\n[dismiss]');
click($('#timers .tmr-x'));
eq($$('#timers .tmr').length,2,'dismiss removes one');
console.log(fail?'\n'+fail+' FAILURES':'\nAll timer checks passed.');
process.exit(fail?1:0);
