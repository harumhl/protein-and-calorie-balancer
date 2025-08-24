declare module "@bygdle/javascript-lp-solver" {
  export interface SolverModel {
    optimize: string;
    opType: "min" | "max";
    constraints: {
      [key: string]: {
        min?: number;
        max?: number;
        equal?: number;
      };
    };
    variables: {
      [key: string]: {
        [key: string]: number;
      };
    };
    ints?: {
      [key: string]: 1;
    };
    binaries?: {
      [key: string]: 1;
    };
    options?: {
      tolerance?: number;
      [key: string]: any;
    };
  }

  export interface SolverResult {
    feasible?: boolean;
    calorie?: number;
    protein?: number;
    result: number;
    [key: string]: number | boolean | undefined;
  }

  interface Solver {
    Solve(model: SolverModel): SolverResult;
  }

  const solver: Solver;
  export default solver;
}
