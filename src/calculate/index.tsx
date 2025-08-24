import { useState } from "react";
import { toast } from "react-toastify";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faCopy } from "@fortawesome/free-solid-svg-icons";
import { faChrome } from "@fortawesome/free-brands-svg-icons";
import "react-toastify/dist/ReactToastify.css";

import { optimize } from "./optimizer";
import {
  type Option,
  meatOptions as mOptions,
  veggieOptions as vOptions,
  optionalRequirementOptions,
  recommendedMicroNutrients,
  type MicroNutrient,
} from "./options";
import { SolverResult } from "javascript-lp-solver";

export type OptionExtended = Option & {
  constraintType?: string | undefined;
  constraintValue?: number | string | undefined;
  caloriePerProtein?: number | undefined;
};

function handleExportImport(
  type: "export" | "import",
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
  }: {
    toBeImported?: string;
    minProtein: number;
    maxCalorie: number;
    setMinProtein: (value: number) => void;
    setMaxCalorie: (value: number) => void;
    selectedMeatOptions: OptionExtended[];
    selectedVeggieOptions: OptionExtended[];
    setSelectedMeatOptions: (options: OptionExtended[]) => void;
    setSelectedVeggieOptions: (options: OptionExtended[]) => void;
  }
) {
  function stringToNumber(str: string | number): number {
    return typeof str === "string" ? parseFloat(str) : str;
  }

  let result;
  switch (type) {
    case "export":
      const requirements: string[] = [
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
      if (!toBeImported) return;
      for (const elem of toBeImported?.split(";")) {
        const [key, value] = elem.split(":");
        if (!key || !value) continue;

        switch (key) {
          case "minProtein":
            setMinProtein(stringToNumber(value));
            break;
          case "maxCalorie":
            setMaxCalorie(stringToNumber(value));
            break;
          case "requirements":
            const meats: OptionExtended[] = [];
            const veggies: OptionExtended[] = [];
            for (const requirement of value.split(",")) {
              const [option, constraintType, constraintValue] =
                requirement.split("'");
              const meat = mOptions.find((o) => o.value === option);
              if (meat) {
                meats.push({
                  ...meat,
                  constraintType,
                  constraintValue,
                });
              } else {
                const veggie = vOptions.find((o) => o.value === option);
                if (veggie) {
                  veggies.push({
                    ...veggie,
                    value: veggie.value as string,
                    constraintType,
                    constraintValue,
                  });
                }
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

export function Calculate() {
  const meatOptions: OptionExtended[] = mOptions;
  const veggieOptions: OptionExtended[] = vOptions;

  const [minProtein, setMinProtein] = useState(30);
  const [maxCalorie, setMaxCalorie] = useState(600);
  const [micronutrientPercent, setMicronutrientPercent] = useState(0);
  const [selectedMeatOptions, setSelectedMeatOptions] = useState<
    OptionExtended[]
  >([]);
  const [selectedVeggieOptions, setSelectedVeggieOptions] = useState<
    OptionExtended[]
  >([]);
  const [isRunning, setIsRunning] = useState(false);
  const [runResult, setRunResult] = useState<SolverResult | null>(null);
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
          onChange={(newValues) => setSelectedMeatOptions([...newValues])}
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
          onChange={(newValues) => setSelectedVeggieOptions([...newValues])}
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
                            constraintType: maxMinSelection?.value,
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
              let result: SolverResult;
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
                [...meatOptions, ...veggieOptions].reduce(
                  (acc, currOption: Option) => {
                    const proteinAmount = result[currOption.value];
                    return typeof proteinAmount === "number"
                      ? acc +
                          (currOption.proteinPer100g / 100.0) * proteinAmount
                      : acc;
                  },
                  0
                )
              );
              result = {
                ...result,
                ...Object.keys(recommendedMicroNutrients).reduce(
                  // Get micronutrient in %
                  (acc, currNutrientKey) => {
                    const nutrientKey = currNutrientKey as keyof MicroNutrient;
                    const nutrientInGram = [
                      ...meatOptions,
                      ...veggieOptions,
                    ].reduce((acc2, currOption: Option) => {
                      const key =
                        `${nutrientKey}Per100g` as keyof typeof Option;
                      const microNutrientAmount = result[currOption.value];
                      return typeof microNutrientAmount === "number" &&
                        currOption[key]
                        ? acc2 + (currOption[key] / 100.0) * microNutrientAmount
                        : acc2;
                    }, 0);
                    const microNutrient: number =
                      recommendedMicroNutrients[nutrientKey];
                    return {
                      ...acc,
                      [currNutrientKey]: Math.round(
                        (nutrientInGram / microNutrient) * 100
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
                  {[...meatOptions, ...veggieOptions].map((option: Option) => {
                    // Display how much each option to consume
                    const nutrientAmount: number | boolean | undefined =
                      runResult[option.value];
                    if (typeof nutrientAmount !== "number") return null;
                    return (
                      runResult[option.value] && (
                        <li key={`result-${option.value}`}>
                          {/* Round to the first decimal e.g. 123.456 -> 123.4 */}
                          {option.label}: {Math.round(nutrientAmount * 10) / 10}
                          g
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
            const content =
              handleExportImport("export", forImportAndExport) || "";
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
            const content =
              handleExportImport("export", forImportAndExport) || "";
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
            const content =
              localStorage.getItem("protein-and-calorie-balancer") || "";
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
