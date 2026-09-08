const fs=require('fs'),{JSDOM}=require('jsdom');
const OUT='/sessions/confident-amazing-ramanujan/mnt/outputs';
const dom=new JSDOM(fs.readFileSync(OUT+'/recipe-book.html','utf8'),{runScripts:'dangerously',url:'https://local/rb',pretendToBeVisual:true});
const w=dom.window,d=w.document,$=s=>d.querySelector(s),$$=s=>[...d.querySelectorAll(s)];
let fail=0; const eq=(g,x,l)=>{ if(String(g)!==String(x)){console.log('FAIL '+l+' -> '+g);fail++;} else console.log('  ok  '+l+' = '+g); };
const FRESH=new Set('asparagus avocado baby_bok_choy bacon basil bean_sprouts beef_balls beef_steak beets bell_pepper bitter_melon black_fungus bok_choy broccoli cabbage carrot cauliflower celery century_egg cheddar chicken_breast chinese_eggplant chinese_mustard_greens chinese_sausage chinese_yam chives choy_sum cilantro corn cucumber daikon dill dried_anchovies duck dumplings edamame eggs enoki feta fish_balls fuzzy_melon gai_lan ginger green_beans ground_beef king_oyster lemon lemongrass lettuce lime lobster lotus_root mackerel minced_pork mint mizuna mozzarella mushroom mussels_clams octopus_squid okra ox_tail oyster_mushroom parsley pork_belly pork_bones pork_chop potato quail_eggs radish roast_duck rosemary salmon salted_egg scallion scallops shiitake shimeji shiso shrimp sliced_beef snow_peas sour_cream spam spinach straw_mushroom sweet_potato taro_root thai_basil thai_chili thyme tilapia tofu tofu_puff tofu_skin tomato water_chestnut water_spinach whole_chicken whole_fish winter_melon zucchini'.split(' '));
const PANTRY=new Set('flour arborio_rice baguette baking_powder baking_soda balsamic_vinegar bay_leaves black_pepper bread bread_flour brown_sugar butter canned_beans canned_tomatoes capers black_vinegar cocoa_powder coconut_milk cooking_oil cornstarch curry_paste dark_soy_sauce dashi doubanjiang dried_oregano dried_pasta dried_shiitake dumpling_wrappers fermented_black_beans fish_sauce five_spice garlic garlic_powder ghee glass_noodles glutinous_rice gochugaru gochujang heavy_cream hoisin_sauce honey italian_seasoning japanese_curry jasmine_rice katsuobushi kimchi kombu milk mirin miso olive_oil olives onion onion_powder oyster_sauce panko paprika peanut_butter ponzu red_pepper_flakes red_wine rice_wine rice_flour rice_noodles rice_paper rice_vinegar rock_sugar sake salt sesame_oil sesame_seeds shaoxing_wine sichuan_peppercorns soba_noodles soy_sauce sriracha star_anise sugar sushi_rice togarashi udon_noodles vanilla_extract wood_ear yeast yogurt'.split(' '));

console.log('[render]');
const cards=$$('.card');
eq(cards.length>0,true,'cards rendered ('+cards.length+')');
eq(cards.every(c=>c.querySelector('.meta')&&c.querySelector('.src')),true,'every card intact');
eq($$('button button, button a, [role=button] [role=button]').length,0,'no nested interactive elements');

console.log('\n[meal-picker export]');
$('#dl-picker').dispatchEvent(new w.MouseEvent('click',{bubbles:true}));
const p=JSON.parse($('#export-text').value);
fs.writeFileSync(OUT+'/whats-cooking.json',JSON.stringify(p,null,2));
const NF=new Set(p.newIngredients.filter(n=>n.list==='fresh').map(n=>n.id));
const NP=new Set(p.newIngredients.filter(n=>n.list==='pantry').map(n=>n.id));
let bad=[];
p.recipes.forEach(r=>{
 r.perishables.forEach(e=>{if(!FRESH.has(e.id)&&!NF.has(e.id))bad.push(r.name+' fresh:'+e.id);(e.substitutes||[]).forEach(s=>{if(!FRESH.has(s)&&!NF.has(s))bad.push('sub crosses '+e.id+'->'+s);});});
 r.pantry.forEach(e=>{if(!PANTRY.has(e.id)&&!NP.has(e.id))bad.push(r.name+' pantry:'+e.id);(e.substitutes||[]).forEach(s=>{if(!PANTRY.has(s)&&!NP.has(s))bad.push('sub crosses '+e.id+'->'+s);});});});
eq(p.recipes.length,cards.length,'export covers every recipe');
eq(bad.length?bad.join(' | '):'PASS','PASS','all ids valid, no line crossed');
eq(p.recipes.every(r=>['meal','side','dessert'].includes(r.mealType)),true,'mealType in enum');
eq($('#export-count').textContent.includes('UNCLASSIFIED'),false,'nothing unclassified');
console.log('      new ingredients: '+p.newIngredients.length);
const name=process.argv[2];
if(name){const r=p.recipes.find(x=>x.name.includes(name));
 console.log('\n      '+r.name+' — '+r.mealType+'/'+r.difficulty+'/'+r.time+'m, '+r.instructions.length+' steps');
 console.log('        fresh:  '+r.perishables.map(e=>e.id).join(', '));
 console.log('        pantry: '+r.pantry.map(e=>e.id+(e.substitutes?'→'+e.substitutes:'')).join(', '));}
console.log(fail?'\n'+fail+' FAILURES':'\nAll checks passed.');
process.exit(fail?1:0);
