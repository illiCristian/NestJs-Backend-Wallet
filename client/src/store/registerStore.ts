import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StepperState {
	stepOne: boolean;
	stepTwo: boolean;
	stepThree: boolean;
	setStepper: (steps: object) => void;
}

interface RegisterUser {
	email: string;
	name: string;
	password: string;
	validateEmail: boolean;
	validateIdentity: boolean;
	validateTerms: boolean;
	setUserData: (steps: object) => void;
	resetUserData: () => void;
}

export const useStepperState = create<StepperState>((set) => ({
	stepOne: true,
	stepTwo: false,
	stepThree: false,
	setStepper: (steps) => set(() => ({ ...steps })),
}));

const initialUserState = {
	email: "",
	name: "",
	password: "",
	validateEmail: true,
	validateIdentity: false,
	validateTerms: false,
};

export const useRegisterUser = create(
	persist<RegisterUser>(
		(set) => ({
			...initialUserState,
			setUserData: (data) => set((state) => ({ ...state, ...data })),
			resetUserData: () => set(initialUserState),
		}),
		{
			name: "user",
		}
	)
);
