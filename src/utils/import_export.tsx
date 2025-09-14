import { toast } from "react-toastify";
import { ActivityType, GenderType } from "../formulas";
import { DietPlannerItem } from "../formulas/DietPlanner";
import { useState } from "react";

export const LOCAL_STORAGE_PREFIX = "protein-and-calorie-balancer";
export const LOCAL_STORAGE_DATA_KEY = `${LOCAL_STORAGE_PREFIX}:data`;

export type ImportExport = {
  formulas?: {
    weight?: number;
    heightFeet?: number;
    heightInch?: number;
    age?: number;
    gender?: GenderType;
    activity?: ActivityType;
  };
  dietPlanner?: DietPlannerItem[];
};

export function importAndExport<T>(
  source: "localStorage" | "user-input",
  destinations: ("localStorage" | "browser" | "clipboard")[],
  options: { userInput?: T; setter?: (data: T) => void } = {}
): T {
  const { userInput, setter } = options;
  // Get data
  let data;
  switch (source) {
    case "localStorage":
      data = localStorage.getItem(LOCAL_STORAGE_DATA_KEY);
      if (data) {
        data = JSON.parse(data);
      }
      // TODO add type validation
      break;
    case "user-input":
      data = userInput;
      break;
    default:
      break;
  }

  // Send data
  for (const destination of destinations) {
    switch (destination) {
      case "localStorage":
        const originalData = JSON.parse(
          localStorage.getItem(LOCAL_STORAGE_DATA_KEY) || "{}"
        );
        if (data) {
          data = {
            formulas: data.formulas || originalData.formulas,
            dietPlanner: data.dietPlanner || originalData.dietPlanner,
          };
          localStorage.setItem(LOCAL_STORAGE_DATA_KEY, JSON.stringify(data));
        }
        break;
      case "browser":
        // "browser" means load the data into the current browser tab
        setter?.(data);
        break;
      case "clipboard":
        if (data && document.hasFocus()) {
          try {
            navigator.clipboard.writeText(JSON.stringify(data));
          } catch (e) {}
        }
        break;
      default:
        break;
    }
  }
  return data;
}

interface SaveToLocalStorageButtonProps {
  data: ImportExport;
}

export const SaveToLocalStorageButton = ({
  data,
}: SaveToLocalStorageButtonProps) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <button
        onClick={() => {
          importAndExport("user-input", ["localStorage", "clipboard"], {
            userInput: data,
          });
          toast.success("Saved to the current browser");
        }}
      >
        Save to local storage
      </button>
      <input onChange={(e) => setInputValue(e.target.value)}></input>
      <button
        onClick={() => {
          try {
            importAndExport("user-input", ["localStorage"], {
              userInput: JSON.parse(inputValue),
            });
            window.location.reload();
          } catch (e) {}
        }}
      >
        Load from input
      </button>
    </>
  );
};
