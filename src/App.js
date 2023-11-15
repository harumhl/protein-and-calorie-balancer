import { useState } from "react";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faCopy } from "@fortawesome/free-solid-svg-icons";
import { faChrome } from "@fortawesome/free-brands-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import optimize from "./optimizer";

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
    source: "https://www.nutritionvalue.org/Celery%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 0.7,
    caloriePer100g: 14,
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
    value: "worcestershireSauce",
    label: "Worcestershire sauce",
    source:
      "https://www.nutritionvalue.org/Worcestershire_sauce_41420450_nutritional_value.html?size=100+g",
    proteinPer100g: 0,
    caloriePer100g: 77,
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

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const [minProtein, setMinProtein] = useState(30);
  const [maxCalorie, setMaxCalorie] = useState(600);
  const [selectedMeatOptions, setSelectedMeatOptions] = useState([]);
  const [selectedVeggieOptions, setSelectedVeggieOptions] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [runResult, setRunResult] = useState(null);
  const [learnMore, setLearnMore] = useState(false);

  function handleExportImport(type, toBeImported) {
    let result;
    switch (type) {
      case "export":
        const requirements = [
          ...selectedMeatOptions,
          ...selectedVeggieOptions,
        ].map((o) =>
          o.constraintType && o.constraintValue
            ? `${o.value}'${o.constraintType}'${o.constraintValue}`
            : o.value
        );
        result =
          `minProtein:${minProtein};` +
          `maxCalorie:${maxCalorie};` +
          (requirements.length > 0 ? `requirements:${requirements};` : "");
        break;
      case "import":
        function stringToNumber(str) {
          return typeof str === "string" ? parseFloat(str) : str;
        }
        for (const elem of toBeImported.split(";")) {
          const [key, value] = elem.split(":");
          switch (key) {
            case "minProtein":
              setMinProtein(stringToNumber(value));
              break;
            case "maxCalorie":
              setMaxCalorie(stringToNumber(value));
              break;
            case "requirements":
              const meats = [];
              const veggies = [];
              for (const requirement of value.split(",")) {
                const [option, constraintType, constraintValue] =
                  requirement.split("'");
                const meat = meatOptions.find((o) => o.value === option);
                if (meat) {
                  meats.push({
                    ...meat,
                    constraintType,
                    constraintValue,
                  });
                } else {
                  const veggie = veggieOptions.find((o) => o.value === option);
                  veggies.push({ ...veggie, constraintType, constraintValue });
                }
              }
              setSelectedMeatOptions(meats);
              setSelectedVeggieOptions(veggies);
              break;
            default:
              break;
          }
        }
        break;
      default:
        break;
    }
    return result;
  }

  return (
    <div className="App">
      <h1>Protein And Calorie Balancer</h1>
      <div
        style={{
          float: "right",
          position: "absolute",
          right: 0,
          paddingRight: "10px",
        }}
      >
        <Select
          className="requirement-dropdown-medium"
          style={{ width: "150px" }}
          defaultValue={[]}
          onChange={setSelectedOption}
          options={[...meatOptions, ...veggieOptions]}
          isSearchable={true}
          // TODO make it mobile friendly
          // TODO display the whole table and make it sortable
          placeholder="Ingredient calorie & protein"
        />
        {selectedOption && (
          <div>
            <table style={{ float: "right", borderCollapse: 'collapse', padding: '5px' }}>
              <thead>
                <tr>
                  <td style={{ border: "1px solid #000000" }}>
                    Calorie per 100g
                  </td>
                  <td style={{ border: "1px solid #000000" }}>
                    Protein per 100g
                  </td>
                  <td style={{ border: "1px solid #000000" }}>source</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: "1px solid #000000" }}>
                    {selectedOption.caloriePer100g}
                  </td>
                  <td style={{ border: "1px solid #000000" }}>
                    {selectedOption.proteinPer100g}
                  </td>
                  <td style={{ border: "1px solid #000000" }}>
                    <a
                      href={`${selectedOption.source}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      link
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div>
        <h2>One-Meal Goal</h2>
        Minimum protein:
        <input
          type="number"
          value={minProtein}
          onChange={(e) =>
            setMinProtein(
              typeof e.target.value === "string"
                ? parseFloat(e.target.value)
                : e.target.value
            )
          }
        />
        g
        <br />
        Maximum calorie:
        <input
          type="number"
          value={maxCalorie}
          onChange={(e) =>
            setMaxCalorie(
              typeof e.target.value === "string"
                ? parseFloat(e.target.value)
                : e.target.value
            )
          }
        />
        kcal
        <h6>Derive Per-Meal protein and calorie goal from Daily Goal</h6>
        Not Available Yet
      </div>
      <div>
        <h2>Requirements</h2>
        <header>What ingredients can be included in your diet?</header>
        "Meats" (aka protein source):
        <Select
          className="requirement-dropdown"
          // TODO select all
          defaultValue={selectedMeatOptions}
          value={selectedMeatOptions}
          onChange={setSelectedMeatOptions}
          options={meatOptions}
          isMulti={true}
          isSearchable={true}
        />
        <br />
        "Veggies" (aka others):
        <Select
          className="requirement-dropdown"
          defaultValue={selectedVeggieOptions}
          value={selectedVeggieOptions}
          onChange={setSelectedVeggieOptions}
          options={veggieOptions}
          isMulti={true}
          isSearchable={true}
        />
        <br />
        source (consumed on Nov 2023):{" "}
        <a
          href="https://www.nutritionvalue.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.nutritionvalue.org/
        </a>
      </div>
      <div>
        <h2>Optional Requirements</h2>
        <header>
          Any requirement on how much you can eat or how much you have to eat?
        </header>
        {[...selectedMeatOptions, ...selectedVeggieOptions].map((option) => {
          return (
            <div key={option.value}>
              {option.label}{" "}
              <Select
                className="requirement-dropdown-narrow"
                value={optionalRequirementOptions.find(
                  (o) => o.value === option.constraintType
                )}
                onChange={(maxMinSelection) => {
                  const [selectedOptions, func] = meatOptions.some(
                    (o) => o.value === option.value
                  )
                    ? [selectedMeatOptions, setSelectedMeatOptions]
                    : [selectedVeggieOptions, setSelectedVeggieOptions];
                  func(
                    selectedOptions.map((o) => {
                      return o.value !== option.value
                        ? o
                        : {
                            ...o,
                            constraintType: maxMinSelection.value,
                          };
                    })
                  );
                }}
                options={optionalRequirementOptions}
              />
              <input
                type="number"
                value={option.constraintValue || 0}
                onChange={(e) => {
                  const [selectedOptions, func] = meatOptions.some(
                    (o) => o.value === option.value
                  )
                    ? [selectedMeatOptions, setSelectedMeatOptions]
                    : [selectedVeggieOptions, setSelectedVeggieOptions];
                  func(
                    selectedOptions.map((o) => {
                      return o.value !== option.value
                        ? o
                        : {
                            ...o,
                            constraintValue:
                              typeof e.target.value === "string"
                                ? parseFloat(e.target.value)
                                : e.target.value,
                          };
                    })
                  );
                }}
              ></input>
              g
            </div>
          );
        })}
      </div>
      <div>
        <h2>Run and View Results</h2>
        {isRunning ? (
          <FontAwesomeIcon icon={faSpinner} spin={true} />
        ) : (
          <button
            onClick={async () => {
              if (!minProtein || !maxCalorie) {
                toast.error(
                  "Please enter a minimum protein and maximum calorie"
                );
                return;
              }
              if (!selectedMeatOptions || !selectedVeggieOptions) {
                toast.error("Please select at least one meat and one veggie");
                return;
              }
              setIsRunning(true);
              let result;
              try {
                result = await optimize(
                  minProtein,
                  maxCalorie,
                  selectedMeatOptions,
                  selectedVeggieOptions
                );
              } catch (e) {
                console.error(e);
                return;
              } finally {
                setIsRunning(false);
              }
              // Further processing
              result.calorie = Math.round(result.result);
              result.protein = Math.round(
                [...meatOptions, ...veggieOptions].reduce((acc, currOption) => {
                  return result[currOption.value]
                    ? acc +
                        (currOption.proteinPer100g / 100.0) *
                          result[currOption.value]
                    : acc;
                }, 0)
              );
              setRunResult(result);
            }}
          >
            Run
          </button>
        )}
        {runResult && (
          <div>
            Run Result: <br />
            {runResult.feasible ? (
              <>
                <ul className="result-list">
                  <li>Total Calorie: {runResult.calorie}kcal</li>
                  <li>Total Protein: {runResult.protein}g</li>
                </ul>
                <ul className="result-list">
                  {[...meatOptions, ...veggieOptions].map((option) => {
                    // Display how much each option to consume
                    return (
                      runResult[option.value] && (
                        <li key={`result-${option.value}`}>
                          {/* Round to the first decimal e.g. 123.456 -> 123.4 */}
                          {option.label}:{" "}
                          {Math.round(runResult[option.value] * 10) / 10}g
                        </li>
                      )
                    );
                  })}
                </ul>
              </>
            ) : (
              <ul className="result-list">
                <li>Not Feasible</li>
              </ul>
            )}
            <br />
          </div>
        )}
      </div>
      <div>
        <h2>Export/Import</h2>
        Export inputs:
        <FontAwesomeIcon
          icon={faCopy}
          size="2x"
          style={{ cursor: "pointer" }}
          onClick={() => {
            const content = handleExportImport("export");
            navigator.clipboard.writeText(content);
            toast.success("Copied to clipboard");
          }}
          title="Click to copy"
        />
        <br />
        Save to current browser:
        <FontAwesomeIcon
          icon={faChrome}
          size="2x"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (localStorage.getItem("protein-and-calorie-balancer")) {
              const shouldProceed = window.confirm(
                "This will overwrite the existing save. Proceed?"
              );
              if (!shouldProceed) {
                return;
              }
            }
            const content = handleExportImport("export");
            localStorage.setItem("protein-and-calorie-balancer", content);
            toast.success("Saved to browser");
          }}
          title="Click to save"
        />
        <br />
        Import inputs:
        <input
          type="text"
          style={{ width: "96%" }}
          onChange={(e) => handleExportImport("import", e.target.value)}
        ></input>
        <br />
        Load from the browser:
        <FontAwesomeIcon
          icon={faChrome}
          size="2x"
          style={{ cursor: "pointer" }}
          onClick={() => {
            const content = localStorage.getItem(
              "protein-and-calorie-balancer"
            );
            handleExportImport("import", content);
          }}
          title="Click to load"
        />
      </div>
      <div>
        This uses Linear Programming to solve the problem.
        <button onClick={() => setLearnMore(!learnMore)}>Learn more</button>
        {learnMore && (
          <>
            <br />
            Basically, a linear program is a program where you try to find the
            minimum (or maximum) of multiple linear functions, subject to some
            constraints.
            <br />
            In below chart, the intersection of two lines would be considered
            the optimal solution.
            <br />
            <a
              href="https://brilliant.org/wiki/linear-programming/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Good resources
            </a>
            <br />
            <img
              src="https://ds055uzetaobb.cloudfront.net/brioche/uploads/MyatSFk0x6-inequality-constraints.png?width=4000"
              alt="linear programming example chart"
              style={{ width: "50%" }}
            ></img>
          </>
        )}
      </div>
      <div>
        Source and Credit:{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/harumhl/protein-and-calorie-balancer"
        >
          https://github.com/harumhl/protein-and-calorie-balancer
        </a>
      </div>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
