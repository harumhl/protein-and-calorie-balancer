import { useState } from "react";
import {
  meatOptions,
  veggieOptions,
  recommendedMicroNutrients,
} from "../calculate/options";
import { OptionExtended } from "../calculate";
import "./index.css";

function addCaloriePerProteinToOptions(
  options: OptionExtended[]
): OptionExtended[] {
  return options.map((option) => {
    const { caloriePer100g, proteinPer100g } = option;
    // two decimal places
    const caloriePerProtein =
      proteinPer100g > 0
        ? Math.round((caloriePer100g / proteinPer100g) * 100) / 100
        : undefined;
    return { ...option, caloriePerProtein };
  });
}

function sortOptions(
  options: OptionExtended[],
  sortBy: keyOfPreSortedOptions
): OptionExtended[] {
  // create new array after sort
  return [...options].sort((a: OptionExtended, b: OptionExtended) => {
    // case-insensitive
    const aOption =
      typeof a[sortBy] === "string" ? a[sortBy].toLowerCase() : a[sortBy] || "";
    const bOption =
      typeof b[sortBy] === "string" ? b[sortBy].toLowerCase() : b[sortBy] || "";
    if (aOption < bOption) {
      return -1;
    }
    if (aOption > bOption) {
      return 1;
    }
    return 0;
  });
}

type Sort = {
  sort: keyOfPreSortedOptions;
  dir: "asc" | "desc";
};

type ParamsForSortSelection = {
  currentSortWithDirection: Sort;
  preSortedOptions: PreSortedOptions;
  setSortedOptions: (options: OptionExtended[]) => void;
  setSelectedSort: (sort: Sort) => void;
};

function selectSort(
  selectedSort: keyOfPreSortedOptions,
  {
    currentSortWithDirection,
    preSortedOptions,
    setSortedOptions,
    setSelectedSort,
  }: ParamsForSortSelection
): void {
  // Save the new sort (selected by user) & Assign the correctly-sorted options (to reflect user's sort selection)

  const { sort: currentSort, dir: currentDirection } = currentSortWithDirection;
  let newDirection: Sort["dir"] = "asc";
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

type PreSortedOptions = {
  label: OptionExtended[];
  caloriePer100g: OptionExtended[];
  proteinPer100g: OptionExtended[];
  caloriePerProtein: OptionExtended[];
  fiberPer100g: OptionExtended[];
};

type keyOfPreSortedOptions = keyof PreSortedOptions;

export function DisplayData() {
  const [sortedOptions, setSortedOptions] = useState<OptionExtended[]>(
    addCaloriePerProteinToOptions([...meatOptions, ...veggieOptions])
  );
  const [selectedSort, setSelectedSort] = useState<Sort>({
    sort: "label",
    dir: "asc",
  });
  const [displayMicroNutrients, setDisplayMicroNutrients] =
    useState<boolean>(false);

  const preSortedOptions: PreSortedOptions = {
    label: sortOptions(sortedOptions, "label"),
    caloriePer100g: sortOptions(sortedOptions, "caloriePer100g"),
    proteinPer100g: sortOptions(sortedOptions, "proteinPer100g"),
    caloriePerProtein: sortOptions(sortedOptions, "caloriePerProtein"),
    fiberPer100g: sortOptions(sortedOptions, "fiberPer100g"),
  };

  const paramsForSortSelection: ParamsForSortSelection = {
    currentSortWithDirection: selectedSort,
    preSortedOptions,
    setSortedOptions,
    setSelectedSort,
  };

  return (
    <>
      <button onClick={() => setDisplayMicroNutrients(!displayMicroNutrients)}>
        {displayMicroNutrients
          ? "Hide Micronutrients"
          : " Display Micronutrients"}
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
            <td
              className="table-border pointer"
              onClick={() => selectSort("fiberPer100g", paramsForSortSelection)}
            >
              Fiber per 100g (g)
            </td>
            <td className="table-border">source</td>
            {displayMicroNutrients && (
              <>
                {Object.keys(recommendedMicroNutrients).map((nutrient) => {
                  // TODO sort
                  return <td className="table-border">{nutrient}</td>;
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
              fiberPer100g,
              source,
            } = option;
            return (
              <tr key={option.value}>
                <td className="table-border">{label}</td>
                <td className="table-border">{caloriePer100g}</td>
                <td className="table-border">{proteinPer100g}</td>
                <td className="table-border">{caloriePerProtein}</td>
                <td className="table-border">{fiberPer100g}</td>
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
                      const key = `${nutrient}Per100g` as keyof OptionExtended;
                      return (
                        <td className="table-border">
                          {key in option ? option[key] : ""}
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
