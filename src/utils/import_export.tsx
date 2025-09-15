import { toast } from "react-toastify";
import { ActivityType, GenderType } from "../formulas";
import { DietPlannerItem } from "../formulas/DietPlanner";
import { useState } from "react";
import { meatOptions, Option, veggieOptions } from "../calculate/options";
import { getData, updateData } from "../firebase/utils";
import {
  LOCAL_STORAGE_DATA_KEY,
  LOCAL_STORAGE_FIREBASE_KEY,
} from "./constants";

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

export async function importAndExport<T extends ImportExport>(
  source: "localStorage-and-firebase" | "user-input",
  destinations: ("localStorage-and-firebase" | "browser" | "clipboard")[],
  {
    userInput,
    setter,
  }: { userInput?: T; setter?: (data: Partial<T>) => void } = {}
): Promise<Partial<T>> {
  const cleanUpOption = (
    option: Partial<Option>
  ): Partial<Pick<Option, "label">> => {
    // If the option is from the system, then only keep the label
    // If the option is custom data, then keep all the data
    const shouldFilterOutData = [...meatOptions, ...veggieOptions].some(
      (opt) => opt.label === option.label
    );
    return shouldFilterOutData
      ? option.label
        ? { label: option.label }
        : {}
      : option;
  };

  // Get data
  let data: Partial<T> = {};
  switch (source) {
    case "localStorage-and-firebase":
      const localStorageData = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_DATA_KEY) || "{}"
      ) as Partial<T> & { timestamp: number };
      const firebaseData = await getData();

      const { timestamp: _, ...localStorageRest } = localStorageData || {};
      const { timestamp, ...firebaseRest } = firebaseData || {};

      data =
        !!localStorageData?.timestamp && !!firebaseData?.timestamp
          ? localStorageData?.timestamp <= firebaseData?.timestamp
            ? localStorageRest
            : firebaseRest
          : !!localStorageData?.timestamp
          ? localStorageRest
          : !!firebaseData?.timestamp
          ? firebaseRest
          : {};
      // TODO add type validation
      break;
    case "user-input":
      data = userInput || {};
      break;
    default:
      break;
  }

  // Send data
  for (const destination of destinations) {
    switch (destination) {
      case "localStorage-and-firebase":
        const d: Partial<T> & { timestamp: number } = {
          ...data,
          timestamp: Date.now(),
        };

        // Clean up data
        const originalData = JSON.parse(
          localStorage.getItem(LOCAL_STORAGE_DATA_KEY) || "{}"
        );
        d.formulas =
          d.formulas ||
          (originalData.formulas as ImportExport["formulas"]) ||
          {};

        d.dietPlanner =
          (
            d.dietPlanner ??
            (originalData.dietPlanner as ImportExport["dietPlanner"])
          )?.map((item: DietPlannerItem) => {
            return {
              ...item,
              option: cleanUpOption(item.option),
            };
          }) || [];

        // Save to localStorage
        localStorage.setItem(LOCAL_STORAGE_DATA_KEY, JSON.stringify(d));

        // Save to firebase
        await updateData(d);
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
        onClick={async () => {
          await importAndExport(
            "user-input",
            ["localStorage-and-firebase", "clipboard"],
            {
              userInput: data,
            }
          );
          toast.success("Saved to the current browser");
        }}
      >
        Save to local storage (and server)
      </button>
      <input onChange={(e) => setInputValue(e.target.value)}></input>
      <button
        onClick={async () => {
          await importAndExport("user-input", ["localStorage-and-firebase"], {
            userInput: JSON.parse(inputValue),
          });
          window.location.reload();
        }}
      >
        Load from input
      </button>
      <input
        placeholder="server key"
        onChange={(e) =>
          localStorage.setItem(
            LOCAL_STORAGE_FIREBASE_KEY,
            `{username: ${e.target.value}}`
          )
        }
      ></input>
    </>
  );
};
