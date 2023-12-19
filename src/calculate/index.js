import { useState } from "react";
import { toast } from "react-toastify";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faCopy } from "@fortawesome/free-solid-svg-icons";
import { faChrome } from "@fortawesome/free-brands-svg-icons";
import "react-toastify/dist/ReactToastify.css";

import optimize from "./optimizer";
import {
  meatOptions,
  veggieOptions,
  optionalRequirementOptions,
  recommendedMicroNutrients,
} from "./options";

function handleExportImport(
  type,
  {
    toBeImported, // optional
    minProtein,
    maxCalorie,
    setMinProtein,
    setMaxCalorie,
    selectedMeatOptions,
    selectedVeggieOptions,
    setSelectedMeatOptions,
    setSelectedVeggieOptions,
  }
) {
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

function Calculate() {
  const [minProtein, setMinProtein] = useState(30);
  const [maxCalorie, setMaxCalorie] = useState(600);
  const [micronutrientPercent, setMicronutrientPercent] = useState(false);
  const [selectedMeatOptions, setSelectedMeatOptions] = useState([]);
  const [selectedVeggieOptions, setSelectedVeggieOptions] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [runResult, setRunResult] = useState(null);
  const [learnMore, setLearnMore] = useState(false);

  const forImportAndExport = {
    minProtein,
    maxCalorie,
    setMinProtein,
    setMaxCalorie,
    selectedMeatOptions,
    selectedVeggieOptions,
    setSelectedMeatOptions,
    setSelectedVeggieOptions,
  };

  return (
    <>
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
        <button onClick={() => setSelectedMeatOptions(meatOptions)}>All</button>
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
        <button onClick={() => setSelectedVeggieOptions(veggieOptions)}>
          All
        </button>
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
        Percent of Micronutrients:
        <input
          type="number"
          value={micronutrientPercent}
          onChange={(e) => {
            const value =
              typeof e.target.value === "string"
                ? parseFloat(e.target.value)
                : e.target.value;
            setMicronutrientPercent(value); // TODO only allow 0~100?
          }}
        />
        %
        <br />
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
                  selectedVeggieOptions,
                  {
                    micronutrientPercent,
                  }
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
              result = {
                ...result,
                ...Object.keys(recommendedMicroNutrients).reduce(
                  // Get micronutrient in %
                  (acc, currNutrientKey) => {
                    const nutrientInGram = [
                      ...meatOptions,
                      ...veggieOptions,
                    ].reduce((acc2, currOption) => {
                      return result[currOption.value] &&
                        currOption[`${currNutrientKey}Per100g`]
                        ? acc2 +
                            (currOption[`${currNutrientKey}Per100g`] / 100.0) *
                              result[currOption.value]
                        : acc2;
                    }, 0);
                    return {
                      ...acc,
                      [currNutrientKey]: Math.round(
                        (nutrientInGram /
                          recommendedMicroNutrients[currNutrientKey]) *
                          100
                      ),
                    };
                  },
                  {}
                ),
              };
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
                  {micronutrientPercent > 0 &&
                    micronutrientPercent <= 100 &&
                    Object.keys(recommendedMicroNutrients).map(
                      (nutrientKey) => {
                        return (
                          <li>
                            {nutrientKey}: {runResult[nutrientKey]}%
                          </li>
                        );
                      }
                    )}
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
            const content = handleExportImport("export", forImportAndExport);
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
            const content = handleExportImport("export", forImportAndExport);
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
          onChange={(e) =>
            handleExportImport("import", {
              ...forImportAndExport,
              toBeImported: e.target.value,
            })
          }
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
            handleExportImport("import", {
              ...forImportAndExport,
              toBeImported: content,
            });
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
    </>
  );
}

export default Calculate;
