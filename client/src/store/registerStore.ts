import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StepperState {
  stepOne: boolean;
  stepTwo: boolean;
  stepThree: boolean;
  setStepper: (steps: object) => void;
}

export const useStepperState = create(
  persist<StepperState>(
    (set) => ({
      stepOne: false,
      stepTwo: false,
      stepThree: false,
      setStepper: (steps) => set(() => ({ ...steps })),
    }),
    { name: "stepper" }
  )
);
