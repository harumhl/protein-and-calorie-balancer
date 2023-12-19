import { recommendedMicroNutrients } from "./options";
const solver = require("javascript-lp-solver/src/solver");

async function optimize(
  minProtein,
  maxCalorie,
  selectedMeatOptions,
  selectedVeggieOptions,
  { micronutrientPercent }
) {
  selectedMeatOptions.map((option) => {
    return {
      [option.value]: {
        protein: option.proteinPer100g / 100.0,
        calorie: option.caloriePer100g / 100.0,
      },
    };
  });
  const micronutrientConstraints =
    micronutrientPercent > 0 && micronutrientPercent <= 100
      ? Object.keys(recommendedMicroNutrients).reduce(
          (acc, currNutrientKey) => {
            return {
              ...acc,
              [currNutrientKey]: {
                min:
                  (recommendedMicroNutrients[currNutrientKey] *
                    micronutrientPercent) /
                  100,
              },
            };
          },
          {}
        )
      : {};
  const model = {
    optimize: "calorie",
    opType: "min",
    constraints: {
      protein: { min: minProtein },
      calorie: { max: maxCalorie },
      ...micronutrientConstraints,
      ...[...selectedMeatOptions, ...selectedVeggieOptions].reduce(
        // Converting to like above e.g. { chickenThighWithoutSkin: { min: 20 }, ... }
        (acc, currOption) => {
          if (currOption.constraintType && currOption.constraintValue) {
            return {
              ...acc,
              [currOption.value]: {
                [currOption.constraintType]: currOption.constraintValue,
              },
            };
          }
          return acc;
        },
        {}
      ),
    },
    variables: {
      ...[...selectedMeatOptions, ...selectedVeggieOptions].reduce(
        // Converting to e.g. { chickenThighWithoutSkin: { calorie: 20, protein: 10, chickenThighWithoutSkin: 1 }, ... }
        (acc, currOption) => {
          const micronutrientDetails =
            micronutrientPercent > 0 && micronutrientPercent <= 100
              ? {
                  vitaminA: currOption.vitaminAPer100g / 100 || 0,
                  vitaminB1: currOption.vitaminB1Per100g / 100 || 0,
                  vitaminB2: currOption.vitaminB2Per100g / 100 || 0,
                  vitaminB3: currOption.vitaminB3Per100g / 100 || 0,
                  vitaminB5: currOption.vitaminB5Per100g / 100 || 0,
                  vitaminB6: currOption.vitaminB6Per100g / 100 || 0,
                  vitaminB7: currOption.vitaminB7Per100g / 100 || 0,
                  vitaminB9: currOption.vitaminB9Per100g / 100 || 0,
                  vitaminB12: currOption.vitaminB12Per100g / 100 || 0,
                  vitaminC: currOption.vitaminCPer100g / 100 || 0,
                  vitaminD: currOption.vitaminDPer100g / 100 || 0,
                  vitaminE: currOption.vitaminEPer100g / 100 || 0,
                  vitaminK: currOption.vitaminKPer100g / 100 || 0,
                  calcium: currOption.calciumPer100g / 100 || 0,
                  choline: currOption.cholinePer100g / 100 || 0,
                  chromium: currOption.chromiumPer100g / 100 || 0,
                  copper: currOption.copperPer100g / 100 || 0,
                  fiber: currOption.fiberPer100g / 100 || 0,
                  iodine: currOption.iodinePer100g / 100 || 0,
                  iron: currOption.ironPer100g / 100 || 0,
                  magnesium: currOption.magnesiumPer100g / 100 || 0,
                  manganese: currOption.manganesePer100g / 100 || 0,
                  molybdenum: currOption.molybdenumPer100g / 100 || 0,
                  phosphorus: currOption.phosphorusPer100g / 100 || 0,
                  potassium: currOption.potassiumPer100g / 100 || 0,
                  selenium: currOption.seleniumPer100g / 100 || 0,
                  sodium: currOption.sodiumPer100g / 100 || 0,
                  zinc: currOption.zincPer100g / 100 || 0,
                }
              : {};
          return {
            ...acc,
            [currOption.value]: {
              ...micronutrientDetails,
              protein: currOption.proteinPer100g / 100,
              calorie: currOption.caloriePer100g / 100,
              [currOption.value]: 1,
            },
          };
        },
        {}
      ),
    },
    options: {
      tolerance: 0.05,
    },
  };

  const results = solver.Solve(model);
  return results;
}

export default optimize;
