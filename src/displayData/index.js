import { useState } from "react";

import "./index.css";
import {
  meatOptions,
  veggieOptions,
  recommendedMicroNutrients,
} from "./../calculate/options";

function addCaloriePerProteinToOptions(options) {
  return options.map((option) => {
    const { caloriePer100g, proteinPer100g } = option;
    // two decimal places
    const caloriePerProtein =
      Math.round((caloriePer100g / proteinPer100g) * 100) / 100;
    return { ...option, caloriePerProtein };
  });
}

function sortOptions(options, sortBy) {
  // create new array after sort
  return [...options].sort((a, b) => {
    // case-insensitive
    const aOption =
      typeof a[sortBy] === "string" ? a[sortBy].toLowerCase() : a[sortBy];
    const bOption =
      typeof b[sortBy] === "string" ? b[sortBy].toLowerCase() : b[sortBy];
    if (aOption < bOption) {
      return -1;
    }
    if (aOption > bOption) {
      return 1;
    }
    return 0;
  });
}

function selectSort(
  selectedSort,
  {
    currentSortWithDirection,
    preSortedOptions,
    setSortedOptions,
    setSelectedSort,
  }
) {
  // Save the new sort (selected by user) & Assign the correctly-sorted options (to reflect user's sort selection)

  const { sort: currentSort, dir: currentDirection } = currentSortWithDirection;
  let newDirection = "asc";
  if (currentSort === selectedSort) {
    newDirection = currentDirection === "asc" ? "desc" : "asc";
  }

  if (newDirection === "asc") {
    setSortedOptions(preSortedOptions[selectedSort]);
  } else {
    setSortedOptions(preSortedOptions[selectedSort].reverse());
  }

  setSelectedSort({
    sort: selectedSort,
    dir: newDirection,
  });
}

function DisplayData() {
  const [sortedOptions, setSortedOptions] = useState(
    addCaloriePerProteinToOptions([...meatOptions, ...veggieOptions])
  );
  const [selectedSort, setSelectedSort] = useState({});
  const [displayMicroNutrients, setDisplayMicroNutrients] = useState(false);

  const preSortedOptions = {
    label: sortOptions(sortedOptions, "label"),
    caloriePer100g: sortOptions(sortedOptions, "caloriePer100g"),
    proteinPer100g: sortOptions(sortedOptions, "proteinPer100g"),
    caloriePerProtein: sortOptions(sortedOptions, "caloriePerProtein"),
  };

  const paramsForSortSelection = {
    currentSortWithDirection: selectedSort,
    preSortedOptions,
    setSortedOptions,
    setSelectedSort,
  };

  return (
    <>
      <button onClick={() => setDisplayMicroNutrients(!displayMicroNutrients)}>
        Display Micronutrients
      </button>
      <table
        className="table-horizontally-centered"
        style={{
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        <thead>
          <tr>
            <td
              className="table-border"
              style={{ cursor: "pointer" }}
              onClick={() => selectSort("label", paramsForSortSelection)}
            >
              Name
            </td>
            <td
              className="table-border pointer"
              onClick={() =>
                selectSort("caloriePer100g", paramsForSortSelection)
              }
            >
              Calorie per 100g (kcal)
            </td>
            <td
              className="table-border pointer"
              onClick={() =>
                selectSort("proteinPer100g", paramsForSortSelection)
              }
            >
              Protein per 100g (g)
            </td>
            <td
              className="table-border pointer"
              onClick={() =>
                selectSort("caloriePerProtein", paramsForSortSelection)
              }
            >
              Calorie per 1g of protein (kcal)
            </td>
            <td className="table-border">source</td>
            {displayMicroNutrients && (
              <>
                {Object.keys(recommendedMicroNutrients).map((nutrient) => {
                  // TODO sort
                  return <td className="table-border pointer">{nutrient}</td>;
                })}
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {sortedOptions.map((option) => {
            const {
              label,
              caloriePer100g,
              proteinPer100g,
              caloriePerProtein,
              source,
            } = option;
            return (
              <tr key={option.value}>
                <td className="table-border">{label}</td>
                <td className="table-border">{caloriePer100g}</td>
                <td className="table-border">{proteinPer100g}</td>
                <td className="table-border">{caloriePerProtein}</td>
                <td className="table-border">
                  <a
                    href={`${source}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    link
                  </a>
                </td>
                {displayMicroNutrients && (
                  <>
                    {Object.keys(recommendedMicroNutrients).map((nutrient) => {
                      return (
                        <td className="table-border">
                          {option[`${nutrient}Per100g`]}
                        </td>
                      );
                    })}
                  </>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default DisplayData;
