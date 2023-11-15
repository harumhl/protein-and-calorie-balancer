const meatOptions = [
  {
    value: "chickenBreastWithSkin",
    label: "Chicken Breast (with skin)",
    source:
      "https://www.nutritionvalue.org/Chicken%2C_raw%2C_meat_and_skin%2C_breast%2C_broilers_or_fryers_nutritional_value.html?size=100+g",
    proteinPer100g: 21,
    caloriePer100g: 172,
  },
  {
    value: "chickenBreastWithoutSkin",
    label: "Chicken Breast (without skin)",
    source:
      "https://www.nutritionvalue.org/Chicken%2C_raw%2C_meat_only%2C_boneless%2C_skinless%2C_breast%2C_broiler_or_fryers_nutritional_value.html?size=100%20g",
    proteinPer100g: 23,
    caloriePer100g: 120,
  },
  {
    value: "chickenThighWithSkin",
    label: "Chicken Thigh (with skin)",
    source:
      "https://www.nutritionvalue.org/Chicken%2C_raw%2C_meat_and_skin%2C_thigh%2C_broilers_or_fryers_nutritional_value.html?size=100+g",
    proteinPer100g: 17,
    caloriePer100g: 221,
  },
  {
    value: "chickenThighWithoutSkin",
    label: "Chicken Thigh (without skin)",
    source:
      "https://www.nutritionvalue.org/Chicken%2C_raw%2C_meat_only%2C_thigh%2C_dark_meat%2C_broilers_or_fryers_nutritional_value.html?size=100%20g",
    proteinPer100g: 20,
    caloriePer100g: 121,
  },
  {
    value: "turkeyBreast",
    label: "Turkey Breast",
    source:
      "https://www.nutritionvalue.org/Turkey%2C_raw%2C_meat_and_skin%2C_breast%2C_all_classes_nutritional_value.html?size=100+g",
    proteinPer100g: 22,
    caloriePer100g: 157,
  },
  {
    value: "groundPork",
    label: "Ground Pork",
    source:
      "https://www.nutritionvalue.org/Pork%2C_raw%2C_ground%2C_fresh_nutritional_value.html?size=100%20g",
    proteinPer100g: 17,
    caloriePer100g: 263,
  },
  {
    value: "porkSirloin",
    label: "Pork Sirloin",
    source:
      "https://www.nutritionvalue.org/Pork%2C_raw%2C_separable_lean_and_fat%2C_bone-in%2C_sirloin_%28chops_or_roasts%29%2C_loin%2C_fresh_nutritional_value.html",
    proteinPer100g: 23,
    caloriePer100g: 190,
  },
  {
    value: "porkLoin",
    label: "Pork Loin",
    source:
      "https://www.nutritionvalue.org/Pork%2C_raw%2C_separable_lean_and_fat%2C_whole%2C_loin%2C_fresh_nutritional_value.html",
    proteinPer100g: 22,
    caloriePer100g: 224,
  },
  {
    value: "porkChop",
    label: "Pork Chop",
    source:
      "https://www.nutritionvalue.org/Pork%2C_raw%2C_separable_lean_and_fat%2C_bone-in%2C_center_loin_%28chops%29%2C_loin%2C_fresh_nutritional_value.html",
    proteinPer100g: 23,
    caloriePer100g: 192,
  },
  {
    value: "porkTenderloin",
    label: "Pork Tenderloin",
    source:
      "https://www.nutritionvalue.org/Pork%2C_raw%2C_separable_lean_and_fat%2C_tenderloin%2C_loin%2C_fresh_nutritional_value.html?size=100+g",
    proteinPer100g: 21,
    caloriePer100g: 120,
  },
  {
    value: "porkBelly",
    label: "Pork Belly",
    source:
      "https://www.nutritionvalue.org/Pork%2C_raw%2C_belly%2C_fresh_nutritional_value.html?size=100+g",
    proteinPer100g: 9.3,
    caloriePer100g: 518,
  },
  {
    value: "italianPorkSausage",
    label: "Italian Pork Sausage",
    source:
      "https://www.nutritionvalue.org/Sausage%2C_raw%2C_mild%2C_pork%2C_Italian_nutritional_value.html?size=100+g",
    proteinPer100g: 14,
    caloriePer100g: 290,
  },
  {
    value: "pinkSalmon",
    label: "Pink Salmon",
    source:
      "https://www.nutritionvalue.org/Fish%2C_raw%2C_pink%2C_salmon_nutritional_value.html?size=100%20g",
    proteinPer100g: 21,
    caloriePer100g: 127,
  },
  {
    value: "yellowfinTuna",
    label: "Yellowfin Tuna",
    source:
      "https://www.nutritionvalue.org/Fish%2C_raw%2C_yellowfin%2C_fresh%2C_tuna_nutritional_value.html?size=100%20g",
    proteinPer100g: 24,
    caloriePer100g: 109,
  },
  {
    value: "atlanticCod",
    label: "Atlantic Cod",
    source:
      "https://www.nutritionvalue.org/Fish%2C_raw%2C_Atlantic%2C_cod_nutritional_value.html?size=100+g",
    proteinPer100g: 18,
    caloriePer100g: 82,
  },
  {
    value: "tilapia",
    label: "Tilapia",
    source:
      "https://www.nutritionvalue.org/Fish%2C_dry_heat%2C_cooked%2C_tilapia_nutritional_value.html?size=100+g",
    proteinPer100g: 26,
    caloriePer100g: 128,
  },
  {
    value: "keyWestPinkShrimp",
    label: "Key West Pink Shrimp",
    source:
      "https://www.nutritionvalue.org/Key_west_pink_shrimp_546566_nutritional_value.html?size=100%20g",
    proteinPer100g: 16,
    caloriePer100g: 71,
  },
  {
    value: "egg",
    label: "Egg",
    source:
      "https://www.nutritionvalue.org/Egg%2C_fresh%2C_raw%2C_whole_nutritional_value.html?size=100+g",
    proteinPer100g: 13,
    caloriePer100g: 143,
  },
  {
    value: "eggWhite",
    label: "Egg White",
    source:
      "https://www.nutritionvalue.org/Egg%2C_fresh%2C_raw%2C_white_nutritional_value.html?size=100%20g",
    proteinPer100g: 11,
    caloriePer100g: 52,
  },
  {
    value: "tofu",
    label: "Tofu",
    source:
      "https://www.nutritionvalue.org/Tofu%2C_prepared_with_calcium_sulfate%2C_regular%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 8.1,
    caloriePer100g: 76,
  },
];

const veggieOptions = [
  // Fatty
  {
    value: "oliveOil",
    label: "Olive Oil",
    source:
      "https://www.nutritionvalue.org/Oil%2C_salad_or_cooking%2C_olive_nutritional_value.html?size=100+g",
    proteinPer100g: 0,
    caloriePer100g: 884,
  },
  {
    value: "butter",
    label: "Butter",
    source:
      "https://www.nutritionvalue.org/Butter%2C_without_salt_nutritional_value.html?size=100+g",
    proteinPer100g: 0.9,
    caloriePer100g: 717,
  },
  {
    value: "ghee",
    label: "Ghee",
    source:
      "https://www.nutritionvalue.org/Butter%2C_Clarified_butter_%28ghee%29_nutritional_value.html?size=100+g",
    proteinPer100g: 0,
    caloriePer100g: 900,
  },
  {
    value: "creamCheese",
    label: "Cream cheese",
    source:
      "https://www.nutritionvalue.org/Cheese%2C_cream_nutritional_value.html?size=100+g",
    proteinPer100g: 6.2,
    caloriePer100g: 350,
  },
  {
    value: "cottageCheese",
    label: "Cottage cheese",
    source:
      "https://www.nutritionvalue.org/Cottage_cheese_1028783_nutritional_value.html?size=100+g",
    proteinPer100g: 9.7,
    caloriePer100g: 88,
  },
  {
    value: "fetaCheese",
    label: "Feta cheese",
    source:
      "https://www.nutritionvalue.org/Cheese%2C_Feta_14104400_nutritional_value.html?size=100+g",
    proteinPer100g: 14,
    caloriePer100g: 265,
  },
  {
    value: "cheddarCheese",
    label: "Cheddar cheese",
    source:
      "https://www.nutritionvalue.org/Cheese%2C_cheddar_nutritional_value.html?size=100+g",
    proteinPer100g: 23,
    caloriePer100g: 403,
  },
  {
    value: "americanCheese",
    label: "American cheese",
    source:
      "https://www.nutritionvalue.org/Cheese%2C_restaurant%2C_American_747429_nutritional_value.html?size=100+g",
    proteinPer100g: 18,
    caloriePer100g: 375,
  },
  {
    value: "mozzarellaCheese",
    label: "Mozzarella cheese",
    source:
      "https://www.nutritionvalue.org/Cheese%2C_whole_milk%2C_mozzarella_nutritional_value.html?size=100+g",
    proteinPer100g: 22,
    caloriePer100g: 299,
  },
  {
    value: "greekYogurt",
    label: "Greek Yogurt",
    source:
      "https://www.nutritionvalue.org/Yogurt%2C_whole_milk%2C_plain%2C_Greek_nutritional_value.html?size=100+g",
    proteinPer100g: 9,
    caloriePer100g: 97,
  },
  {
    value: "milk",
    label: "Milk",
    source:
      "https://www.nutritionvalue.org/Whole_milk_735370_nutritional_value.html?size=100+g",
    proteinPer100g: 3.3,
    caloriePer100g: 62,
  },
  {
    value: "avocado",
    label: "Avocado",
    source:
      "https://www.nutritionvalue.org/Avocado%2C_raw_63105010_nutritional_value.html?size=100+g",
    proteinPer100g: 2,
    caloriePer100g: 160,
  },
  // Veggies
  {
    value: "onion",
    label: "Onion",
    source:
      "https://www.nutritionvalue.org/Onions%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 1.1,
    caloriePer100g: 40,
  },
  {
    value: "carrot",
    label: "Carrot",
    source:
      "https://www.nutritionvalue.org/Carrots%2C_raw_nutritional_value.html?size=100%20g",
    proteinPer100g: 0.9,
    caloriePer100g: 41,
  },
  {
    value: "potato",
    label: "Potato",
    source:
      "https://www.nutritionvalue.org/Potatoes%2C_raw%2C_flesh_and_skin_nutritional_value.html?size=100+g",
    proteinPer100g: 2.1,
    caloriePer100g: 77,
  },
  {
    value: "sweetPotato",
    label: "Sweet Potato",
    source:
      "https://www.nutritionvalue.org/Sweet_potato%2C_unprepared%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 1.6,
    caloriePer100g: 86,
  },
  {
    value: "greenPeas",
    label: "Green Peas",
    source:
      "https://www.nutritionvalue.org/Peas%2C_raw%2C_green_nutritional_value.html?size=100+g",
    proteinPer100g: 5.4,
    caloriePer100g: 81,
  },
  {
    value: "greenBeans",
    label: "Green Beans",
    source:
      "https://www.nutritionvalue.org/Beans%2C_raw%2C_green%2C_snap_nutritional_value.html",
    proteinPer100g: 1.8,
    caloriePer100g: 31,
  },
  {
    value: "chickpea",
    label: "Chickpea",
    source:
      "https://www.nutritionvalue.org/Chickpeas_%28garbanzo_beans%2C_bengal_gram%29%2C_raw%2C_mature_seeds_nutritional_value.html?size=100%20g",
    proteinPer100g: 20,
    caloriePer100g: 378,
  },
  {
    value: "edamamePrepared",
    label: "Edamame (prepared)",
    source:
      "https://www.nutritionvalue.org/Edamame%2C_prepared%2C_frozen_nutritional_value.html",
    proteinPer100g: 18,
    caloriePer100g: 188,
  },
  {
    value: "hummus",
    label: "Hummus",
    source:
      "https://www.nutritionvalue.org/Hummus_554432_nutritional_value.html?size=100+g",
    proteinPer100g: 6.7,
    caloriePer100g: 167,
  },
  {
    value: "lentilsBoiled",
    label: "Lentils (boiled)",
    source:
      "https://www.nutritionvalue.org/Lentils%2C_without_salt%2C_boiled%2C_cooked%2C_mature_seeds_nutritional_value.html?size=100+g",
    proteinPer100g: 9,
    caloriePer100g: 116,
  },
  {
    value: "cabbage",
    label: "Cabbage",
    source:
      "https://www.nutritionvalue.org/Cabbage%2C_raw_nutritional_value.html?size=100%20g",
    proteinPer100g: 1.3,
    caloriePer100g: 25,
  },
  {
    value: "redCabbage",
    label: "Red Cabbage",
    source:
      "https://www.nutritionvalue.org/Cabbage%2C_raw%2C_red_nutritional_value.html",
    proteinPer100g: 1.3,
    caloriePer100g: 28,
  },
  {
    value: "lettuce",
    label: "Lettuce",
    source:
      "https://www.nutritionvalue.org/Lettuce%2C_raw%2C_green_leaf_nutritional_value.html?size=100+g",
    proteinPer100g: 1.4,
    caloriePer100g: 15,
  },
  {
    value: "celery",
    label: "Celery",
    source:
      "https://www.nutritionvalue.org/Celery%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 0.7,
    caloriePer100g: 14,
  },
  {
    value: "mushroom",
    label: "Mushroom",
    source:
      "https://www.nutritionvalue.org/Mushrooms%2C_raw%2C_white_nutritional_value.html?size=100+g",
    proteinPer100g: 3.1,
    caloriePer100g: 22,
  },
  {
    value: "plantains",
    label: "Plantains",
    source:
      "https://www.nutritionvalue.org/Plantains%2C_raw%2C_green_nutritional_value.html?size=100+g",
    proteinPer100g: 1.3,
    caloriePer100g: 152,
  },
  {
    value: "garlic",
    label: "Garlic",
    source:
      "https://www.nutritionvalue.org/Garlic%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 6.4,
    caloriePer100g: 149,
  },
  // Fruits
  {
    value: "watermelon",
    label: "Watermelon",
    source:
      "https://www.nutritionvalue.org/Watermelon%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 0.6,
    caloriePer100g: 30,
  },
  {
    value: "banana",
    label: "Banana",
    source:
      "https://www.nutritionvalue.org/Bananas%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 1.1,
    caloriePer100g: 89,
  },
  {
    value: "appleWithoutSkin",
    label: "Apple (without skin)",
    source:
      "https://www.nutritionvalue.org/Apples%2C_without_skin%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 0.3,
    caloriePer100g: 48,
  },
  {
    value: "appleWithSkin",
    label: "Apple (with skin)",
    source:
      "https://www.nutritionvalue.org/Apples%2C_with_skin%2C_raw_nutritional_value.html?size=100%20g",
    proteinPer100g: 0.3,
    caloriePer100g: 52,
  },
  // Grains
  {
    value: "longGrainBrownRice",
    label: "long grain Brown Rice",
    source:
      "https://www.nutritionvalue.org/Rice%2C_raw%2C_long-grain%2C_brown_nutritional_value.html?size=100%20g",
    proteinPer100g: 7.5,
    caloriePer100g: 367, // TODO Noom disagrees - because this is raw?
  },
  {
    value: "longGrainWhiteRice",
    label: "long grain White Rice",
    source:
      "https://www.nutritionvalue.org/Rice%2C_unenriched%2C_raw%2C_regular%2C_long-grain%2C_white_nutritional_value.html?size=100+g",
    proteinPer100g: 7.1,
    caloriePer100g: 365, // TODO Noom disagrees - because this is raw?
  },
  {
    value: "wheatBread",
    label: "Wheat Bread",
    source:
      "https://www.nutritionvalue.org/Bread%2C_wheat_nutritional_value.html?size=100+g",
    proteinPer100g: 11,
    caloriePer100g: 274,
  },
  {
    value: "wheatBagel",
    label: "Wheat Bagel",
    source:
      "https://www.nutritionvalue.org/Bagel%2C_whole_wheat_51301750_nutritional_value.html",
    proteinPer100g: 13,
    caloriePer100g: 328,
  },
  // Seeds
  {
    value: "hempSeeds",
    label: "Hemp Seeds",
    source:
      "https://www.nutritionvalue.org/Seeds%2C_hulled%2C_hemp_seed_nutritional_value.html?size=100+g",
    proteinPer100g: 32,
    caloriePer100g: 553,
  },
  // Powder
  {
    value: "onionPowder",
    label: "Onion Powder",
    source:
      "https://www.nutritionvalue.org/Spices%2C_onion_powder_nutritional_value.html?size=100+g",
    proteinPer100g: 10,
    caloriePer100g: 341,
  },
  {
    value: "garlicPowder",
    label: "Garlic Powder",
    source:
      "https://www.nutritionvalue.org/Spices%2C_garlic_powder_nutritional_value.html?size=100+g",
    proteinPer100g: 17,
    caloriePer100g: 331,
  },
  // Condiments
  {
    value: "lemonJuice",
    label: "Lemon Juice",
    source:
      "https://www.nutritionvalue.org/Lemon_juice%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 0.4,
    caloriePer100g: 22,
  },
  {
    value: "relish",
    label: "Relish",
    source:
      "https://www.nutritionvalue.org/Relish%2C_pickle_75503020_nutritional_value.html?size=100+g",
    proteinPer100g: 0.4,
    caloriePer100g: 130,
  },
  {
    value: "mustard",
    label: "Mustard",
    source:
      "https://www.nutritionvalue.org/Mustard%2C_yellow%2C_prepared_nutritional_value.html?size=100+g",
    proteinPer100g: 3.7,
    caloriePer100g: 60,
  },
  {
    value: "mayonnaise",
    label: "Mayonnaise",
    source:
      "https://www.nutritionvalue.org/Salad_dressing%2C_regular%2C_mayonnaise_nutritional_value.html?size=100+g",
    proteinPer100g: 1,
    caloriePer100g: 680,
  },
  {
    value: "ketchup",
    label: "Ketchup",
    source:
      "https://www.nutritionvalue.org/Ketchup_74401010_nutritional_value.html?size=100+g",
    proteinPer100g: 1,
    caloriePer100g: 101,
  },
  {
    value: "sriracha",
    label: "Sriracha",
    source:
      "https://www.nutritionvalue.org/Sauce%2C_sriracha%2C_hot_chile_nutritional_value.html?size=100+g",
    proteinPer100g: 1.9,
    caloriePer100g: 93,
  },
  {
    value: "salsa",
    label: "Salsa",
    source:
      "https://www.nutritionvalue.org/Salsa_552834_nutritional_value.html?size=100+g",
    proteinPer100g: 0,
    caloriePer100g: 36,
  },
  {
    value: "worcestershireSauce",
    label: "Worcestershire sauce",
    source:
      "https://www.nutritionvalue.org/Worcestershire_sauce_41420450_nutritional_value.html?size=100+g",
    proteinPer100g: 0,
    caloriePer100g: 77,
  },
  {
    value: "honey",
    label: "Honey",
    source:
      "https://www.nutritionvalue.org/Honey_nutritional_value.html?size=100%20g",
    proteinPer100g: 0.3,
    caloriePer100g: 304,
  },
  {
    value: "mapleSyrup",
    label: "Maple Syrup",
    source:
      "https://www.nutritionvalue.org/Syrups%2C_maple_nutritional_value.html?size=100+g",
    proteinPer100g: 0,
    caloriePer100g: 260,
  },
  {
    value: "balsamicVinegar",
    label: "Balsamic Vinegar",
    source:
      "https://www.nutritionvalue.org/Vinegar%2C_balsamic_nutritional_value.html?size=100+g",
    proteinPer100g: 0.5,
    caloriePer100g: 88,
  },
];

const optionalRequirementOptions = [
  {
    value: "max",
    label: "Maximum",
  },
  {
    value: "equal",
    label: "Exactly",
  },
  {
    value: "min",
    label: "Minimum",
  },
];

export { meatOptions, veggieOptions, optionalRequirementOptions };