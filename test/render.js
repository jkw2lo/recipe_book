/** Cards render intact, and the meal-picker export conforms to the vocabulary. */
const fs = require("node:fs"), path = require("node:path");
const { open, runner, VOCAB, ROOT } = require("./helper");
const t = runner("render + export");
const { $, $$, click, w } = open();

t.section("library");
const cards = $$(".card");
t.eq(cards.length > 0, true, `cards rendered (${cards.length})`);
t.eq(cards.every(c => c.querySelector(".meta") && c.querySelector(".src")), true,
     "every card keeps its meta and source inside");
t.eq($$("button button, button a, [role=button] [role=button]").length, 0,
     "no interactive element nested in another");

t.section("meal-picker export");
click($("#dl-picker"));
const p = JSON.parse($("#export-text").value);
fs.writeFileSync(path.join(ROOT, "whats-cooking.json"), JSON.stringify(p, null, 2));
const NF = new Set(p.newIngredients.filter(n => n.list === "fresh").map(n => n.id));
const NP = new Set(p.newIngredients.filter(n => n.list === "pantry").map(n => n.id));
const bad = [];
p.recipes.forEach(r => {
  r.perishables.forEach(e => {
    if (!VOCAB.fresh.has(e.id) && !NF.has(e.id)) bad.push(`${r.name} fresh:${e.id}`);
    (e.substitutes || []).forEach(s => {
      if (!VOCAB.fresh.has(s) && !NF.has(s)) bad.push(`substitute crosses line ${e.id}->${s}`);
    });
  });
  r.pantry.forEach(e => {
    if (!VOCAB.pantry.has(e.id) && !NP.has(e.id)) bad.push(`${r.name} pantry:${e.id}`);
    (e.substitutes || []).forEach(s => {
      if (!VOCAB.pantry.has(s) && !NP.has(s)) bad.push(`substitute crosses line ${e.id}->${s}`);
    });
  });
});
t.eq(p.recipes.length, cards.length, "export covers every recipe");
t.eq(bad.length ? bad.join(" | ") : "PASS", "PASS", "every id known, fresh/pantry line intact");
t.eq(p.recipes.every(r => ["meal", "side", "dessert"].includes(r.mealType)), true, "mealType within enum");
t.eq($("#export-count").textContent.includes("UNCLASSIFIED"), false, "nothing unclassified");
t.note(`${p.newIngredients.length} ingredients proposed for the picker's vocabulary`);

t.section("shared catalogue");
const cat = JSON.parse(w.localStorage.getItem("recipebook.catalog.v1"));
t.eq(cat.count, p.recipes.length, "catalogue published for sibling apps");
t.eq(cat.recipes.every(r => typeof r.minutes.active === "number"), true, "hands-on time on every entry");

t.done();
