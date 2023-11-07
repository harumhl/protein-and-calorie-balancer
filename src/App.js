import { useState } from "react";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
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

function App() {
  const [minProtein, setMinProtein] = useState(30);
  const [maxCalorie, setMaxCalorie] = useState(600);
  const [selectedMeatOptions, setSelectedMeatOptions] = useState(null);
  const [selectedVeggieOptions, setSelectedVeggieOptions] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [runResult, setRunResult] = useState(null);
  return (
    <div className="App">
      <h1>Protein And Calorie Balancer</h1>
      <div>
        <h3>One-Meal Goal</h3>
        Minimum protein:
        <input
          type="number"
          value={minProtein}
          onChange={(e) => setMinProtein(e.target.value)}
        />
        g
        <br />
        Maximum calorie:
        <input
          type="number"
          value={maxCalorie}
          onChange={(e) => setMaxCalorie(e.target.value)}
        />
        kcal
        <h5>Derive Per-Meal protein and calorie goal from Daily Goal</h5>
        Not Available Yet
      </div>
      <div>
        <h3>Requirements</h3>
        source (consumed on Nov 2023):{" "}
        <a href="https://www.nutritionvalue.org/">
          https://www.nutritionvalue.org/
        </a>
        <br />
        "Meats" (aka protein source):
        <Select
          className="requirement-dropdown"
          defaultValue={selectedMeatOptions}
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
          onChange={setSelectedVeggieOptions}
          options={veggieOptions}
          isMulti={true}
          isSearchable={true}
        />
      </div>
      <div>
        <h3>Optional Requirements</h3>
        Not Available Yet
      </div>
      <div>
        <h3>Run and View Results</h3>
        {isRunning ? (
          <FontAwesomeIcon icon={faSpinner} spin={true} />
        ) : (
          <button
            onClick={async () => {
              if (!minProtein || !maxCalorie) {
                toast.error("Please enter a minimum protein and maximum calorie");
                return;
              }
              if (!selectedMeatOptions || !selectedVeggieOptions) {
                toast.error("Please select at least one meat and one veggie");
                return;
              }
              setIsRunning(true);
              let result;
              try {
                result = await optimize(minProtein, maxCalorie, selectedMeatOptions, selectedVeggieOptions);
              } catch (e) {
                console.error(e);
                return;
              } finally {
                setIsRunning(false);
              }
              setRunResult(result);
            }}
          >
            Run
          </button>
        )}
        {runResult && "Run Result: TODO"}
      </div>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
