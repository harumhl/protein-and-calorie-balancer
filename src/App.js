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
    value: "chickenBreast",
    label: "Chicken Breast",
    source:
      "https://www.nutritionvalue.org/Chicken%2C_raw%2C_meat_only%2C_boneless%2C_skinless%2C_breast%2C_broiler_or_fryers_nutritional_value.html?size=100%20g",
    proteinPer100g: 23,
    caloriePer100g: 120,
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
      "https://www.nutritionvalue.org/Pork%2C_raw%2C_separable_lean_and_fat%2C_boneless%2C_sirloin_%28chops_or_roasts%29%2C_loin%2C_fresh_nutritional_value.html?size=100%20g",
    proteinPer100g: 22,
    caloriePer100g: 133,
  },
  {
    value: "porkChop",
    label: "Pork Chop",
    source:
      "https://www.nutritionvalue.org/Pork%2C_raw%2C_separable_lean_only%2C_boneless%2C_top_loin_%28chops%29%2C_loin%2C_fresh_nutritional_value.html?size=100%20g",
    proteinPer100g: 22,
    caloriePer100g: 127,
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
  {
    value: "oliveOil",
    label: "Olive Oil",
    source:
      "https://www.nutritionvalue.org/Egg%2C_fresh%2C_raw%2C_white_nutritional_value.html?size=100%20g",
    proteinPer100g: 0,
    caloriePer100g: 40,
  },
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
    value: "cabbage",
    label: "Cabbage",
    source:
      "https://www.nutritionvalue.org/Cabbage%2C_raw_nutritional_value.html?size=100%20g",
    proteinPer100g: 1.3,
    caloriePer100g: 25,
  },
  {
    value: "garlic",
    label: "Garlic",
    source:
      "https://www.nutritionvalue.org/Garlic%2C_raw_nutritional_value.html?size=100+g",
    proteinPer100g: 6.4,
    caloriePer100g: 149,
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
          return typeof str === "string" ? parseInt(str) : str;
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
      <div>
        <h2>One-Meal Goal</h2>
        Minimum protein:
        <input
          type="number"
          value={minProtein}
          onChange={(e) =>
            setMinProtein(
              typeof e.target.value === "string"
                ? parseInt(e.target.value)
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
                ? parseInt(e.target.value)
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
        <a href="https://www.nutritionvalue.org/">
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
                                ? parseInt(e.target.value)
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
                          {option.label}: {Math.round(runResult[option.value])}g
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
            <a href="https://brilliant.org/wiki/linear-programming/">
              Good resources
            </a>
            <br />
            <img
              src="https://ds055uzetaobb.cloudfront.net/brioche/uploads/MyatSFk0x6-inequality-constraints.png?width=4000"
              style={{ width: "50%" }}
            ></img>
          </>
        )}
      </div>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
