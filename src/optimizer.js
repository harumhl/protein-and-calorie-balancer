const solver = require("javascript-lp-solver/src/solver");

async function optimize(
  minProtein,
  maxCalorie,
  selectedMeatOptions,
  selectedVeggieOptions
) {
  selectedMeatOptions.map((option) => {
    return {
      [option.value]: {
        protein: option.proteinPer100g / 100.0,
        calorie: option.caloriePer100g / 100.0,
      },
    };
  });
  const model = {
    optimize: "calorie",
    opType: "min",
    constraints: {
      protein: { min: minProtein },
      calorie: { max: maxCalorie },
    },
    variables: {
      ...[...selectedMeatOptions, ...selectedVeggieOptions].reduce(
        (acc, currOption) => {
          return {
            ...acc,
            [currOption.value]: {
              protein: currOption.proteinPer100g / 100.0,
              calorie: currOption.caloriePer100g / 100.0,
            },
          };
        },
        {}
      ),
    },
  };

  const results = solver.Solve(model);
  return results;
}

export default optimize;
