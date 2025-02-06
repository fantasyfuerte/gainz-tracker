"use client";

import { useState } from "react";
import { muscles } from "@/../data";

function NewExerciseForm() {
  const exerciseDescription =
    "Add a description for your exercise and then press the save button.";

  const [muscle, setMuscle] = useState("");
  const [exercise, setExercise] = useState("");

  return (
    <form className="flex flex-col gap-5 items-start">
      <select
        className="bg-transparent text-secondary text-xl font-semibold outline-none placeholder:text-secondary w-full"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
      >
        <option>Select exercise</option>
        {muscle !== "Select muscle" &&
          muscle !== "" &&
          muscles
            .filter((m) => m.name == muscle)[0]
            .exercises.map((ex) => <option key={ex.name}>{ex.name}</option>)}
      </select>
      <select
        className="bg-transparent text-secondary/90 outline-none placeholder:text-secondary/90 w-full"
        value={muscle}
        onChange={(e) => setMuscle(e.target.value)}
      >
        <option>Select muscle</option>
        {muscles.map((muscle) => (
          <option key={muscle.name}>{muscle.name}</option>
        ))}
      </select>
      <textarea
        placeholder={exerciseDescription}
        aria-multiline="true"
        className="bg-transparent text-secondary/90 outline-none placeholder:text-secondary/90 first-line:ml-5 w-full"
      />
      <button className="bg-button text-lg text-primary font-bold rounded-lg py-2 px-4 mt-12 self-end">
        Save
      </button>
    </form>
  );
}

export default NewExerciseForm;
