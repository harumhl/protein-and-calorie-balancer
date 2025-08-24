export type Option = {
  value: string;
  label: string;
  source: string;
  proteinPer100g: number;
  caloriePer100g: number;
  vitaminAPer100g?: number;
  vitaminB1Per100g?: number;
  vitaminB2Per100g?: number;
  vitaminB3Per100g?: number;
  vitaminB5Per100g?: number;
  vitaminB6Per100g?: number;
  vitaminB7Per100g?: number;
  vitaminB9Per100g?: number;
  vitaminB12Per100g?: number;
  vitaminCPer100g?: number;
  vitaminDPer100g?: number;
  vitaminEPer100g?: number;
  vitaminKPer100g?: number;
  calciumPer100g?: number;
  cholinePer100g?: number;
  chromiumPer100g?: number;
  copperPer100g?: number;
  fiberPer100g?: number;
  iodinePer100g?: number;
  ironPer100g?: number;
  magnesiumPer100g?: number;
  manganesePer100g?: number;
  molybdenumPer100g?: number;
  phosphorusPer100g?: number;
  potassiumPer100g?: number;
  seleniumPer100g?: number;
  sodiumPer100g?: number;
  zincPer100g?: number;
};

export const meatOptions: Option[] = [
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
    vitaminAPer100g: 0.000009,
    vitaminB1Per100g: 0.000094,
    vitaminB2Per100g: 0.000177,
    vitaminB3Per100g: 0.0096,
    vitaminB5Per100g: 0.001495,
    vitaminB6Per100g: 0.000811,
    vitaminB7Per100g: 0,
    vitaminB9Per100g: 0.000009,
    vitaminB12Per100g: 0.00000021,
    vitaminCPer100g: 0,
    vitaminDPer100g: 0,
    vitaminEPer100g: 0.00056,
    vitaminKPer100g: 0.0000084,
    calciumPer100g: 0.005,
    cholinePer100g: 0.0821,
    chromiumPer100g: 0,
    copperPer100g: 0.00004,
    fiberPer100g: 0,
    iodinePer100g: 0,
    ironPer100g: 0.00037,
    magnesiumPer100g: 0.028,
    manganesePer100g: 0.000011,
    molybdenumPer100g: 0,
    phosphorusPer100g: 0.213,
    potassiumPer100g: 0.334,
    seleniumPer100g: 0.0000228,
    sodiumPer100g: 0.045,
    zincPer100g: 0.00068,
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
    vitaminAPer100g: 0,
    vitaminB1Per100g: 0.000982,
    vitaminB2Per100g: 0.000337,
    vitaminB3Per100g: 0.00661,
    vitaminB5Per100g: 0.000837,
    vitaminB6Per100g: 0.000765,
    vitaminB7Per100g: 0,
    vitaminB9Per100g: 0,
    vitaminB12Per100g: 0.00000052,
    vitaminCPer100g: 0,
    vitaminDPer100g: 0.0000003,
    vitaminEPer100g: 0.00000022,
    vitaminKPer100g: 0,
    calciumPer100g: 0.006,
    cholinePer100g: 0.0797,
    chromiumPer100g: 0,
    copperPer100g: 0.00009,
    fiberPer100g: 0,
    iodinePer100g: 0,
    ironPer100g: 0.00097,
    magnesiumPer100g: 0.027,
    manganesePer100g: 0.000014,
    molybdenumPer100g: 0,
    phosphorusPer100g: 0.243,
    potassiumPer100g: 0.393,
    seleniumPer100g: 0.0000303,
    sodiumPer100g: 0.052,
    zincPer100g: 0.00187,
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
    vitaminAPer100g: 0.000035,
    vitaminB1Per100g: 0.00008,
    vitaminB2Per100g: 0.000105,
    vitaminB3Per100g: 0.007995,
    vitaminB5Per100g: 0.00103,
    vitaminB6Per100g: 0.000611,
    vitaminB7Per100g: 0,
    vitaminB9Per100g: 0.000004,
    vitaminB12Per100g: 0.00000415,
    vitaminCPer100g: 0,
    vitaminDPer100g: 0.0000109,
    vitaminEPer100g: 0.0004,
    vitaminKPer100g: 0.0000004,
    calciumPer100g: 0.007,
    cholinePer100g: 0.0946,
    chromiumPer100g: 0,
    copperPer100g: 0.00006,
    fiberPer100g: 0,
    iodinePer100g: 0,
    ironPer100g: 0.00038,
    magnesiumPer100g: 0.027,
    manganesePer100g: 0.000011,
    molybdenumPer100g: 0,
    phosphorusPer100g: 0.261,
    potassiumPer100g: 0.366,
    seleniumPer100g: 0.0000314,
    sodiumPer100g: 0.075,
    zincPer100g: 0.00039,
  },
  {
    value: "yellowfinTuna",
    label: "Yellowfin Tuna",
    source:
      "https://www.nutritionvalue.org/Fish%2C_raw%2C_yellowfin%2C_fresh%2C_tuna_nutritional_value.html?size=100%20g",
    proteinPer100g: 24,
    caloriePer100g: 109,
    vitaminAPer100g: 0.000018,
    vitaminB1Per100g: 0.000118,
    vitaminB2Per100g: 0.000115,
    vitaminB3Per100g: 0.018475,
    vitaminB5Per100g: 0.00028,
    vitaminB6Per100g: 0.000933,
    vitaminB7Per100g: 0,
    vitaminB9Per100g: 0.000002,
    vitaminB12Per100g: 0.00000208,
    vitaminCPer100g: 0,
    vitaminDPer100g: 0.0000017,
    vitaminEPer100g: 0.00024,
    vitaminKPer100g: 0.0000001,
    calciumPer100g: 0.004,
    cholinePer100g: 0.065,
    chromiumPer100g: 0,
    copperPer100g: 0.00004,
    fiberPer100g: 0,
    iodinePer100g: 0,
    ironPer100g: 0.00077,
    magnesiumPer100g: 0.035,
    manganesePer100g: 0.000011,
    molybdenumPer100g: 0,
    phosphorusPer100g: 0.278,
    potassiumPer100g: 0.441,
    seleniumPer100g: 0.0000906,
    sodiumPer100g: 0.045,
    zincPer100g: 0.00037,
  },
  {
    value: "atlanticCod",
    label: "Atlantic Cod",
    source:
      "https://www.nutritionvalue.org/Fish%2C_raw%2C_Atlantic%2C_cod_nutritional_value.html?size=100+g",
    proteinPer100g: 18,
    caloriePer100g: 82,
    vitaminAPer100g: 0.000012,
    vitaminB1Per100g: 0.000076,
    vitaminB2Per100g: 0.000065,
    vitaminB3Per100g: 0.002063,
    vitaminB5Per100g: 0.000153,
    vitaminB6Per100g: 0.000245,
    vitaminB7Per100g: 0,
    vitaminB9Per100g: 0.000007,
    vitaminB12Per100g: 0.00000091,
    vitaminCPer100g: 0.001,
    vitaminDPer100g: 0.0000009,
    vitaminEPer100g: 0.00064,
    vitaminKPer100g: 0.0000001,
    calciumPer100g: 0.016,
    cholinePer100g: 0.0652,
    chromiumPer100g: 0,
    copperPer100g: 0.00003,
    fiberPer100g: 0,
    iodinePer100g: 0,
    ironPer100g: 0.00038,
    magnesiumPer100g: 0.032,
    manganesePer100g: 0.000015,
    molybdenumPer100g: 0,
    phosphorusPer100g: 0.203,
    potassiumPer100g: 0.413,
    seleniumPer100g: 0.0000331,
    sodiumPer100g: 0.054,
    zincPer100g: 0.00045,
  },
  {
    value: "tilapia",
    label: "Tilapia",
    source:
      "https://www.nutritionvalue.org/Fish%2C_dry_heat%2C_cooked%2C_tilapia_nutritional_value.html?size=100+g",
    proteinPer100g: 26,
    caloriePer100g: 128,
    vitaminAPer100g: 0,
    vitaminB1Per100g: 0.000093,
    vitaminB2Per100g: 0.000073,
    vitaminB3Per100g: 0.004745,
    vitaminB5Per100g: 0.000664,
    vitaminB6Per100g: 0.000123,
    vitaminB7Per100g: 0,
    vitaminB9Per100g: 0.000006,
    vitaminB12Per100g: 0.00000186,
    vitaminCPer100g: 0,
    vitaminDPer100g: 0.0000037,
    vitaminEPer100g: 0.00079,
    vitaminKPer100g: 0.0000009,
    calciumPer100g: 0.014,
    cholinePer100g: 0.0513,
    chromiumPer100g: 0,
    copperPer100g: 0.00007,
    fiberPer100g: 0,
    iodinePer100g: 0,
    ironPer100g: 0.00069,
    magnesiumPer100g: 0.034,
    manganesePer100g: 0.000037,
    molybdenumPer100g: 0,
    phosphorusPer100g: 0.204,
    potassiumPer100g: 0.38,
    seleniumPer100g: 0.0000544,
    sodiumPer100g: 0.056,
    zincPer100g: 0.00041,
  },
  {
    value: "keyWestPinkShrimp",
    label: "Key West Pink Shrimp",
    source:
      "https://www.nutritionvalue.org/Key_west_pink_shrimp_546566_nutritional_value.html?size=100%20g",
    proteinPer100g: 16,
    caloriePer100g: 71,
    vitaminCPer100g: 0,
    calciumPer100g: 0.036,
    ironPer100g: 0.00064,
    sodiumPer100g: 0.134,
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

export const veggieOptions: Option[] = [
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
    vitaminAPer100g: 0.00037,
    vitaminB1Per100g: 0.00007,
    vitaminB2Per100g: 0.00008,
    vitaminB3Per100g: 0.000375,
    vitaminB5Per100g: 0.000134,
    vitaminB6Per100g: 0.00009,
    vitaminB7Per100g: 0,
    vitaminB9Per100g: 0.000038,
    vitaminB12Per100g: 0,
    vitaminCPer100g: 0.0092,
    vitaminDPer100g: 0,
    vitaminEPer100g: 0.00022,
    vitaminKPer100g: 0.0001263,
    calciumPer100g: 0.036,
    cholinePer100g: 0.0136,
    chromiumPer100g: 0,
    copperPer100g: 0.00003,
    fiberPer100g: 1.3,
    iodinePer100g: 0,
    ironPer100g: 0.00086,
    magnesiumPer100g: 0.013,
    manganesePer100g: 0.00025,
    molybdenumPer100g: 0,
    phosphorusPer100g: 0.029,
    potassiumPer100g: 0.194,
    seleniumPer100g: 0.0000006,
    sodiumPer100g: 0.028,
    zincPer100g: 0.00018,
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
    value: "spinach",
    label: "Spinach",
    source:
      "https://www.nutritionvalue.org/Spinach%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 2.9,
    caloriePer100g: 23,
  },
  {
    value: "cucumber",
    label: "Cucumber",
    source:
      "https://www.nutritionvalue.org/Cucumber%2C_raw%2C_with_peel_nutritional_value.html?size=100%20g",
    proteinPer100g: 0.7,
    caloriePer100g: 15,
    vitaminAPer100g: 0.000005,
    vitaminB1Per100g: 0.000027,
    vitaminB2Per100g: 0.000033,
    vitaminB3Per100g: 0.000098,
    vitaminB5Per100g: 0.000259,
    vitaminB6Per100g: 0.00004,
    vitaminB7Per100g: 0,
    vitaminB9Per100g: 0.000007,
    vitaminB12Per100g: 0,
    vitaminCPer100g: 0.0028,
    vitaminDPer100g: 0,
    vitaminEPer100g: 0.00003,
    vitaminKPer100g: 0.0000164,
    calciumPer100g: 0.016,
    cholinePer100g: 0.006,
    chromiumPer100g: 0,
    copperPer100g: 0.00004,
    fiberPer100g: 0.5,
    iodinePer100g: 0,
    ironPer100g: 0.00028,
    magnesiumPer100g: 0.013,
    manganesePer100g: 0.000079,
    molybdenumPer100g: 0,
    phosphorusPer100g: 0.024,
    potassiumPer100g: 0.147,
    seleniumPer100g: 0.0000003,
    sodiumPer100g: 0.002,
    zincPer100g: 0.0002,
  },
  {
    value: "pea",
    label: "Pea",
    source:
      "https://www.nutritionvalue.org/Peas%2C_raw%2C_green_nutritional_value.html?size=100%20g",
    proteinPer100g: 5.4,
    caloriePer100g: 81,
  },
  {
    value: "squashOrZucchini",
    label: "Squash/Zucchini",
    source:
      "https://www.nutritionvalue.org/Squash%2C_raw%2C_baby%2C_zucchini_nutritional_value.html?size=100+g",
    proteinPer100g: 2.7,
    caloriePer100g: 21,
  },
  {
    value: "kale",
    label: "Kale",
    source:
      "https://www.nutritionvalue.org/Kale%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 2.9,
    caloriePer100g: 35,
  },
  {
    value: "cauliflower",
    label: "Cauliflower",
    source:
      "https://www.nutritionvalue.org/Cauliflower%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 1.9,
    caloriePer100g: 25,
  },
  {
    value: "brusselsSprout",
    label: "Brussels sprout",
    source:
      "https://www.nutritionvalue.org/Brussels_sprouts%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 3.4,
    caloriePer100g: 43,
  },
  {
    value: "broccoli",
    label: "Broccoli",
    source:
      "https://www.nutritionvalue.org/Broccoli%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 2.8,
    caloriePer100g: 34,
  },
  {
    value: "bellPeppers",
    label: "Bell Peppers",
    source:
      "https://www.nutritionvalue.org/Sliced_bell_peppers_574612_nutritional_value.html?size=100+g",
    proteinPer100g: 0.9,
    caloriePer100g: 26,
  },
  {
    value: "tomato",
    label: "Tomato (and cherry tomato)",
    source:
      "https://www.nutritionvalue.org/Tomatoes%2C_raw%2C_orange_nutritional_value.html?size=100+g",
    proteinPer100g: 1.2,
    caloriePer100g: 16,
    vitaminAPer100g: 0.000075,
    vitaminB1Per100g: 0.000046,
    vitaminB2Per100g: 0.000034,
    vitaminB3Per100g: 0.000593,
    vitaminB5Per100g: 0.000186,
    vitaminB6Per100g: 0.00006,
    vitaminB7Per100g: 0,
    vitaminB9Per100g: 0.000029,
    vitaminB12Per100g: 0,
    vitaminCPer100g: 0.016,
    vitaminDPer100g: 0,
    vitaminEPer100g: 0,
    vitaminKPer100g: 0,
    calciumPer100g: 0.005,
    cholinePer100g: 0,
    chromiumPer100g: 0,
    copperPer100g: 0.00006,
    fiberPer100g: 0.9,
    iodinePer100g: 0,
    ironPer100g: 0.00047,
    magnesiumPer100g: 0.008,
    manganesePer100g: 0.000088,
    molybdenumPer100g: 0,
    phosphorusPer100g: 0.029,
    potassiumPer100g: 0.212,
    seleniumPer100g: 0.0000004,
    sodiumPer100g: 0.042,
    zincPer100g: 0.00014,
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
  {
    value: "date",
    label: "Date",
    source:
      "https://www.nutritionvalue.org/Date_62110100_nutritional_value.html?size=100+g",
    proteinPer100g: 2.5,
    caloriePer100g: 282,
  },
  {
    value: "fig",
    label: "Fig",
    source:
      "https://www.nutritionvalue.org/Figs%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 0.8,
    caloriePer100g: 74,
  },
  {
    value: "cherry",
    label: "Cherry",
    source:
      "https://www.nutritionvalue.org/Cherries%2C_raw%2C_sweet_nutritional_value.html?size=100%20g",
    proteinPer100g: 1.1,
    caloriePer100g: 63,
  },
  {
    value: "persimmon",
    label: "Persimmon",
    source:
      "https://www.nutritionvalue.org/Persimmon%2C_raw_63139010_nutritional_value.html?size=100+g",
    proteinPer100g: 0.6,
    caloriePer100g: 70,
  },
  {
    value: "blueberry",
    label: "Blueberry",
    source:
      "https://www.nutritionvalue.org/Blueberries%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 0.7,
    caloriePer100g: 57,
  },
  {
    value: "blackberry",
    label: "Blackberry",
    source:
      "https://www.nutritionvalue.org/Blackberries%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 1.4,
    caloriePer100g: 43,
  },
  {
    value: "cantaloupe",
    label: "Cantaloupe",
    source:
      "https://www.nutritionvalue.org/Melons%2C_raw%2C_cantaloupe_nutritional_value.html?size=100+g",
    proteinPer100g: 0.8,
    caloriePer100g: 34,
  },
  {
    value: "strawberry",
    label: "Strawberry",
    source:
      "https://www.nutritionvalue.org/Strawberries%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 0.7,
    caloriePer100g: 32,
  },
  {
    value: "pineapple",
    label: "Pineapple",
    source:
      "https://www.nutritionvalue.org/Pineapple%2C_all_varieties%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 0.5,
    caloriePer100g: 50,
  },
  {
    value: "tangerine",
    label: "Tangerine (or mandarin)",
    source:
      "https://www.nutritionvalue.org/Tangerines%2C_raw%2C_%28mandarin_oranges%29_nutritional_value.html?size=100+g",
    proteinPer100g: 0.8,
    caloriePer100g: 53,
  },
  {
    value: "orange",
    label: "Orange",
    source:
      "https://www.nutritionvalue.org/Oranges%2C_navels%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 0.9,
    caloriePer100g: 49,
  },
  {
    value: "mango",
    label: "Mango",
    source:
      "https://www.nutritionvalue.org/Mangos%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 0.8,
    caloriePer100g: 60,
  },
  {
    value: "kiwi",
    label: "Kiwi",
    source:
      "https://www.nutritionvalue.org/Kiwi_fruit%2C_raw_63126500_nutritional_value.html?size=100+g",
    proteinPer100g: 1.1,
    caloriePer100g: 58,
  },
  {
    value: "grape",
    label: "Grape",
    source:
      "https://www.nutritionvalue.org/Grapes%2C_raw%2C_red_or_green_%28European_type%2C_such_as_Thompson_seedless%29_nutritional_value.html?size=100+g",
    proteinPer100g: 0.7,
    caloriePer100g: 69,
  },
  // Grains
  {
    value: "longGrainBrownRice",
    label: "long grain Brown Rice",
    source:
      "https://www.nutritionvalue.org/Rice%2C_raw%2C_long-grain%2C_brown_nutritional_value.html?size=100%20g",
    proteinPer100g: 7.5,
    caloriePer100g: 367,
  },
  {
    value: "longGrainWhiteRice",
    label: "long grain White Rice",
    source:
      "https://www.nutritionvalue.org/Rice%2C_unenriched%2C_raw%2C_regular%2C_long-grain%2C_white_nutritional_value.html?size=100+g",
    proteinPer100g: 7.1,
    caloriePer100g: 365,
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
  {
    value: "quinoaUncooked",
    label: "Quinoa (uncooked)",
    source:
      "https://www.nutritionvalue.org/Quinoa%2C_uncooked_nutritional_value.html?size=100%20g",
    proteinPer100g: 14,
    caloriePer100g: 368,
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
    value: "soySauce",
    label: "Soy Sauce",
    source:
      "https://www.nutritionvalue.org/Soy_sauce_41420300_nutritional_value.html?size=100+g",
    proteinPer100g: 8.1,
    caloriePer100g: 53,
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

export const optionalRequirementOptions = [
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

export type MicroNutrient = {
  vitaminA: number;
  vitaminB1: number; // Thiamin
  vitaminB2: number; // Riboflavin
  vitaminB3: number; // Niacin
  vitaminB5: number; // Pantothenic Acid
  vitaminB6: number;
  vitaminB7: number; // Biotin
  vitaminB9: number; // Folate (aka Folic Acid)
  vitaminB12: number;
  vitaminC: number;
  vitaminD: number;
  vitaminE: number;
  vitaminK: number;
  calcium: number;
  chloride: number;
  choline: number;
  chromium: number;
  copper: number;
  fiber: number;
  iodine: number;
  iron: number;
  magnesium: number;
  manganese: number;
  molybdenum: number;
  phosphorus: number;
  potassium: number;
  selenium: number;
  sodium: number;
  zinc: number;
};

export const recommendedMicroNutrients: MicroNutrient = {
  // source: https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels
  // in grams
  vitaminA: 0.0009,
  vitaminB1: 0.0012, // Thiamin
  vitaminB2: 0.0013, // Riboflavin
  vitaminB3: 0.016, // Niacin
  vitaminB5: 0.005, // Pantothenic Acid
  vitaminB6: 0.0017,
  vitaminB7: 0.00003, // Biotin
  vitaminB9: 0.0004, // Folate (aka Folic Acid)
  vitaminB12: 0.0000024,
  vitaminC: 0.09,
  vitaminD: 0.00002,
  vitaminE: 0.015,
  vitaminK: 0.00012,
  calcium: 1.3,
  chloride: 2.3,
  choline: 0.55,
  chromium: 0.000035,
  copper: 0.0009,
  fiber: 28,
  iodine: 0.00015,
  iron: 0.018,
  magnesium: 0.42,
  manganese: 0.0023,
  molybdenum: 0.000045,
  phosphorus: 1.25,
  potassium: 4.7,
  selenium: 0.000055,
  sodium: 2.3,
  zinc: 0.011,
};
