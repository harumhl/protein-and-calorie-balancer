import { useState } from "react";
import { DietPlanner } from "./DietPlanner";

enum Gender {
  Women = "women",
  Men = "men",
}
type GenderType = `${Gender}`;

enum Activity {
  Sedentary = "sedentary",
  LightlyActive = "lightly active",
  ModeratelyActive = "moderately active",
  VeryActive = "very active",
  SuperActive = "super active",
}
type ActivityType = `${Activity}`;

function toKg(pounds: number): number {
  return pounds / 2.20462;
}

function toCm(inches: number): number {
  return inches * 2.54;
}

function calculateBMR(
  weightInPounds: number,
  heightInInches: number,
  age: number,
  gender: GenderType
): number {
  const weightInKg = toKg(weightInPounds);
  const heightInCm = toCm(heightInInches);

  // Mifflin-St Jeor Equation
  return Math.round(
    10 * weightInKg +
      6.25 * heightInCm +
      -5 * age +
      (gender === Gender.Women ? -161 : 5)
  );
}

interface BmrProps {
  weight: number;
  heightFeet: number;
  heightInch: number;
  age: number;
  gender: GenderType;
  setWeight: (weight: number) => void;
  setHeightFeet: (heightFeet: number) => void;
  setHeightInch: (heightInch: number) => void;
  setAge: (age: number) => void;
  setGender: (gender: GenderType) => void;
}

const Bmr = ({
  weight,
  heightFeet,
  heightInch,
  age,
  gender,
  setWeight,
  setHeightFeet,
  setHeightInch,
  setAge,
  setGender,
}: BmrProps) => {
  const bmr = calculateBMR(weight, heightFeet * 12 + heightInch, age, gender);

  return (
    <div>
      <h3>BMR (Basal Metabolic Rate)</h3>
      <div>Mifflin-St Jeor Equation (most accurate for most people)</div>
      <div>
        Weight:{" "}
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
        {" lbs"}
      </div>
      <div>
        Height:{" "}
        <input
          type="number"
          value={heightFeet}
          onChange={(e) => setHeightFeet(Number(e.target.value))}
        />
        {" feet "}
        <input
          type="number"
          value={heightInch}
          onChange={(e) => setHeightInch(Number(e.target.value))}
        />
        {" inches"}
      </div>
      <div>
        Age:{" "}
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        {" years old"}
      </div>
      <div>
        Gender: (Is your body estrogen-dominant or testosterone-dominant?)
        <label onChange={() => setGender(Gender.Women)}>
          <input
            type="radio"
            id={Gender.Women}
            name="gender"
            value={Gender.Women}
            checked={gender === Gender.Women}
            onChange={() => setGender(Gender.Women)}
          />
          Women
        </label>
        <label onChange={() => setGender(Gender.Men)}>
          <input
            type="radio"
            id={Gender.Men}
            name="gender"
            value={Gender.Men}
            checked={gender === Gender.Men}
            onChange={() => setGender(Gender.Men)}
          />
          Men
        </label>
      </div>
      <div>
        Suggested calorie intake to maintain essential bodily functions:{" "}
        <input disabled value={bmr} />
        {" kcal/day"}
      </div>
    </div>
  );
};

interface MaintenanceProps {
  weightInPounds: number;
  bmr: number;
  activity: ActivityType;
  setActivity: (activity: ActivityType) => void;
}

const Maintenance = ({
  weightInPounds,
  bmr,
  activity,
  setActivity,
}: MaintenanceProps) => {
  const maintenanceCalorie = Math.round(
    bmr *
      (activity === Activity.Sedentary
        ? 1.2
        : activity === Activity.LightlyActive
        ? 1.375
        : activity === Activity.ModeratelyActive
        ? 1.55
        : activity === Activity.VeryActive
        ? 1.725
        : 1.9)
  );
  const proteinMultiplier: { [key in Activity]: [number, number] } = {
    [Activity.Sedentary]: [0.8, 0.9],
    [Activity.LightlyActive]: [1.0, 1.2],
    [Activity.ModeratelyActive]: [1.2, 1.4],
    [Activity.VeryActive]: [1.4, 1.6],
    [Activity.SuperActive]: [1.6, 1.9],
  };
  const maintenanceProteinLowEnd = Math.round(
    toKg(weightInPounds) * proteinMultiplier[activity][0]
  );
  const maintenanceProteinHighEnd = Math.round(
    toKg(weightInPounds) * proteinMultiplier[activity][1]
  );

  return (
    <>
      <h3>Maintenance</h3>
      <div>
        Activity: <br />
        <label onChange={() => setActivity(Activity.Sedentary)}>
          <input
            type="radio"
            id={Activity.Sedentary}
            name="activity"
            value={Activity.Sedentary}
            checked={activity === Activity.Sedentary}
            onChange={() => setActivity(Activity.Sedentary)}
          />
          Sedentary (little to no exercise)
        </label>
        <br />
        <label onChange={() => setActivity(Activity.LightlyActive)}>
          <input
            type="radio"
            id={Activity.LightlyActive}
            name="activity"
            value={Activity.LightlyActive}
            checked={activity === Activity.LightlyActive}
            onChange={() => setActivity(Activity.LightlyActive)}
          />
          Lightly active (light exercise 1-3 days/week)
        </label>
        <br />
        <label onChange={() => setActivity(Activity.ModeratelyActive)}>
          <input
            type="radio"
            id={Activity.ModeratelyActive}
            name="activity"
            value={Activity.ModeratelyActive}
            checked={activity === Activity.ModeratelyActive}
            onChange={() => setActivity(Activity.ModeratelyActive)}
          />
          Moderately active (moderate exercise 3-5 days/week)
        </label>
        <br />
        <label onChange={() => setActivity(Activity.VeryActive)}>
          <input
            type="radio"
            id={Activity.VeryActive}
            name="activity"
            value={Activity.VeryActive}
            checked={activity === Activity.VeryActive}
            onChange={() => setActivity(Activity.VeryActive)}
          />
          Very active (hard exercise 6-7 days/week)
        </label>
        <br />
        <label onChange={() => setActivity(Activity.SuperActive)}>
          <input
            type="radio"
            id={Activity.SuperActive}
            name="activity"
            value={Activity.SuperActive}
            checked={activity === Activity.SuperActive}
            onChange={() => setActivity(Activity.SuperActive)}
          />
          Super active (physical job or twice daily training)
        </label>
        <br />
        <div>
          Suggested calorie intake to maintain curent weight:{" "}
          <input disabled value={maintenanceCalorie} />
          {" kcal/day"}
        </div>
        <div>
          Suggested protein intake to maintain current muscle mass:{" "}
          <input disabled value={maintenanceProteinLowEnd} />
          {" - "}
          <input disabled value={maintenanceProteinHighEnd} />
          {" g/day"}
        </div>
        <div>
          Suggested protein intake to grow muscles:{" "}
          <input disabled value={Math.round(toKg(weightInPounds) * 1.6)} />
          {" - "}
          <input disabled value={Math.round(toKg(weightInPounds) * 2.2)} />
          {" g/day"}
        </div>
      </div>
    </>
  );
};

export const Formulas = () => {
  const [weight, setWeight] = useState<number>(300);
  const [heightFeet, setHeightFeet] = useState<number>(5);
  const [heightInch, setHeightInch] = useState<number>(0);
  const [age, setAge] = useState<number>(100);
  const [gender, setGender] = useState<GenderType>(Gender.Women);
  const [activity, setActivity] = useState<ActivityType>(Activity.Sedentary);

  const bmr = calculateBMR(weight, heightFeet * 12 + heightInch, age, gender);

  return (
    <div>
      <h2>Formulas</h2>
      <Bmr
        {...{
          weight,
          heightFeet,
          heightInch,
          age,
          gender,
          setWeight,
          setHeightFeet,
          setHeightInch,
          setAge,
          setGender,
        }}
      />
      <Maintenance
        {...{ weightInPounds: weight, bmr, activity, setActivity }}
      />
      <h3>Fiber</h3>
      <div>
        Suggested fiber intake: <input disabled value={25} />
        {" - "}
        <input disabled value={28} />
        g/day for women, <input disabled value={31} />
        {" - "}
        <input disabled value={38} /> for men
      </div>
      <DietPlanner />
    </div>
  );
};
