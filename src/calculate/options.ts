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

type AddSuffix<T, Suffix extends string> = {
  [K in keyof T as `${string & K}${Suffix}`]?: T[K];
};

export type Option = {
  value: string;
  label: string;
  source: string;
  proteinPer100g: number;
  caloriePer100g: number;
  fiberPer100g: number | null; // null means unknown
  // tspToGram?: number;
} & AddSuffix<Omit<MicroNutrient, "fiber">, "Per100g">; // vitaminAPer100g, ironPer100g, etc.

const fastFoodOptions: Option[] = [
  // TODO Per100g doesn't make sense here, I need per item
  {
    value: "mightyFineHalfPoundBurgerWithCheese",
    label: "Mighty Fine - half pound burger with cheese",
    source:
      "https://www.mynetdiary.com/food/calories-in-half-lb-burger-with-cheese-by-mighty-fine-burgers-serving-18212406-0.html",
    // secondary source: https://www.carbmanager.com/food-detail/md:9a748171992a91d34f2ff76b35e38f44/half-lb-burger-with-cheese
    proteinPer100g: 60, // per burger
    caloriePer100g: 792, // per burger
    fiberPer100g: 3, // per burger
  },
  {
    value: "mightyFineCrinkleCutFrenchFries",
    label: "Mighty Fine - crinkle cut french fries",
    source:
      "https://www.mynetdiary.com/food/calories-in-crinkle-cut-french-fries-by-mighty-fine-burgers-serving-18212411-0.html",
    // secondary source: https://www.carbmanager.com/food-detail/md:b664bc2a58d0bc42feb065933968b538/crinkle-cut-french-fries
    proteinPer100g: 9, // per fries bag
    caloriePer100g: 493, // per fries bag
    fiberPer100g: 2, // per fries bag
  },
  {
    value: "shakeShackSingleShackburger",
    label: "Shake Shack - single shackburger",
    source:
      "https://shakeshackmenu.net/wp-content/uploads/2025/01/Shake-Shack-Nutrition-Facts-2025.pdf",
    proteinPer100g: 29, // per burger
    caloriePer100g: 500, // per burger
    fiberPer100g: 0, // per burger
  },
  {
    value: "shakeShackDoubleShackburger",
    label: "Shake Shack - double shackburger",
    source:
      "https://shakeshackmenu.net/wp-content/uploads/2025/01/Shake-Shack-Nutrition-Facts-2025.pdf",
    proteinPer100g: 51, // per burger
    caloriePer100g: 760, // per burger
    fiberPer100g: 0, // per burger
  },
  {
    value: "shakeShackAvocadoBaconBurgerSingle",
    label: "Shake Shack - avocado bacon burger, single",
    source:
      "https://shakeshackmenu.net/wp-content/uploads/2025/01/Shake-Shack-Nutrition-Facts-2025.pdf",
    proteinPer100g: 36, // per burger
    caloriePer100g: 610, // per burger
    fiberPer100g: 2, // per burger
  },
  {
    value: "snoozeAMEateryStrawberryShortcakePancakes",
    label: "Snooze A.M. Eatery - strawberry shortcake pancakes",
    source:
      "https://www.mynetdiary.com/food/calories-in-strawberry-shortcake-pancakes-by-snooze-an-a-m-eatery-serving-40785822-0.html",
    proteinPer100g: 20, // per dish
    caloriePer100g: 910, // per dish
    fiberPer100g: 6, // per dish
  },
  {
    value: "snoozeAMEateryPineappleUpsideDownPancakes",
    label: "Snooze A.M. Eatery - pineapple upside down pancakes",
    source:
      "https://www.mynetdiary.com/food/calories-in-pineapple-upside-down-pancakes-by-snooze-an-a-m-eatery-serving-23789311-0.html",
    proteinPer100g: 19, // per dish
    caloriePer100g: 1070, // per dish
    fiberPer100g: 2, // per dish
  },
  {
    value: "snoozeAMEateryPineappleUpsideDownPancakesFlight",
    label: "Snooze A.M. Eatery - pineapple upside down pancakes flight",
    source:
      "https://www.mynetdiary.com/food/calories-in-pineapple-upside-down-pancakes-flight-by-snooze-an-a-m-eatery-serving-23789333-0.html",
    proteinPer100g: 5, // per dish
    caloriePer100g: 310, // per dish
    fiberPer100g: 1, // per dish
  },
];

export const meatOptions: Option[] = [
  {
    value: "chickenBreastWithSkin",
    label: "Chicken Breast (with skin)",
    source:
      "https://www.nutritionvalue.org/Chicken%2C_raw%2C_meat_and_skin%2C_breast%2C_broilers_or_fryers_nutritional_value.html?size=100+g",
    proteinPer100g: 21,
    caloriePer100g: 172,
    fiberPer100g: 0,
  },
  {
    value: "chickenBreastWithoutSkin",
    label: "Chicken Breast (without skin)",
    source:
      "https://www.nutritionvalue.org/Chicken%2C_raw%2C_meat_only%2C_boneless%2C_skinless%2C_breast%2C_broiler_or_fryers_nutritional_value.html?size=100%20g",
    proteinPer100g: 23,
    caloriePer100g: 120,
    fiberPer100g: 0,
  },
  {
    value: "chickenThighWithSkin",
    label: "Chicken Thigh (with skin)",
    source:
      "https://www.nutritionvalue.org/Chicken%2C_raw%2C_meat_and_skin%2C_thigh%2C_broilers_or_fryers_nutritional_value.html?size=100+g",
    proteinPer100g: 17,
    caloriePer100g: 221,
    fiberPer100g: 0,
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
    fiberPer100g: 0,
  },
  {
    value: "groundPork",
    label: "Ground Pork",
    source:
      "https://www.nutritionvalue.org/Pork%2C_raw%2C_ground%2C_fresh_nutritional_value.html?size=100%20g",
    proteinPer100g: 17,
    caloriePer100g: 263,
    fiberPer100g: 0,
  },
  {
    value: "porkSirloin",
    label: "Pork Sirloin",
    source:
      "https://www.nutritionvalue.org/Pork%2C_raw%2C_separable_lean_and_fat%2C_bone-in%2C_sirloin_%28chops_or_roasts%29%2C_loin%2C_fresh_nutritional_value.html",
    proteinPer100g: 23,
    caloriePer100g: 190,
    fiberPer100g: 0,
  },
  {
    value: "porkLoin",
    label: "Pork Loin",
    source:
      "https://www.nutritionvalue.org/Pork%2C_raw%2C_separable_lean_and_fat%2C_whole%2C_loin%2C_fresh_nutritional_value.html",
    proteinPer100g: 22,
    caloriePer100g: 224,
    fiberPer100g: 0,
  },
  {
    value: "porkChop",
    label: "Pork Chop",
    source:
      "https://www.nutritionvalue.org/Pork%2C_raw%2C_separable_lean_and_fat%2C_bone-in%2C_center_loin_%28chops%29%2C_loin%2C_fresh_nutritional_value.html",
    proteinPer100g: 23,
    caloriePer100g: 192,
    fiberPer100g: 0,
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
    fiberPer100g: 0,
  },
  {
    value: "italianPorkSausage",
    label: "Italian Pork Sausage",
    source:
      "https://www.nutritionvalue.org/Sausage%2C_raw%2C_mild%2C_pork%2C_Italian_nutritional_value.html?size=100+g",
    proteinPer100g: 14,
    caloriePer100g: 290,
    fiberPer100g: 0,
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
    fiberPer100g: 0,
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
    fiberPer100g: 0,
  },
  {
    value: "eggWhite",
    label: "Egg White",
    source:
      "https://www.nutritionvalue.org/Egg%2C_fresh%2C_raw%2C_white_nutritional_value.html?size=100%20g",
    proteinPer100g: 11,
    caloriePer100g: 52,
    fiberPer100g: 0,
  },
  {
    value: "tofu",
    label: "Tofu",
    source:
      "https://www.nutritionvalue.org/Tofu%2C_prepared_with_calcium_sulfate%2C_regular%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 8.1,
    caloriePer100g: 76,
    fiberPer100g: 0.3,
  },
  ...fastFoodOptions,
  // H-E-B specific
  {
    value:
      "greatCatchFrozenPeeledDeveinedTailOffMediumCookedShrimp71-90ctPerLb",
    label:
      "Great Catch Frozen Peeled Deveined Tail-Off Medium Cooked Shrimp, 71 - 90 ct/lb",
    source:
      "https://www.heb.com/product-detail/great-catch-frozen-peeled-deveined-tail-off-medium-cooked-shrimp-71-90-ct-lb/1803322",
    proteinPer100g: 15.28538351,
    caloriePer100g: 70.5479239,
    fiberPer100g: 0,
  },
  {
    value: "hebGrassFedFinishedGroundBeef93PercentLean",
    label: "H-E-B Grass Fed & Finished Ground Beef, 93% Lean",
    source:
      "https://www.heb.com/product-detail/h-e-b-grass-fed-finished-ground-beef-93-lean/5569554",
    proteinPer100g: 20.53571429,
    caloriePer100g: 151.78571429,
    fiberPer100g: 0,
  },
  {
    value: "kiolbassaBeefHickorySmokedSausage",
    label: "Kiolbassa Beef Hickory Smoked Sausage",
    source:
      "https://www.heb.com/product-detail/kiolbassa-beef-hickory-smoked-sausage/1622004",
    proteinPer100g: 15.19493746,
    caloriePer100g: 293.04522234,
    fiberPer100g: 0,
  },
];

const fruitOptions: Option[] = [
  {
    value: "watermelon",
    label: "Watermelon",
    source:
      "https://www.nutritionvalue.org/Watermelon%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 0.6,
    caloriePer100g: 30,
    fiberPer100g: 0.4,
  },
  {
    value: "banana",
    label: "Banana",
    source:
      "https://www.nutritionvalue.org/Bananas%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 1.1,
    caloriePer100g: 89,
    fiberPer100g: 2.6,
  },
  {
    value: "raspberry",
    label: "Raspberry",
    source:
      "https://www.nutritionvalue.org/Raspberries%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 1.2,
    caloriePer100g: 52,
    fiberPer100g: 6.5,
  },
  {
    value: "appleWithoutSkin",
    label: "Apple (without skin)",
    source:
      "https://www.nutritionvalue.org/Apples%2C_without_skin%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 0.3,
    caloriePer100g: 48,
    fiberPer100g: 1.3,
  },
  {
    value: "appleWithSkin",
    label: "Apple (with skin)",
    source:
      "https://www.nutritionvalue.org/Apples%2C_with_skin%2C_raw_nutritional_value.html?size=100%20g",
    proteinPer100g: 0.3,
    caloriePer100g: 52,
    fiberPer100g: 2.4,
  },
  {
    value: "date",
    label: "Date",
    source:
      "https://www.nutritionvalue.org/Date_62110100_nutritional_value.html?size=100+g",
    proteinPer100g: 2.5,
    caloriePer100g: 282,
    fiberPer100g: 8,
  },
  {
    value: "fig",
    label: "Fig",
    source:
      "https://www.nutritionvalue.org/Figs%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 0.8,
    caloriePer100g: 74,
    fiberPer100g: 2.9,
  },
  {
    value: "cherry",
    label: "Cherry",
    source:
      "https://www.nutritionvalue.org/Cherries%2C_raw%2C_sweet_nutritional_value.html?size=100%20g",
    proteinPer100g: 1.1,
    caloriePer100g: 63,
    fiberPer100g: 2.1,
  },
  {
    value: "persimmon",
    label: "Persimmon",
    source:
      "https://www.nutritionvalue.org/Persimmon%2C_raw_63139010_nutritional_value.html?size=100+g",
    proteinPer100g: 0.6,
    caloriePer100g: 70,
    fiberPer100g: 3.6,
  },
  {
    value: "blueberry",
    label: "Blueberry",
    source:
      "https://www.nutritionvalue.org/Blueberries%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 0.7,
    caloriePer100g: 57,
    fiberPer100g: 2.4,
  },
  {
    value: "blackberry",
    label: "Blackberry",
    source:
      "https://www.nutritionvalue.org/Blackberries%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 1.4,
    caloriePer100g: 43,
    fiberPer100g: 5.3,
  },
  {
    value: "cantaloupe",
    label: "Cantaloupe",
    source:
      "https://www.nutritionvalue.org/Melons%2C_raw%2C_cantaloupe_nutritional_value.html?size=100+g",
    proteinPer100g: 0.8,
    caloriePer100g: 34,
    fiberPer100g: 0.9,
  },
  {
    value: "strawberry",
    label: "Strawberry",
    source:
      "https://www.nutritionvalue.org/Strawberries%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 0.7,
    caloriePer100g: 32,
    fiberPer100g: 2,
  },
  {
    value: "pineapple",
    label: "Pineapple",
    source:
      "https://www.nutritionvalue.org/Pineapple%2C_all_varieties%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 0.5,
    caloriePer100g: 50,
    fiberPer100g: 1.4,
  },
  {
    value: "tangerine",
    label: "Tangerine (or mandarin)",
    source:
      "https://www.nutritionvalue.org/Tangerines%2C_raw%2C_%28mandarin_oranges%29_nutritional_value.html?size=100+g",
    proteinPer100g: 0.8,
    caloriePer100g: 53,
    fiberPer100g: 1.8,
  },
  {
    value: "orange",
    label: "Orange",
    source:
      "https://www.nutritionvalue.org/Oranges%2C_navels%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 0.9,
    caloriePer100g: 49,
    fiberPer100g: 2.2,
  },
  {
    value: "mango",
    label: "Mango",
    source:
      "https://www.nutritionvalue.org/Mangos%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 0.8,
    caloriePer100g: 60,
    fiberPer100g: 1.6,
  },
  {
    value: "kiwi",
    label: "Kiwi",
    source:
      "https://www.nutritionvalue.org/Kiwi_fruit%2C_raw_63126500_nutritional_value.html?size=100+g",
    proteinPer100g: 1.1,
    caloriePer100g: 58,
    fiberPer100g: 3,
  },
  {
    value: "grape",
    label: "Grape",
    source:
      "https://www.nutritionvalue.org/Grapes%2C_raw%2C_red_or_green_%28European_type%2C_such_as_Thompson_seedless%29_nutritional_value.html?size=100+g",
    proteinPer100g: 0.7,
    caloriePer100g: 69,
    fiberPer100g: 0.9,
  },
  // H-E-B specific
  {
    value: "hebFrozenBananaSlices",
    label: "H-E-B Frozen Banana Slices",
    source:
      "https://www.heb.com/product-detail/h-e-b-frozen-banana-slices/2495036",
    proteinPer100g: 1.42857143,
    caloriePer100g: 92.85714286,
    fiberPer100g: 1.42857143,
  },
  {
    value: "hebFrozenStrawberriesAndBananas",
    label: "H-E-B Frozen Strawberries & Bananas",
    source:
      "https://www.heb.com/product-detail/h-e-b-frozen-strawberries-bananas/1495186",
    proteinPer100g: 0.71428571,
    caloriePer100g: 71.42857143,
    fiberPer100g: 2.14285714,
  },
  {
    value: "hebFrozenRaspberries",
    label: "H-E-B Frozen Raspberries",
    source:
      "https://www.heb.com/product-detail/h-e-b-frozen-raspberries/125410",
    proteinPer100g: 1.42857143,
    caloriePer100g: 57.14285714,
    fiberPer100g: 3.57142857,
  },
  {
    value: "hebFrozenBlueberries",
    label: "H-E-B Frozen Blueberries",
    source:
      "https://www.heb.com/product-detail/h-e-b-frozen-blueberries/126221",
    proteinPer100g: 0,
    caloriePer100g: 53.09734513,
    fiberPer100g: 2.65486726,
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
    fiberPer100g: 0,
    // tspToGram: 4.5,
  },
  {
    value: "butter",
    label: "Butter",
    source:
      "https://www.nutritionvalue.org/Butter%2C_without_salt_nutritional_value.html?size=100+g",
    proteinPer100g: 0.9,
    caloriePer100g: 717,
    fiberPer100g: 0,
  },
  {
    value: "ghee",
    label: "Ghee",
    source:
      "https://www.nutritionvalue.org/Butter%2C_Clarified_butter_%28ghee%29_nutritional_value.html?size=100+g",
    proteinPer100g: 0,
    caloriePer100g: 900,
    fiberPer100g: 0,
  },
  {
    value: "creamCheese",
    label: "Cream cheese",
    source:
      "https://www.nutritionvalue.org/Cheese%2C_cream_nutritional_value.html?size=100+g",
    proteinPer100g: 6.2,
    caloriePer100g: 350,
    fiberPer100g: 0,
  },
  {
    value: "cottageCheese",
    label: "Cottage cheese",
    source:
      "https://www.nutritionvalue.org/Cottage_cheese_1028783_nutritional_value.html?size=100+g",
    proteinPer100g: 9.7,
    caloriePer100g: 88,
    fiberPer100g: 0,
  },
  {
    value: "fetaCheese",
    label: "Feta cheese",
    source:
      "https://www.nutritionvalue.org/Cheese%2C_Feta_14104400_nutritional_value.html?size=100+g",
    proteinPer100g: 14,
    caloriePer100g: 265,
    fiberPer100g: 0,
  },
  {
    value: "cheddarCheese",
    label: "Cheddar cheese",
    source:
      "https://www.nutritionvalue.org/Cheese%2C_cheddar_nutritional_value.html?size=100+g",
    proteinPer100g: 23,
    caloriePer100g: 403,
    fiberPer100g: 0,
  },
  {
    value: "americanCheese",
    label: "American cheese",
    source:
      "https://www.nutritionvalue.org/Cheese%2C_restaurant%2C_American_747429_nutritional_value.html?size=100+g",
    proteinPer100g: 18,
    caloriePer100g: 375,
    fiberPer100g: null,
  },
  {
    value: "mozzarellaCheese",
    label: "Mozzarella cheese",
    source:
      "https://www.nutritionvalue.org/Cheese%2C_whole_milk%2C_mozzarella_nutritional_value.html?size=100+g",
    proteinPer100g: 22,
    caloriePer100g: 299,
    fiberPer100g: 0,
  },
  {
    value: "greekYogurt",
    label: "Greek Yogurt",
    source:
      "https://www.nutritionvalue.org/Yogurt%2C_whole_milk%2C_plain%2C_Greek_nutritional_value.html?size=100+g",
    proteinPer100g: 9,
    caloriePer100g: 97,
    fiberPer100g: 0,
  },
  {
    value: "milk",
    label: "Milk",
    source:
      "https://www.nutritionvalue.org/Whole_milk_735370_nutritional_value.html?size=100+g",
    proteinPer100g: 3.3,
    caloriePer100g: 62,
    fiberPer100g: 0,
  },
  {
    value: "avocado",
    label: "Avocado",
    source:
      "https://www.nutritionvalue.org/Avocado%2C_raw_63105010_nutritional_value.html?size=100+g",
    proteinPer100g: 2,
    caloriePer100g: 160,
    fiberPer100g: 6.7,
  },
  // Grains
  {
    value: "cookedShortGrainWhiteRice",
    label: "Cooked Short-Grain White Rice",
    source:
      "https://www.nutritionvalue.org/Rice%2C_unenriched%2C_cooked%2C_short-grain%2C_white_nutritional_value.html?size=100+g",
    proteinPer100g: 2.4,
    caloriePer100g: 130,
    fiberPer100g: null,
  },
  {
    value: "cookedMediumGrainWhiteRice",
    label: "Cooked Medium-Grain White Rice",
    source:
      "https://www.nutritionvalue.org/Rice%2C_cooked%2C_enriched%2C_medium-grain%2C_white_nutritional_value.html?size=100+g",
    proteinPer100g: 2.4,
    caloriePer100g: 130,
    fiberPer100g: null,
  },
  {
    value: "cookedLongGrainWhiteRice",
    label: "Cooked Long-Grain White Rice",
    source:
      "https://www.nutritionvalue.org/Rice%2C_cooked%2C_enriched%2C_regular%2C_long-grain%2C_white_nutritional_value.html?size=100+g",
    proteinPer100g: 2.7,
    caloriePer100g: 130,
    fiberPer100g: null,
  },
  // Veggies
  {
    value: "onion",
    label: "Onion",
    source:
      "https://www.nutritionvalue.org/Onions%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 1.1,
    caloriePer100g: 40,
    fiberPer100g: 1.7,
  },
  {
    value: "carrot",
    label: "Carrot",
    source:
      "https://www.nutritionvalue.org/Carrots%2C_raw_nutritional_value.html?size=100%20g",
    proteinPer100g: 0.9,
    caloriePer100g: 41,
    fiberPer100g: 2.8,
  },
  {
    value: "potato",
    label: "Potato",
    source:
      "https://www.nutritionvalue.org/Potatoes%2C_raw%2C_flesh_and_skin_nutritional_value.html?size=100+g",
    proteinPer100g: 2.1,
    caloriePer100g: 77,
    fiberPer100g: 2.1,
  },
  {
    value: "sweetPotato",
    label: "Sweet Potato",
    source:
      "https://www.nutritionvalue.org/Sweet_potato%2C_unprepared%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 1.6,
    caloriePer100g: 86,
    fiberPer100g: 3,
  },
  {
    value: "greenPeas",
    label: "Green Peas",
    source:
      "https://www.nutritionvalue.org/Peas%2C_raw%2C_green_nutritional_value.html?size=100+g",
    proteinPer100g: 5.4,
    caloriePer100g: 81,
    fiberPer100g: 5.7,
  },
  {
    value: "greenBeans",
    label: "Green Beans",
    source:
      "https://www.nutritionvalue.org/Beans%2C_raw%2C_green%2C_snap_nutritional_value.html",
    proteinPer100g: 1.8,
    caloriePer100g: 31,
    fiberPer100g: 2.7,
  },
  {
    value: "chickpea",
    label: "Chickpea",
    source:
      "https://www.nutritionvalue.org/Chickpeas_%28garbanzo_beans%2C_bengal_gram%29%2C_raw%2C_mature_seeds_nutritional_value.html?size=100%20g",
    proteinPer100g: 20,
    caloriePer100g: 378,
    fiberPer100g: 12,
  },
  {
    value: "edamamePrepared",
    label: "Edamame (prepared)",
    source:
      "https://www.nutritionvalue.org/Edamame%2C_prepared%2C_frozen_nutritional_value.html",
    proteinPer100g: 18,
    caloriePer100g: 188,
    fiberPer100g: 8.1,
  },
  {
    value: "hummus",
    label: "Hummus",
    source:
      "https://www.nutritionvalue.org/Hummus_554432_nutritional_value.html?size=100+g",
    proteinPer100g: 6.7,
    caloriePer100g: 167,
    fiberPer100g: 6.7,
  },
  {
    value: "lentilsBoiled",
    label: "Lentils (boiled)",
    source:
      "https://www.nutritionvalue.org/Lentils%2C_without_salt%2C_boiled%2C_cooked%2C_mature_seeds_nutritional_value.html?size=100+g",
    proteinPer100g: 9,
    caloriePer100g: 116,
    fiberPer100g: 7.9,
  },
  {
    value: "cabbage",
    label: "Cabbage",
    source:
      "https://www.nutritionvalue.org/Cabbage%2C_raw_nutritional_value.html?size=100%20g",
    proteinPer100g: 1.3,
    caloriePer100g: 25,
    fiberPer100g: 2.5,
  },
  {
    value: "redCabbage",
    label: "Red Cabbage",
    source:
      "https://www.nutritionvalue.org/Cabbage%2C_raw%2C_red_nutritional_value.html",
    proteinPer100g: 1.3,
    caloriePer100g: 28,
    fiberPer100g: 1.9,
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
    fiberPer100g: 1.6,
  },
  {
    value: "mushroom",
    label: "Mushroom",
    source:
      "https://www.nutritionvalue.org/Mushrooms%2C_raw%2C_white_nutritional_value.html?size=100+g",
    proteinPer100g: 3.1,
    caloriePer100g: 22,
    fiberPer100g: 1,
  },
  {
    value: "plantains",
    label: "Plantains",
    source:
      "https://www.nutritionvalue.org/Plantains%2C_raw%2C_green_nutritional_value.html?size=100+g",
    proteinPer100g: 1.3,
    caloriePer100g: 152,
    fiberPer100g: 2.2,
  },
  {
    value: "spinach",
    label: "Spinach",
    source:
      "https://www.nutritionvalue.org/Spinach%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 2.9,
    caloriePer100g: 23,
    fiberPer100g: 2.2,
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
    fiberPer100g: 5.7,
  },
  {
    value: "squashOrZucchini",
    label: "Squash/Zucchini",
    source:
      "https://www.nutritionvalue.org/Squash%2C_raw%2C_baby%2C_zucchini_nutritional_value.html?size=100+g",
    proteinPer100g: 2.7,
    caloriePer100g: 21,
    fiberPer100g: 1.1,
  },
  {
    value: "kale",
    label: "Kale",
    source:
      "https://www.nutritionvalue.org/Kale%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 2.9,
    caloriePer100g: 35,
    fiberPer100g: 4.1,
  },
  {
    value: "cauliflower",
    label: "Cauliflower",
    source:
      "https://www.nutritionvalue.org/Cauliflower%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 1.9,
    caloriePer100g: 25,
    fiberPer100g: 2,
  },
  {
    value: "brusselsSprout",
    label: "Brussels sprout",
    source:
      "https://www.nutritionvalue.org/Brussels_sprouts%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 3.4,
    caloriePer100g: 43,
    fiberPer100g: 3.8,
  },
  {
    value: "broccoli",
    label: "Broccoli",
    source:
      "https://www.nutritionvalue.org/Broccoli%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 2.8,
    caloriePer100g: 34,
    fiberPer100g: 2.6,
  },
  {
    value: "bellPeppers",
    label: "Bell Peppers",
    source:
      "https://www.nutritionvalue.org/Sliced_bell_peppers_574612_nutritional_value.html?size=100+g",
    proteinPer100g: 0.9,
    caloriePer100g: 26,
    fiberPer100g: 1.3,
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
    fiberPer100g: 2.1,
  },
  ...fruitOptions,
  // Seeds
  {
    value: "hempSeeds",
    label: "Hemp Seeds",
    source:
      "https://www.nutritionvalue.org/Seeds%2C_hulled%2C_hemp_seed_nutritional_value.html?size=100+g",
    proteinPer100g: 32,
    caloriePer100g: 553,
    fiberPer100g: 4,
  },
  {
    value: "chiaSeeds",
    label: "Chia Seeds",
    source:
      "https://www.nutritionvalue.org/Seeds%2C_dried%2C_chia_seeds_nutritional_value.html?size=100+g",
    proteinPer100g: 17,
    caloriePer100g: 486,
    fiberPer100g: 34,
    // tspToGram: 10.1/3,
  },
  {
    value: "quinoaUncooked",
    label: "Quinoa (uncooked)",
    source:
      "https://www.nutritionvalue.org/Quinoa%2C_uncooked_nutritional_value.html?size=100%20g",
    proteinPer100g: 14,
    caloriePer100g: 368,
    fiberPer100g: 7,
  },
  // Powder
  {
    value: "onionPowder",
    label: "Onion Powder",
    source:
      "https://www.nutritionvalue.org/Spices%2C_onion_powder_nutritional_value.html?size=100+g",
    proteinPer100g: 10,
    caloriePer100g: 341,
    fiberPer100g: 15,
  },
  {
    value: "garlicPowder",
    label: "Garlic Powder",
    source:
      "https://www.nutritionvalue.org/Spices%2C_garlic_powder_nutritional_value.html?size=100+g",
    proteinPer100g: 17,
    caloriePer100g: 331,
    fiberPer100g: 9,
  },
  // Condiments
  {
    value: "lemonJuice",
    label: "Lemon Juice",
    source:
      "https://www.nutritionvalue.org/Lemon_juice%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 0.4,
    caloriePer100g: 22,
    fiberPer100g: 0.3,
  },
  {
    value: "relish",
    label: "Relish",
    source:
      "https://www.nutritionvalue.org/Relish%2C_pickle_75503020_nutritional_value.html?size=100+g",
    proteinPer100g: 0.4,
    caloriePer100g: 130,
    fiberPer100g: 1.1,
  },
  {
    value: "mustard",
    label: "Mustard",
    source:
      "https://www.nutritionvalue.org/Mustard%2C_yellow%2C_prepared_nutritional_value.html?size=100+g",
    proteinPer100g: 3.7,
    caloriePer100g: 60,
    fiberPer100g: 4,
  },
  {
    value: "mayonnaise",
    label: "Mayonnaise",
    source:
      "https://www.nutritionvalue.org/Salad_dressing%2C_regular%2C_mayonnaise_nutritional_value.html?size=100+g",
    proteinPer100g: 1,
    caloriePer100g: 680,
    fiberPer100g: 0,
  },
  {
    value: "ketchup",
    label: "Ketchup",
    source:
      "https://www.nutritionvalue.org/Ketchup_74401010_nutritional_value.html?size=100+g",
    proteinPer100g: 1,
    caloriePer100g: 101,
    fiberPer100g: 0.3,
  },
  {
    value: "sriracha",
    label: "Sriracha",
    source:
      "https://www.nutritionvalue.org/Sauce%2C_sriracha%2C_hot_chile_nutritional_value.html?size=100+g",
    proteinPer100g: 1.9,
    caloriePer100g: 93,
    fiberPer100g: 2.2,
  },
  {
    value: "soySauce",
    label: "Soy Sauce",
    source:
      "https://www.nutritionvalue.org/Soy_sauce_41420300_nutritional_value.html?size=100+g",
    proteinPer100g: 8.1,
    caloriePer100g: 53,
    fiberPer100g: 0.8,
  },
  {
    value: "salsa",
    label: "Salsa",
    source:
      "https://www.nutritionvalue.org/Salsa_552834_nutritional_value.html?size=100+g",
    proteinPer100g: 0,
    caloriePer100g: 36,
    fiberPer100g: 0,
  },
  {
    value: "worcestershireSauce",
    label: "Worcestershire sauce",
    source:
      "https://www.nutritionvalue.org/Worcestershire_sauce_41420450_nutritional_value.html?size=100+g",
    proteinPer100g: 0,
    caloriePer100g: 77,
    fiberPer100g: 0,
  },
  {
    value: "honey",
    label: "Honey",
    source:
      "https://www.nutritionvalue.org/Honey_nutritional_value.html?size=100%20g",
    proteinPer100g: 0.3,
    caloriePer100g: 304,
    fiberPer100g: 0.2,
  },
  {
    value: "mapleSyrup",
    label: "Maple Syrup",
    source:
      "https://www.nutritionvalue.org/Syrups%2C_maple_nutritional_value.html?size=100+g",
    proteinPer100g: 0,
    caloriePer100g: 260,
    fiberPer100g: 0,
  },
  {
    value: "balsamicVinegar",
    label: "Balsamic Vinegar",
    source:
      "https://www.nutritionvalue.org/Vinegar%2C_balsamic_nutritional_value.html?size=100+g",
    proteinPer100g: 0.5,
    caloriePer100g: 88,
    fiberPer100g: null,
  },
  // Noodles
  {
    value: "oFoodKoreanStyleSweetPotatoGlassNoodles",
    label: "O'Food Korean-Style Sweet Potato Glass Noodles",
    source:
      "https://www.heb.com/product-detail/o-food-korean-style-sweet-potato-glass-noodles/2176980",
    proteinPer100g: 0,
    caloriePer100g: 350,
    fiberPer100g: 0.84,
  },
  // H-E-B specific
  {
    value: "hebFiberDietarySupplementPowder",
    label: "H-E-B Fiber Dietary Supplement Powder",
    source:
      "https://www.heb.com/product-detail/h-e-b-fiber-dietary-supplement-powder-16-8-oz/1803442",
    proteinPer100g: 0,
    caloriePer100g: 375,
    fiberPer100g: 75,
  },
  {
    value: "hebFrozenMixedVegetables",
    label: "H-E-B Frozen Mixed Vegetables",
    source:
      "https://www.heb.com/product-detail/h-e-b-frozen-mixed-vegetables/126127",
    proteinPer100g: 3.52941176,
    caloriePer100g: 70.58823529,
    fiberPer100g: 3.52941176,
  },
  {
    value: "pictsweetSweetPotatoes",
    label: "Pictsweet Sweet Potatoes",
    source:
      "https://www.heb.com/product-detail/pictsweet-sweet-potatoes/2469748",
    proteinPer100g: 1.76470588,
    caloriePer100g: 88.23529412,
    fiberPer100g: 3.52941176,
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
