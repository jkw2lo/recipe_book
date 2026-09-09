/** The two-step add flow: prompt generation, then validated import. */
const { open, runner } = require("./helper");
const t = runner("add a recipe");
const { $, $$, click, type, w } = open();

t.section("step 1 — prompt");
click($("#add-toggle"));
t.eq($("#add-panel").classList.contains("hidden"), false, "panel opens");
type($("#add-src"), "https://example.com/miso-soup");
const prompt = $("#add-prompt").value;
t.eq(prompt.includes("https://example.com/miso-soup"), true, "source embedded");
t.eq(['"uses"', '"passive"', '"claimed"', "time.active"].every(k => prompt.includes(k)), true,
     "schema and timing rules present");
t.note(`prompt is ${prompt.length} characters`);

const recipe = {
  title: "Test Miso Soup", cuisine: "Japanese", tags: ["soup"],
  source: { site: "Example", url: "https://example.com/miso-soup", author: "Someone" },
  servings: { base: 2, unit: "servings", min: 1, max: 6 },
  time: { active: 10, passive: 5, cook: 10 }, claimed: 15,
  components: [{ id: "broth", label: "Broth" }, { id: "finish", label: "Finish" }],
  ingredients: [
    { key: "dashi", comp: "broth", name: "Dashi", us: { qty: 2, unit: "cups" }, metric: { qty: 480, unit: "ml" } },
    { key: "miso", comp: "finish", name: "Miso paste", us: { qty: 2, unit: "Tbsp" }, metric: { qty: 30, unit: "g" } },
    { key: "scallion", comp: "finish", name: "Scallion", us: { qty: 1, unit: "" }, metric: { qty: 1, unit: "" }, optional: true }],
  steps: [
    { comp: "broth", text: "Heat the dashi.", detail: "Warm the dashi.", uses: ["dashi"], mins: 10 },
    { comp: "finish", text: "Whisk in miso off the heat.", detail: "Off heat, whisk in.", uses: ["miso"], mins: 3, tip: "Never boil miso." },
    { comp: "finish", text: "Rest 5 min.", detail: "Let it sit.", uses: [], mins: 5, passive: true },
    { comp: "finish", text: "Top with scallion.", detail: "Garnish.", uses: ["scallion"], mins: 2 }],
  notes: ["A test recipe."]
};

t.section("step 2 — import");
const before = $$(".card").length;
$("#add-json").value = JSON.stringify(recipe);
click($("#add-import"));
t.eq($$(".card").length, before + 1, "one recipe added");
t.eq($("#add-status").className.includes("ok"), true, "success reported");

t.section("imported behaves like a built-in");
click($$(".card").find(c => c.querySelector("h3").textContent.includes("Test Miso")));
t.eq($$("#d-ings h5").map(h => h.textContent).join("|"), "Broth|Finish", "components grouped");
t.eq($$("#d-steps li").length, 4, "all steps render");
t.eq($$("#d-steps .tbtn").length, 4, "timers available");
t.eq($("#d-chips").textContent.includes("25 min"), true, "total computed from active+passive+cook");
t.eq($("#d-claim").classList.contains("hidden"), false, "claimed-vs-real warning fires (15 vs 25)");
$$("#mode button").find(b => b.dataset.m === "eff").dispatchEvent(new w.MouseEvent("click", { bubbles: true }));
t.eq($$("#d-eff .bind").length > 0, true, "uses[] binds ingredients to their step");
click($("#back"));

t.section("persistence");
const saved = w.localStorage.getItem("recipebook.v2");
t.eq(JSON.parse(saved).custom.length, 1, "kept in custom[]");
const again = open({ beforeParse(win) { win.localStorage.setItem("recipebook.v2", saved); } });
t.eq(again.$$(".card").length, before + 1, "survives reload without duplicating");

t.section("bad input is refused, not half-applied");
const r2 = open();
r2.click(r2.$("#add-toggle"));
const n0 = r2.$$(".card").length;
r2.$("#add-json").value = "not json at all"; r2.click(r2.$("#add-import"));
t.eq(r2.$$(".card").length, n0, "garbage adds nothing");
t.eq(r2.$("#add-status").className.includes("err"), true, "error surfaced");
r2.$("#add-json").value = '{"title":"No Steps"}'; r2.click(r2.$("#add-import"));
t.eq(r2.$$(".card").length, n0, "incomplete recipe refused");
t.note(r2.$("#add-status").textContent);

t.section("tolerates what models actually return");
r2.$("#add-json").value = "```json\n" + JSON.stringify({ ...recipe, title: "Fenced Soup" }) + "\n```";
r2.click(r2.$("#add-import"));
t.eq(r2.$$(".card").length, n0 + 1, "markdown-fenced JSON still imports");

t.done();
