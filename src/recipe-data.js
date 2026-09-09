/* Recipe data — normalized. Kept separate for readability; inlined into the artifact. */
const RECIPES = [

/* ============================== 1. MANTOU ============================== */
{
  id: "mantou-rasamalaysia",
  title: "Steamed Buns (Mantou)",
  source: { site: "Rasa Malaysia", url: "https://rasamalaysia.com/steamed-buns/", author: "Bee Yinn Low" },
  cuisine: "Chinese", tags: ["bread", "steamed", "yeast", "breakfast"],
  servings: { base: 8, unit: "buns", min: 4, max: 24 },
  time: { active: 20, passive: 65, cook: 11 },
  claimed: 90,
  ingredients: [
    { key: "milk",  name: "Whole milk",        us: { qty: 1,    unit: "cup" },  metric: { qty: 240, unit: "ml" }, note: "or water / soy milk" },
    { key: "yeast", name: "Active dry yeast",  us: { qty: 1,    unit: "tsp" },  metric: { qty: 3,   unit: "g" } },
    { key: "sugar", name: "Sugar",             us: { qty: 2.5,  unit: "Tbsp" }, metric: { qty: 31,  unit: "g" } },
    { key: "flour", name: "All-purpose flour", us: { qty: 2.75, unit: "cups" }, metric: { qty: 350, unit: "g" }, note: "weigh it — the cup figure is the author's own conversion" },
    { key: "vin",   name: "Chinese white vinegar", scalable: false, optional: true, us: { qty: 1, unit: "tsp" }, metric: { qty: 5, unit: "ml" }, note: "in the steamer water, for whiter buns" }
  ],
  steps: [
    { text: "Stir milk, yeast and sugar together in the mixer bowl.",
      detail: "Add the milk, yeast, and sugar to the bowl of a stand mixer fitted with a dough hook. Stir with chopsticks or a spoon.",
      uses: ["milk","yeast","sugar"], mins: 2 },
    { text: "Add flour, knead on speed 1 for 6 min to a smooth dough.",
      detail: "Add the flour to the yeast mixture. Turn the mixer to speed 1 and knead until a smooth dough forms, about 6 minutes.",
      tip: "If the dough climbs the hook, stop and push it back down. Still sticky at 6 min? Add 1–2 Tbsp flour. No mixer: knead by hand 15–20 min.",
      uses: ["flour"], mins: 6 },
    { text: "Cover and rest 5 min.",
      detail: "Transfer the dough out, cover it with plastic wrap, and let it rest for 5 minutes.",
      uses: [], mins: 5, passive: true },
    { text: "Roll out to a 14×10 in / 35×25 cm rectangle.",
      detail: "On a lightly floured surface, roll the dough from bottom to top. Turn it horizontally and roll again from bottom to top. Repeat until it forms a 14×10\" (35×25 cm) rectangle.",
      uses: [], mins: 3 },
    { text: "Roll up tightly into a log, left to right.",
      detail: "Roll the dough up into a log from left to right, tucking and rolling tightly so the log is compact.",
      uses: [], mins: 2 },
    { text: "Roll the log smooth, to 12 in / 30 cm.",
      detail: "Roll the log out a few more times until the surface looks smooth and it reaches 12 inches (30 cm) in length.",
      uses: [], mins: 1 },
    { text: "Cut into 8 pieces; set each on parchment.",
      detail: "Cut the log into 8 equal pieces with a sharp knife. Transfer each to a 3×4-inch (7×10 cm) piece of parchment. You may roll each piece into a round ball after cutting.",
      uses: [], mins: 4, countsServings: true },
    { text: "Rise in the covered steamer, 60 min, until visibly puffed.",
      detail: "Place the dough into the steamer, cover, and let rise for 60 minutes or until the balls expand in size. Leave space between them so they don't stick together.",
      uses: [], mins: 60, passive: true },
    { text: "Fill the steamer base with water (+ vinegar), seal the lid.",
      detail: "Add water to the bottom of the steamer. Optionally add 1 teaspoon of Chinese white vinegar to make the buns whiter. Cover the lid tightly.",
      uses: ["vin"], mins: 1 },
    { text: "Steam on high 10–12 min. Serve warm.",
      detail: "Turn the heat to high and steam for 10–12 minutes, until the dough expands into soft, puffy buns. Turn off the heat and serve warm — dip in condensed milk if you like them sweet.",
      uses: [], mins: 11 }
  ],
  notes: [
    "For richer buns, swap the milk for ½ cup heavy cream + ½ cup whole milk.",
    "No steamer? Put a small bowl in a pan of water, rest a plate on the bowl, set the buns on the plate and cover with the pan lid.",
    "Keeps in the fridge up to a week. Reheat by steaming or 1 min in the microwave. Freezing isn't recommended."
  ]
},

/* ============================== 2. TONKATSU ============================== */
{
  id: "tonkatsu-justonecookbook",
  title: "Tonkatsu (Pork Katsu)",
  source: { site: "Just One Cookbook", url: "https://www.justonecookbook.com/tonkatsu/", author: "Namiko Chen" },
  cuisine: "Japanese", tags: ["pork", "fried", "cutlet", "dinner"],
  servings: { base: 2, unit: "cutlets", min: 1, max: 8 },
  time: { active: 25, passive: 23, cook: 20 },
  claimed: 30,
  components: [
    { id: "salad",   label: "Cabbage salad", optional: true },
    { id: "sauce",   label: "Sesame dipping sauce" },
    { id: "station", label: "Breading station" },
    { id: "pork",    label: "Pork" },
    { id: "bread",   label: "Breading the cutlets" },
    { id: "fry",     label: "Frying" }
  ],
  ingredients: [
    { key: "cabbage",  comp: "salad", name: "Green cabbage",            us: { qty: 0.25, unit: "head" }, metric: { qty: 0.25, unit: "head" } },
    { key: "cuke",     comp: "salad", name: "Japanese or Persian cucumber", us: { qty: 1, unit: "" },    metric: { qty: 1, unit: "" } },
    { key: "dressing", comp: "salad", name: "Japanese sesame dressing", us: { qty: 4, unit: "Tbsp" },    metric: { qty: 60, unit: "ml" } },

    { key: "wsesame",  comp: "sauce", name: "Toasted white sesame seeds", us: { qty: 1, unit: "Tbsp" },  metric: { qty: 9, unit: "g" } },
    { key: "bsesame",  comp: "sauce", name: "Toasted black sesame seeds", us: { qty: 1, unit: "Tbsp" },  metric: { qty: 9, unit: "g" } },
    { key: "katsusauce", comp: "sauce", name: "Tonkatsu sauce",         us: { qty: 4, unit: "Tbsp" },    metric: { qty: 60, unit: "ml" }, note: "store-bought or homemade" },

    { key: "panko",    comp: "station", name: "Panko",                    us: { qty: 0.5, unit: "cup" },   metric: { qty: 30, unit: "g" }, note: "fresh nama panko if you can get it; otherwise rehydrate dried" },
    { key: "egg",      comp: "station", name: "Large egg",                us: { qty: 1, unit: "" },        metric: { qty: 50, unit: "g" } },
    { key: "eggoil",   comp: "station", name: "Neutral oil, for the egg", us: { qty: 0.5, unit: "Tbsp" },  metric: { qty: 7, unit: "ml" } },
    { key: "flour",    comp: "station", name: "All-purpose flour",        us: { qty: 2, unit: "Tbsp" },    metric: { qty: 16, unit: "g" } },

    { key: "chops",    comp: "pork", name: "Boneless pork loin chops",  us: { qty: 2, unit: "" },        metric: { qty: 200, unit: "g" }, note: "½ in / 1–1.3 cm thick" },
    { key: "salt",     comp: "pork", name: "Kosher salt",               us: { qty: 0.5, unit: "tsp" },   metric: { qty: 1.5, unit: "g" } },
    { key: "pepper",   comp: "pork", name: "Black pepper, freshly ground", us: { qty: 0.125, unit: "tsp" }, metric: { qty: 0.3, unit: "g" } },

    { key: "fryoil",   comp: "fry", name: "Neutral oil, for frying", scalable: false, us: { qty: 3, unit: "cups" }, metric: { qty: 720, unit: "ml" }, note: "enough for 1¾–2 in / 5 cm depth" }
  ],
  steps: [
    { comp: "salad", text: "Shred cabbage fine, slice cucumber into thin strips, toss. Chill.",
      detail: "Shred ¼ head green cabbage very finely with a sharp knife or slicer. Thinly slice the cucumber diagonally, then cut into thin strips. Toss together and refrigerate with the dressing on the side until serving.",
      uses: ["cabbage","cuke","dressing"], mins: 8 },

    { comp: "sauce", text: "Grind the sesame seeds, leaving some whole. Divide into dishes with the sauce.",
      detail: "Grind the white and black sesame seeds with a mortar and pestle, leaving some seeds unground for texture. Divide among individual dipping dishes, then divide the tonkatsu sauce among them. Each person mixes their own at the table.",
      tip: "In Japan the sauce is often served straight, with no sesame at all.",
      uses: ["wsesame","bsesame","katsusauce"], mins: 4 },

    { comp: "station", text: "Mist dried panko with water; leave 15 min to soften.",
      detail: "If using dry store panko, place it in a deep dish and spray with water until moist. Set aside 15 minutes, until soft and tender. Skip if using fresh nama panko.",
      tip: "This is the step the 30-minute claim ignores. Start it first.",
      uses: ["panko"], mins: 15, passive: true },
    { comp: "station", text: "Whisk egg with oil in one tray; flour in another.",
      detail: "Crack the egg into a deep dish or tray, add the neutral oil, and whisk until combined. Prepare a second dish with the flour.",
      tip: "The oil in the egg keeps the breading from detaching in the fryer and seals in juices.",
      uses: ["egg","eggoil","flour"], mins: 3 },

    { comp: "pork", text: "Trim fat, slit the connective tissue both sides, pound, reshape, season.",
      detail: "Remove excess fat from the chops. Make several small slits along the connective tissue between meat and fat, then flip and repeat on the other side. Pound both sides with the back of a knife or a mallet, mold the cutlet back into shape by hand, and season both sides.",
      tip: "The slits stop the cutlet curling — meat and fat shrink at different rates.",
      uses: ["chops","salt","pepper"], mins: 6 },

    { comp: "bread", text: "Dredge flour → egg → panko. Press panko on, rest 5–10 min.",
      detail: "Dredge the pork in flour and dust off the excess, then dip into the egg mixture and coat well. Finally press into the panko to adhere, shake off the excess, and set the breaded cutlets on a tray for 5–10 minutes to set the breading.",
      tip: "Shake off excess flour or it falls into the oil and darkens it. The panko puffs during frying — it needn't look fluffy now.",
      uses: [], mins: 4 },
    { comp: "bread", text: "Rest the breaded cutlets 5–10 min.",
      detail: "Let the breaded cutlets sit 5–10 minutes so the coating sets before frying.",
      uses: [], mins: 8, passive: true },

    { comp: "fry", text: "Heat oil to 340°F / 170°C, 5 cm deep.",
      detail: "Add the oil to a pot to a depth of 1¾–2 inches (5 cm). Preheat on medium to 340ºF (170ºC).",
      tip: "No thermometer? Dip a chopstick tip — tiny bubbles means ready. Or drop in a piece of panko: it should sink then pop straight back up.",
      uses: ["fryoil"], mins: 8 },
    { comp: "fry", text: "First fry: one cutlet, 1 min per side. Rest 4 min on a rack.",
      detail: "Gently lower one cutlet into the oil and cook 1 minute — don't flip or touch it for the first 30 seconds. Flip and cook the other side 1 minute. Remove, let the oil drip off, and rest on a wire rack for 4 minutes while residual heat finishes the inside.",
      tip: "One at a time. Two cutlets drop the oil temperature and the breading soaks up oil.",
      uses: [], mins: 6 },
    { comp: "fry", text: "Fry the second cutlet the same way while the first rests. Skim the oil between.",
      detail: "Turn off the heat, scoop out loose crumbs with a fine-mesh strainer, then bring the oil back to 340ºF (170ºC) and fry the second cutlet 1 minute per side. Drain and rest it 4 minutes as before.",
      uses: [], mins: 6 },
    { comp: "fry", text: "Second fry: raise to 355°F / 180°C, 30 sec per side each. Drain 2 min.",
      detail: "Raise the oil to 355ºF (180ºC). After its 4-minute rest, fry each cutlet again for 30 seconds a side. Remove, drain on the rack for 2 minutes, propped on its side so the breading doesn't go soggy. Clean the crumbs from the oil between cutlets.",
      uses: [], mins: 5 },
    { comp: "fry", text: "Slice crosswise into ¾ in / 2 cm strips. Serve with salad and dipping sauce.",
      detail: "Cut the tonkatsu crosswise into slices about ¾ inch (2 cm) wide, transfer to a plate, and serve with the shredded cabbage, the sesame dressing in small cups, and the sesame dipping sauce alongside.",
      uses: [], mins: 2 }
  ],
  notes: [
    "The source claims 30 minutes total. The panko soak (15 min) and breading rest (5–10 min) alone exceed that — budget about an hour.",
    "Resting the breaded cutlet before frying is what lets the panko puff up rather than lying flat.",
    "Freeze leftovers up to a month. Reheat from defrosted at 350ºF (180ºC) for 15–20 min, or 30–40 min from frozen.",
    "Skim the crumbs from the oil between every fry, or they burn and darken the crust."
  ]
},

/* ============================== 3. KARAAGE ============================== */
{
  id: "karaage-justonecookbook",
  title: "Karaage (Japanese Fried Chicken)",
  source: { site: "Just One Cookbook", url: "https://www.justonecookbook.com/karaage/", author: "Namiko Chen" },
  cuisine: "Japanese", tags: ["chicken", "fried", "izakaya", "bento"],
  servings: { base: 4, unit: "servings", min: 2, max: 12 },
  time: { active: 20, passive: 30, cook: 20 },
  claimed: 30,
  components: [
    { id: "chicken", label: "Chicken & marinade" },
    { id: "coat",    label: "Coating" },
    { id: "fry",     label: "Frying" },
    { id: "serve",   label: "To serve", optional: true }
  ],
  ingredients: [
    { key: "thighs",  comp: "chicken", name: "Boneless, skin-on chicken thighs", us: { qty: 1.5, unit: "lb" }, metric: { qty: 680, unit: "g" }, note: "4–6 pieces; skinless works, skin-on crisps better" },
    { key: "ksalt",   comp: "chicken", name: "Kosher salt",        us: { qty: 0.5, unit: "tsp" },  metric: { qty: 1.5, unit: "g" } },
    { key: "kpepper", comp: "chicken", name: "Black pepper",       us: { qty: 0.125, unit: "tsp" },metric: { qty: 0.3, unit: "g" } },
    { key: "ginger",  comp: "chicken", name: "Ginger, grated with juice", us: { qty: 0.5, unit: "tsp" }, metric: { qty: 2, unit: "g" } },
    { key: "garlic",  comp: "chicken", name: "Garlic clove",       us: { qty: 1, unit: "" },       metric: { qty: 1, unit: "" } },
    { key: "soy",     comp: "chicken", name: "Soy sauce",          us: { qty: 1, unit: "Tbsp" },   metric: { qty: 15, unit: "ml" }, note: "½–1 Tbsp to taste" },
    { key: "sake",    comp: "chicken", name: "Sake",               us: { qty: 0.5, unit: "Tbsp" }, metric: { qty: 7, unit: "ml" }, note: "or dry sherry / Chinese rice wine, or skip" },
    { key: "sesoil",  comp: "chicken", name: "Toasted sesame oil", us: { qty: 0.5, unit: "tsp" },  metric: { qty: 2.5, unit: "ml" } },

    { key: "flour",   comp: "coat", name: "All-purpose flour",     us: { qty: 2, unit: "Tbsp" },   metric: { qty: 16, unit: "g" }, note: "plus more as needed" },
    { key: "starch",  comp: "coat", name: "Potato starch",         us: { qty: 2, unit: "Tbsp" },   metric: { qty: 20, unit: "g" }, note: "or cornstarch / rice flour" },

    { key: "fryoil",  comp: "fry", name: "Neutral oil, for frying", scalable: false, us: { qty: 3.5, unit: "cups" }, metric: { qty: 840, unit: "ml" }, note: "enough for 1–1½ in / 2.5–3.8 cm depth" },

    { key: "lemon",   comp: "serve", name: "Lemon wedges",         optional: true, scalable: false, us: { qty: 0, unit: "to serve" }, metric: { qty: 0, unit: "to serve" } },
    { key: "mayo",    comp: "serve", name: "Kewpie mayonnaise",    optional: true, scalable: false, us: { qty: 0, unit: "to serve" }, metric: { qty: 0, unit: "to serve" } },
    { key: "shichimi",comp: "serve", name: "Shichimi togarashi",   optional: true, scalable: false, us: { qty: 0, unit: "to serve" }, metric: { qty: 0, unit: "to serve" } }
  ],
  steps: [
    { comp: "chicken", text: "Cut thighs into 2 in / 5 cm pieces; season with salt and pepper.",
      detail: "Cut each chicken thigh into 2-inch (5-cm) pieces and season with the salt and pepper. Place in a large bowl.",
      tip: "Cut evenly — uniform pieces cook at the same rate.",
      uses: ["thighs","ksalt","kpepper"], mins: 6 },
    { comp: "chicken", text: "Whisk ginger, garlic, soy, sake and sesame oil; mix into the chicken by hand.",
      detail: "Grate the ginger and mince or press the garlic into a large bowl. Add the soy sauce, sake, and toasted sesame oil and whisk to combine. Add the chicken and mix with your hands.",
      uses: ["ginger","garlic","soy","sake","sesoil"], mins: 5 },
    { comp: "chicken", text: "Cover; marinate in the fridge 30 min.",
      detail: "Cover the bowl and marinate in the refrigerator for 30 minutes.",
      tip: "30 minutes is the sweet spot — longer doesn't improve it.",
      uses: [], mins: 30, passive: true },

    { comp: "fry", text: "Heat 2.5–3.8 cm of oil to 325°F / 160°C over medium-low.",
      detail: "While the chicken marinates, pour the oil into a heavy-bottomed pot to a depth of at least 1–1½ inches (2.5–3.8 cm) and heat to 325ºF (160ºC) over medium-low heat.",
      tip: "No thermometer? Dip a wooden chopstick — small bubbles around the tip means ready.",
      uses: ["fryoil"], mins: 8 },

    { comp: "coat", text: "Dredge flour first, then potato starch, shaking off excess each time.",
      detail: "Prepare separate piles of the flour and potato starch on a tray. Lightly coat each marinated piece in flour and dust off the excess, then dredge in the potato starch and shake off the excess. Set on a separate tray.",
      tip: "Excess coating clouds the oil and softens the crust.",
      uses: ["flour","starch"], mins: 6 },

    { comp: "fry", text: "First fry: 3–5 pieces at a time, 90 sec, to light golden. Rest on a rack.",
      detail: "Add 3 to 5 pieces at a time to the hot oil and deep-fry for 90 seconds, until light golden. Transfer to a wire rack to drain — residual heat keeps cooking the inside. Repeat with the remaining chicken.",
      tip: "Never more than 3–5 at once. Crowding drops the oil temperature and the chicken soaks up oil. Browning too fast means the oil is too hot.",
      uses: [], mins: 8 },
    { comp: "fry", text: "Skim crumbs from the oil between batches.",
      detail: "Between batches, scoop out and discard the crumbs with a fine-mesh sieve to keep the oil clean and stop it darkening.",
      uses: [], mins: 2 },
    { comp: "fry", text: "Second fry at 350°F / 180°C, 45 sec, until golden and crisp.",
      detail: "Raise the oil to 350ºF (180ºC). Return the rested pieces and fry for 45 seconds, until the skin is golden brown and crispy. Drain on the wire rack and repeat.",
      uses: [], mins: 6 },

    { comp: "serve", text: "Serve hot with lemon, Kewpie mayo and shichimi.",
      detail: "Serve the chicken hot with lemon wedges and a dish of Kewpie mayonnaise, sprinkled with shichimi togarashi if you like a little heat.",
      uses: ["lemon","mayo","shichimi"], mins: 2 }
  ],
  notes: [
    "The card says 30 minutes total but lists a 30-minute marinade plus 15 prep and 15 cook on the same card — the total is simply wrong. Budget about 70 minutes.",
    "Chicken breast works but cooks faster — cut the frying time by 15–20 seconds.",
    "Fridge 3–4 days, freezer 3–4 months. Reheat at 350ºF (180ºC) for 7–8 min to re-crisp.",
    "Karaage vs. tatsuta-age: tatsuta-age uses a simpler soy-and-mirin marinade and potato starch only, giving a paler, lighter crust."
  ]
},

/* ============================== 4. ZARU SOBA ============================== */
{
  id: "zarusoba-justonecookbook",
  title: "Zaru Soba (Cold Soba)",
  source: { site: "Just One Cookbook", url: "https://www.justonecookbook.com/zaru-soba-cold-soba-noodles/", author: "Namiko Chen" },
  cuisine: "Japanese", tags: ["noodles", "cold", "summer", "quick", "buckwheat"],
  servings: { base: 4, unit: "servings", min: 1, max: 8 },
  time: { active: 15, passive: 30, cook: 10 },
  claimed: 15,
  components: [
    { id: "tsuyu",   label: "Dipping sauce (mentsuyu)" },
    { id: "noodles", label: "Noodles" },
    { id: "serve",   label: "To serve" }
  ],
  ingredients: [
    { key: "sake",   comp: "tsuyu", name: "Sake",       us: { qty: 0.25, unit: "cup" }, metric: { qty: 60, unit: "ml" } },
    { key: "mirin",  comp: "tsuyu", name: "Mirin",      us: { qty: 0.5, unit: "cup" },  metric: { qty: 120, unit: "ml" }, note: "plus 1 Tbsp if you like it sweeter" },
    { key: "soy",    comp: "tsuyu", name: "Soy sauce",  us: { qty: 0.5, unit: "cup" },  metric: { qty: 120, unit: "ml" } },
    { key: "kombu",  comp: "tsuyu", name: "Kombu",      us: { qty: 1, unit: "piece" },  metric: { qty: 1, unit: "piece" }, note: "1 x 1 in / 2.5 x 2.5 cm" },
    { key: "katsuo", comp: "tsuyu", name: "Katsuobushi", us: { qty: 0.75, unit: "cup" },metric: { qty: 15, unit: "g" }, note: "packed; use the full cup for a stronger bonito hit" },

    { key: "soba",   comp: "noodles", name: "Dried soba noodles", us: { qty: 14, unit: "oz" }, metric: { qty: 400, unit: "g" }, note: "3.5 oz / 100 g per serving" },

    { key: "conc",   comp: "serve", name: "Mentsuyu concentrate", us: { qty: 6, unit: "Tbsp" },  metric: { qty: 90, unit: "ml" }, note: "from above, or bottled" },
    { key: "iced",   comp: "serve", name: "Iced water, to dilute", us: { qty: 1.125, unit: "cups" }, metric: { qty: 270, unit: "ml" } },
    { key: "nori",   comp: "serve", name: "Shredded nori", scalable: false, us: { qty: 0, unit: "to garnish" }, metric: { qty: 0, unit: "to garnish" } },
    { key: "onion",  comp: "serve", name: "Green onions", us: { qty: 2, unit: "" }, metric: { qty: 2, unit: "" } },
    { key: "wasabi", comp: "serve", name: "Wasabi", optional: true, scalable: false, us: { qty: 0, unit: "to serve" }, metric: { qty: 0, unit: "to serve" } }
  ],
  steps: [
    { comp: "tsuyu", text: "Boil sake and mirin to burn off the alcohol, then add soy sauce.",
      detail: "Add the sake and mirin to a medium saucepan and bring to a boil over medium-high heat until the alcohol smell dissipates, only a few seconds. Add the soy sauce.",
      uses: ["sake","mirin","soy"], mins: 3 },
    { comp: "tsuyu", text: "Add kombu and katsuobushi; boil, then simmer 5 min.",
      detail: "Add the kombu and katsuobushi. Bring to a boil, reduce the heat, and simmer for 5 minutes.",
      uses: ["kombu","katsuo"], mins: 6 },
    { comp: "tsuyu", text: "Off the heat, steep until cool to room temperature. Strain.",
      detail: "Turn off the heat and let it steep until fully cooled to room temperature, then strain. The sauce is concentrated and needs diluting before serving.",
      tip: "This is the step that breaks the 15-minute claim. Make it ahead — it keeps a month in the fridge. Save the spent kombu and katsuobushi for furikake.",
      uses: [], mins: 30, passive: true },

    { comp: "noodles", text: "Boil unsalted water; fan the noodles in, cook 4–5 min per package.",
      detail: "Bring a large pot of water to a boil — do not salt it. Add the soba, fanning the strands out so they stay separated, and stir occasionally. Cook according to the package, typically 4–5 minutes, until just tender with a slight chew.",
      tip: "Use a big pot: soba sheds starch fast and a small pot clumps. Reserve 1–1½ cups of the cooking water (sobayu) before draining.",
      uses: ["soba"], mins: 8 },
    { comp: "noodles", text: "Rinse under cold water, rubbing off the starch.",
      detail: "Drain in a sieve and rinse under cold running water, rubbing gently with your hands until the water runs clear.",
      tip: "Skip this and the noodles turn slimy and clump.",
      uses: [], mins: 2 },
    { comp: "noodles", text: "Shock in iced water 30 sec, then drain well.",
      detail: "Shake the sieve to drain, then transfer the noodles to a large bowl of iced water for 30 seconds. Drain well.",
      tip: "The ice bath is what gives the chewy bite. Don't skip it.",
      uses: [], mins: 1 },

    { comp: "serve", text: "Plate on bamboo mats; garnish with nori.",
      detail: "Set bamboo sieves or mats over individual plates to catch draining water. Add one serving of noodles to each and garnish with shredded nori.",
      uses: ["nori"], mins: 2 },
    { comp: "serve", text: "Dilute the concentrate with iced water; taste; divide into cups.",
      detail: "Combine the mentsuyu concentrate and iced water in a measuring cup. Taste — add more water if too salty, more concentrate if too weak. Divide into individual dipping cups.",
      uses: ["conc","iced"], mins: 2 },
    { comp: "serve", text: "Chop green onions, add wasabi, serve alongside.",
      detail: "Chop the green onions and divide among small plates with a dab of wasabi. Serve alongside the noodles and dipping sauce.",
      tip: "Add condiments to your cup gradually as you eat rather than dumping them in at the start.",
      uses: ["onion","wasabi"], mins: 3 }
  ],
  notes: [
    "The 15-minute claim holds only if the dipping sauce is already made. From scratch, the cooling step alone is about 30 minutes.",
    "The concentrate keeps a month in the fridge before diluting — make a big batch once.",
    "Sobayu: pour the starchy cooking water into your leftover dipping sauce at the end and drink it as a broth. Traditional finish.",
    "Gluten-free: use 100% buckwheat (ju-wari) soba and tamari instead of soy sauce.",
    "Cook the noodles just before serving — they clump and go soft as they sit."
  ]
},

/* ============================== 5. KITSUNE UDON ============================== */
{
  id: "kitsuneudon-justonecookbook",
  title: "Kitsune Udon",
  source: { site: "Just One Cookbook", url: "https://www.justonecookbook.com/kitsune-udon/", author: "Namiko Chen" },
  cuisine: "Japanese", tags: ["noodles", "soup", "udon", "tofu", "comfort"],
  servings: { base: 2, unit: "servings", min: 1, max: 6 },
  time: { active: 20, passive: 43, cook: 7 },
  claimed: 20,
  components: [
    { id: "dashi",   label: "Dashi" },
    { id: "broth",   label: "Soup broth" },
    { id: "top",     label: "Toppings" },
    { id: "noodles", label: "Noodles & assembly" }
  ],
  ingredients: [
    { key: "kombu",   comp: "dashi", name: "Kombu",        us: { qty: 1, unit: "piece" }, metric: { qty: 1, unit: "piece" }, note: "2 x 5 in / 5 x 12 cm" },
    { key: "water",   comp: "dashi", name: "Water",        us: { qty: 2.5, unit: "cups" }, metric: { qty: 600, unit: "ml" } },
    { key: "katsuo",  comp: "dashi", name: "Katsuobushi",  us: { qty: 1.5, unit: "cups" }, metric: { qty: 15, unit: "g" }, note: "packed; skip for vegetarian — kombu alone makes vegan dashi" },

    { key: "dashi",   comp: "broth", name: "Dashi",        us: { qty: 2.5, unit: "cups" }, metric: { qty: 600, unit: "ml" }, note: "from above, or a dashi packet / powder" },
    { key: "mirin",   comp: "broth", name: "Mirin",        us: { qty: 1, unit: "Tbsp" },  metric: { qty: 15, unit: "ml" } },
    { key: "sugar",   comp: "broth", name: "Sugar",        us: { qty: 1, unit: "tsp" },   metric: { qty: 4, unit: "g" } },
    { key: "usukuchi",comp: "broth", name: "Usukuchi (light-colored) soy sauce", us: { qty: 1, unit: "Tbsp" }, metric: { qty: 15, unit: "ml" }, note: "regular soy sauce works but darkens the broth" },
    { key: "salt",    comp: "broth", name: "Kosher salt",  us: { qty: 0.5, unit: "tsp" }, metric: { qty: 1.5, unit: "g" } },

    { key: "inari",   comp: "top", name: "Inari age (seasoned fried tofu pouches)", us: { qty: 4, unit: "" }, metric: { qty: 4, unit: "" } },
    { key: "scallion",comp: "top", name: "Green onion",    us: { qty: 1, unit: "" },      metric: { qty: 1, unit: "" } },
    { key: "naruto",  comp: "top", name: "Narutomaki (fish cake) slices", optional: true, us: { qty: 4, unit: "slices" }, metric: { qty: 4, unit: "slices" } },

    { key: "udon",    comp: "noodles", name: "Udon noodles", us: { qty: 2, unit: "servings" }, metric: { qty: 500, unit: "g" }, note: "frozen or parboiled; 6.3 oz / 180 g if dry" },
    { key: "shichimi",comp: "noodles", name: "Shichimi togarashi", optional: true, scalable: false, us: { qty: 0, unit: "to serve" }, metric: { qty: 0, unit: "to serve" } }
  ],
  steps: [
    { comp: "dashi", text: "Soak kombu in the water at least 30 min (up to half a day).",
      detail: "Put the kombu and water in a measuring cup and soak for at least 30 minutes — 3 hours to half a day is better. The kombu's flavour draws out naturally. Skip this if you're short on time.",
      uses: ["kombu","water"], mins: 30, passive: true },
    { comp: "dashi", text: "Heat slowly to just below boiling; pull the kombu out before it boils.",
      detail: "Transfer the kombu and water to a saucepan and bring slowly to a boil over medium-low heat. Just before it boils — when bubbles appear at the edges — remove the kombu.",
      tip: "Leave the kombu in and the dashi turns slimy and bitter. Stop here and you have vegan kombu dashi.",
      uses: [], mins: 8 },
    { comp: "dashi", text: "Add katsuobushi, return to a boil, simmer 15 sec, turn off.",
      detail: "Add the katsuobushi and bring back to a boil. Reduce the heat, simmer for just 15 seconds, and turn off the heat.",
      uses: ["katsuo"], mins: 3 },
    { comp: "dashi", text: "Let the flakes sink 10–15 min, then strain.",
      detail: "Let the katsuobushi sink to the bottom, about 10–15 minutes, then strain through a fine-mesh sieve into a saucepan. This is awase dashi.",
      uses: [], mins: 13, passive: true },

    { comp: "broth", text: "Combine dashi, mirin, sugar, usukuchi soy and salt; boil, then hold at a low simmer.",
      detail: "In a saucepan combine the dashi, mirin, sugar, usukuchi soy sauce, and salt and bring to a boil. Once boiling, turn off the heat or cover and keep at a low simmer.",
      uses: ["dashi","mirin","sugar","usukuchi","salt"], mins: 5 },

    { comp: "top", text: "Squeeze the inari age; slice scallion and narutomaki thin.",
      detail: "Squeeze the excess liquid from the inari age. Cut the green onion into thin slices and the narutomaki into ⅛-inch (3-mm) slices.",
      uses: ["inari","scallion","naruto"], mins: 5 },

    { comp: "noodles", text: "Boil udon 1 min from frozen (or per package).",
      detail: "Bring a large pot of water to a boil and reheat the frozen udon for 1 minute — no need to defrost. For dry noodles, follow the package instructions.",
      uses: ["udon"], mins: 5 },
    { comp: "noodles", text: "Drain, shaking off every bit of water.",
      detail: "Lift the noodles out with a strainer or drain them, shaking off the excess water so it doesn't dilute the broth.",
      uses: [], mins: 1 },
    { comp: "noodles", text: "Divide noodles into bowls, pour over hot broth, add toppings.",
      detail: "Divide the drained udon into serving bowls, pour the hot broth over to cover, and top with the inari age, narutomaki, and green onion. Sprinkle shichimi togarashi if you like.",
      uses: ["shichimi"], mins: 3 }
  ],
  notes: [
    "The 20-minute claim assumes instant dashi. From scratch the kombu soak and katsuobushi steep add about 45 minutes of waiting — most of it hands-off.",
    "A dashi packet or powder is a legitimate shortcut and brings this back to roughly 20 minutes.",
    "Vegetarian/vegan: stop the dashi after removing the kombu and skip the narutomaki.",
    "Usukuchi soy sauce is saltier than regular despite being lighter in colour — it keeps the broth pale."
  ]
},

/* ============================== 6. KOROKKE ============================== */
{
  id: "korokke-justonecookbook",
  title: "Korokke (Potato & Meat Croquettes)",
  source: { site: "Just One Cookbook", url: "https://www.justonecookbook.com/korokke-croquette/", author: "Namiko Chen" },
  cuisine: "Japanese", tags: ["potato", "beef", "fried", "panko", "bento", "make-ahead"],
  servings: { base: 6, unit: "servings", min: 2, max: 12 },
  time: { active: 30, passive: 20, cook: 40 },
  claimed: 85,
  components: [
    { id: "filling", label: "Filling" },
    { id: "shape",   label: "Shaping & chilling" },
    { id: "bread",   label: "Breading" },
    { id: "fry",     label: "Frying" },
    { id: "serve",   label: "To serve" }
  ],
  ingredients: [
    { key: "potatoes", comp: "filling", name: "Russet potatoes",   us: { qty: 2, unit: "lb" },    metric: { qty: 900, unit: "g" }, note: "about 4" },
    { key: "onion",    comp: "filling", name: "Onion",             us: { qty: 1, unit: "" },      metric: { qty: 1, unit: "" } },
    { key: "carrot",   comp: "filling", name: "Carrot",            us: { qty: 0.5, unit: "" },    metric: { qty: 0.5, unit: "" } },
    { key: "shiitake", comp: "filling", name: "Shiitake mushrooms",us: { qty: 2, unit: "" },      metric: { qty: 2, unit: "" }, note: "stems removed" },
    { key: "sauteoil", comp: "filling", name: "Neutral oil, for sautéing", us: { qty: 2, unit: "Tbsp" }, metric: { qty: 30, unit: "ml" } },
    { key: "beef",     comp: "filling", name: "Ground beef",       us: { qty: 1, unit: "lb" },    metric: { qty: 450, unit: "g" } },
    { key: "salt",     comp: "filling", name: "Kosher salt",       us: { qty: 1, unit: "tsp" },   metric: { qty: 3, unit: "g" } },
    { key: "wpepper",  comp: "filling", name: "White pepper",      us: { qty: 0.25, unit: "tsp" },metric: { qty: 0.5, unit: "g" } },
    { key: "bpepper",  comp: "filling", name: "Black pepper", scalable: false, us: { qty: 0, unit: "to taste" }, metric: { qty: 0, unit: "to taste" } },
    { key: "bindegg",  comp: "filling", name: "Large egg, to bind",us: { qty: 1, unit: "" },      metric: { qty: 50, unit: "g" } },

    { key: "flour",    comp: "bread", name: "All-purpose flour",   us: { qty: 0.5, unit: "cup" }, metric: { qty: 60, unit: "g" } },
    { key: "eggs",     comp: "bread", name: "Large eggs, beaten",  us: { qty: 3, unit: "" },      metric: { qty: 150, unit: "g" } },
    { key: "panko",    comp: "bread", name: "Panko",               us: { qty: 2, unit: "cups" },  metric: { qty: 120, unit: "g" } },

    { key: "fryoil",   comp: "fry", name: "Neutral oil, for frying", scalable: false, us: { qty: 3, unit: "cups" }, metric: { qty: 720, unit: "ml" }, note: "enough for 2 in / 5 cm — the patties must be submerged" },

    { key: "tonkatsu", comp: "serve", name: "Tonkatsu sauce", scalable: false, us: { qty: 0, unit: "to serve" }, metric: { qty: 0, unit: "to serve" } }
  ],
  steps: [
    { comp: "filling", text: "Peel and quarter the potatoes; boil 15–20 min until a skewer slides in. Drain fully.",
      detail: "Peel and cut the potatoes into quarters. Put them in a large pot with enough water to cover and bring to a boil. Cook 15–20 minutes, until a skewer pierces them easily, then drain completely — use the lid to hold the potatoes back.",
      uses: ["potatoes"], mins: 18 },
    { comp: "filling", text: "Back on low heat, shake the pot until every trace of moisture is gone.",
      detail: "Return the pot to the stove over low heat and shake it so the remaining moisture evaporates completely — without letting them catch.",
      tip: "Dryness is the whole game here. Wet filling is what makes korokke burst in the oil.",
      uses: [], mins: 3 },
    { comp: "filling", text: "Mash, leaving some chunks for texture.",
      detail: "Turn off the heat and mash the potatoes, deliberately leaving some small chunks for texture. Set aside.",
      uses: [], mins: 3 },
    { comp: "filling", text: "Finely chop onion, carrot and shiitake caps.",
      detail: "Finely chop the onion and carrot. Remove the stems from the shiitake and finely chop the caps.",
      uses: ["onion","carrot","shiitake"], mins: 8 },
    { comp: "filling", text: "Sauté onion in oil until soft, then add carrot and shiitake and cook until soft.",
      detail: "Heat a large skillet over medium-high heat and add the oil. Sauté the onion until soft, then add the carrot and shiitake and cook until soft.",
      uses: ["sauteoil"], mins: 7 },
    { comp: "filling", text: "Add beef, break up, cook through; season with salt and both peppers.",
      detail: "Add the ground beef and break it up with a wooden spoon. Once cooked through, season with the salt, white pepper, and black pepper to taste. Remove from the heat.",
      uses: ["beef","salt","wpepper","bpepper"], mins: 6 },
    { comp: "filling", text: "Drain the meat and stir into the potatoes — leave the liquid behind.",
      detail: "Drain the meat mixture and add it to the pot of mashed potatoes, leaving the cooking liquid behind.",
      tip: "That liquid is exactly the moisture you just worked to drive off.",
      uses: [], mins: 2 },
    { comp: "filling", text: "Mix in the egg until well combined.",
      detail: "Crack the egg into the mixture and mix everything together until well combined.",
      uses: ["bindegg"], mins: 2 },

    { comp: "shape", text: "While still warm (not hot), form into ovals.",
      detail: "While the mixture is still warm but not hot, form it into oval patties and set them on a plate or tray.",
      uses: [], mins: 10 },
    { comp: "shape", text: "Chill 15–30 min. Do not skip.",
      detail: "Refrigerate the shaped patties for 15–30 minutes before breading.",
      tip: "Warm patties heat fast in the oil, throw off steam, and burst through the breading. Chilling also lets the filling set.",
      uses: [], mins: 20, passive: true },

    { comp: "bread", text: "Set out flour, beaten egg and panko; coat in that order.",
      detail: "Prepare the flour, beaten eggs, and panko in three separate trays. Take the patties from the fridge and dip each in the flour, then the egg, then the panko, in that order.",
      uses: ["flour","eggs","panko"], mins: 8 },

    { comp: "fry", text: "Heat 5 cm of oil to 340–350°F / 170–180°C.",
      detail: "Add the oil to a wok or heavy-bottomed pot to a depth of at least 2 inches (5 cm) and bring it to 340–350ºF (170–180ºC) over medium to medium-high heat.",
      uses: ["fryoil"], mins: 8 },
    { comp: "fry", text: "Fry in batches to golden brown — the inside is already cooked. Drain on a rack.",
      detail: "Deep-fry the korokke in batches until golden brown. The filling is already cooked, so colour is the only thing you're after. Transfer to a wire rack or paper towels to drain.",
      tip: "Don't crowd the pot — the patties should cover no more than half the oil's surface at a time.",
      uses: [], mins: 12 },

    { comp: "serve", text: "Serve immediately with tonkatsu sauce.",
      detail: "Serve the korokke hot with tonkatsu sauce.",
      uses: ["tonkatsu"], mins: 1 }
  ],
  notes: [
    "Unusually for this site, the time estimate is close to honest — it actually counts the chilling step.",
    "Two moisture rules decide whether these survive the fryer: dry the potatoes in the pot, and leave the meat's cooking liquid behind.",
    "The chill is not optional. Frying warm patties is the classic way to have them explode.",
    "Freeze up to a month. Reheat from frozen or part-thawed at 350ºF (180ºC) for about 15 min.",
    "JOC has several other croquettes — Mom's korokke, creamy crab, kabocha, and a baked version that skips deep-frying."
  ]
},

/* ============================== 7. SHOKUPAN — JOC ============================== */
{
  id: "shokupan-justonecookbook",
  title: "Shokupan (JOC — straight dough)",
  source: { site: "Just One Cookbook", url: "https://www.justonecookbook.com/japanese-milk-bread-shokupan/", author: "Namiko Chen" },
  cuisine: "Japanese", tags: ["bread", "yeast", "milk bread", "baking", "weighed"],
  servings: { base: 1, unit: "loaf", min: 1, max: 2 },
  time: { active: 70, passive: 277, cook: 43 },
  claimed: 240,
  components: [
    { id: "dough",  label: "Dough" },
    { id: "knead",  label: "Kneading" },
    { id: "bulk",   label: "First rise" },
    { id: "shape",  label: "Divide & shape" },
    { id: "proof",  label: "Final proof" },
    { id: "bake",   label: "Bake & cool" }
  ],
  ingredients: [
    { key: "water",   comp: "dough", name: "Water",           us: { qty: 1.16, unit: "cups" }, metric: { qty: 275, unit: "g" }, note: "temperature matters — see step 1" },
    { key: "sugar",   comp: "dough", name: "Sugar",           us: { qty: 1.75, unit: "Tbsp" }, metric: { qty: 22, unit: "g" } },
    { key: "honey",   comp: "dough", name: "Honey",           us: { qty: 0.5, unit: "Tbsp" },  metric: { qty: 11, unit: "g" } },
    { key: "yeast",   comp: "dough", name: "Instant yeast",   us: { qty: 2.5, unit: "tsp" },   metric: { qty: 8, unit: "g" }, note: "active dry: use 25% more and proof it first" },
    { key: "flour",   comp: "dough", name: "Bread flour",     us: { qty: 3.1, unit: "cups" },  metric: { qty: 385, unit: "g" }, note: "12.7% protein; avoid organic — inconsistent protein" },
    { key: "salt",    comp: "dough", name: "Kosher salt",     us: { qty: 1.75, unit: "tsp" },  metric: { qty: 8, unit: "g" } },
    { key: "milkpow", comp: "dough", name: "Skim milk powder",us: { qty: 3, unit: "Tbsp" },    metric: { qty: 22, unit: "g" }, note: "coconut milk powder for vegan; not soy — it inhibits the rise" },
    { key: "butter",  comp: "dough", name: "Unsalted butter", us: { qty: 2, unit: "Tbsp" },    metric: { qty: 28, unit: "g" }, note: "cold in summer, room temp in winter" },
    { key: "oil",     comp: "bulk",  name: "Neutral oil, for the bowl", us: { qty: 0.5, unit: "tsp" }, metric: { qty: 2.5, unit: "ml" } },
    { key: "panbut",  comp: "shape", name: "Unsalted butter, for the pan", us: { qty: 0.75, unit: "Tbsp" }, metric: { qty: 10, unit: "g" } }
  ],
  steps: [
    { comp: "dough", text: "Pick your water temperature from your kitchen temperature; target 79–82°F / 26–28°C final dough.",
      detail: "Weigh everything. Water temperature is the one variable you control before mixing. Very cold kitchen → room-temp water 68–76ºF (20–24ºC); cool → 65–68ºF (18–20ºC); moderate → 61–65ºF (16–18ºC); warm to hot → 54–61ºF (12–16ºC). Adjust over a few bakes until the dough finishes at 79–82ºF (26–28ºC).",
      tip: "High-speed kneading generates real friction heat. Starting cool is how you avoid overheating the dough.",
      uses: ["water"], mins: 3 },
    { comp: "dough", text: "Combine water, sugar and honey; whisk in the yeast.",
      detail: "In a large straight-sided glass bowl, combine the water, sugar, and honey, then whisk in the instant yeast and set aside. Keep this bowl — you'll proof the dough in it later.",
      uses: ["sugar","honey","yeast"], mins: 3 },
    { comp: "dough", text: "Mix flour, salt and milk powder in the mixer bowl; well in the centre; pour in the yeast liquid.",
      detail: "In the stand mixer bowl, combine the bread flour, salt, and milk powder until well mixed. Form a well in the centre and pour in the yeast mixture, scraping out every drop. Fit the dough hook.",
      uses: ["flour","salt","milkpow"], mins: 4 },

    { comp: "knead", text: "Speed 2, 2–3 min to a shaggy dough with no dry patches.",
      detail: "Knead on speed 2 for 2–3 minutes until a shaggy dough forms and all the flour is incorporated.",
      uses: [], mins: 3 },
    { comp: "knead", text: "Speed 4, 4 min — smoothing but still bumpy.",
      detail: "Increase to speed 4 and knead 4 minutes. The dough starts shaggy-to-smooth but will still look rough.",
      uses: [], mins: 4 },
    { comp: "knead", text: "Speed 6, 3 min until it clears the bowl.",
      detail: "Increase to speed 6 and knead 3 minutes, until the dough clears the sides of the bowl and shows clear gluten development.",
      tip: "Keep both hands on the mixer — it shakes and will walk off the counter.",
      uses: [], mins: 3 },
    { comp: "knead", text: "Check dough is below 79°F / 26°C, then add cubed butter.",
      detail: "Check the dough temperature — it should be below 79ºF (26ºC). Add the butter, cut into small cubes.",
      tip: "Butter goes in last on purpose: it coats flour and slows gluten development. Waiting until the dough is smooth is the secret to the pull-apart texture.",
      uses: ["butter"], mins: 2 },
    { comp: "knead", text: "Speed 2, 2 min until no butter streaks remain.",
      detail: "Knead on speed 2 for 2 minutes, until no butter streaks remain.",
      uses: [], mins: 2 },
    { comp: "knead", text: "Speed 6, 2–3 min until the dough clings to the hook and the bowl is clean.",
      detail: "Increase to speed 6 and knead 2–3 minutes. At the 2-minute mark, lift the hook — if the dough comes together in one piece and clings, go straight to the windowpane test. Otherwise keep going in 30–60 second increments.",
      tip: "Above 82ºF (28ºC) the gluten collapses into a slack, gooey mess that cannot be saved. Stop the moment you see the cue.",
      uses: [], mins: 3 },
    { comp: "knead", text: "Windowpane test: stretch thin — translucent, no tearing.",
      detail: "Tear off a small piece and stretch it into a square. Pass if it forms a thin translucent membrane without tearing. Fail: knead 1 more minute on speed 6 and re-test.",
      uses: [], mins: 2 },
    { comp: "knead", text: "Speed 4, 1–2 min to relax. Dough should read 79–82°F / 26–28°C.",
      detail: "Knead on speed 4 for 1–2 minutes to relax the dough and smooth the surface. Lifting the hook, it should gather in one piece and feel soft, smooth, and silky. Check the temperature — if too warm, rest it in the fridge 15 minutes.",
      uses: [], mins: 2 },

    { comp: "bulk", text: "Slam and fold 5 times, then tension-pull into a taut ball.",
      detail: "On a lightly dusted surface, fold the dough smooth-side up. Hold the far edge and slam the smooth side onto the counter, fold the bottom up and away, and tuck the sides under. Repeat 5 times total. Then cup both hands around it and drag it toward you, rotating, until smooth and taut.",
      uses: [], mins: 6 },
    { comp: "bulk", text: "Into an oiled bowl, covered; rise 45–60 min until doubled.",
      detail: "Transfer to the lightly oiled bowl, cover with plastic, and rise in a warm spot until doubled — typically 45–60 minutes, up to 1.5 hours in a cool kitchen.",
      tip: "Halfway through, if it looks flat, gently reshape into a tall dome without deflating it.",
      uses: ["oil"], mins: 52, passive: true },
    { comp: "bulk", text: "Finger test: the poke should stay, or spring back very slowly.",
      detail: "Dust the dough with flour and poke the centre. If the indentation remains or springs back very slowly, it's ready. If it springs straight back, proof longer.",
      uses: [], mins: 1 },

    { comp: "shape", text: "Deflate, weigh, divide into 3 equal pieces.",
      detail: "Turn the dough out, press gently to deflate (smooth side down), gather the edges, weigh the total, and divide into 3 equal pieces with a scraper.",
      uses: [], mins: 5 },
    { comp: "shape", text: "Shape each into a boule; drag 6 times on an unfloured surface for tension.",
      detail: "Round each piece by pulling down on opposite sides, rotating 90 degrees, and repeating. Then on a non-floured surface, drag each 2 inches (5 cm) toward you, rotate a quarter turn, and repeat — 6 times total — until smooth and taut. Apply the same tension to each.",
      tip: "You need the friction of a bare surface. On flour it slides and never tightens.",
      uses: [], mins: 6 },
    { comp: "shape", text: "Cover with a damp towel; bench rest 15 min.",
      detail: "Cover the dough balls with a lightly misted tea towel and rest 15 minutes, until noticeably softer and more pliable.",
      tip: "Wring the towel well — a heavy wet towel weighs the dough down.",
      uses: [], mins: 15, passive: true },
    { comp: "shape", text: "Grease the pan and lid with butter, corners included.",
      detail: "Grease the shokupan loaf pan and its lid with room-temperature butter in a thin, even coat, paying attention to the corners.",
      uses: ["panbut"], mins: 3 },
    { comp: "shape", text: "Roll each to 7×9 in / 18×23 cm, fold in thirds, roll to a taut log, pinch the seam.",
      detail: "One piece at a time, lightly flour and roll from the centre out to release gas, flatten thick edges, rotate 90 degrees and flip, then roll to an even 7×9 inch (18×23 cm) rectangle. Fold in thirds like a letter and seal. Roll again to press out air, fold the top corners to a point, and roll down toward you into a taut log. Pinch the seam and rest seam-side down under the towel.",
      tip: "If the dough springs back, cover and wait 2–3 minutes. Forcing it makes the log unravel or tear in the oven.",
      uses: [], mins: 15 },
    { comp: "shape", text: "Three logs seam-down in the pan, swirls facing inward, sides touching the walls.",
      detail: "Place the first and second logs seam-side down at opposite ends of the pan with the swirls facing inward and the sides touching the walls. Put the last log between them, then gently press the tops level so they rise evenly.",
      uses: [], mins: 3 },

    { comp: "proof", text: "Cover and proof ~1 hr. Flat top: 75–80% of pan height. Round top: 85–90%.",
      detail: "Cover with plastic wrap and proof in a warm place about 1 hour. For a flat-topped loaf, stop at 75–80% of the pan's height so there's room for oven spring and the lid still closes. For a round top, go to 85–90%, or until it touches the wrap.",
      tip: "Proofing in the oven? Take it out 20–30 minutes early so you can preheat.",
      uses: [], mins: 60, passive: true },

    { comp: "bake", text: "Preheat 425°F / 220°C, rack 6–7 in / 15–18 cm below the top element.",
      detail: "Preheat to 425ºF (220ºC), reducing by 25ºF (15ºC) for convection. Position the rack so the top of the pan sits 6–7 inches (15–18 cm) from the top element.",
      uses: [], mins: 15 },
    { comp: "bake", text: "Flat top: lid on, 410°F / 210°C, 25–30 min. Round top: spritz, 385°F / 195°C, 25–30 min.",
      detail: "Remove the plastic. Flat-topped: close the lid, lower the oven to 410ºF (210ºC), bake 25–30 minutes. Round-topped: spritz the surface with water, lower to 385ºF (195ºC), bake 25–30 minutes.",
      tip: "If a flat-top loaf rose past 80%, switch to round-top — the lid can jam.",
      uses: [], mins: 28 },
    { comp: "bake", text: "Slam the pan on the counter 1–2 times, then turn the loaf out onto a rack.",
      detail: "Immediately out of the oven, slam the pan firmly on the counter once or twice, then turn it on its side over a wire rack and shake until the loaf slides out.",
      tip: "The slam releases trapped steam so the sides don't cave in. Move quickly or the base goes soggy.",
      uses: [], mins: 2 },
    { comp: "bake", text: "Cool completely, 2–3 hours, before slicing.",
      detail: "Cool the loaf completely on the rack for 2–3 hours before slicing.",
      tip: "Slicing hot lets moisture escape and dries out the crumb.",
      uses: [], mins: 150, passive: true }
  ],
  notes: [
    "The source's 4-hour total stops at the oven. The mandatory 2–3 hour cool before slicing isn't counted — plan on about 6½ hours start to sliceable.",
    "This is a weighed recipe. The gram figures are authoritative; the cup conversions here are approximations for reference only.",
    "Revised May 2026 and sized for JOC's own loaf pan — 10% more dough than the older version.",
    "Do not wash the loaf pan. Wipe it dry; if you must rinse, dry and re-season immediately.",
    "Store whole at room temperature 1–2 days and slice as needed. Never refrigerate. Longer than that, slice and freeze."
  ]
},

/* ============================== 8. SHOKUPAN — CHOPSTICK CHRONICLES ============================== */
{
  id: "shokupan-chopstickchronicles",
  title: "Shokupan (Chopstick Chronicles — yudane)",
  source: { site: "Chopstick Chronicles", url: "https://www.chopstickchronicles.com/shokupan-japanese-fluffy-white-bread/", author: "Shihoko Ura" },
  cuisine: "Japanese", tags: ["bread", "yeast", "milk bread", "baking", "yudane", "overnight"],
  servings: { base: 1, unit: "loaf", min: 1, max: 3 },
  time: { active: 55, passive: 582, cook: 43 },
  claimed: 150,
  components: [
    { id: "yudane", label: "Yudane — the night before" },
    { id: "dough",  label: "Dough" },
    { id: "rise1",  label: "First rise" },
    { id: "shape",  label: "Divide & shape" },
    { id: "rise2",  label: "Second rise" },
    { id: "bake",   label: "Bake" }
  ],
  ingredients: [
    { key: "yflour", comp: "yudane", name: "Bread flour, for the yudane", us: { qty: 0.375, unit: "cup" }, metric: { qty: 50, unit: "g" }, note: "20% of the total flour" },
    { key: "hotwat", comp: "yudane", name: "Boiling water",  us: { qty: 2.67, unit: "Tbsp" }, metric: { qty: 40, unit: "ml" }, note: "must be above 194°F / 90°C" },

    { key: "milk",   comp: "dough", name: "Milk, room temperature", us: { qty: 0.625, unit: "cup" }, metric: { qty: 150, unit: "ml" }, note: "plant milks work; almond gives a fluffier loaf, coconut a denser one" },
    { key: "sugar",  comp: "dough", name: "Sugar",           us: { qty: 1, unit: "Tbsp" },   metric: { qty: 15, unit: "g" } },
    { key: "yeast",  comp: "dough", name: "Instant dry yeast",us: { qty: 1, unit: "tsp" },   metric: { qty: 3, unit: "g" }, note: "or 9 g fresh yeast" },
    { key: "butter", comp: "dough", name: "Unsalted butter, room temperature", us: { qty: 2, unit: "tsp" }, metric: { qty: 10, unit: "g" }, note: "unsalted only — salt interferes with gluten formation" },
    { key: "bflour", comp: "dough", name: "Bread flour",     us: { qty: 1.67, unit: "cups" },metric: { qty: 200, unit: "g" }, note: "around 12% protein" },
    { key: "salt",   comp: "dough", name: "Salt",            us: { qty: 1, unit: "tsp" },    metric: { qty: 5, unit: "g" } }
  ],
  steps: [
    { comp: "yudane", text: "Mix bread flour with boiling water to a paste.",
      detail: "Place the bread flour in a bowl, add the boiling water (above 194ºF / 90ºC), and mix well with a wooden spatula. The combined mixture should come to around 122ºF (50ºC).",
      tip: "This is the whole point of the method: boiling water gelatinises the starch so it absorbs more water and tastes sweeter. It's what keeps the loaf soft for days.",
      uses: ["yflour","hotwat"], mins: 5 },
    { comp: "yudane", text: "Wrap and refrigerate overnight, 8–12 hr.",
      detail: "Cover with cling wrap and refrigerate overnight.",
      tip: "A couple of hours works in a pinch, but the longer it rests the better the loaf.",
      uses: [], mins: 480, passive: true },

    { comp: "dough", text: "Room-temperature milk into the mixer bowl.",
      detail: "Pour the room-temperature milk into a stand mixer bowl.",
      uses: ["milk"], mins: 1 },
    { comp: "dough", text: "Add sugar, butter and yeast, then tear the yudane in in small pieces.",
      detail: "Add the sugar, butter, and yeast to the bowl, then tear the yudane into small pieces and add it.",
      uses: ["sugar","butter","yeast"], mins: 4 },
    { comp: "dough", text: "Add bread flour and salt.",
      detail: "Add the bread flour and salt to the bowl.",
      uses: ["bflour","salt"], mins: 2 },
    { comp: "dough", text: "Combine on speed 1, then knead on speed 5–6 for 20 min.",
      detail: "Attach the dough hook, combine everything on low speed 1, then increase to speed 5 or 6 and knead for 20 minutes.",
      tip: "Readers report stand mixers overheating at this speed for this long — the author uses a bread machine in the video. Watch your machine and judge by the windowpane test rather than the clock. The yudane makes this dough very sticky, so hand-kneading is hard going.",
      uses: [], mins: 22 },

    { comp: "rise1", text: "Round the dough, into a greased bowl, covered; rise 45–60 min at 86°F / 30°C until doubled.",
      detail: "Roll the dough into a round and place it in a greased bowl. Cover with cling wrap and rise about 45 minutes to 1 hour at around 86ºF (30ºC), until doubled in size.",
      tip: "No proof setting? A styrofoam box with four cups of hot water in the corners works.",
      uses: [], mins: 52, passive: true },
    { comp: "rise1", text: "Finger test: floured finger poke — the hole should stay.",
      detail: "Dust a finger with flour and poke the dough. If it doesn't bounce back and the hole stays, it's ready.",
      uses: [], mins: 1 },

    { comp: "shape", text: "Punch down, cut into 2 equal pieces, roll each.",
      detail: "Punch the dough down and cut it into two equal parts with a scraper, then roll each into a round.",
      uses: [], mins: 5 },
    { comp: "shape", text: "Cover with a wet cloth; bench rest 20 min.",
      detail: "Cover the rolled doughs with a wet cloth and let them stand 20 minutes.",
      uses: [], mins: 20, passive: true },
    { comp: "shape", text: "Roll each to 5.9×7.8 in / 15×20 cm; fold left and right to the centre, no trapped air.",
      detail: "Roll each piece out to about a 5.9 × 7.8 inch (15 × 20 cm) rectangle with a rolling pin, then fold tightly from left and right toward the centre without letting any air in.",
      uses: [], mins: 8 },
    { comp: "shape", text: "Rotate 90°, roll up from one end; both into a greased tin, ends facing the centre.",
      detail: "Rotate the dough 90 degrees and roll it up from one end. Lightly grease a one-loaf tin and place both rolls in it with the ends facing the centre.",
      uses: [], mins: 6 },

    { comp: "rise2", text: "Cover with a wet cloth; rise ~30 min until level with the tin.",
      detail: "Cover with a wet cloth and let the dough rise a second time, about 30 minutes, until it reaches the size of the tin. When it's level with the rim, it's ready to bake.",
      uses: [], mins: 30, passive: true },

    { comp: "bake", text: "Preheat to 365°F / 185°C.",
      detail: "Start preheating the oven to 365ºF (185ºC) while the second rise finishes.",
      uses: [], mins: 15 },
    { comp: "bake", text: "Optional: brush the risen dough with beaten egg.",
      detail: "Whisk an egg and lightly brush it over the risen dough for a glossy crust. Optional.",
      tip: "The source lists this as the last step, after cooling — that's an error in the original ordering. Egg wash goes on before baking.",
      uses: [], mins: 2 },
    { comp: "bake", text: "Bake 25–30 min.",
      detail: "Bake for about 25–30 minutes in the preheated oven.",
      uses: [], mins: 28 },
    { comp: "bake", text: "Turn out onto a rack. Slice the next day.",
      detail: "Remove the bread from the tin and cool it on a wire rack.",
      tip: "This loaf is so soft it tears if you slice it warm — the author bakes Saturday and slices Sunday.",
      uses: [], mins: 3 }
  ],
  notes: [
    "The source's own note says it plainly: the yudane resting time is not included in the total. You must start the night before.",
    "Yudane vs tangzhong: yudane is roughly 1:1 flour to boiling water, mixed and rested cold. Tangzhong is 1:5, heated to 149ºF (65ºC) and cooled. Both do the same job — gelatinise starch so the crumb holds moisture.",
    "Baker's percentages are given on the source page, which makes scaling to a different tin straightforward.",
    "All-purpose flour works but rises noticeably less — the author's own test came out closer to a savoury muffin.",
    "The egg wash is listed last in the original instructions, after cooling. Do it before baking.",
    "Tin size: 3.9 x 7.9 x 3.5 in (10 x 20 x 9 cm)."
  ]
},

/* ============================== 9. TURNIP CAKE ============================== */
{
  id: "turnipcake-woksoflife",
  title: "Turnip Cake (Lo Bak Go)",
  source: { site: "The Woks of Life", url: "https://thewoksoflife.com/turnip-cake-lo-bak-go/", author: "Bill Leung" },
  cuisine: "Chinese", tags: ["dim sum", "steamed", "daikon", "make-ahead", "lunar new year"],
  servings: { base: 6, unit: "servings", min: 3, max: 12 },
  time: { active: 34, passive: 150, cook: 76 },
  claimed: 150,
  components: [
    { id: "soak",   label: "Soak — start here" },
    { id: "filling",label: "Filling" },
    { id: "radish", label: "Radish" },
    { id: "batter", label: "Batter" },
    { id: "steam",  label: "Steam & set" },
    { id: "fry",    label: "Slice & pan-fry" }
  ],
  ingredients: [
    { key: "shrimp",  comp: "soak", name: "Dried shrimp",          us: { qty: 1, unit: "Tbsp" }, metric: { qty: 8, unit: "g" }, note: "washed, soaked, chopped" },
    { key: "shiitake",comp: "soak", name: "Dried shiitake mushrooms", us: { qty: 4, unit: "" },  metric: { qty: 4, unit: "" }, note: "3–5; dried only — fresh release too much liquid and taste flat here" },

    { key: "oil",     comp: "filling", name: "Neutral oil",        us: { qty: 2, unit: "Tbsp" }, metric: { qty: 30, unit: "ml" } },
    { key: "sausage", comp: "filling", name: "Chinese sausage (lap cheong)", us: { qty: 1, unit: "" }, metric: { qty: 1, unit: "" }, note: "or lap yuk, cured ham, even bacon — the flavour shifts" },
    { key: "scallion",comp: "filling", name: "Scallion",           us: { qty: 1, unit: "" },     metric: { qty: 1, unit: "" }, note: "chopped" },

    { key: "daikon",  comp: "radish", name: "Daikon radish",       us: { qty: 20, unit: "oz" },  metric: { qty: 565, unit: "g" }, note: "grated on the large holes; pick a heavy one — that means high water content" },
    { key: "rwater",  comp: "radish", name: "Water, for simmering",us: { qty: 1, unit: "cup" },  metric: { qty: 240, unit: "ml" } },

    { key: "riceflour",comp: "batter", name: "Rice flour",         us: { qty: 1.25, unit: "cups" }, metric: { qty: 200, unit: "g" }, note: "REGULAR rice flour — not glutinous/sweet rice flour, or it will not set" },
    { key: "cornstarch",comp: "batter", name: "Cornstarch",        us: { qty: 1, unit: "Tbsp" }, metric: { qty: 8, unit: "g" }, note: "add 1 Tbsp more per extra ¼ cup water — see the texture note" },
    { key: "bwater",  comp: "batter", name: "Water, for the batter", us: { qty: 0.5, unit: "cup" }, metric: { qty: 120, unit: "ml" }, note: "½ cup dense, ¾ cup softer, 1 cup pudding-like" },
    { key: "salt",    comp: "batter", name: "Salt",                us: { qty: 0.5, unit: "tsp" },metric: { qty: 3, unit: "g" } },
    { key: "sugar",   comp: "batter", name: "Sugar",               us: { qty: 0.5, unit: "tsp" },metric: { qty: 2, unit: "g" }, note: "omit in late autumn/winter when daikon is already sweet" },
    { key: "wpepper", comp: "batter", name: "White pepper",        us: { qty: 0.25, unit: "tsp" },metric: { qty: 0.5, unit: "g" } },

    { key: "fryoil",  comp: "fry", name: "Neutral oil, for frying", scalable: false, us: { qty: 2, unit: "Tbsp" }, metric: { qty: 30, unit: "ml" } },
    { key: "oyster",  comp: "fry", name: "Oyster sauce, for dipping", optional: true, scalable: false, us: { qty: 0, unit: "to serve" }, metric: { qty: 0, unit: "to serve" } }
  ],
  steps: [
    { comp: "soak", text: "Soak the dried shrimp and mushrooms in hot water, ~2 hr.",
      detail: "Wash the dried shrimp and dried shiitake and soak them in hot water until fully rehydrated — about 2 hours. Chop both once softened.",
      tip: "This is the step that decides when you can start. Hot water speeds it up; do it first or the night before.",
      uses: ["shrimp","shiitake"], mins: 120, passive: true },

    { comp: "filling", text: "Stir-fry shrimp, mushrooms and sausage in oil 5 min; stir in scallion; remove.",
      detail: "Place a wok over medium heat, add the oil, then the rehydrated shrimp, mushrooms, and diced Chinese sausage. Stir-fry for 5 minutes, stir in the chopped scallion, and remove from the wok.",
      uses: ["oil","sausage","scallion"], mins: 6 },

    { comp: "radish", text: "Grate the daikon on the large holes of a box grater.",
      detail: "Grate the daikon radish using the largest holes on a box grater.",
      uses: ["daikon"], mins: 12 },
    { comp: "radish", text: "Simmer grated radish with 1 cup water, ~10 min, until ~1 cup liquid remains.",
      detail: "Add the grated radish and 1 cup water to the wok. Bring to a simmer and cook about 10 minutes, stirring occasionally so it doesn't brown. It releases liquid and some evaporates — you want roughly 1 cup of liquid left in the wok with the radish.",
      uses: ["rwater"], mins: 10 },

    { comp: "batter", text: "Whisk rice flour and cornstarch with ½ cup water.",
      detail: "In a bowl, combine the rice flour and cornstarch with ½ cup water.",
      tip: "Texture is your choice: ½ cup water = dense, and you taste the radish. ¾ cup + 1 extra Tbsp cornstarch = softer. 1 cup + 2 extra Tbsp cornstarch = the pudding-like texture most dim sum restaurants serve. The cornstarch counterbalances the extra water.",
      uses: ["riceflour","cornstarch","bwater"], mins: 6 },
    { comp: "batter", text: "Stir the slurry into the radish with salt, sugar and white pepper, then the filling.",
      detail: "Add the flour mixture to the radish in the wok along with the salt, sugar, and white pepper. Add the cooked shrimp, mushroom, and sausage mixture, scraping in any remaining oil with a spatula. Mix well. If it looks thin, warm it on low, stirring constantly, until it resembles thick pancake batter.",
      uses: ["salt","sugar","wpepper"], mins: 4 },

    { comp: "steam", text: "Oil the pan generously; spread the batter evenly.",
      detail: "Brush a 9×5-inch loaf pan or 8-inch round pan liberally with oil, transfer the batter, and spread it evenly.",
      tip: "A loaf pan gives neat rectangular slices; a round pan steams faster and more evenly.",
      uses: [], mins: 4 },
    { comp: "steam", text: "Steam over medium-high — 50 min loaf pan, 40 min round.",
      detail: "Place the pan in a steamer with plenty of water and steam over medium-high heat: 50 minutes for a loaf pan, 40 for a round pan. Poke with a chopstick — if it comes out clean, it's done.",
      uses: [], mins: 50 },
    { comp: "steam", text: "Cool and set 30 min, then turn out.",
      detail: "Remove from the steamer and let the cake cool and set for 30 minutes. Loosen the sides with a spatula and turn it out onto a cutting board.",
      tip: "Chilling it in the fridge first makes turning out and slicing much easier.",
      uses: [], mins: 30, passive: true },

    { comp: "fry", text: "Slice ½ in / 1 cm thick with a wet knife.",
      detail: "Use a sharp knife dipped in water to slice the cake into ½-inch (1 cm) thick pieces.",
      uses: [], mins: 5 },
    { comp: "fry", text: "Pan-fry both sides until golden and crisp. Serve with oyster sauce.",
      detail: "Add a couple tablespoons of oil to a non-stick or seasoned cast iron pan over medium heat and fry the slices on both sides until golden and crispy. Serve with oyster sauce.",
      uses: ["fryoil","oyster"], mins: 10 }
  ],
  notes: [
    "The source's 2½ hours is close if you don't count the 2-hour soak, which is mentioned in the post body rather than the recipe card. Start the soak first and the rest follows in about 2½ hours.",
    "Buy regular rice flour. Glutinous (sweet) rice flour makes a gooey cake that never sets — the most common way this recipe fails.",
    "Make-ahead: refrigerate the steamed cake in its pan up to 3 days, then slice and fry. Or freeze up to 3 months, thaw 24 hr in the fridge, slice and fry. Freezing changes the texture but it still works.",
    "Reheating already-fried slices: pan over medium, splash of water, cover, uncover when evaporated, flip and brown.",
    "Vegetarian: drop the shrimp and sausage and swap the oyster sauce for another dip.",
    "Garlic and ginger aren't traditional here — they overpower the radish."
  ]
},

/* ============================== 10. NIAN GAO ============================== */
{
  id: "niangao-healthynibbles",
  title: "Nian Gao (New Year Cake)",
  source: { site: "Healthy Nibbles", url: "https://healthynibblesandbits.com/nian-gao-recipe-new-year-rice-cake/", author: "Lisa Lin" },
  cuisine: "Chinese", tags: ["dessert", "steamed", "lunar new year", "glutinous rice", "make-ahead"],
  servings: { base: 1, unit: "cake", min: 1, max: 3 },
  time: { active: 25, passive: 600, cook: 70 },
  claimed: 90,
  components: [
    { id: "batter", label: "Batter" },
    { id: "steam",  label: "Steam" },
    { id: "rest",   label: "Cool & set" },
    { id: "fry",    label: "Pan-fry to serve" }
  ],
  ingredients: [
    { key: "gflour",  comp: "batter", name: "Glutinous rice flour", us: { qty: 1, unit: "lb" },   metric: { qty: 455, unit: "g" }, note: "Thai-style, green label. NOT the red-label rice flour — the texture will be wrong. Water-ground beats stone-ground (Bob's Red Mill goes grainy)" },
    { key: "ginger",  comp: "batter", name: "Ground ginger",       us: { qty: 4, unit: "tsp" },   metric: { qty: 8, unit: "g" }, note: "Lisa's addition to Mama Lin's original; scale to taste or omit" },
    { key: "salt",    comp: "batter", name: "Salt",                us: { qty: 0.5, unit: "tsp" }, metric: { qty: 3, unit: "g" } },
    { key: "bsugar",  comp: "batter", name: "Brown sugar slabs",   us: { qty: 12.5, unit: "oz" }, metric: { qty: 355, unit: "g" }, note: "or 2 cups packed dark brown sugar" },
    { key: "water",   comp: "batter", name: "Water",               us: { qty: 1.5, unit: "cups" },metric: { qty: 370, unit: "g" } },
    { key: "coconut", comp: "batter", name: "Coconut milk",        us: { qty: 1, unit: "cup" },   metric: { qty: 225, unit: "g" }, note: "canned full-fat; lite works. Substituting water is fine — use 1 cup by volume" },
    { key: "oil",     comp: "batter", name: "Neutral oil",         us: { qty: 1, unit: "tsp" },   metric: { qty: 5, unit: "ml" }, note: "plus more for greasing" },
    { key: "kansui",  comp: "batter", name: "Kansui",              optional: true, us: { qty: 1, unit: "tsp" }, metric: { qty: 5, unit: "ml" }, note: "deepens the colour only; omit freely, or try 1–2 Tbsp molasses" },
    { key: "jujube",  comp: "steam",  name: "Red date (jujube)",   optional: true, us: { qty: 1, unit: "" }, metric: { qty: 1, unit: "" }, note: "garnish; covers the chopstick test hole" },
    { key: "fryoil",  comp: "fry", name: "Oil, for pan-frying", scalable: false, us: { qty: 0, unit: "as needed" }, metric: { qty: 0, unit: "as needed" } },
    { key: "egg",     comp: "fry", name: "Egg, for dipping", optional: true, scalable: false, us: { qty: 0, unit: "optional" }, metric: { qty: 0, unit: "optional" } }
  ],
  steps: [
    { comp: "batter", text: "Whisk glutinous rice flour, ground ginger and salt.",
      detail: "In a large bowl, whisk the glutinous rice flour, ground ginger, and salt together. Set aside.",
      uses: ["gflour","ginger","salt"], mins: 3 },
    { comp: "batter", text: "Snap the sugar slabs into a pan with the water; boil covered until fully dissolved.",
      detail: "Snap the brown sugar slabs into smaller pieces (a mallet helps) and put them in a saucepan with the water. Cover and bring to a boil, keeping it boiling until the slabs dissolve completely, stirring occasionally so nothing sticks. With regular brown sugar this takes only a few minutes.",
      uses: ["bsugar","water"], mins: 10 },
    { comp: "batter", text: "Off heat, stir in coconut milk, oil and kansui; cool 5–10 min.",
      detail: "Once the sugar has dissolved, turn off the heat. Pour in the coconut milk, oil, and kansui and stir. Let the liquid cool for 5 to 10 minutes.",
      uses: ["coconut","oil","kansui"], mins: 8 },
    { comp: "batter", text: "Add the hot liquid to the flour in thirds, stirring until only small lumps remain.",
      detail: "Gradually stir the liquid into the flour, adding about a third at a time and stirring between additions. Keep stirring for several minutes — the batter is stiff at first and loosens after about a minute — until only small lumps remain.",
      uses: [], mins: 6 },
    { comp: "batter", text: "Pass the batter through a fine mesh strainer.",
      detail: "Set a fine mesh strainer over another bowl and pour the batter through to remove the remaining lumps.",
      uses: [], mins: 3 },

    { comp: "steam", text: "Grease a 9 in / 23 cm round pan; pour in and tap out air bubbles.",
      detail: "Lightly grease a 9-inch cake pan or any 9-inch circular metal pan. Pour in the batter and tap the pan gently on the counter once or twice to release air bubbles — pop any big ones with a toothpick.",
      tip: "Leave about ¾ inch between the batter and the rim. The cake puffs while steaming and will hit the foil if the pan is too full.",
      uses: [], mins: 4 },
    { comp: "steam", text: "Cover with foil; set on a rack in a wok with water ½ in / 1 cm below the rack.",
      detail: "Cover the pan with foil. Place a steaming rack inside a large wok (at least 14 in) and fill with water until there's about a ½-inch gap between the water line and the top of the rack. Cover and bring to a boil.",
      tip: "Water level is the whole game. Too much and it touches the pan, overheats the cake and leaves deep creases. Too little and there isn't enough steam — you get a pale, cracked, undercooked cake. Foil keeps lid condensation off the surface.",
      uses: [], mins: 10 },
    { comp: "steam", text: "Steam on medium 50–60 min (45–50 for a thin pan). Top up water halfway.",
      detail: "Once boiling, lower the cake onto the rack, cover, and reduce to medium — the water should bubble constantly but not at a rolling boil. Steam 50 minutes to 1 hour for a thicker cake pan, 45 to 50 for a thin one. Add more water halfway through as it evaporates.",
      uses: [], mins: 55 },
    { comp: "steam", text: "Test with a chopstick: the cake should be brown and slightly translucent.",
      detail: "Insert a chopstick into the centre and dig out a little cake. It should look brown and slightly translucent. Insert the jujube into the centre to decorate and cover the hole.",
      tip: "The toothpick test does not work here — it can come out clean on an undercooked cake. Go by colour and translucency, or taste it: still starchy means keep going.",
      uses: ["jujube"], mins: 2 },

    { comp: "rest", text: "Cool on the counter overnight before slicing.",
      detail: "Let the nian gao cool on the counter overnight, covering it with foil once cool. It keeps on the counter 1 to 3 days in a cool dry house, then move it to the fridge. To unmould, run a butter knife round the edge and lift it out.",
      tip: "It must harden overnight before you can slice it cleanly. Traditionally the cake sits out as decoration for several days before anyone cuts it.",
      uses: [], mins: 600, passive: true },

    { comp: "fry", text: "Slice ¼–½ in / 6–12 mm and pan-fry 3–4 min, flipping once, until blistered.",
      detail: "Cut the hardened cake into ¼ to ½-inch slices and pan-fry in a nonstick pan over medium heat for 3 to 4 minutes, flipping halfway, until the sides brown and blister. Optionally dip slices in an egg whisked with 1 Tbsp water first for a savoury version.",
      tip: "Use a bamboo or wooden spatula — nian gao sticks badly to metal tongs. Egg-dipped slices won't blister as much. A waffle iron also works: 4–6 min, then cool 5 min to crisp.",
      uses: ["fryoil","egg"], mins: 4 }
  ],
  notes: [
    "The card's 1½ hours covers mixing and steaming only. The overnight set is required before you can slice it — this is a make-it-the-day-before cake.",
    "Glutinous rice flour is non-negotiable. Regular rice flour (red label) gives the wrong texture entirely.",
    "The batter is forgiving. A reader who under-steamed and then went another 30 minutes still got a good cake.",
    "Kansui is purely cosmetic — it deepens the colour and doesn't change the flavour.",
    "Keeps a week in the fridge; freeze beyond that."
  ]
},

/* ============================== 11. OXTAIL STEW ============================== */
{
  id: "oxtailstew-jamieoliver",
  title: "Ridiculously Good Oxtail Stew",
  source: { site: "Jamie Oliver", url: "https://www.jamieoliver.com/recipes/beef/insanely-good-oxtail-stew/", author: "Jamie Oliver" },
  cuisine: "British", tags: ["beef", "braise", "slow-cook", "oven", "dairy-free", "winter"],
  servings: { base: 8, unit: "servings", min: 4, max: 12 },
  time: { active: 32, passive: 10, cook: 350 },
  claimed: 360,
  components: [
    { id: "roast",  label: "Roast the oxtail" },
    { id: "base",   label: "Vegetable base" },
    { id: "braise", label: "Braise" },
    { id: "finish", label: "Finish" }
  ],
  ingredients: [
    { key: "oxtail",  comp: "roast", name: "Oxtail",            us: { qty: 5.5, unit: "lb" },  metric: { qty: 2500, unit: "g" }, note: "chopped into 4 cm / 1½ in chunks — ask your butcher" },
    { key: "oliveoil",comp: "roast", name: "Olive oil",         scalable: false, us: { qty: 0, unit: "to drizzle" }, metric: { qty: 0, unit: "to drizzle" } },

    { key: "leeks",   comp: "base", name: "Leeks",              us: { qty: 2, unit: "" },      metric: { qty: 2, unit: "" }, note: "trimmed, halved lengthways, 2 cm chunks" },
    { key: "celery",  comp: "base", name: "Celery sticks",      us: { qty: 2, unit: "" },      metric: { qty: 2, unit: "" } },
    { key: "carrots", comp: "base", name: "Carrots",            us: { qty: 4, unit: "" },      metric: { qty: 4, unit: "" }, note: "peeled, 2 cm pieces" },
    { key: "thyme",   comp: "base", name: "Fresh thyme",        us: { qty: 0, unit: "a few sprigs" }, metric: { qty: 0, unit: "a few sprigs" }, scalable: false },
    { key: "rosemary",comp: "base", name: "Fresh rosemary",     us: { qty: 0, unit: "a few sprigs" }, metric: { qty: 0, unit: "a few sprigs" }, scalable: false },
    { key: "bay",     comp: "base", name: "Fresh bay leaves",   us: { qty: 4, unit: "" },      metric: { qty: 4, unit: "" } },
    { key: "baseoil", comp: "base", name: "Olive oil",          us: { qty: 1, unit: "Tbsp" },  metric: { qty: 15, unit: "ml" } },

    { key: "cloves",  comp: "braise", name: "Cloves",           us: { qty: 4, unit: "" },      metric: { qty: 4, unit: "" } },
    { key: "flour",   comp: "braise", name: "Plain flour",      us: { qty: 2, unit: "Tbsp" },  metric: { qty: 30, unit: "g" }, note: "heaped" },
    { key: "tomatoes",comp: "braise", name: "Tinned plum tomatoes", us: { qty: 28, unit: "oz" }, metric: { qty: 800, unit: "g" }, note: "2 x 400 g tins" },
    { key: "porter",  comp: "braise", name: "Porter or red wine", us: { qty: 1.16, unit: "cups" }, metric: { qty: 275, unit: "ml" } },
    { key: "stock",   comp: "braise", name: "Beef stock",       optional: true, us: { qty: 4.2, unit: "cups" }, metric: { qty: 1000, unit: "ml" }, note: "or the same in cold water" },

    { key: "worcs",   comp: "finish", name: "Worcestershire sauce", scalable: false, us: { qty: 0, unit: "a good splash" }, metric: { qty: 0, unit: "a good splash" } }
  ],
  steps: [
    { comp: "roast", text: "Preheat oven to 425°F / 220°C with a large roasting tray inside.",
      detail: "Preheat the oven to 220ºC/425ºF/gas 7 and put a large roasting tray in to heat up.",
      uses: [], mins: 10 },
    { comp: "roast", text: "Season and oil the oxtail in the hot tray; roast ~20 min until golden and caramelised.",
      detail: "Carefully remove the hot tray, add the oxtail, season, drizzle with olive oil, and toss to coat. Roast for around 20 minutes, until golden and caramelised.",
      tip: "Adding the meat to an already-hot tray is what gets the colour. Colour here is most of the finished flavour.",
      uses: ["oxtail","oliveoil"], mins: 20 },

    { comp: "base", text: "Chop leeks, celery and carrots into 2 cm pieces.",
      detail: "While the oxtail roasts, trim and halve the leeks and celery lengthways and chop into rough 2 cm chunks. Peel and chop the carrots into 2 cm pieces.",
      uses: ["leeks","celery","carrots"], mins: 10 },
    { comp: "base", text: "Sweat with picked thyme, rosemary and bay in oil, ~20 min, until soft and sweet.",
      detail: "Put the vegetables into a large ovenproof casserole over medium-low heat with 1 tablespoon of olive oil. Pick and roughly chop the thyme and rosemary leaves and add them with the bay. Cook around 20 minutes, stirring frequently, until soft and sweet.",
      uses: ["thyme","rosemary","bay","baseoil"], mins: 20 },

    { comp: "braise", text: "Drop the oven to 325°F / 170°C. Stir cloves and flour into the veg.",
      detail: "Remove the oxtail from the oven and set aside, and reduce the oven to 170ºC/325ºF/gas 3. Add the cloves and flour to the vegetables, stirring well to combine.",
      uses: ["cloves","flour"], mins: 3 },
    { comp: "braise", text: "Pour in tomatoes and porter, add the oxtail and its juices, cover with stock.",
      detail: "Pour in the tomatoes and the porter or wine. Add the oxtail along with any roasting juices, cover with the beef stock or 1 litre of cold water, and stir well.",
      tip: "Don't leave the roasting juices behind — that's concentrated flavour.",
      uses: ["tomatoes","porter","stock"], mins: 5 },
    { comp: "braise", text: "Bring to the boil, lid on, then oven ~5 hr until the meat falls off the bone.",
      detail: "Turn the heat to high and bring to the boil, then put the lid on and transfer to the oven for around 5 hours, until the meat falls away from the bone. Stir every hour or so, adding a splash of water to loosen if needed.",
      uses: [], mins: 300 },

    { comp: "finish", text: "Rest 10 min out of the oven.",
      detail: "Remove the pan from the oven and leave to cool for about 10 minutes before handling.",
      uses: [], mins: 10, passive: true },
    { comp: "finish", text: "Strip the meat from the bones with gloved hands; discard the bones.",
      detail: "Using rubber gloves, strip the meat from the bones and return it to the pan, discarding the bones.",
      uses: [], mins: 15 },
    { comp: "finish", text: "Add Worcestershire sauce, season, serve with mash and greens.",
      detail: "Add a good splash of Worcestershire sauce, season to taste, and serve with creamy mash and seasonal steamed greens.",
      uses: ["worcs"], mins: 2 }
  ],
  notes: [
    "One of the more honest time estimates in this book — 6 hours claimed, about 6½ real. The oven does nearly all of it.",
    "Leftovers: add boiling water and simmer to turn it into soup, or stir it through pappardelle with grated Parmesan.",
    "Dairy-free as written (the suggested mash isn't).",
    "Porter gives a darker, maltier result than red wine. Either works.",
    "Stock is listed as optional — plain cold water is the fallback, with a longer reduction doing the work."
  ]
},

/* ============================== 12. TAIWANESE POPCORN CHICKEN ============================== */
{
  id: "popcornchicken-cjeats",
  title: "Taiwanese Popcorn Chicken",
  source: { site: "CJ Eats", url: "https://cjeatsrecipes.com/taiwanese-popcorn-chicken/", author: "Chris Joe" },
  cuisine: "Taiwanese", tags: ["chicken", "fried", "street food", "snack", "night market"],
  servings: { base: 4, unit: "servings", min: 2, max: 8 },
  time: { active: 21, passive: 30, cook: 18 },
  claimed: 35,
  components: [
    { id: "chicken", label: "Chicken & marinade" },
    { id: "season",  label: "Seasoning mix" },
    { id: "dredge",  label: "Dredge" },
    { id: "fry",     label: "Fry" }
  ],
  ingredients: [
    { key: "thigh",    comp: "chicken", name: "Chicken thigh",   us: { qty: 1, unit: "lb" },     metric: { qty: 450, unit: "g" }, note: "boneless, skinless; cut into 2 in / 5 cm pieces" },
    { key: "soy",      comp: "chicken", name: "Soy sauce",       us: { qty: 2, unit: "Tbsp" },   metric: { qty: 30, unit: "ml" } },
    { key: "ginger",   comp: "chicken", name: "Ginger",          us: { qty: 1, unit: "Tbsp" },   metric: { qty: 15, unit: "g" }, note: "grated — a paste infuses the marinade far better than mincing" },
    { key: "garlic",   comp: "chicken", name: "Garlic",          us: { qty: 1, unit: "Tbsp" },   metric: { qty: 15, unit: "g" }, note: "grated" },
    { key: "wpepper1", comp: "chicken", name: "White pepper",    us: { qty: 0.5, unit: "tsp" },  metric: { qty: 1, unit: "g" } },
    { key: "shaoxing", comp: "chicken", name: "Shaoxing wine",   us: { qty: 0.5, unit: "Tbsp" }, metric: { qty: 7, unit: "ml" }, note: "or sherry, mirin, even chicken stock" },
    { key: "eggwhite", comp: "chicken", name: "Egg white",       us: { qty: 1, unit: "" },       metric: { qty: 1, unit: "" } },

    { key: "fivespice",comp: "season", name: "Five spice powder",us: { qty: 0.5, unit: "tsp" },  metric: { qty: 1, unit: "g" } },
    { key: "wpepper2", comp: "season", name: "White pepper",     us: { qty: 0.5, unit: "tsp" },  metric: { qty: 1, unit: "g" } },
    { key: "salt",     comp: "season", name: "Salt",             us: { qty: 0.5, unit: "tsp" },  metric: { qty: 3, unit: "g" } },
    { key: "sugar",    comp: "season", name: "Sugar",            us: { qty: 0.5, unit: "tsp" },  metric: { qty: 2, unit: "g" } },

    { key: "spflour",  comp: "dredge", name: "Coarse sweet potato flour", us: { qty: 2, unit: "cups" }, metric: { qty: 280, unit: "g" }, note: "the 'thick' or coarse grind — this is what makes the craggy crust; tapioca flour is the fallback" },

    { key: "basil",    comp: "fry", name: "Fresh basil",         us: { qty: 1, unit: "cup" },    metric: { qty: 25, unit: "g" }, note: "Thai basil preferred; regular works" },
    { key: "fryoil",   comp: "fry", name: "Neutral oil, for frying", scalable: false, us: { qty: 6, unit: "cups" }, metric: { qty: 1400, unit: "ml" }, note: "high smoke point — avocado, peanut, canola or vegetable" }
  ],
  steps: [
    { comp: "chicken", text: "Cut chicken thigh into even 2 in / 5 cm pieces.",
      detail: "Cut 1 lb of boneless, skinless chicken thigh into similar-sized 2-inch pieces.",
      tip: "Uniform pieces are the whole point — mismatched sizes means some burn while others stay raw.",
      uses: ["thigh"], mins: 6 },
    { comp: "chicken", text: "Mix with soy, grated ginger and garlic, white pepper, Shaoxing and egg white.",
      detail: "Combine the chicken with the soy sauce, grated ginger, grated garlic, white pepper, Shaoxing wine, and egg white, and mix well.",
      uses: ["soy","ginger","garlic","wpepper1","shaoxing","eggwhite"], mins: 4 },
    { comp: "chicken", text: "Cover and refrigerate at least 30 min.",
      detail: "Cover and marinate in the refrigerator for at least 30 minutes, and up to 24 hours.",
      tip: "Don't go past 24 hours. Thirty minutes is the minimum that actually does anything.",
      uses: [], mins: 30, passive: true },

    { comp: "season", text: "Stir five spice, white pepper, salt and sugar together; set aside.",
      detail: "Mix the five spice powder, white pepper, salt, and sugar together. This is the finishing seasoning — set it aside.",
      uses: ["fivespice","wpepper2","salt","sugar"], mins: 2 },

    { comp: "dredge", text: "Dredge in sweet potato flour, packing it on — no bald spots.",
      detail: "Dredge the marinated chicken in the coarse sweet potato flour, packing it well so no bare patches remain.",
      tip: "Coarse (\"thick\") sweet potato flour is the signature — it fries into the light, craggy shell you get at the night markets. Tapioca flour is the substitute if you can't find it.",
      uses: ["spflour"], mins: 8 },

    { comp: "fry", text: "Heat oil to 350°F / 175°C.",
      detail: "Heat the neutral oil in a Dutch oven or heavy pot to 350ºF (175ºC).",
      tip: "If it drops below 325ºF (165ºC), pull some chicken out and fry in smaller batches. A thermometer earns its place here.",
      uses: ["fryoil"], mins: 8 },
    { comp: "fry", text: "Fry 3–4 min; add basil for the last 30 sec and cover immediately.",
      detail: "Fry the chicken for 3–4 minutes. Add the fresh basil at the end and fry another 30 seconds, covering the pot immediately after adding it.",
      tip: "Cover the moment the basil goes in — wet leaves in hot oil spatter violently.",
      uses: ["basil"], mins: 10 },
    { comp: "fry", text: "Sprinkle the seasoning on straight out of the oil.",
      detail: "Sprinkle the seasoning mix over the chicken immediately after frying, while it's still hot, and serve.",
      tip: "It has to be immediate — the seasoning only sticks while the surface is still oily.",
      uses: [], mins: 1 }
  ],
  notes: [
    "The 35-minute total counts the 30-minute marinade as prep, which leaves no room for the actual work. Nearer 70 minutes start to finish.",
    "Marinate anywhere from 30 minutes to 24 hours — but no longer.",
    "Coarse sweet potato flour is the one ingredient worth seeking out. Readers report tapioca flour works but is noticeably less good.",
    "Fridge 3–4 days. It softens as it sits, which is normal — reheat in an air fryer at 350ºF or an oven at 400ºF for 10 min to bring the crust back."
  ]
},

/* ============================== 13. MATCHA COOKIES ============================== */
{
  id: "matchacookies-justonecookbook",
  title: "Matcha Cookies",
  source: { site: "Just One Cookbook", url: "https://www.justonecookbook.com/green-tea-white-chocolate-cookies/", author: "Namiko Chen" },
  cuisine: "Japanese", tags: ["dessert", "cookies", "matcha", "baking", "make-ahead", "slice-and-bake"],
  servings: { base: 24, unit: "cookies", min: 12, max: 48 },
  time: { active: 22, passive: 125, cook: 25 },
  claimed: 35,
  components: [
    { id: "dough", label: "Dough" },
    { id: "chill", label: "Shape & chill" },
    { id: "bake",  label: "Slice & bake" }
  ],
  ingredients: [
    { key: "flour",  comp: "dough", name: "All-purpose flour",  us: { qty: 2, unit: "cups" },  metric: { qty: 240, unit: "g" }, note: "weigh it — or fluff, spoon and level, never scoop" },
    { key: "matcha", comp: "dough", name: "Matcha",             us: { qty: 2.5, unit: "Tbsp" },metric: { qty: 15, unit: "g" }, note: "ceremonial or culinary grade; 6 g per Tbsp" },
    { key: "butter", comp: "dough", name: "Unsalted butter",    us: { qty: 0.75, unit: "cup" },metric: { qty: 170, unit: "g" }, note: "softened to room temperature" },
    { key: "salt",   comp: "dough", name: "Kosher salt",        scalable: false, us: { qty: 0, unit: "a pinch" }, metric: { qty: 0, unit: "a pinch" } },
    { key: "psugar", comp: "dough", name: "Confectioners' sugar", us: { qty: 1, unit: "cup" }, metric: { qty: 130, unit: "g" }, note: "1 cup + 2 tsp" },
    { key: "yolks",  comp: "dough", name: "Egg yolks",          us: { qty: 2, unit: "" },      metric: { qty: 2, unit: "" }, note: "large, at room temperature" },
    { key: "wchoc",  comp: "dough", name: "White chocolate baking chips", us: { qty: 0.25, unit: "cup" }, metric: { qty: 45, unit: "g" } }
  ],
  steps: [
    { comp: "dough", text: "Sift flour and matcha together.",
      detail: "Combine the all-purpose flour and matcha in a large bowl and sift them together.",
      uses: ["flour","matcha"], mins: 4 },
    { comp: "dough", text: "Beat butter smooth, blend in the salt.",
      detail: "In a stand mixer with the paddle, or a bowl with a hand mixer, beat the softened butter until smooth and creamy, then add the pinch of salt and blend.",
      tip: "Cold butter? Leave it out an hour, or microwave in 5-second bursts.",
      uses: ["butter","salt"], mins: 4 },
    { comp: "dough", text: "Add confectioners' sugar; beat until soft and light.",
      detail: "Add the confectioners' sugar and beat until soft and light, scraping the bowl down occasionally.",
      uses: ["psugar"], mins: 4 },
    { comp: "dough", text: "Mix in the egg yolks.",
      detail: "Add the room-temperature egg yolks and mix until combined.",
      uses: ["yolks"], mins: 2 },
    { comp: "dough", text: "Add the flour-matcha gradually; mix until just combined.",
      detail: "Gradually add the sifted flour and matcha mixture and mix until just combined. Do not overmix.",
      uses: [], mins: 3 },
    { comp: "dough", text: "Fold in white chocolate chips.",
      detail: "Add the white chocolate chips and mix until just incorporated.",
      uses: ["wchoc"], mins: 1 },

    { comp: "chill", text: "Halve the dough; roll each into a log 1½ in / 4 cm across, 7 in / 18 cm long.",
      detail: "Divide the dough into 2 equal pieces and shape each into a cylinder about 1½ inches (4 cm) in diameter and 7 inches (18 cm) long.",
      uses: [], mins: 5 },
    { comp: "chill", text: "Wrap and chill until firm, at least 2 hr.",
      detail: "Wrap the logs in plastic and refrigerate until firm, at least 2 hours.",
      tip: "Rest the logs on a bed of uncooked rice while chilling — it holds the round shape instead of letting one side flatten. Unbaked logs freeze for 2 months; sit 10 min at room temperature, then slice and bake without fully defrosting.",
      uses: [], mins: 120, passive: true },

    { comp: "bake", text: "Heat oven to 350°F / 175°C; line a sheet.",
      detail: "Preheat the oven to 350ºF (175ºC) — reduce by 25ºF (15ºC) for convection — and line a baking sheet with parchment or a silicone mat.",
      uses: [], mins: 10 },
    { comp: "bake", text: "Slice ⅓ in / 7 mm rounds, space 1 in / 2.5 cm apart.",
      detail: "Unwrap the dough and slice into rounds about ⅓ inch (7 mm) thick, placing them about 1 inch (2.5 cm) apart on the sheet.",
      tip: "Too hard to slice cleanly? Let it sit 5 minutes and try again.",
      uses: [], mins: 6 },
    { comp: "bake", text: "Bake ~15 min, until the edges just turn golden.",
      detail: "Bake at 350ºF (175ºC) for about 15 minutes, until the edges turn slightly golden brown.",
      uses: [], mins: 15 },
    { comp: "bake", text: "Cool 5 min on the sheet, then finish on a rack.",
      detail: "Let the cookies cool on the baking sheet for 5 minutes, then transfer to a wire rack and cool completely before serving.",
      uses: [], mins: 5, passive: true }
  ],
  notes: [
    "The card says 35 minutes total while listing a 2-hour chill on the same card — the chill isn't counted. Realistically about 2 hr 50 min.",
    "This is a slice-and-bake: the logs keep 2 months frozen, so you can bake a few at a time.",
    "Adapted by the author from Okashi Treats by Keiko Ishida.",
    "A generous amount of matcha — roughly the caffeine of a weak coffee per serving, worth knowing if you're serving children.",
    "Airtight at room temperature up to 4 days."
  ]
},

/* ============================== 14. JAPANESE CAKE ROLL ============================== */
{
  id: "cakeroll-takestwoeggs",
  title: "Japanese Cake Roll",
  source: { site: "Takes Two Eggs", url: "https://takestwoeggs.com/japanese-cake-roll/", author: "Megan" },
  cuisine: "Japanese", tags: ["dessert", "cake", "chiffon", "whipped cream", "baking"],
  servings: { base: 8, unit: "servings", min: 4, max: 16 },
  time: { active: 25, passive: 105, cook: 26 },
  claimed: 70,
  components: [
    { id: "yolk",     label: "Egg yolk batter" },
    { id: "meringue", label: "Meringue" },
    { id: "bake",     label: "Bake & roll" },
    { id: "cream",    label: "Whipped cream" },
    { id: "assemble", label: "Assemble" }
  ],
  ingredients: [
    { key: "yolks",   comp: "yolk", name: "Egg yolks",          us: { qty: 4, unit: "" },      metric: { qty: 4, unit: "" }, note: "large, room temperature" },
    { key: "sugar1",  comp: "yolk", name: "Granulated sugar",   us: { qty: 0.25, unit: "cup" },metric: { qty: 50, unit: "g" }, note: "for the yolk mixture" },
    { key: "salt",    comp: "yolk", name: "Salt",               us: { qty: 0.25, unit: "tsp" },metric: { qty: 1, unit: "g" } },
    { key: "vanilla1",comp: "yolk", name: "Vanilla extract",    us: { qty: 0.5, unit: "tsp" }, metric: { qty: 2.5, unit: "ml" } },
    { key: "oil",     comp: "yolk", name: "Vegetable oil",      us: { qty: 0.25, unit: "cup" },metric: { qty: 50, unit: "ml" } },
    { key: "milk",    comp: "yolk", name: "Whole milk",         us: { qty: 3, unit: "Tbsp" },  metric: { qty: 50, unit: "ml" } },
    { key: "cflour",  comp: "yolk", name: "Cake flour",         us: { qty: 0.5, unit: "cup" }, metric: { qty: 67, unit: "g" }, note: "softer crumb than all-purpose; AP works but comes out spongier" },
    { key: "bpowder", comp: "yolk", name: "Baking powder",      us: { qty: 0.5, unit: "tsp" }, metric: { qty: 2, unit: "g" } },

    { key: "whites",  comp: "meringue", name: "Egg whites",     us: { qty: 4, unit: "" },      metric: { qty: 4, unit: "" }, note: "large, room temperature" },
    { key: "tartar",  comp: "meringue", name: "Cream of tartar",us: { qty: 0.25, unit: "tsp" },metric: { qty: 1, unit: "g" }, note: "or a touch of lemon juice" },
    { key: "sugar2",  comp: "meringue", name: "Granulated sugar", us: { qty: 0.33, unit: "cup" }, metric: { qty: 67, unit: "g" }, note: "for the meringue" },

    { key: "cream",   comp: "cream", name: "Heavy whipping cream", us: { qty: 1, unit: "cup" },metric: { qty: 250, unit: "ml" }, note: "keep it cold until the moment you whip it" },
    { key: "psugar",  comp: "cream", name: "Powdered sugar",    us: { qty: 3, unit: "Tbsp" },  metric: { qty: 38, unit: "g" } },
    { key: "vanilla2",comp: "cream", name: "Vanilla extract",   us: { qty: 1, unit: "tsp" },   metric: { qty: 5, unit: "ml" } }
  ],
  steps: [
    { comp: "yolk", text: "Line a 9×13 in pan; heat oven to 350°F / 176°C.",
      detail: "Line a 9×13-inch baking tray with parchment paper and preheat the oven to 350ºF (176ºC).",
      uses: [], mins: 10 },
    { comp: "yolk", text: "Whisk yolks, sugar, salt, vanilla, oil and milk.",
      detail: "In a medium bowl, whisk the egg yolks, ¼ cup sugar, salt, vanilla, oil, and milk until combined.",
      uses: ["yolks","sugar1","salt","vanilla1","oil","milk"], mins: 4 },
    { comp: "yolk", text: "Sift in cake flour and baking powder; whisk smooth.",
      detail: "Sift the cake flour and baking powder into the yolk mixture through a fine-mesh sieve and whisk until no lumps or traces of flour remain.",
      uses: ["cflour","bpowder"], mins: 3 },

    { comp: "meringue", text: "Wipe the bowl with vinegar or lemon; beat whites to frothy.",
      detail: "Wipe a large glass or stainless bowl with a paper towel and a little lemon juice or vinegar. Add the egg whites and beat on high until bubbly and frothy.",
      tip: "Any trace of fat stops a meringue. Never use plastic — it holds grease.",
      uses: ["whites"], mins: 3 },
    { comp: "meringue", text: "Add cream of tartar, then sugar in three additions; beat to stiff peaks.",
      detail: "Add the cream of tartar and beat until the whites turn opaque and the bubbles tighten. With the mixer running, add the ⅓ cup sugar in three increments. Keep beating until stiff peaks form — shiny, and holding a pointed tip.",
      tip: "Never add all the sugar at once — it deflates the whites before they can build structure.",
      uses: ["tartar","sugar2"], mins: 5 },

    { comp: "bake", text: "Fold meringue into the batter in thirds, gently.",
      detail: "With a rubber spatula, fold about a third of the meringue into the yolk mixture until mostly combined, then repeat with the second and final thirds.",
      tip: "Folding isn't stirring: run the spatula round the bowl edge to the bottom and scoop upward. Over-folding bursts the air and gives a tough, flat cake.",
      uses: [], mins: 4 },
    { comp: "bake", text: "Spread in the pan, tap out big bubbles, bake 15–17 min.",
      detail: "Pour the batter into the lined pan, level it with a spatula, and tap the tray on the counter to release large air bubbles. Bake at 350ºF (176ºC) for 15–17 minutes, until a toothpick comes out clean.",
      uses: [], mins: 16 },
    { comp: "bake", text: "Flip onto a damp towel, peel the parchment, roll from the short side.",
      detail: "Straight out of the oven, flip the cake onto a slightly damp kitchen towel larger than the cake. Peel off the parchment and roll it up tightly in the towel, starting from the short side — slowly and gently.",
      tip: "Roll while it's hot. That's when it's at peak flexibility, and it's why the cake doesn't crack later. Use a towel, not parchment — parchment wrinkles the surface. Don't squeeze.",
      uses: [], mins: 4 },
    { comp: "bake", text: "Leave rolled in the towel until completely cool.",
      detail: "Let the cake cool completely while still rolled in the towel.",
      tip: "Completely cool means completely — any warmth turns the cream to a puddle.",
      uses: [], mins: 45, passive: true },

    { comp: "cream", text: "Whip cream, powdered sugar and vanilla to medium-stiff peaks.",
      detail: "Whip the heavy cream, powdered sugar, and vanilla extract with an electric or stand mixer until medium to stiff peaks form.",
      tip: "Chill the bowl 10–15 minutes first — cold cream in a cold bowl whips fastest.",
      uses: ["cream","psugar","vanilla2"], mins: 5 },

    { comp: "assemble", text: "Unroll, trim edges, spread cream leaving a ½ in / 1 cm border.",
      detail: "Gently unroll the cooled cake and trim the edges. Spread the whipped cream evenly, leaving about a ½-inch border around the edges.",
      tip: "The cream spreads as you roll — thick in the centre, bare at the edges.",
      uses: [], mins: 5 },
    { comp: "assemble", text: "Roll back up without the towel, wrap tightly, chill 1 hr.",
      detail: "Roll the cake back up without the towel, wrap it tightly in plastic, and chill in the refrigerator for 1 hour. Garnish, slice, and serve.",
      tip: "The chill sets the shape so it doesn't unroll. Slice with a serrated knife, cleaning it between cuts.",
      uses: [], mins: 60, passive: true }
  ],
  notes: [
    "The card's 1 hr 10 min counts a 30-minute chill, but the method asks for a full cool in the towel plus an hour in the fridge — nearer 2½ hours.",
    "Cracking has two usual causes: over-baking, or rolling too tightly/too late. Roll it hot.",
    "Parchment sticking means the cake is under-baked — the surface should be dry and bouncy.",
    "Thin runny batter means the whites were under-beaten or the batter over-folded.",
    "Fridge up to 3 days, or wrap and freeze up to 3 months."
  ]
},

/* ============================== 15. PETITE VANILLA BEAN SCONES ============================== */
{
  id: "vanillabeanscones-pioneerwoman",
  title: "Petite Vanilla Bean Scones",
  source: { site: "The Pioneer Woman", url: "https://www.thepioneerwoman.com/food-cooking/recipes/a11295/petite-vanilla-bean-scones/", author: "Ree Drummond" },
  cuisine: "American", tags: ["dessert", "baking", "scones", "vanilla", "glazed", "afternoon tea"],
  servings: { base: 12, unit: "servings", min: 6, max: 24 },
  time: { active: 40, passive: 120, cook: 28 },
  claimed: 40,
  components: [
    { id: "scone",  label: "Scone dough" },
    { id: "bake",   label: "Cut & bake" },
    { id: "glaze",  label: "Vanilla glaze" },
    { id: "finish", label: "Dip & set" }
  ],
  ingredients: [
    { key: "flour",  comp: "scone", name: "All-purpose flour", us: { qty: 3, unit: "cups" },   metric: { qty: 360, unit: "g" } },
    { key: "sugar",  comp: "scone", name: "Sugar",             us: { qty: 0.67, unit: "cup" }, metric: { qty: 135, unit: "g" } },
    { key: "bpowder",comp: "scone", name: "Baking powder",     us: { qty: 5, unit: "tsp" },    metric: { qty: 20, unit: "g" } },
    { key: "salt",   comp: "scone", name: "Salt",              us: { qty: 0.25, unit: "tsp" }, metric: { qty: 1.5, unit: "g" } },
    { key: "butter", comp: "scone", name: "Unsalted butter",   us: { qty: 0.5, unit: "lb" },   metric: { qty: 225, unit: "g" }, note: "2 sticks, chilled — cold is what makes it flaky" },
    { key: "egg",    comp: "scone", name: "Large egg",         us: { qty: 1, unit: "" },       metric: { qty: 1, unit: "" } },
    { key: "cream",  comp: "scone", name: "Heavy cream",       us: { qty: 0.75, unit: "cup" }, metric: { qty: 180, unit: "ml" }, note: "plus more if needed" },
    { key: "vbeans", comp: "scone", name: "Vanilla beans",     us: { qty: 2, unit: "" },       metric: { qty: 2, unit: "" }, note: "whole; the seeds are the point of the recipe" },

    { key: "psugar", comp: "glaze", name: "Powdered sugar",    us: { qty: 5, unit: "cups" },   metric: { qty: 600, unit: "g" }, note: "sifted" },
    { key: "milk",   comp: "glaze", name: "Whole milk",        us: { qty: 0.5, unit: "cup" },  metric: { qty: 120, unit: "ml" }, note: "more as needed to thin" },
    { key: "vbean2", comp: "glaze", name: "Vanilla bean",      us: { qty: 1, unit: "" },       metric: { qty: 1, unit: "" } },
    { key: "gsalt",  comp: "glaze", name: "Salt",              scalable: false, us: { qty: 0, unit: "a dash" }, metric: { qty: 0, unit: "a dash" } }
  ],
  steps: [
    { comp: "scone", text: "Split 2 vanilla beans, scrape the seeds into the cream.",
      detail: "Split the vanilla beans down the middle lengthwise and scrape out all the vanilla \"caviar\" inside. Stir the seeds into the cream.",
      uses: ["vbeans","cream"], mins: 5 },
    { comp: "scone", text: "Let the vanilla cream stand 15 min.",
      detail: "Set the vanilla cream aside for 15 minutes to infuse.",
      uses: [], mins: 15, passive: true },
    { comp: "scone", text: "Heat oven to 350°F / 175°C.",
      detail: "Preheat the oven to 350ºF (175ºC).",
      uses: [], mins: 10 },
    { comp: "scone", text: "Sift flour, sugar, baking powder and salt together.",
      detail: "Sift together the flour, ⅔ cup sugar, baking powder, and salt.",
      uses: ["flour","sugar","bpowder","salt"], mins: 4 },
    { comp: "scone", text: "Cut chilled butter into the flour until it looks like crumbs.",
      detail: "Cut the cold butter into pats, then use a pastry cutter or two knives to cut it into the flour, until the mixture resembles crumbs.",
      tip: "The butter must stay cold — that's what gives scones their layers.",
      uses: ["butter"], mins: 8 },
    { comp: "scone", text: "Whisk egg into the vanilla cream; stir into the flour with a fork just until it comes together.",
      detail: "Mix the vanilla cream with the egg, then combine with the flour mixture, stirring gently with a fork just until it comes together.",
      uses: ["egg"], mins: 4 },
    { comp: "scone", text: "Press into a rectangle and roll ½–¾ in / 1.5–2 cm thick.",
      detail: "Turn the dough onto a floured surface and lightly press it into a rough rectangle. Roll it out to about ½ to ¾ inch thick, shaping with your hands as needed.",
      tip: "The dough will be pretty crumbly. That's expected — don't add liquid to fix it.",
      uses: [], mins: 6 },

    { comp: "bake", text: "Trim square, cut 12 rectangles, then halve each diagonally into triangles.",
      detail: "Trim into a symmetrical rectangle, cut into 12 symmetrical squares, then cut each in half diagonally to form two triangles.",
      uses: [], mins: 6 },
    { comp: "bake", text: "Bake 18 min, pulling them just before they colour.",
      detail: "Transfer to a parchment or baking-mat-lined cookie sheet and bake for 18 minutes, removing them from the oven just before they start to turn golden.",
      uses: [], mins: 18 },
    { comp: "bake", text: "Cool 15 min on the sheet, then completely on a rack.",
      detail: "Allow to cool for 15 minutes on the cookie sheet, then transfer to a cooling rack to cool completely.",
      tip: "They must be fully cool before glazing or the glaze slides straight off.",
      uses: [], mins: 35, passive: true },

    { comp: "glaze", text: "Scrape 1 vanilla bean into the milk; let it sit.",
      detail: "Split one vanilla bean lengthwise, scrape out the caviar, stir it into the milk, and let it sit for a while to infuse.",
      uses: ["vbean2","milk"], mins: 10, passive: true },
    { comp: "glaze", text: "Whisk powdered sugar and a dash of salt into the vanilla milk until smooth.",
      detail: "Mix the sifted powdered sugar with the vanilla milk and a dash of salt, adding more sugar or milk to reach the right thickness. Whisk until completely smooth.",
      uses: ["psugar","gsalt"], mins: 5 },

    { comp: "finish", text: "Dunk each cooled scone, turning to coat; set on parchment or a rack.",
      detail: "One at a time, carefully dunk each cooled scone in the glaze, turning it over if necessary, then transfer to parchment paper or the cooling rack.",
      uses: [], mins: 8 },
    { comp: "finish", text: "Let the glaze set completely, about 1 hr.",
      detail: "Allow the glaze to set completely, about an hour, before serving or storing.",
      uses: [], mins: 60, passive: true }
  ],
  notes: [
    "The 40-minute total covers mixing and baking only. The glaze alone takes an hour to set, and the scones must cool completely before dipping — closer to 3 hours end to end.",
    "Cutting 12 rectangles then halving each diagonally gives 24 petite triangles, despite the 12-serving yield.",
    "Crumbly dough is correct at the pressing stage — resist adding liquid.",
    "Glazed scones keep several days, which unglazed ones won't."
  ]
},

/* ============================== 16. GRAPE CHEONG ============================== */
{
  id: "grapecheong-personal",
  title: "Green Grape Cheong (포도청)",
  source: { site: "Your own notes", url: "", author: "" },
  cuisine: "Korean", tags: ["preserve", "syrup", "no-cook", "fruit", "make-ahead", "cheong"],
  servings: { base: 1, unit: "jar", min: 1, max: 4 },
  time: { active: 40, passive: 1450, cook: 0 },
  components: [
    { id: "clean",  label: "Clean & dry" },
    { id: "lemon",  label: "Lemons" },
    { id: "grapes", label: "Grapes" },
    { id: "jar",    label: "Combine & cure" }
  ],
  ingredients: [
    { key: "grapes", comp: "grapes", name: "Green grapes", us: { qty: 19.5, unit: "oz" }, metric: { qty: 550, unit: "g" }, note: "equal weight with the sugar — 1:1 is the cheong ratio" },
    { key: "sugar",  comp: "jar",    name: "Sugar",        us: { qty: 19.5, unit: "oz" }, metric: { qty: 550, unit: "g" }, note: "matches the fruit weight exactly; this is what preserves it" },
    { key: "lemons", comp: "lemon",  name: "Lemons",       us: { qty: 2, unit: "" },      metric: { qty: 2, unit: "" }, note: "one sliced, one juiced" },
    { key: "bsoda",  comp: "clean",  name: "Baking soda",  scalable: false, us: { qty: 0, unit: "for washing" }, metric: { qty: 0, unit: "for washing" }, note: "cleaning only — none ends up in the jar" }
  ],
  steps: [
    { comp: "clean", text: "Scrub the grapes and lemons with baking soda.",
      detail: "Thoroughly clean the green grapes and lemons with baking soda to strip wax and residue from the skins.",
      tip: "Both the grape skins and the lemon peel go into the jar, so this wash matters more than usual.",
      uses: ["grapes","lemons","bsoda"], mins: 8 },
    { comp: "clean", text: "Rinse well, several times over.",
      detail: "Rinse thoroughly under water, then rinse several times again to make sure no baking soda remains.",
      uses: [], mins: 5 },
    { comp: "clean", text: "Dry completely — no residual moisture.",
      detail: "Remove all excess moisture from the fruit before it goes anywhere near the sugar.",
      tip: "Stray water is what spoils a cheong. Dry them properly.",
      uses: [], mins: 10, passive: true },

    { comp: "lemon", text: "Slice one lemon thinly; pick out the seeds.",
      detail: "Slice one lemon into thin rounds and remove any seeds.",
      uses: [], mins: 4 },
    { comp: "lemon", text: "Juice the second lemon; strain out seeds.",
      detail: "Juice the other lemon and remove the seeds from the juice.",
      uses: [], mins: 2 },

    { comp: "grapes", text: "Halve the grapes: slice one half, mince or blend the other.",
      detail: "Take half the grapes, cut the tips off and slice them. Cut the tips off the remaining grapes and mince or blend them.",
      tip: "The two textures do different jobs — the blended half breaks down into syrup, the sliced half stays as fruit in the jar.",
      uses: [], mins: 15 },

    { comp: "jar", text: "Combine everything with the sugar and mix well.",
      detail: "Add the sugar, sliced lemon, lemon juice, sliced grapes, and blended grapes to a bowl and mix until thoroughly combined.",
      uses: ["sugar"], mins: 5 },
    { comp: "jar", text: "Pack into a sterilised jar.",
      detail: "Once well combined, transfer everything into a sterilised jar.",
      tip: "Sterilise properly — this sits at room temperature for a day or more before it's stable.",
      uses: [], mins: 6 },
    { comp: "jar", text: "Leave at room temperature until the sugar fully dissolves.",
      detail: "Store at room temperature until the sugar has completely dissolved, turning or stirring occasionally so the sugar doesn't settle at the bottom.",
      tip: "Usually about a day, but it can run to two or three in a cool kitchen. Go by the sugar, not the clock — no undissolved grains at the bottom.",
      uses: [], mins: 1440, passive: true },
    { comp: "jar", text: "Move to the refrigerator once dissolved.",
      detail: "When the sugar has fully dissolved, transfer the jar to the refrigerator.",
      uses: [], mins: 2 }
  ],
  notes: [
    "Cheong is a 1:1 fruit-to-sugar preserve — 550 g of each here. The sugar is the preservative, so don't cut it back.",
    "No source time given; the ~25 hour total is my estimate, dominated by the room-temperature cure.",
    "Dryness and a sterilised jar are the two things that decide whether it keeps.",
    "Use the syrup for drinks (sparkling water or tea) and the fruit alongside — both are the point.",
    "Timing on the cure is judged by the sugar dissolving, not by hours elapsed."
  ]
},

/* ============================== 17. KOREAN MACARONI SALAD ============================== */
{
  id: "macaronisalad-mykoreankitchen",
  title: "Korean Macaroni Salad",
  source: { site: "My Korean Kitchen", url: "https://mykoreankitchen.com/macaroni-salad/", author: "Sue" },
  cuisine: "Korean", tags: ["side", "salad", "pasta", "banchan", "make-ahead", "no-bake"],
  servings: { base: 6, unit: "servings", min: 2, max: 12 },
  time: { active: 16, passive: 32, cook: 15 },
  claimed: 50,
  components: [
    { id: "pasta",    label: "Pasta" },
    { id: "veg",      label: "Vegetables" },
    { id: "dressing", label: "Dressing" },
    { id: "assemble", label: "Combine & chill" }
  ],
  ingredients: [
    { key: "macaroni", comp: "pasta", name: "Elbow macaroni",  us: { qty: 7, unit: "oz" },    metric: { qty: 200, unit: "g" } },

    { key: "cucumber", comp: "veg", name: "Cucumber",          us: { qty: 1.7, unit: "oz" },  metric: { qty: 50, unit: "g" }, note: "seeded, cut into small cubes" },
    { key: "csalt",    comp: "veg", name: "Fine sea salt",     us: { qty: 0.5, unit: "tsp" }, metric: { qty: 3, unit: "g" }, note: "for drawing water out of the cucumber" },
    { key: "corn",     comp: "veg", name: "Corn kernels",      us: { qty: 1.7, unit: "oz" },  metric: { qty: 50, unit: "g" }, note: "tinned, drained" },
    { key: "pepper",   comp: "veg", name: "Red bell pepper",   us: { qty: 1.7, unit: "oz" },  metric: { qty: 50, unit: "g" }, note: "cut into small cubes" },

    { key: "mayo",     comp: "dressing", name: "Mayonnaise",   us: { qty: 0.5, unit: "cup" }, metric: { qty: 125, unit: "ml" }, note: "whole egg; note this site uses 1 cup = 250 ml" },
    { key: "sugar",    comp: "dressing", name: "Sugar",        us: { qty: 1, unit: "Tbsp" },  metric: { qty: 12, unit: "g" } },
    { key: "honey",    comp: "dressing", name: "Honey",        us: { qty: 0.5, unit: "Tbsp" },metric: { qty: 10, unit: "g" } },
    { key: "lemon",    comp: "dressing", name: "Lemon juice",  us: { qty: 0.5, unit: "tsp" }, metric: { qty: 2.5, unit: "ml" } },
    { key: "dsalt",    comp: "dressing", name: "Fine sea salt",us: { qty: 0.5, unit: "tsp" }, metric: { qty: 3, unit: "g" }, note: "adjust to taste" },
    { key: "bpepper",  comp: "dressing", name: "Ground black pepper", scalable: false, us: { qty: 0, unit: "to taste" }, metric: { qty: 0, unit: "to taste" } },
    { key: "dijon",    comp: "dressing", name: "Dijon mustard", optional: true, us: { qty: 1, unit: "tsp" }, metric: { qty: 5, unit: "ml" } }
  ],
  steps: [
    { comp: "pasta", text: "Boil the macaroni per the package, salting the water. Drain, cool 2 min.",
      detail: "Cook the elbow macaroni following the package instructions — if it doesn't say, add fine sea salt to the boiling water. Drain and let it cool for 2 minutes.",
      uses: ["macaroni"], mins: 15 },

    { comp: "veg", text: "Toss the cucumber with ½ tsp salt; leave it to draw while you prep.",
      detail: "Combine the cubed cucumber with ½ tsp fine sea salt in a small bowl, mix well, and set aside while you get everything else ready.",
      tip: "Do this first — it needs the whole prep window to pull the water out.",
      uses: ["cucumber","csalt"], mins: 4 },
    { comp: "veg", text: "Cube the bell pepper; drain the tinned corn.",
      detail: "Cut the red bell pepper into small cubes and drain the tinned corn kernels.",
      uses: ["pepper","corn"], mins: 5 },

    { comp: "dressing", text: "Whisk mayo, sugar, honey, lemon juice, salt, pepper and dijon.",
      detail: "While the pasta cooks, combine the mayonnaise, sugar, honey, lemon juice, fine sea salt, ground black pepper, and optional dijon mustard in a separate bowl.",
      uses: ["mayo","sugar","honey","lemon","dsalt","bpepper","dijon"], mins: 4 },

    { comp: "assemble", text: "Gently squeeze the water out of the cucumber.",
      detail: "When the rest of the ingredients are ready, gently squeeze the water out of the salted cucumber.",
      tip: "This is the step that keeps the salad from going watery in the fridge. Don't skip it.",
      uses: [], mins: 2 },
    { comp: "assemble", text: "Combine everything in a large bowl.",
      detail: "Mix the pasta, vegetables, and dressing in a large bowl until well combined.",
      uses: [], mins: 3 },
    { comp: "assemble", text: "Chill at least 30 min before serving.",
      detail: "Chill in the fridge for at least 30 minutes to let the flavours develop, then serve.",
      uses: [], mins: 30, passive: true }
  ],
  notes: [
    "One of the more honest cards here — it breaks out chilling as its own line rather than hiding it.",
    "Australian measures: this site uses 1 cup = 250 ml and 1 Tbsp = 15 ml, so the ½ cup of mayonnaise is 125 ml, slightly more than a US half-cup.",
    "Salting and squeezing the cucumber is the difference between this keeping well and turning watery overnight.",
    "Served as banchan or a side — it improves after a few hours in the fridge."
  ]
},

/* ============================== 18. FOUR-FLAVOUR SABLÉS ============================== */
{
  id: "sables-fourflavour",
  title: "Four-Flavour Sablés",
  source: { site: "Your own notes", url: "", author: "" },
  cuisine: "Japanese", tags: ["dessert", "cookies", "icebox", "matcha", "make-ahead", "slice-and-bake"],
  servings: { base: 48, unit: "sablés", min: 12, max: 96 },
  time: { active: 35, passive: 195, cook: 30 },
  components: [
    { id: "base",    label: "Base dough" },
    { id: "matcha",  label: "Matcha — one quarter" },
    { id: "choc",    label: "Chocolate — one quarter" },
    { id: "vanilla", label: "Vanilla — one quarter" },
    { id: "tea",     label: "Black tea — one quarter" },
    { id: "finish",  label: "Chill, coat & bake" }
  ],
  ingredients: [
    { key: "butter", comp: "base", name: "Unsalted butter",  us: { qty: 7.4, unit: "oz" },  metric: { qty: 210, unit: "g" }, note: "softened" },
    { key: "salt",   comp: "base", name: "Salt",             scalable: false, us: { qty: 0, unit: "a pinch" }, metric: { qty: 0, unit: "a pinch" } },
    { key: "psugar", comp: "base", name: "Powdered sugar",   us: { qty: 3.5, unit: "oz" },  metric: { qty: 100, unit: "g" } },
    { key: "yolks",  comp: "base", name: "Egg yolks",        us: { qty: 2, unit: "" },      metric: { qty: 2, unit: "" } },
    { key: "flour",  comp: "base", name: "Flour",            us: { qty: 14.1, unit: "oz" }, metric: { qty: 400, unit: "g" } },

    { key: "matcha",  comp: "matcha", name: "Matcha powder",  us: { qty: 0.18, unit: "oz" }, metric: { qty: 5, unit: "g" } },
    { key: "mpsugar", comp: "matcha", name: "Powdered sugar", us: { qty: 0.35, unit: "oz" }, metric: { qty: 10, unit: "g" }, note: "balances the matcha's bitterness" },

    { key: "cocoa",   comp: "choc", name: "Cocoa powder",     us: { qty: 0.28, unit: "oz" }, metric: { qty: 8, unit: "g" } },
    { key: "chips",   comp: "choc", name: "Milk chocolate chips", us: { qty: 0.9, unit: "oz" }, metric: { qty: 25, unit: "g" } },

    { key: "vanilla", comp: "vanilla", name: "Vanilla extract", us: { qty: 1, unit: "tsp" }, metric: { qty: 5, unit: "ml" } },
    { key: "vflour",  comp: "vanilla", name: "Flour",           scalable: false, us: { qty: 0, unit: "as needed" }, metric: { qty: 0, unit: "as needed" }, note: "a little, to offset the liquid vanilla — quantity not given in the original" },

    { key: "tea",     comp: "tea", name: "Black tea leaves",   us: { qty: 0.13, unit: "oz" }, metric: { qty: 3.6, unit: "g" }, note: "2 tea bags, opened" },

    { key: "gsugar",  comp: "finish", name: "Granulated sugar", scalable: false, us: { qty: 0, unit: "for coating" }, metric: { qty: 0, unit: "for coating" } }
  ],
  steps: [
    { comp: "base", text: "Beat salt and powdered sugar into the softened butter with a spatula.",
      detail: "Add the pinch of salt and the powdered sugar to the softened unsalted butter and mix with a rubber spatula.",
      tip: "Softened, not melted — the butter needs to hold air.",
      uses: ["butter","salt","psugar"], mins: 6 },
    { comp: "base", text: "Mix in the egg yolks, then the flour.",
      detail: "Add the egg yolks and mix in, then add the flour.",
      uses: ["yolks","flour"], mins: 5 },
    { comp: "base", text: "Bring together and divide into 4 pieces, about 187 g each.",
      detail: "Bring the dough together and divide it into 4 equal pieces, roughly 187 g each.",
      tip: "Weigh them — even quarters mean all four flavours bake in the same time.",
      uses: [], mins: 5 },

    { comp: "matcha", text: "Work matcha and powdered sugar into one quarter.",
      detail: "Knead the matcha powder and extra powdered sugar into one of the four dough pieces until evenly coloured.",
      uses: ["matcha","mpsugar"], mins: 3 },
    { comp: "choc", text: "Work cocoa and chocolate chips into one quarter.",
      detail: "Knead the cocoa powder and milk chocolate chips into the second dough piece.",
      uses: ["cocoa","chips"], mins: 3 },
    { comp: "vanilla", text: "Work vanilla into one quarter, with a little flour to compensate.",
      detail: "Knead the vanilla extract into the third dough piece, adding a little flour to offset the added liquid.",
      tip: "The original doesn't specify how much flour — add just enough to bring it back to the texture of the other three.",
      uses: ["vanilla","vflour"], mins: 3 },
    { comp: "tea", text: "Work the black tea leaves into the last quarter.",
      detail: "Open the tea bags and knead the black tea leaves into the fourth dough piece.",
      uses: ["tea"], mins: 3 },

    { comp: "finish", text: "Wrap each log and chill at least 3 hr.",
      detail: "Shape each flavoured piece into a log, wrap it, and refrigerate for at least 3 hours until firm.",
      tip: "This is a slice-and-bake dough — it has to be properly firm or the rounds distort when you cut them.",
      uses: [], mins: 180, passive: true },
    { comp: "finish", text: "Roll each log in granulated sugar.",
      detail: "Unwrap and roll each chilled log in granulated sugar to coat the outside.",
      tip: "The sugar coating gives the crisp, sparkling edge that makes these sablés rather than plain shortbread.",
      uses: ["gsugar"], mins: 6 },
    { comp: "finish", text: "Cut each log into 12; bake at 165°C / 330°F for 20 min.",
      detail: "Slice each log into 12 rounds, place them on a lined baking tray, and bake at 165ºC (330ºF) for 20 minutes.",
      tip: "12 per log across four logs is the 48 total. The low temperature keeps them pale — they shouldn't brown.",
      uses: [], mins: 30 },
    { comp: "finish", text: "Cool on the tray before moving them.",
      detail: "Let the sablés cool before transferring — they firm up as they cool.",
      uses: [], mins: 15, passive: true }
  ],
  notes: [
    "One base dough, four flavours — quarter it at about 187 g each and flavour each piece separately.",
    "No source times were given; the ~4½ hour total is my estimate, dominated by the 3-hour chill.",
    "The vanilla quarter is the only vague one: the original lists flour with no quantity. Add enough to match the texture of the other three.",
    "Slice-and-bake logs keep well wrapped in the fridge, or freeze them and slice from frozen.",
    "165ºC is deliberately low — sablés should stay pale, not golden."
  ]
},

/* ============================== 19. SHORTBREAD COOKIES ============================== */
{
  id: "shortbread-preppykitchen",
  title: "Shortbread Cookies",
  source: { site: "Preppy Kitchen", url: "https://preppykitchen.com/shortbread-cookies-recipe/", author: "John Kanell" },
  cuisine: "Scottish", tags: ["dessert", "cookies", "baking", "5-ingredient", "make-ahead", "slice-and-bake"],
  servings: { base: 16, unit: "cookies", min: 8, max: 48 },
  time: { active: 25, passive: 75, cook: 20 },
  claimed: 35,
  components: [
    { id: "dough", label: "Dough" },
    { id: "chill", label: "Shape & chill" },
    { id: "bake",  label: "Slice & bake" }
  ],
  ingredients: [
    { key: "butter",  comp: "dough", name: "Unsalted butter",       us: { qty: 10, unit: "Tbsp" }, metric: { qty: 142, unit: "g" }, note: "room temperature" },
    { key: "psugar",  comp: "dough", name: "Confectioners' sugar",  us: { qty: 0.5, unit: "cup" }, metric: { qty: 60, unit: "g" } },
    { key: "vanilla", comp: "dough", name: "Pure vanilla extract",  us: { qty: 0.5, unit: "tsp" }, metric: { qty: 2.5, unit: "ml" } },
    { key: "flour",   comp: "dough", name: "All-purpose flour",     us: { qty: 1.5, unit: "cups" },metric: { qty: 180, unit: "g" } },
    { key: "salt",    comp: "dough", name: "Kosher salt",           optional: true, us: { qty: 0.5, unit: "tsp" }, metric: { qty: 3, unit: "g" }, note: "omit entirely if using salted butter" }
  ],
  steps: [
    { comp: "dough", text: "Cream the butter with the vanilla.",
      detail: "In a stand mixer fitted with the paddle attachment, beat the room-temperature butter and vanilla extract until creamed.",
      tip: "Butter not soft enough? Slice the sticks and microwave at 50% power in 5-second bursts, flipping between each.",
      uses: ["butter","vanilla"], mins: 4 },
    { comp: "dough", text: "Add confectioners' sugar and salt; mix to combine.",
      detail: "Add the confectioners' sugar and salt and mix until combined.",
      uses: ["psugar","salt"], mins: 3 },
    { comp: "dough", text: "Scrape down, add flour on low, scrape and mix until combined.",
      detail: "Scrape the bowl down and add the flour while beating on low. Scrape once more and mix until combined.",
      tip: "The dough gets stiff. With a hand mixer, finish by folding with a spatula or kneading gently by hand rather than straining the motor.",
      uses: ["flour"], mins: 3 },

    { comp: "chill", text: "Shape into a rectangular brick and wrap.",
      detail: "Turn the dough onto a floured surface and shape it into a rectangular prism, then wrap in plastic.",
      uses: [], mins: 4 },
    { comp: "chill", text: "Chill until firm, at least 1 hr.",
      detail: "Refrigerate until firm — at least an hour.",
      tip: "This dough is crumbly; chilling is what lets it slice cleanly instead of falling apart.",
      uses: [], mins: 60, passive: true },

    { comp: "bake", text: "Heat oven to 350°F / 177°C.",
      detail: "Preheat the oven to 350ºF (177ºC).",
      uses: [], mins: 10 },
    { comp: "bake", text: "Slice ½ in / 1 cm thick; space 1 in / 2.5 cm apart on a lined sheet.",
      detail: "Use a sharp knife to cut ½-inch thick slices and place them at least an inch apart on a baking sheet lined with a silicone mat or parchment.",
      uses: [], mins: 6 },
    { comp: "bake", text: "Prick a pattern on top with a fork or skewer.",
      detail: "Use a fork or skewer to indent a pattern onto the top of each slice.",
      uses: [], mins: 5 },
    { comp: "bake", text: "Bake ~10 min, rotating the sheet halfway.",
      detail: "Bake for about 10 minutes, rotating the baking sheet halfway through.",
      tip: "Done is when they're JUST starting to colour on the bottom, not the top. Want them crunchier? A few minutes more, until the edges go golden.",
      uses: [], mins: 10 },
    { comp: "bake", text: "Cool on a wire rack.",
      detail: "Transfer to a wire rack to cool.",
      uses: [], mins: 15, passive: true }
  ],
  notes: [
    "The card's 35 minutes leaves out the 1-hour chill listed in its own instructions — figure on about 2 hours.",
    "The card also says 20 minutes cook time while the method says bake about 10. The 10 is what the instructions actually direct.",
    "Five ingredients, and one of them is optional.",
    "Salted butter works fine — just omit the added salt. Unsalted is specified only because salt levels vary by brand.",
    "Dough keeps a week in the fridge and a month in the freezer; let it warm just enough to slice.",
    "Doneness is judged on the bottom, not the top — they should stay pale on top."
  ]
},

/* ============================== 20. YUZU CHEESECAKE ============================== */
{
  id: "yuzucheesecake-japanesetaste",
  title: "Yuzu Cheesecake",
  source: { site: "Japanese Taste", url: "https://japanesetaste.com/blogs/japanese-taste-recipes/how-to-make-yuzu-cheesecake-baked-japanese-cheesecake-recipe", author: "Megumi Moriya" },
  cuisine: "Japanese", tags: ["dessert", "cheesecake", "baking", "yuzu", "water bath", "make-ahead"],
  servings: { base: 6, unit: "servings", min: 4, max: 12 },
  time: { active: 42, passive: 580, cook: 70 },
  claimed: 75,
  components: [
    { id: "crust",  label: "Crust" },
    { id: "batter", label: "Batter" },
    { id: "bake",   label: "Bake in a water bath" },
    { id: "chill",  label: "Chill & serve" }
  ],
  ingredients: [
    { key: "biscuits", comp: "crust", name: "Biscuits or graham crackers", us: { qty: 3.5, unit: "oz" }, metric: { qty: 100, unit: "g" } },
    { key: "butter",   comp: "crust", name: "Butter",         us: { qty: 1.4, unit: "oz" },  metric: { qty: 40, unit: "g" }, note: "melted" },

    { key: "cheese",   comp: "batter", name: "Cream cheese",  us: { qty: 7, unit: "oz" },    metric: { qty: 200, unit: "g" }, note: "room temperature" },
    { key: "yogurt",   comp: "batter", name: "Yogurt",        us: { qty: 3.5, unit: "oz" },  metric: { qty: 100, unit: "g" } },
    { key: "cream",    comp: "batter", name: "Heavy cream",   us: { qty: 3.5, unit: "oz" },  metric: { qty: 100, unit: "g" } },
    { key: "eggs",     comp: "batter", name: "Eggs",          us: { qty: 2, unit: "" },      metric: { qty: 2, unit: "" }, note: "room temperature" },
    { key: "sugar",    comp: "batter", name: "Sugar",         us: { qty: 2.8, unit: "oz" },  metric: { qty: 80, unit: "g" } },
    { key: "flour",    comp: "batter", name: "All-purpose flour", us: { qty: 2, unit: "Tbsp" }, metric: { qty: 16, unit: "g" } },
    { key: "yuzu",     comp: "batter", name: "Yuzu juice",    us: { qty: 2, unit: "Tbsp" },  metric: { qty: 30, unit: "ml" }, note: "fresh or 100% bottled — fresh yuzu is hard to find outside Japan" }
  ],
  steps: [
    { comp: "crust", text: "Line a 15 cm / 6 in pan; foil the base if it's springform.",
      detail: "Bring the eggs and cream cheese to room temperature. Line a round cake pan with parchment. If using a springform pan, wrap the bottom in aluminium foil so water can't leak in.",
      tip: "The foil matters — this bakes in a water bath and a springform seam will let water through.",
      uses: [], mins: 10 },
    { comp: "crust", text: "Crush the biscuits, mix with melted butter, press into the pan.",
      detail: "Melt the butter in the microwave. Double-bag the biscuits and crush them fine, then transfer to a bowl, pour over the melted butter, and mix to a wet-sand texture. Press firmly into the pan with a flat-bottomed cup.",
      uses: ["biscuits","butter"], mins: 12 },
    { comp: "crust", text: "Refrigerate the crust to set.",
      detail: "Refrigerate the base while you make the batter.",
      uses: [], mins: 20, passive: true },

    { comp: "batter", text: "Heat oven to 340°F / 170°C with a deep tray inside.",
      detail: "Preheat the oven to 170ºC (340ºF) and put a deep baking tray in to heat up.",
      uses: [], mins: 15 },
    { comp: "batter", text: "Beat cream cheese, then add sugar, eggs, yogurt, flour, cream and yuzu one at a time.",
      detail: "In a large bowl, beat the cream cheese smooth, then mix in the sugar, eggs, yogurt, flour, heavy cream, and yuzu juice — adding each one at a time and mixing well between additions.",
      uses: ["cheese","sugar","eggs","yogurt","flour","cream","yuzu"], mins: 10 },
    { comp: "batter", text: "Pass the batter through a sieve, then pour over the chilled crust.",
      detail: "Pour the batter through a fine-mesh strainer into a bowl, then transfer it over the chilled crust.",
      tip: "Straining is what gives the smooth texture — don't skip it.",
      uses: [], mins: 5 },

    { comp: "bake", text: "Add 2 cm of 140°F / 60°C water to the hot tray; drop oven to 320°F / 160°C.",
      detail: "Once the oven is at 170ºC, pour roughly 60ºC (140ºF) hot water into the heated tray to a depth of about 2 cm. Lower the oven to 160ºC (320ºF) and carefully lower the cake pan into the water.",
      tip: "Keep water in the tray the whole time — top it up with more hot water if it runs low.",
      uses: [], mins: 5 },
    { comp: "bake", text: "Bake 40 min at 320°F / 160°C, then foil the top and bake 15 min at 285°F / 140°C.",
      detail: "Bake for 40 minutes at 160ºC (320ºF). Open the oven, cover the top with aluminium foil to stop it browning, then bake another 15 minutes at 140ºC (285ºF).",
      uses: [], mins: 55 },
    { comp: "bake", text: "Turn the oven off and leave the cake inside 20 min.",
      detail: "Turn off the oven and let the cheesecake sit inside for 20 minutes before removing it.",
      tip: "The gradual cool-down is what stops the surface cracking.",
      uses: [], mins: 20, passive: true },
    { comp: "bake", text: "Cool to room temperature, still in the pan.",
      detail: "Take the cheesecake out and let it cool to room temperature with the cake pan still on.",
      uses: [], mins: 60, passive: true },

    { comp: "chill", text: "Refrigerate overnight — do not unmould yet.",
      detail: "Once at room temperature, refrigerate overnight. Do not remove it from the cake pan.",
      tip: "This is the step the recipe's stated time ignores entirely. It's an overnight dessert.",
      uses: [], mins: 480, passive: true },
    { comp: "chill", text: "Unmould and slice with a knife warmed in hot water.",
      detail: "Remove the cheesecake from the pan and cut as desired — warm the knife in hot water first for cleaner slices.",
      uses: [], mins: 5 }
  ],
  notes: [
    "The stated 1 hr 15 min covers prep and baking only. The overnight chill is in the method but not the total — this is a make-it-the-day-before cake.",
    "Baked in a water bath at 15 cm / 6 in. Foil the base of a springform pan or water gets in.",
    "Three cooling stages, all deliberate: 20 min in the switched-off oven, then to room temperature, then overnight. Rushing them cracks the top.",
    "Fresh yuzu is scarce outside Japan; 100% bottled yuzu juice is what the recipe actually uses.",
    "Straining the batter is what produces the smooth, creamy texture."
  ]
},

/* ============================== 21. CHEWY CHOCOLATE CHIP COOKIES ============================== */
{
  id: "chocchipcookies-asassyspoon",
  title: "Chewy Chocolate Chip Cookies",
  source: { site: "A Sassy Spoon", url: "https://asassyspoon.com/chocolate-chip-cookies/", author: "Jamie Silva" },
  cuisine: "American", tags: ["dessert", "cookies", "baking", "one bowl", "make-ahead", "freezer-friendly"],
  servings: { base: 20, unit: "cookies", min: 10, max: 60 },
  time: { active: 22, passive: 25, cook: 21 },
  claimed: 40,
  components: [
    { id: "dough", label: "Dough — one bowl" },
    { id: "chill", label: "Scoop & chill" },
    { id: "bake",  label: "Bake" }
  ],
  ingredients: [
    { key: "butter",  comp: "dough", name: "Unsalted butter",     us: { qty: 0.5, unit: "cup" },  metric: { qty: 113, unit: "g" }, note: "melted, then cooled 5 minutes" },
    { key: "bsugar",  comp: "dough", name: "Brown sugar",         us: { qty: 0.75, unit: "cup" }, metric: { qty: 165, unit: "g" }, note: "packed" },
    { key: "sugar",   comp: "dough", name: "Granulated sugar",    us: { qty: 0.5, unit: "cup" },  metric: { qty: 100, unit: "g" } },
    { key: "egg",     comp: "dough", name: "Large egg",           us: { qty: 1, unit: "" },       metric: { qty: 1, unit: "" } },
    { key: "vanilla", comp: "dough", name: "Vanilla extract",     us: { qty: 1, unit: "tsp" },    metric: { qty: 5, unit: "ml" } },
    { key: "flour",   comp: "dough", name: "All-purpose flour",   us: { qty: 1.33, unit: "cups" },metric: { qty: 160, unit: "g" } },
    { key: "bsoda",   comp: "dough", name: "Baking soda",         us: { qty: 0.5, unit: "tsp" },  metric: { qty: 3, unit: "g" }, note: "soda, NOT baking powder — different result entirely" },
    { key: "salt",    comp: "dough", name: "Salt",                scalable: false, us: { qty: 0, unit: "a pinch" }, metric: { qty: 0, unit: "a pinch" } },
    { key: "choc",    comp: "dough", name: "Chopped dark chocolate", us: { qty: 1, unit: "cup" }, metric: { qty: 170, unit: "g" }, note: "or any chocolate you like" },
    { key: "flaky",   comp: "bake", name: "Flaky sea salt",       optional: true, scalable: false, us: { qty: 0, unit: "to garnish" }, metric: { qty: 0, unit: "to garnish" } }
  ],
  steps: [
    { comp: "dough", text: "Mix the cooled melted butter with both sugars.",
      detail: "In a large bowl, mix the melted butter — cooled 5 minutes — with the brown sugar and granulated sugar until combined.",
      uses: ["butter","bsugar","sugar"], mins: 5 },
    { comp: "dough", text: "Beat in the egg and vanilla until smooth.",
      detail: "Add the egg and vanilla extract and mix until smooth and well combined.",
      uses: ["egg","vanilla"], mins: 3 },
    { comp: "dough", text: "Add flour, baking soda and salt; mix by hand just until combined. Fold in chocolate.",
      detail: "To the same bowl, add the flour, baking soda, and salt. Mix by hand until just combined, then fold in the chopped chocolate.",
      tip: "Do NOT overmix. Overmixing aerates the dough and gives you flat, pancake-like cookies — the author's own warning, learned the hard way.",
      uses: ["flour","bsoda","salt","choc"], mins: 5 },

    { comp: "chill", text: "Scoop into balls, about 1½ Tbsp each.",
      detail: "Using a cookie scoop, form the dough into balls of roughly 1.5 tablespoons each.",
      uses: [], mins: 6 },
    { comp: "chill", text: "Chill at least 20 min — longer is better.",
      detail: "Place the dough balls in the fridge for at least 20 minutes. The longer they chill, the better the flavour and the less they spread.",
      tip: "To freeze instead: chill the balls on a lined sheet for 1 hour until firm, then bag them. They keep 3 months and bake from frozen with 1 extra minute.",
      uses: [], mins: 20, passive: true },

    { comp: "bake", text: "Heat oven to 350°F / 175°C; line a sheet.",
      detail: "When ready to bake, preheat the oven to 350ºF (175ºC) and line a baking sheet with parchment paper.",
      tip: "The oven temperature appears only in this step of the original, which trips people up — it's 350ºF.",
      uses: [], mins: 10 },
    { comp: "bake", text: "Bake 10–11 min until the edges are golden.",
      detail: "Place the chilled dough balls on the lined sheet and bake for 10–11 minutes, until the edges are golden brown.",
      tip: "Slightly underbaked is the goal — no more than 11 minutes. They keep cooking as they cool, and this is what keeps them soft all week.",
      uses: [], mins: 11 },
    { comp: "bake", text: "Sprinkle with flaky salt; cool 5 min on the sheet.",
      detail: "Out of the oven, sprinkle with flaky sea salt if using, then cool for 5 minutes on the baking sheet before serving.",
      uses: ["flaky"], mins: 5, passive: true }
  ],
  notes: [
    "40 minutes claimed; nearer 70 once you count preheating and cooling alongside the 20-minute chill.",
    "One bowl, no mixer required — the dough is mixed by hand from the flour onward.",
    "Two failure modes the author calls out: overmixing (flat cookies) and using baking powder instead of soda.",
    "Freezer-friendly by design: freeze the scooped balls up to 3 months and bake straight from frozen, adding a minute.",
    "Keeps a week in an airtight container; 10 seconds in the microwave re-melts the chocolate."
  ]
},

/* ============================== 22. BANANA BREAD ============================== */
{
  id: "bananabread-sallysbaking",
  title: "Banana Bread",
  source: { site: "Sally's Baking Addiction", url: "https://sallysbakingaddiction.com/best-banana-bread-recipe/", author: "Sally McKenney" },
  cuisine: "American", tags: ["quick bread", "baking", "banana", "breakfast", "freezer-friendly"],
  servings: { base: 1, unit: "loaf", min: 1, max: 3 },
  time: { active: 21, passive: 105, cook: 75 },
  claimed: 180,
  components: [
    { id: "dry",  label: "Dry ingredients" },
    { id: "wet",  label: "Wet ingredients" },
    { id: "bake", label: "Bake & cool" }
  ],
  ingredients: [
    { key: "flour",   comp: "dry", name: "All-purpose flour", us: { qty: 2, unit: "cups" },   metric: { qty: 250, unit: "g" }, note: "spooned and levelled, not scooped" },
    { key: "bsoda",   comp: "dry", name: "Baking soda",       us: { qty: 1, unit: "tsp" },    metric: { qty: 5, unit: "g" } },
    { key: "salt",    comp: "dry", name: "Salt",              us: { qty: 0.25, unit: "tsp" }, metric: { qty: 1.5, unit: "g" } },
    { key: "cinnamon",comp: "dry", name: "Ground cinnamon",   us: { qty: 0.5, unit: "tsp" },  metric: { qty: 1.5, unit: "g" } },

    { key: "butter",  comp: "wet", name: "Unsalted butter",   us: { qty: 0.5, unit: "cup" },  metric: { qty: 113, unit: "g" }, note: "softened; salted works with no other change, and 6 Tbsp also works" },
    { key: "bsugar",  comp: "wet", name: "Brown sugar",       us: { qty: 0.75, unit: "cup" }, metric: { qty: 150, unit: "g" }, note: "packed; increase to 1 cup for a sweeter loaf" },
    { key: "eggs",    comp: "wet", name: "Large eggs",        us: { qty: 2, unit: "" },       metric: { qty: 2, unit: "" }, note: "room temperature" },
    { key: "bananas", comp: "wet", name: "Mashed bananas",    us: { qty: 1.5, unit: "cups" }, metric: { qty: 345, unit: "g" }, note: "about 3–4 ripe; leave some chunks — do not over-mash" },
    { key: "yogurt",  comp: "wet", name: "Plain Greek yogurt",us: { qty: 0.33, unit: "cup" }, metric: { qty: 80, unit: "g" }, note: "or full-fat sour cream, room temperature" },
    { key: "vanilla", comp: "wet", name: "Pure vanilla extract", us: { qty: 1, unit: "tsp" }, metric: { qty: 5, unit: "ml" } },

    { key: "nuts",    comp: "bake", name: "Chopped pecans or walnuts", optional: true, us: { qty: 0.75, unit: "cup" }, metric: { qty: 90, unit: "g" } },
    { key: "chips",   comp: "bake", name: "Semi-sweet chocolate chips", optional: true, us: { qty: 1, unit: "cup" }, metric: { qty: 180, unit: "g" }, note: "instead of the nuts, not as well as" }
  ],
  steps: [
    { comp: "dry", text: "Rack to the lower third; heat oven to 350°F / 177°C. Grease a 9×5 in loaf pan.",
      detail: "Adjust the oven rack to the lower third position and preheat to 350ºF (177ºC). Grease a 9×5-inch loaf pan with nonstick spray.",
      tip: "The low rack is deliberate — it stops the top browning too much before the middle is done.",
      uses: [], mins: 12 },
    { comp: "dry", text: "Whisk flour, baking soda, salt and cinnamon.",
      detail: "In a medium bowl, whisk the flour, baking soda, salt, and cinnamon together and set aside.",
      uses: ["flour","bsoda","salt","cinnamon"], mins: 3 },

    { comp: "wet", text: "Mash the bananas — the mixer does this well.",
      detail: "Break the spotty bananas into large pieces and beat on low, increasing to medium-high, until mashed. Transfer to another bowl and reuse the mixer bowl for the butter — no need to clean it.",
      tip: "Leave some chunks. Over-mashing turns them to liquid, which is the wrong texture going in.",
      uses: ["bananas"], mins: 5 },
    { comp: "wet", text: "Cream butter and brown sugar 3 min until light.",
      detail: "In a large bowl with a hand or stand mixer fitted with the paddle, beat the butter and brown sugar on medium-high until light and creamy, about 3 minutes.",
      uses: ["butter","bsugar"], mins: 3 },
    { comp: "wet", text: "Add eggs one at a time, beating well between.",
      detail: "With the mixer on medium, add the eggs one at a time, beating well after each and scraping the bowl as needed.",
      uses: ["eggs"], mins: 3 },
    { comp: "wet", text: "Beat in bananas, yogurt and vanilla.",
      detail: "Beat in the mashed bananas, yogurt or sour cream, and vanilla until combined.",
      uses: ["yogurt","vanilla"], mins: 3 },
    { comp: "wet", text: "Add the dry to the wet on low, just until combined. Fold in add-ins.",
      detail: "Add the dry ingredients to the wet and beat on low speed just until combined — do not over-mix. Fold in the nuts or chocolate chips if using. The batter should be thick.",
      uses: ["nuts","chips"], mins: 4 },

    { comp: "bake", text: "Spread into the pan; bake 60–65 min, foiling loosely halfway.",
      detail: "Pour and spread the batter into the prepared pan. Bake for 60–65 minutes, loosely covering with aluminium foil halfway through to stop the top over-browning. It's done when a toothpick comes out with only a few small moist crumbs.",
      uses: [], mins: 63 },
    { comp: "bake", text: "Cool 1 hr in the pan on a rack.",
      detail: "Cool the bread in the pan set on a cooling rack for 1 hour.",
      uses: [], mins: 60, passive: true },
    { comp: "bake", text: "Turn out and cool completely before slicing.",
      detail: "Remove the bread from the pan and place it directly on the rack to cool completely before slicing and serving.",
      uses: [], mins: 45, passive: true }
  ],
  notes: [
    "One of the honest ones — the card says 3 hours total and means it, counting the cooling rather than stopping at the oven.",
    "Updated in 2025: the mashed banana was cut from 2 cups to 1½ after readers reported loaves too wet and dense to bake through. If you have an older copy of this recipe, this is the change.",
    "Two anti-browning measures: bake on the lower third rack, and tent with foil halfway.",
    "No yogurt or sour cream? Use an extra ⅓ cup mashed banana, unsweetened applesauce, or canned pumpkin purée.",
    "Frozen bananas work — thaw, drain the excess liquid, then mash lightly.",
    "Tastes best on day two. Room temperature 3 days, fridge a week, or freeze 3–4 months (slices thaw much faster than a whole loaf)."
  ]
}
,
{
  id: "bagels-sallysbaking",
  title: "Homemade Bagels",
  source: { site: "Sally's Baking Addiction", url: "https://sallysbakingaddiction.com/homemade-bagels/", author: "Sally McKenney" },
  cuisine: "American", tags: ["bread", "yeast", "breakfast", "lean dough"],
  servings: { base: 8, unit: "bagels", min: 4, max: 8 },
  time: { active: 25, passive: 140, cook: 32 },
  claimed: 180,
  components: [
    { id: "dough",  label: "Dough" },
    { id: "shape",  label: "Shaping & rest" },
    { id: "bath",   label: "Water bath" },
    { id: "finish", label: "Egg wash & bake" }
  ],
  ingredients: [
    { key: "water",   comp: "dough", name: "Warm water",        us: { qty: 1.5, unit: "cups" },  metric: { qty: 360, unit: "ml" }, note: "100–110°F / 38–43°C" },
    { key: "yeast",   comp: "dough", name: "Instant or active dry yeast", us: { qty: 2.75, unit: "tsp" }, metric: { qty: 8, unit: "g" }, note: "a little over one standard packet" },
    { key: "malt",    comp: "dough", name: "Barley malt syrup, granulated sugar or brown sugar", us: { qty: 1, unit: "Tbsp" }, metric: { qty: 15, unit: "ml" }, note: "≈21 g as syrup, ≈12 g as sugar — malt is the traditional flavour" },
    { key: "flour",   comp: "dough", name: "Bread flour",       us: { qty: 4, unit: "cups" },    metric: { qty: 520, unit: "g" }, note: "spooned and levelled, plus more as needed — not all-purpose" },
    { key: "salt",    comp: "dough", name: "Salt",              us: { qty: 2, unit: "tsp" },     metric: { qty: 12, unit: "g" }, note: "fine salt; about 14 g if using kosher" },
    { key: "oil",     comp: "dough", name: "Oil, butter or nonstick spray", scalable: false, us: { qty: 0, unit: "" }, metric: { qty: 0, unit: "" }, note: "for coating the rising bowl" },

    { key: "bwater",  comp: "bath", name: "Water for boiling",  scalable: false, us: { qty: 2, unit: "quarts" }, metric: { qty: 1.9, unit: "L" }, note: "fixed — do not scale this with the dough" },
    { key: "bmalt",   comp: "bath", name: "Barley malt syrup or honey", scalable: false, us: { qty: 0.25, unit: "cup" }, metric: { qty: 85, unit: "g" }, note: "fixed — sweetens the bath, not the dough" },

    { key: "eggwhite",comp: "finish", name: "Egg white",        scalable: false, us: { qty: 1, unit: "" },        metric: { qty: 1, unit: "" }, note: "beaten; milk works if you avoid eggs" },
    { key: "ewater",  comp: "finish", name: "Water for the egg wash", scalable: false, us: { qty: 1, unit: "Tbsp" }, metric: { qty: 15, unit: "ml" } },
    { key: "topping", comp: "finish", name: "Sesame, poppy, coarse salt or shredded cheese", optional: true, us: { qty: 0.33, unit: "cup" }, metric: { qty: 45, unit: "g" }, note: "dip while the egg wash is still wet" }
  ],
  steps: [
    { comp: "dough", text: "Whisk warm water, malt syrup and yeast. Cover, rest 5 min.",
      detail: "In the bowl of a stand mixer fitted with the dough hook, whisk the warm water, barley malt syrup or sugar, and yeast together. Cover and let sit for 5 minutes. No stand mixer? Use a large bowl and a wooden spoon or spatula for the next step.",
      uses: ["water","malt","yeast"], mins: 5, passive: true },
    { comp: "dough", text: "Add flour and salt; beat 2 min to a stiff, dryish dough.",
      detail: "Add the flour and salt and beat on medium for 2 minutes, until the dough comes together and pulls away from the sides of the bowl. It should be stiff and somewhat dry.",
      tip: "Too sticky? Add flour 1 Tbsp at a time. Crumbly and breaking apart? Add water 1 tsp at a time. Aim for firm — slack dough is the main cause of flat bagels.",
      uses: ["flour","salt"], mins: 2 },
    { comp: "dough", text: "Knead 6–7 min until smooth, supple and elastic.",
      detail: "Beat on low with the dough hook for a further 6–7 minutes, or knead by hand on a lightly floured surface for 6–7 minutes, until the dough feels smooth, supple and elastic. It should still feel a little soft.",
      tip: "Two readiness tests: poked, it springs back slowly; or stretch a golfball-sized piece thin enough to see light through it without tearing (the windowpane test).",
      uses: [], mins: 7 },
    { comp: "dough", text: "Oil a large bowl, turn the dough to coat, cover.",
      detail: "Lightly grease a large bowl with nonstick spray, butter or oil. Put the dough in and turn it so all sides are coated. Cover with plastic wrap or a clean kitchen towel.",
      uses: ["oil"], mins: 2 },
    { comp: "dough", text: "Rise at room temperature 1½–2 hrs, until doubled.",
      detail: "Allow the dough to rise at room temperature for 1.5–2 hours, or until doubled in size.",
      tip: "Go by size, not the clock — stop at doubled. Over-proofed dough collapses in the oven, and that is far and away the most common complaint on this recipe. Active dry yeast may need the full 2 hours.",
      uses: [], mins: 105, passive: true },

    { comp: "shape", text: "Line two large baking sheets with parchment.",
      detail: "Line two large baking sheets with parchment paper or silicone baking mats.",
      uses: [], mins: 2 },
    { comp: "shape", text: "Punch down; divide into 8 pieces (≈113 g each) and roll into balls.",
      detail: "Punch the risen dough down to release the air. On a lightly floured surface, divide it into 8 equal pieces, about 4 oz (113 g) each, and shape each into a ball.",
      tip: "Weigh them. Uneven pieces bake unevenly, and this is the one place a scale earns its keep.",
      uses: [], mins: 6 },
    { comp: "shape", text: "Push a hole through each; widen to 1½–2 in.",
      detail: "Press your index finger through the centre of each ball to make a hole, then stretch and widen it to about 1.5–2 inches across. Arrange on the lined sheets.",
      tip: "Make the hole bigger than looks right — it closes up in the boil and again in the oven.",
      uses: [], mins: 4 },
    { comp: "shape", text: "Cover loosely and rest 5–10 min while the water heats.",
      detail: "Loosely cover the shaped bagels with a kitchen towel or plastic wrap and let them rest for 5–10 minutes while you prepare the water bath.",
      uses: [], mins: 10, passive: true },
    { comp: "shape", text: "Heat the oven to 425°F / 218°C.",
      detail: "Preheat the oven to 425°F (218°C). Start this now so it is up to temperature by the time the bagels come out of the water.",
      uses: [] },

    { comp: "bath", text: "Boil 2 qt water with the malt syrup or honey; reduce to medium-high.",
      detail: "Fill a large, wide pot with 2 quarts (1.9 L) of water and whisk in the barley malt syrup or honey. Bring to a boil over high heat, then reduce to medium-high.",
      tip: "The sugar in the bath is what gives the crust its colour and crispness — it is not optional seasoning.",
      uses: ["bwater","bmalt"], mins: 10 },
    { comp: "bath", text: "Boil 2–3 at a time: 1 min, flip, 1 min more. Drain, return to the sheets.",
      detail: "Drop in 2 or 3 bagels at a time, leaving room to float. Boil 1 minute, flip with a spatula, boil 1 minute more. Lift out with a slotted spatula, let the water drain off, and return them to the lined sheets. Repeat with the rest.",
      tip: "This step is the whole recipe: it gelatinises the starch for the shine and sets the outside so they hold their shape. Don't crowd the pot.",
      uses: [], mins: 10 },

    { comp: "finish", text: "Brush with egg wash; dip in toppings straight away.",
      detail: "Beat the egg white with 1 Tbsp water. Using a pastry brush, brush it over the top and around the sides of each bagel. If you are topping them, dip while the wash is still wet.",
      uses: ["eggwhite","ewater","topping"], mins: 3 },
    { comp: "finish", text: "Bake 20–25 min at 425°F, rotating halfway, to dark golden.",
      detail: "Bake for 20–25 minutes, rotating the pans halfway through, until the bagels are dark golden brown.",
      uses: [], mins: 23 },
    { comp: "finish", text: "Cool on the sheets 20 min, then move to a rack.",
      detail: "Let the bagels cool on the baking sheets for 20 minutes, then transfer to a cooling rack to cool completely before slicing.",
      uses: [], mins: 20, passive: true }
  ],
  notes: [
    "Another honest Sally's card: 3 hours claimed, about 3¼ counting the cooling. Sites that name their waiting tend to report it properly.",
    "Overnight version: after the dough is kneaded and in its bowl, let it rise 1½–2 hrs at room temperature, then refrigerate 8–12 hrs. In the morning, 45 min at room temperature, then shape. Don't shape the night before — they puff too much.",
    "Halving works: halve every dough ingredient, change nothing else, and leave the boiling water and honey alone. Don't double — make two batches instead. That's why the servings here only go down.",
    "Flat bagels almost always mean over-proofed dough, or dough that was too slack. A firmer dough and a shorter rise fix both.",
    "Bread flour is not a suggestion — it's what makes them chewy rather than flimsy. AP works in a pinch and you will taste the difference.",
    "Barley malt syrup is the traditional malty flavour and is worth hunting down in a natural food shop; brown sugar in the dough and honey in the bath are the substitutes Sally herself uses.",
    "Variations, all after the egg wash: ⅓ cup sesame or poppy seeds, or coarse salt. Cheese goes into the dough (½ cup shredded, with the flour) and on top.",
    "Baked bagels freeze for 3 months; so does the dough, wrapped tight after punching down. Otherwise 4 days at room temperature, a week in the fridge."
  ]
}
];
