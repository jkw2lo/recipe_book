/** Shared jsdom harness. Loads the built index.html from the repo root. */
const fs = require("node:fs");
const path = require("node:path");
const { JSDOM } = require("jsdom");

const ROOT = path.resolve(__dirname, "..");
const HTML = () => fs.readFileSync(path.join(ROOT, "index.html"), "utf8");

function open(opts = {}) {
  const dom = new JSDOM(HTML(), {
    runScripts: "dangerously", url: "https://local/recipe-book",
    pretendToBeVisual: true, ...opts
  });
  const w = dom.window, d = w.document;
  return {
    dom, w, d,
    $: s => d.querySelector(s),
    $$: s => [...d.querySelectorAll(s)],
    click: el => el.dispatchEvent(new w.MouseEvent("click", { bubbles: true })),
    type: (el, v) => { el.value = v; el.dispatchEvent(new w.Event("input", { bubbles: true })); }
  };
}

function runner(name) {
  let fail = 0;
  console.log(`\n${name}`);
  return {
    eq(got, want, label) {
      if (String(got) !== String(want)) { console.log(`  FAIL ${label} -> ${got}`); fail++; }
      else console.log(`  ok   ${label} = ${got}`);
    },
    note: msg => console.log(`       ${msg}`),
    section: t => console.log(`\n  [${t}]`),
    done() {
      console.log(fail ? `\n${fail} FAILURE(S) in ${name}` : `\nAll ${name} checks passed.`);
      process.exit(fail ? 1 : 0);
    }
  };
}

/** The vocabulary the meal-picker export must conform to. */
const VOCAB = {
  fresh: new Set(("asparagus avocado baby_bok_choy bacon basil bean_sprouts beef_balls beef_steak beets bell_pepper "+
    "bitter_melon black_fungus bok_choy broccoli cabbage carrot cauliflower celery century_egg cheddar chicken_breast "+
    "chinese_eggplant chinese_mustard_greens chinese_sausage chinese_yam chives choy_sum cilantro corn cucumber daikon "+
    "dill dried_anchovies duck dumplings edamame eggs enoki feta fish_balls fuzzy_melon gai_lan ginger green_beans "+
    "ground_beef king_oyster lemon lemongrass lettuce lime lobster lotus_root mackerel minced_pork mint mizuna "+
    "mozzarella mushroom mussels_clams octopus_squid okra ox_tail oyster_mushroom parsley pork_belly pork_bones "+
    "pork_chop potato quail_eggs radish roast_duck rosemary salmon salted_egg scallion scallops shiitake shimeji shiso "+
    "shrimp sliced_beef snow_peas sour_cream spam spinach straw_mushroom sweet_potato taro_root thai_basil thai_chili "+
    "thyme tilapia tofu tofu_puff tofu_skin tomato water_chestnut water_spinach whole_chicken whole_fish winter_melon "+
    "zucchini").split(" ")),
  pantry: new Set(("flour arborio_rice baguette baking_powder baking_soda balsamic_vinegar bay_leaves black_pepper "+
    "bread bread_flour brown_sugar butter canned_beans canned_tomatoes capers black_vinegar cocoa_powder coconut_milk "+
    "cooking_oil cornstarch curry_paste dark_soy_sauce dashi doubanjiang dried_oregano dried_pasta dried_shiitake "+
    "dumpling_wrappers fermented_black_beans fish_sauce five_spice garlic garlic_powder ghee glass_noodles "+
    "glutinous_rice gochugaru gochujang heavy_cream hoisin_sauce honey italian_seasoning japanese_curry jasmine_rice "+
    "katsuobushi kimchi kombu milk mirin miso olive_oil olives onion onion_powder oyster_sauce panko paprika "+
    "peanut_butter ponzu red_pepper_flakes red_wine rice_wine rice_flour rice_noodles rice_paper rice_vinegar "+
    "rock_sugar sake salt sesame_oil sesame_seeds shaoxing_wine sichuan_peppercorns soba_noodles soy_sauce sriracha "+
    "star_anise sugar sushi_rice togarashi udon_noodles vanilla_extract wood_ear yeast yogurt").split(" "))
};

module.exports = { open, runner, VOCAB, ROOT };
