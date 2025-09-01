import { useState } from "react";
import {
  meatOptions,
  veggieOptions,
  type Option,
} from "./../calculate/options";
import Select from "react-select";

function isTouchingBottomOfPage() {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

function isPredefinedItem(item: Partial<Option>) {
  return [...meatOptions, ...veggieOptions].find((o) => o.label === item.label);
}

export const DietPlanner = () => {
  const [selectedItems, setSelectedItems] = useState<
    { option: Partial<Option>; amountInGram: number }[]
  >([]);
  return (
    <>
      <h2>Diet Planner</h2>
      <table style={{ justifySelf: "center" }}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Amount (g)</th>
            <th>Calories</th>
            <th>Protein (g)</th>
            <th>Fiber (g)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Display selected item + Allow entering amount (g) */}
          {selectedItems.map(({ option, amountInGram }, i) => {
            return (
              <tr key={i}>
                <td>
                  {/* Label */}
                  {isPredefinedItem(option) ? (
                    option.label
                  ) : (
                    <input
                      value={option.label}
                      onChange={(e) =>
                        setSelectedItems((prev) =>
                          prev.map((itm) => {
                            return option === itm.option
                              ? {
                                  ...itm,
                                  option: {
                                    ...itm.option,
                                    label: e.target.value,
                                  },
                                }
                              : itm;
                          })
                        )
                      }
                      style={{ width: "80%" }}
                    />
                  )}
                </td>
                <td>
                  {/* Amount in gram */}
                  <input
                    type="number"
                    value={amountInGram}
                    onChange={(e) =>
                      setSelectedItems((prev) =>
                        prev.map((itm) => {
                          return option === itm.option
                            ? {
                                ...itm,
                                amountInGram: Number(e.target.value),
                              }
                            : itm;
                        })
                      )
                    }
                  />
                </td>
                <td>
                  {/* Calorie */}
                  {isPredefinedItem(option) && option.caloriePer100g ? (
                    Math.round(option.caloriePer100g * amountInGram) / 100
                  ) : (
                    <input
                      type="number"
                      value={option.caloriePer100g}
                      onChange={(e) =>
                        setSelectedItems((prev) =>
                          prev.map((itm) => {
                            return option === itm.option
                              ? {
                                  ...itm,
                                  option: {
                                    ...itm.option,
                                    caloriePer100g: Number(e.target.value),
                                  },
                                }
                              : itm;
                          })
                        )
                      }
                    />
                  )}
                </td>
                <td>
                  {/* Protein */}
                  {isPredefinedItem(option) && option.proteinPer100g ? (
                    Math.round(option.proteinPer100g * amountInGram) / 100
                  ) : (
                    <input
                      type="number"
                      value={option.proteinPer100g}
                      onChange={(e) =>
                        setSelectedItems((prev) =>
                          prev.map((itm) => {
                            return option === itm.option
                              ? {
                                  ...itm,
                                  option: {
                                    ...itm.option,
                                    proteinPer100g: Number(e.target.value),
                                  },
                                }
                              : itm;
                          })
                        )
                      }
                    />
                  )}
                </td>
                <td>
                  {/* Fiber */}
                  {isPredefinedItem(option) && option.fiberPer100g ? (
                    Math.round(option.fiberPer100g * amountInGram) / 100
                  ) : (
                    <input
                      type="number"
                      value={option.fiberPer100g || 0}
                      onChange={(e) =>
                        setSelectedItems((prev) =>
                          prev.map((itm) => {
                            return option === itm.option
                              ? {
                                  ...itm,
                                  option: {
                                    ...itm.option,
                                    fiberPer100g: Number(e.target.value),
                                  },
                                }
                              : itm;
                          })
                        )
                      }
                    />
                  )}
                </td>
                <td>
                  {/* Remove button */}
                  <button
                    onClick={() =>
                      setSelectedItems((prev) =>
                        prev.filter((itm) => itm.option !== option)
                      )
                    }
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            {/* Allow selecting a new item */}
            <td>
              <Select
                className="requirement-dropdown"
                value={null}
                onChange={(newValue) => {
                  setSelectedItems((prev) => [
                    ...prev,
                    { option: newValue as Option, amountInGram: 0 },
                  ]);
                  if (isTouchingBottomOfPage()) {
                    setTimeout(() => {
                      window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: "smooth",
                      });
                    }, 100);
                  }
                }}
                options={[...meatOptions, ...veggieOptions].filter((o) => {
                  // Not selected yet
                  return !selectedItems.find(
                    (item) => item.option.value === o.value
                  );
                })}
                isSearchable={true}
                menuPlacement="auto"
              />
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              {/* Add custom item */}
              <button
                onClick={() =>
                  setSelectedItems((prev) => [
                    ...prev,
                    { option: {}, amountInGram: 0 },
                  ])
                }
              >
                + Add Custom
              </button>
            </td>
          </tr>
          <tr>
            {/* Display total sum of each */}
            <td>Total: </td>
            <td>
              {selectedItems
                .map((item) => item.amountInGram)
                .reduce((acc, val) => acc + val, 0)}
              g
            </td>
            <td>
              {Math.round(
                selectedItems
                  .map(
                    (item) =>
                      typeof item.option.caloriePer100g !== "number"
                        ? 0
                        : isPredefinedItem(item.option)
                        ? item.option.caloriePer100g * item.amountInGram
                        : item.option.caloriePer100g * 100 // if custom item, assume it's total amount
                  )
                  .reduce((acc, val) => acc + val, 0)
              ) / 100}
              kcal
            </td>
            <td>
              {Math.round(
                selectedItems
                  .map(
                    (item) =>
                      typeof item.option.proteinPer100g !== "number"
                        ? 0
                        : isPredefinedItem(item.option)
                        ? item.option.proteinPer100g * item.amountInGram
                        : item.option.proteinPer100g * 100 // if custom item, assume it's total amount
                  )
                  .reduce((acc, val) => acc + val, 0)
              ) / 100}
              g
            </td>
            <td>
              {Math.round(
                selectedItems
                  .map(
                    (item) =>
                      typeof item.option.fiberPer100g !== "number"
                        ? 0
                        : isPredefinedItem(item.option)
                        ? item.option.fiberPer100g * item.amountInGram
                        : item.option.fiberPer100g * 100 // if custom item, assume it's total amount
                  )
                  .reduce((acc, val) => acc + val, 0)
              ) / 100}
              g
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
