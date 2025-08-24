import { OptionExtended } from ".";
import { recommendedMicroNutrients } from "./options";
import solver, {
  type SolverModel,
  type SolverResult,
} from "@bygdle/javascript-lp-solver";

export async function optimize(
  minProtein: number,
  maxCalorie: number,
  selectedMeatOptions: OptionExtended[],
  selectedVeggieOptions: OptionExtended[],
  { micronutrientPercent }: { micronutrientPercent: number }
): Promise<SolverResult> {
  selectedMeatOptions.map((option) => {
    return {
      [option.value]: {
        protein: option.proteinPer100g / 100.0,
        calorie: option.caloriePer100g / 100.0,
      },
    };
  });
  const micronutrientConstraints: SolverModel["constraints"] =
    micronutrientPercent > 0 && micronutrientPercent <= 100
      ? Object.keys(recommendedMicroNutrients).reduce(
          (acc, currNutrientKey) => {
            return {
              ...acc,
              [currNutrientKey]: {
                min:
                  (recommendedMicroNutrients[
                    currNutrientKey as keyof typeof recommendedMicroNutrients
                  ] *
                    micronutrientPercent) /
                  100,
              },
            };
          },
          {}
        )
      : {};
  const model: SolverModel = {
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
                  vitaminA: (currOption.vitaminAPer100g || 0) / 100,
                  vitaminB1: (currOption.vitaminB1Per100g || 0) / 100,
                  vitaminB2: (currOption.vitaminB2Per100g || 0) / 100,
                  vitaminB3: (currOption.vitaminB3Per100g || 0) / 100,
                  vitaminB5: (currOption.vitaminB5Per100g || 0) / 100,
                  vitaminB6: (currOption.vitaminB6Per100g || 0) / 100,
                  vitaminB7: (currOption.vitaminB7Per100g || 0) / 100,
                  vitaminB9: (currOption.vitaminB9Per100g || 0) / 100,
                  vitaminB12: (currOption.vitaminB12Per100g || 0) / 100,
                  vitaminC: (currOption.vitaminCPer100g || 0) / 100,
                  vitaminD: (currOption.vitaminDPer100g || 0) / 100,
                  vitaminE: (currOption.vitaminEPer100g || 0) / 100,
                  vitaminK: (currOption.vitaminKPer100g || 0) / 100,
                  calcium: (currOption.calciumPer100g || 0) / 100,
                  choline: (currOption.cholinePer100g || 0) / 100,
                  chromium: (currOption.chromiumPer100g || 0) / 100,
                  copper: (currOption.copperPer100g || 0) / 100,
                  fiber: (currOption.fiberPer100g || 0) / 100,
                  iodine: (currOption.iodinePer100g || 0) / 100,
                  iron: (currOption.ironPer100g || 0) / 100,
                  magnesium: (currOption.magnesiumPer100g || 0) / 100,
                  manganese: (currOption.manganesePer100g || 0) / 100,
                  molybdenum: (currOption.molybdenumPer100g || 0) / 100,
                  phosphorus: (currOption.phosphorusPer100g || 0) / 100,
                  potassium: (currOption.potassiumPer100g || 0) / 100,
                  selenium: (currOption.seleniumPer100g || 0) / 100,
                  sodium: (currOption.sodiumPer100g || 0) / 100,
                  zinc: (currOption.zincPer100g || 0) / 100,
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
