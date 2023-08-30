"use client";

import { useRegisterUser, useStepperState } from "@/store/registerStore";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type FormData = yup.InferType<typeof schema>;

const schema = yup.object().shape({
	name: yup.string().required("El nombre es requerido"),
	password: yup.string().min(6).required("Mínimo deben ser 6 caracteres"),
});

export default function IdentityForm() {
	const router = useRouter();
	const { setStepper } = useStepperState();
	const { setUserData } = useRegisterUser();
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(schema),
	});

	const formSubmit = async (data: FormData) => {
		// coloca los datos del usuario en el store
		setUserData({
			name: data.name,
			password: data.password,
			validateIdentity: false,
			validateTerms: true,
		});
		router.push("/register/validate-steps");
	};

	useEffect(() => {
		setStepper({ stepOne: true, stepTwo: true, stepThree: false });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<form
				onSubmit={handleSubmit(formSubmit)}
				className="w-[423px] h-[500px] bg-primary rounded-lg shadow-[0px_1px_4px_2px_#00000025] px-11"
			>
				{/* Título */}
				<h3 className="origin-top-left rotate-[0.55deg] text-center text-black text-2xl font-semibold flex justify-start mb-3 mt-[50px]">
					Información de la cuenta
				</h3>
				{/* Subtítulo */}
				<h4 className="origin-top-left rotate-[0.55deg] text-black text-base font-normal leading-normal mb-10">
					Ingresa tu datos y una contraseña para tu cuenta
				</h4>
				<section className="space-y-3">
					{/* Campo de entrada de correo */}
					<input
						{...register("name")}
						type="text"
						placeholder="Nombre completo"
						className={`w-[343px] h-[50px] rounded-lg border border-neutral-500 focus:border-2 ${
							formState.errors.name
								? "focus:border-red-500"
								: "focus:border-primary"
						} ps-2 focus:outline-none text-slate-800 text-base`}
					/>
					{formState.errors.name && (
						<p className="mb-4 text-sm text-red-500">
							{formState.errors.name.message}
						</p>
					)}
					<input
						{...register("password")}
						type="password"
						placeholder="Contraseña"
						className={`w-[343px] h-[50px] rounded-lg border border-neutral-500 focus:border-2 ${
							formState.errors.password
								? "focus:border-red-500"
								: "focus:border-primary"
						} ps-2 focus:outline-none text-slate-800 text-base`}
					/>
					{formState.errors.password && (
						<p className="mb-4 text-sm text-red-500">
							{formState.errors.password.message}
						</p>
					)}
				</section>
				{/* Botón de envío */}
				<button className="mt-4 text-center text-white text-base font-bold leading-normal w-[343.22px] h-[50.08px] py-3 bg-tertiary rounded-md justify-center items-center gap-2 inline-flex hover:bg-tertiaryDark transition-all duration-700">
					Enviar información de usuario
				</button>
			</form>
		</>
	);
}
