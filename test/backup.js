/** Backup / restore of the personal layer, and the cook-mode wake lock.
 *  These two share a file because both are about the app's edges: data that
 *  exists nowhere but localStorage, and an API that may not exist at all.
 *  RECIPES and store are top-level `const`/`let` in a classic script, so they
 *  live in the global lexical scope and are NOT properties of window — reach
 *  them with eval, not w.RECIPES. */
const { open, runner } = require("./helper");
const t = runner("backup + wake lock");

const recipe = {
  id: "test-congee", title: "Test Congee", cuisine: "Chinese", tags: ["rice"],
  source: { site: "Example", url: "https://example.com/congee" },
  servings: { base: 2, unit: "servings", min: 1, max: 8 },
  time: { active: 10, passive: 0, cook: 60 }, claimed: 70,
  ingredients: [{ key: "rice", name: "Rice", us: { qty: 1, unit: "cup" }, metric: { qty: 200, unit: "g" } }],
  steps: [{ text: "Simmer the rice.", detail: "Simmer gently.", uses: ["rice"], mins: 60 }],
  notes: []
};

/* ---------------------------------------------------------------- backup --- */
t.section("what the backup contains");
const a = open();
const ev = (ctx, src) => ctx.w.eval(src);
const TOTAL = ev(a, "RECIPES.length");

const cards = ctx => ctx.$$(".card");
const cardFor = (ctx, title) => cards(ctx).find(c => c.querySelector("h3").textContent.includes(title));

a.click(cards(a)[0].querySelector(".star"));               // a favourite
a.click(cards(a)[1].querySelector(".rm"));                 // a removal
a.click(a.$("#add-toggle"));
a.$("#add-json").value = JSON.stringify(recipe);
a.click(a.$("#add-import"));                               // an imported recipe
a.click(cardFor(a, "Test Congee"));
a.click(a.$$("#d-steps li")[0]);                           // cross a step off
a.click(a.$("#plus"));                                     // change servings
// My-notes save on a 500ms debounce; do what that timeout would have done.
ev(a, 'store.mynotes["test-congee"] = "Less water next time."; save();');
a.click(a.$("#back"));

a.click(a.$("#backup-toggle"));
t.eq(a.$("#backup-panel").classList.contains("hidden"), false, "panel opens");
const backup = JSON.parse(a.$("#backup-text").value);

t.eq(backup.kind, "recipebook-backup", "kind is stamped");
t.eq(typeof backup.exportedAt, "string", "dated");
t.eq(backup.store.favs.length, 1, "favourite captured");
t.eq(backup.store.hidden.length, 1, "removal captured");
t.eq(backup.store.custom.length, 1, "imported recipe captured");
t.eq(backup.store.mynotes["test-congee"], "Less water next time.", "my note captured");
t.eq(Object.keys(backup.store.done).length, 1, "crossed-off steps captured");
t.eq(Object.keys(backup.store.servings).length, 1, "servings captured");
t.eq("timers" in backup.store, false, "timers deliberately excluded");
t.note("tally: " + a.$("#backup-tally").textContent);
t.eq(a.$("#backup-tally").textContent.includes("1 imported recipe"), true, "tally describes it");

/* --------------------------------------------------------------- restore --- */
t.section("restore into a fresh book");
const b = open();
t.eq(b.$$(".card").length, TOTAL, "starts with only the built-ins");
b.click(b.$("#backup-toggle"));
b.$("#restore-text").value = JSON.stringify(backup);
b.click(b.$("#restore-go"));
t.eq(b.$("#restore-msg").className.includes("ok"), true, "reported as success");
t.note(b.$("#restore-msg").textContent);
t.eq(ev(b, "RECIPES.length"), TOTAL + 1, "the imported recipe is in RECIPES");
t.eq(b.$$(".card").length, TOTAL, "one added, one hidden — net unchanged on screen");
t.eq(ev(b, "store.favs.length"), 1, "favourite restored");
t.eq(ev(b, 'store.mynotes["test-congee"]'), "Less water next time.", "note restored");
t.eq(ev(b, "store.hidden.length"), 1, "removal restored");
t.eq(b.$("#restore-text").value, "", "textarea cleared after success");

t.section("the restored recipe is a real recipe, not a husk");
b.click(cardFor(b, "Test Congee"));
t.eq(b.$$("#d-steps li").length, 1, "steps render");
t.eq(b.$("#d-mynotes").value, "Less water next time.", "note shows on the recipe");
t.eq(b.$$("#d-steps .tbtn").length, 1, "timer button intact");
b.click(b.$("#back"));

t.section("restore is idempotent");
const n1 = ev(b, "RECIPES.length"), f1 = ev(b, "store.favs.length");
b.$("#restore-text").value = JSON.stringify(backup);
b.click(b.$("#restore-go"));
t.eq(ev(b, "RECIPES.length"), n1, "no duplicate recipe (id checked before normalising)");
t.eq(ev(b, "store.favs.length"), f1, "no duplicate favourite");
t.eq(b.$("#restore-msg").textContent.includes("Already up to date"), true, "says so plainly");

t.section("restore merges, it does not clobber");
const c = open();
c.click(cards(c)[2].querySelector(".star"));   // a local favourite absent from the backup
const localFav = ev(c, "store.favs[0]");
c.click(c.$("#backup-toggle"));
c.$("#restore-text").value = JSON.stringify(backup);
c.click(c.$("#restore-go"));
t.eq(ev(c, "store.favs").includes(localFav), true, "pre-existing favourite survives");
t.eq(ev(c, "store.favs.length"), 2, "and the backup's is merged alongside it");

t.section("bad input is refused, nothing half-applied");
const d = open();
d.click(d.$("#backup-toggle"));
const before = ev(d, "JSON.stringify(store)");
d.$("#restore-text").value = "";
d.click(d.$("#restore-go"));
t.eq(d.$("#restore-msg").className.includes("err"), true, "empty refused");
d.$("#restore-text").value = "{ not json";
d.click(d.$("#restore-go"));
t.eq(d.$("#restore-msg").className.includes("err"), true, "garbage refused");
d.$("#restore-text").value = '[{"id":"x","title":"A recipe export"}]';
d.click(d.$("#restore-go"));
t.eq(d.$("#restore-msg").textContent.includes("not a Recipe Book backup"), true,
     "a recipe export is not mistaken for a backup");
t.eq(ev(d, "JSON.stringify(store)"), before, "store untouched by all three");

t.section("survives a reload");
const saved = b.w.localStorage.getItem("recipebook.v2");
const e = open({ beforeParse(win) { win.localStorage.setItem("recipebook.v2", saved); } });
t.eq(ev(e, 'RECIPES.some(r => r.id === "test-congee")'), true, "restored recipe persists");
t.eq(ev(e, 'store.mynotes["test-congee"]'), "Less water next time.", "note persists");

/* ------------------------------------------------------------- wake lock --- */
t.section("wake lock — API absent");
// jsdom ships no navigator.wakeLock, which is exactly the unsupported case.
t.eq(a.w.navigator.wakeLock, undefined, "jsdom stands in for a browser without the API");
t.eq(a.$("#wake").classList.contains("hidden"), true, "toggle stays hidden rather than lying");
a.click(a.$("#wake"));
t.eq(a.$("#wake").getAttribute("aria-pressed"), "false", "clicking it does nothing");

t.section("wake lock — API present");
let requested = 0, released = 0;
const f = open({
  beforeParse(win) {
    win.navigator.wakeLock = {
      request: () => { requested++; return Promise.resolve({
        addEventListener() {}, release() { released++; return Promise.resolve(); } }); }
    };
  }
});
t.eq(f.$("#wake").classList.contains("hidden"), false, "toggle appears");
f.click(f.$("#wake"));
t.eq(f.$("#wake").getAttribute("aria-pressed"), "true", "pressed state set");
t.eq(f.$("#wake").textContent.includes("staying awake"), true, "label reflects it");

setTimeout(() => {
  t.eq(requested, 1, "a lock was requested");
  f.click(cards(f)[0]);
  f.click(f.$("#back"));           // leaving the recipe must let the screen sleep again
  t.eq(f.$("#wake").getAttribute("aria-pressed"), "false", "released on leaving the recipe");
  t.eq(released, 1, "and the sentinel really was released");
  t.eq("wantWake" in JSON.parse(f.w.localStorage.getItem("recipebook.v2") || "{}"), false,
       "not persisted — a wake lock is session state, not a preference");
  t.done();
}, 0);
