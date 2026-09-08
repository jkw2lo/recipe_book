/* Removed from the book — my stress-test picks, kept in case they're wanted back. */
/* ============================== 3. CHAR SIU BAO ============================== */
{
  id: "charsiubao-rasamalaysia",
  title: "Char Siu Bao (Steamed Pork Buns)",
  source: { site: "Rasa Malaysia", url: "https://rasamalaysia.com/char-siew-bao/", author: "Bee Yinn Low" },
  cuisine: "Chinese", tags: ["bread", "steamed", "pork", "dim sum", "yeast"],
  servings: { base: 16, unit: "buns", min: 8, max: 32 },
  time: { active: 50, passive: 85, cook: 10 },
  claimed: 70,
  components: [
    { id: "filling", label: "Char siu filling" },
    { id: "dough",   label: "Dough" },
    { id: "assemble", label: "Shape & steam" }
  ],
  ingredients: [
    { key: "oil",     comp: "filling", name: "Cooking oil",     us: { qty: 0.5, unit: "Tbsp" }, metric: { qty: 7, unit: "ml" } },
    { key: "onion",   comp: "filling", name: "Yellow onion, diced", us: { qty: 1, unit: "small" }, metric: { qty: 1, unit: "small" } },
    { key: "charsiu", comp: "filling", name: "Char siu, diced",  us: { qty: 9, unit: "oz" },     metric: { qty: 250, unit: "g" } },
    { key: "soy",     comp: "filling", name: "Soy sauce",        us: { qty: 1, unit: "Tbsp" },   metric: { qty: 15, unit: "ml" } },
    { key: "oyster",  comp: "filling", name: "Oyster sauce",     us: { qty: 1, unit: "Tbsp" },   metric: { qty: 15, unit: "ml" } },
    { key: "fsugar",  comp: "filling", name: "Sugar",            us: { qty: 1, unit: "tsp" },    metric: { qty: 4, unit: "g" } },
    { key: "sesoil",  comp: "filling", name: "Sesame oil",       us: { qty: 1, unit: "tsp" },    metric: { qty: 5, unit: "ml" } },
    { key: "color",   comp: "filling", name: "Red food colouring", optional: true, scalable: false, us: { qty: 2, unit: "drops" }, metric: { qty: 2, unit: "drops" } },
    { key: "fsalt",   comp: "filling", name: "Salt", scalable: false, us: { qty: 0, unit: "to taste" }, metric: { qty: 0, unit: "to taste" } },
    { key: "cornst",  comp: "filling", name: "Cornstarch",       us: { qty: 1.5, unit: "Tbsp" }, metric: { qty: 12, unit: "g" } },
    { key: "fwater",  comp: "filling", name: "Water",            us: { qty: 5, unit: "fl oz" },  metric: { qty: 150, unit: "ml" } },

    { key: "dflour",  comp: "dough", name: "Low-protein flour",  us: { qty: 10, unit: "oz" },    metric: { qty: 280, unit: "g" }, note: "Hong Kong flour; cake flour or all-purpose will do" },
    { key: "starch",  comp: "dough", name: "Wheat starch",       us: { qty: 3.5, unit: "oz" },   metric: { qty: 100, unit: "g" } },
    { key: "psugar",  comp: "dough", name: "Powdered sugar",     us: { qty: 3, unit: "oz" },     metric: { qty: 90, unit: "g" } },
    { key: "dyeast",  comp: "dough", name: "Active dry yeast",   us: { qty: 2.5, unit: "tsp" },  metric: { qty: 8, unit: "g" } },
    { key: "dwater",  comp: "dough", name: "Lukewarm water",     us: { qty: 0.67, unit: "cup" }, metric: { qty: 160, unit: "ml" } },
    { key: "dvin",    comp: "dough", name: "Chinese white vinegar", optional: true, us: { qty: 0.5, unit: "tsp" }, metric: { qty: 2.5, unit: "ml" }, note: "or lemon juice" },
    { key: "vegoil",  comp: "dough", name: "Vegetable oil",      us: { qty: 2, unit: "Tbsp" },   metric: { qty: 30, unit: "g" } },
    { key: "bpowder", comp: "dough", name: "Baking powder",      us: { qty: 2.5, unit: "tsp" },  metric: { qty: 10, unit: "g" } },
    { key: "cwater",  comp: "dough", name: "Cold water",         us: { qty: 2, unit: "tsp" },    metric: { qty: 10, unit: "ml" } }
  ],
  steps: [
    { comp: "filling", text: "Sauté onion 1–2 min, add char siu + seasonings, stir-fry 1–2 min.",
      detail: "Heat the oil in a pan and sauté the onion for 1 to 2 minutes. Add the char siu, soy sauce, oyster sauce, sugar, sesame oil, and red food colouring if using. Stir-fry for 1–2 minutes, then salt to taste.",
      uses: ["oil","onion","charsiu","soy","oyster","fsugar","sesoil","color","fsalt"], mins: 8 },
    { comp: "filling", text: "Slurry the cornstarch with water, stir in, simmer to thicken. Cool, divide into 16.",
      detail: "Mix the cornstarch and water into a slurry, add to the pan, and simmer on low until the sauce thickens. Remove from the heat and let the filling cool completely, then divide into 16 portions.",
      tip: "It must be fully cool before wrapping or it tears the dough. It cools while the dough rises.",
      uses: ["cornst","fwater"], mins: 4, countsServings: true },

    { comp: "dough", text: "Sift flour, wheat starch and powdered sugar. Well in the centre.",
      detail: "Sift the flour, wheat starch, and powdered sugar into a large mixing bowl and make a well in the centre.",
      uses: ["dflour","starch","psugar"], mins: 4 },
    { comp: "dough", text: "Dissolve yeast in the warm water + vinegar in the well, draw in the flour, add oil.",
      detail: "Add the yeast, lukewarm water, and vinegar or lemon juice to the well. Gently dissolve the yeast, then slowly incorporate the flour mixture and add the vegetable oil until a rough dough forms.",
      uses: ["dyeast","dwater","dvin","vegoil"], mins: 4 },
    { comp: "dough", text: "Knead by hand 15 min to a smooth, shiny dough.",
      detail: "Knead the dough by hand for about 15 minutes, until soft, smooth, and slightly shiny.",
      uses: [], mins: 15 },
    { comp: "dough", text: "Cover with a damp cloth; rise 60–90 min until noticeably puffed.",
      detail: "Cover the dough with a damp cloth and let it rise in a warm place for 60 to 90 minutes, or until noticeably expanded.",
      uses: [], mins: 75, passive: true },
    { comp: "dough", text: "Dissolve baking powder in cold water, sprinkle over, knead in.",
      detail: "Dissolve the baking powder in the cold water, sprinkle it over the dough, and knead until fully incorporated.",
      tip: "Added after the first proof, not with the dry goods — it loses strength during proofing. Undissolved powder leaves yellow spots.",
      uses: ["bpowder","cwater"], mins: 4 },
    { comp: "dough", text: "Rest 10 min.",
      detail: "For extra fluffy buns, let the dough rest another 10 minutes before shaping.",
      uses: [], mins: 10, passive: true },

    { comp: "assemble", text: "Cut into 16 portions; keep covered while you work.",
      detail: "Cut the dough into 16 equal portions with a sharp knife or bench scraper. Cover the pieces with a damp cloth or plastic wrap so they don't dry out while you shape.",
      tip: "Want bigger buns? Divide into 12 instead.",
      uses: [], mins: 4, countsServings: true },
    { comp: "assemble", text: "Roll each to a 3 in / 7 cm circle, fill, gather, pinch and twist to seal.",
      detail: "Roll each dough ball into a 3-inch (7 cm) circle. Place a portion of filling in the centre, gather the edges around it, then pinch and twist the top to seal tightly. Set each bun on a 2×3 in (5×7 cm) piece of parchment.",
      uses: [], mins: 16 },
    { comp: "assemble", text: "Space 1 in / 2.5 cm apart, mist with water, steam on high 10 min in a preheated steamer.",
      detail: "Arrange the buns in the steamer leaving about 1 inch (2.5 cm) between them. Spray a light mist of water over the buns and steam on high heat for 10 minutes in a preheated steamer. Serve warm.",
      tip: "Preheat the steamer or they won't rise. Do not lift the lid while steaming.",
      uses: [], mins: 10 }
  ],
  notes: [
    "The source's 1 hr 10 min total leaves out most of the 60–90 min rise. Budget closer to 2½ hours.",
    "Add 1 tsp Chinese white vinegar to the steaming water for whiter buns.",
    "Misting the buns before steaming gives a smoother surface.",
    "Yellow spots on the finished buns mean the baking powder wasn't fully dissolved.",
    "The filling freezes well even though the finished buns don't. Fridge up to a week."
  ]
},

/* ============================== 4. BEEF RENDANG ============================== */
{
  id: "rendang-rasamalaysia",
  title: "Beef Rendang",
  source: { site: "Rasa Malaysia", url: "https://rasamalaysia.com/beef-rendang-recipe-rendang-daging/", author: "Bee Yinn Low" },
  cuisine: "Malaysian", tags: ["beef", "braise", "coconut", "spicy", "make-ahead"],
  servings: { base: 4, unit: "servings", min: 2, max: 12 },
  time: { active: 25, passive: 75, cook: 20 },
  claimed: 105,
  components: [
    { id: "paste", label: "Spice paste" },
    { id: "stew",  label: "Stew" }
  ],
  ingredients: [
    { key: "shallots", comp: "paste", name: "Shallots",      us: { qty: 5, unit: "" },      metric: { qty: 5, unit: "" } },
    { key: "galangal", comp: "paste", name: "Galangal",      us: { qty: 1, unit: "in" },    metric: { qty: 2.5, unit: "cm" }, note: "skip it if you can't find it" },
    { key: "lgpaste",  comp: "paste", name: "Lemongrass",    us: { qty: 3, unit: "stalks" },metric: { qty: 3, unit: "stalks" }, note: "white part only" },
    { key: "garlic",   comp: "paste", name: "Garlic cloves", us: { qty: 5, unit: "" },      metric: { qty: 5, unit: "" } },
    { key: "ginger",   comp: "paste", name: "Ginger",        us: { qty: 1, unit: "in" },    metric: { qty: 2.5, unit: "cm" } },
    { key: "chilies",  comp: "paste", name: "Dried chilies", us: { qty: 11, unit: "" },     metric: { qty: 11, unit: "" }, note: "soaked and seeded; halve for a milder stew" },

    { key: "beef",     comp: "stew", name: "Boneless beef short ribs", us: { qty: 1.5, unit: "lb" }, metric: { qty: 680, unit: "g" }, note: "cut into cubes — not too small or they break apart" },
    { key: "cookoil",  comp: "stew", name: "Cooking oil",    us: { qty: 5, unit: "Tbsp" },  metric: { qty: 75, unit: "ml" } },
    { key: "cinnamon", comp: "stew", name: "Cinnamon stick", us: { qty: 1, unit: "" },      metric: { qty: 1, unit: "" }, note: "about 2 in / 5 cm" },
    { key: "cloves",   comp: "stew", name: "Cloves",         us: { qty: 3, unit: "" },      metric: { qty: 3, unit: "" } },
    { key: "staranise",comp: "stew", name: "Star anise",     us: { qty: 3, unit: "" },      metric: { qty: 3, unit: "" } },
    { key: "cardamom", comp: "stew", name: "Cardamom pods",  us: { qty: 3, unit: "" },      metric: { qty: 3, unit: "" } },
    { key: "lgwhole",  comp: "stew", name: "Lemongrass, pounded", us: { qty: 1, unit: "stalk" }, metric: { qty: 1, unit: "stalk" }, note: "cut to 4 in / 10 cm — this is separate from the paste" },
    { key: "coconut",  comp: "stew", name: "Thick coconut milk", us: { qty: 1, unit: "cup" }, metric: { qty: 240, unit: "ml" }, note: "coconut cream for a richer result" },
    { key: "water",    comp: "stew", name: "Water",          us: { qty: 1, unit: "cup" },   metric: { qty: 240, unit: "ml" } },
    { key: "tamarind", comp: "stew", name: "Tamarind pulp",  us: { qty: 2, unit: "tsp" },   metric: { qty: 8, unit: "g" }, note: "soaked in warm water, seeds discarded" },
    { key: "limeleaf", comp: "stew", name: "Kaffir lime leaves", us: { qty: 6, unit: "" },  metric: { qty: 6, unit: "" }, note: "very finely sliced" },
    { key: "kerisik",  comp: "stew", name: "Kerisik (toasted coconut)", us: { qty: 6, unit: "Tbsp" }, metric: { qty: 30, unit: "g" } },
    { key: "ssugar",   comp: "stew", name: "Sugar",          us: { qty: 1, unit: "Tbsp" },  metric: { qty: 12, unit: "g" }, note: "palm sugar if you have it" },
    { key: "ssalt",    comp: "stew", name: "Salt", scalable: false, us: { qty: 0, unit: "to taste" }, metric: { qty: 0, unit: "to taste" } }
  ],
  steps: [
    { comp: "paste", text: "Chop, then blend everything to a fine paste.",
      detail: "Chop the spice paste ingredients roughly, then blend in a food processor until fine.",
      uses: ["shallots","galangal","lgpaste","garlic","ginger","chilies"], mins: 15 },

    { comp: "stew", text: "Fry paste with the whole spices until aromatic.",
      detail: "Heat the oil in a stew pot. Add the spice paste, cinnamon, cloves, star anise, and cardamom and stir-fry until aromatic.",
      uses: ["cookoil","cinnamon","cloves","staranise","cardamom"], mins: 5 },
    { comp: "stew", text: "Add beef and pounded lemongrass, stir 1 min.",
      detail: "Add the beef and the pounded lemongrass stalk and stir everything together for about a minute.",
      uses: ["beef","lgwhole"], mins: 2 },
    { comp: "stew", text: "Add coconut milk, tamarind juice, water. Simmer medium until beef is nearly done.",
      detail: "Pour in the coconut milk, tamarind juice, and water. Simmer on medium heat, stirring frequently, until the meat is almost cooked.",
      uses: ["coconut","tamarind","water"], mins: 20 },
    { comp: "stew", text: "Stir in lime leaves, kerisik and sugar.",
      detail: "Add the kaffir lime leaves, kerisik, and sugar or palm sugar, stirring until well blended with the meat.",
      tip: "Kerisik: toast grated coconut in a dry wok, stirring constantly, until golden. Pound it in a mortar to release the fat — that's what makes rendang rich.",
      uses: ["limeleaf","kerisik","ssugar"], mins: 3 },
    { comp: "stew", text: "Cover, simmer low 1–1½ hr until tender and the gravy has dried down. Salt to taste.",
      detail: "Lower the heat, cover, and simmer for 1 to 1½ hours until the meat is very tender and the gravy has reduced and dried up. Adjust salt and sugar to taste and serve with steamed rice.",
      tip: "Rendang should be dry, not soupy — the meat generously coated rather than swimming. Stir occasionally so it doesn't catch.",
      uses: ["ssalt"], mins: 75, passive: true }
  ],
  notes: [
    "Note the lemongrass appears twice: 3 stalks blended into the paste, 1 whole pounded stalk into the pot.",
    "Better on day two. The Minangkabau keep it for months — the flavour deepens as it rests.",
    "Slow cooker: sauté the paste and aromatics first, then low 7–8 hr or high 4–5 hr, stirring in the kerisik and lime leaves in the last hour.",
    "Instant Pot: sauté the paste, then High pressure 35–40 min, natural release, then sauté again to reduce the gravy.",
    "Fridge up to 4 days, freezer up to 2 months. Loosen with a splash of water when reheating."
  ]
}
];