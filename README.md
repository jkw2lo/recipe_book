# Recipe Book

A single-file recipe book that normalises recipes from any site: ads and life stories stripped,
ingredients bound to the step that actually uses them, and **honest timing**.

No framework, no build dependencies at runtime — `index.html` is completely self-contained and
works offline by double-clicking it.

## Why the timings differ from the source

Most recipe sites report a total that quietly omits waiting time. Every recipe here splits it three ways:

| field | meaning |
|---|---|
| `active` | hands-on minutes |
| `passive` | waiting you can't do anything during — marinating, rising, chilling, resting |
| `cook` | oven, stove or fryer time |

`claimed` records what the source says. When reality exceeds the claim by more than 20%, the recipe
page shows a note explaining the gap. Some real examples from the current book:

| recipe | source claims | actually |
|---|---|---|
| Tonkatsu | 30 min | 1 hr 8 min (15-min panko soak + breading rest) |
| Zaru soba | 15 min | 55 min (dipping sauce must cool) |
| Matcha cookies | 35 min | 2 hr 50 min (2-hour chill, listed on the same card) |
| Shokupan (yudane) | 2 hr 30 min | ~11 hr (8-hour overnight yudane, excluded by the source's own footnote) |

Sites that break waiting out as its own field — Jamie Oliver, My Korean Kitchen, Sally's Baking —
turn out to be accurate. The ones reporting a single "Total" are where the time disappears.

## Features

- **Two views.** *Full* gives the source's complete instructions; *Efficient* gives one concise line
  per step with its ingredients attached — for when you know the recipe and need reminders, not prose.
- **Components.** Recipes split into the parts you actually make (Dough / Filling / Frying), with
  ingredients and steps grouped under each.
- **Scaling.** Change the servings and every quantity recalculates, formatted as real fractions.
- **US / metric**, one system at a time.
- **Step timers.** The time badge on any step starts a countdown in a floating dock. Several run at
  once, they survive a reload, and they chime when done.
- **Cook mode.** A *Keep screen awake* toggle on each recipe holds the screen on while your hands are
  covered in flour. It re-acquires the lock when you come back from another app (browsers drop it when
  the tab is hidden), releases when you leave the recipe, and hides itself where the API doesn't exist.
- **Add recipes with any AI.** Generate a prompt, paste the JSON back, import.
- **Exports.** PDF (per recipe or whole book), a full JSON catalogue, and a fridge-oriented
  meal-picker format with canonical ingredient ids.
- **Backup and restore.** Favourites, your notes, servings, crossed-off steps, removals and imported
  recipes exist only in your browser's `localStorage`. *Back up my data* writes all of it to a JSON
  file; restoring **merges** rather than overwrites, and is safe to run twice.

## Structure

```
src/shell.html       markup, styles and all behaviour; contains the /*__RECIPE_DATA__*/ marker
src/recipe-data.js   the recipes — the only file you edit to add one by hand
build.mjs            inlines the data into the shell
index.html           built output, committed so GitHub Pages can serve it directly
test/                jsdom tests: render + export, timers, import, backup + wake lock
```

## Build and test

```bash
npm install     # jsdom, for tests only
npm run build   # src/ -> index.html
npm test        # four suites
npm run check   # build then test
```

`index.html` is committed deliberately: GitHub Pages needs it, and it means anyone can open the file
without Node installed. CI rebuilds and fails if the committed copy is stale.

## Publishing on GitHub Pages

Push, then **Settings → Pages → Source: Deploy from a branch → `main` / root**. Because `index.html`
sits at the repository root, the site is live with no workflow required.

## Adding a recipe

**In the app** — click *＋ Add a recipe* at the bottom. Paste a link, copy the generated prompt into
any AI tool, paste the JSON back. Imported recipes are stored in your browser, not in this repo.

**In the repo** — append an object to `src/recipe-data.js` and run `npm run build`. This is the route
to take if you want the recipe committed and shared.

### Schema

```js
{
  id: "kebab-case-unique",
  title: "Recipe Name",
  source: { site: "Site", url: "https://…", author: "" },
  cuisine: "Japanese",
  tags: ["dessert", "baking"],
  servings: { base: 4, unit: "servings", min: 2, max: 12 },
  time:     { active: 25, passive: 30, cook: 20 },   // minutes, split honestly
  claimed:  45,                                      // what the source says; omit if none
  components: [ { id: "dough", label: "Dough" } ],   // omit if the recipe has no parts
  ingredients: [
    { key: "flour", comp: "dough", name: "All-purpose flour",
      us: { qty: 2, unit: "cups" }, metric: { qty: 240, unit: "g" },
      note: "weigh it", optional: false, scalable: true }
  ],
  steps: [
    { comp: "dough", text: "Short imperative line.",       // shown in Efficient view
      detail: "The full instruction.",                     // shown in Full view
      tip: "a warning or failure mode",
      uses: ["flour"],                                     // ingredient keys added AT this step
      mins: 5, passive: false }
  ],
  notes: ["Longer observations."]
}
```

`uses` is the field that earns its keep: it's what lets a step display `240 g flour` beside itself
instead of making you scroll back to a list. List a key only at the step where it first goes in.

**Component order is execution order.** If one part must exist before another uses it, put it first —
otherwise the grouped view will tell you to dredge a cutlet you haven't seasoned yet.

## Testing

`test/render.js` also validates the meal-picker export against a fixed ingredient vocabulary: every id
must be known, and nothing may cross the fresh/pantry line. That check has caught real bugs — an
ingredient silently renamed by a normaliser, and a substitute pointing at the wrong side.

`test/backup.js` runs the wake lock twice: once under plain jsdom, which has no `navigator.wakeLock`
and so stands in for a browser without the API, and once with a stub injected, to prove the lock is
requested on press and released on leaving the recipe.

## Licence

MIT.
