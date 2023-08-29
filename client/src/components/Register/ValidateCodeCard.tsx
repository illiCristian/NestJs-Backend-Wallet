"use client";

import { API } from "@/services/config";
import { useRegisterUser, useStepperState } from "@/store/registerStore";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
	code1: string;
	code2: string;
	code3: string;
	code4: string;
};

type Code = {
	email: string | undefined;
	code: string | undefined;
};

export default function ValidateCodeCard() {
	const router = useRouter();
	const { setStepper } = useStepperState();
	const { email } = useRegisterUser();
	const { register, handleSubmit } = useForm<FormValues>();

	const { mutateAsync } = useMutation({
		mutationFn: (data: Code) => {
			return API.post("mailing/validate-code", data);
		},
	});

	const formSubmit = async (data: FormValues) => {
		// validacion del correo
		const codeEmail = Object.values(data).join("");

		try {
			const { status } = await mutateAsync(
				{
					email: email,
					code: codeEmail,
				},
				{
					onSuccess: () => {
						router.push("/register/validate-success");
					},
				}
			);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		setStepper({ stepOne: true, stepTwo: true, stepThree: false });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<form
				onSubmit={handleSubmit(formSubmit)}
				className="w-[548px] h-[473px] bg-primary rounded-lg shadow-[0px_1px_4px_2px_#00000025] px-11"
			>
				<div className="px-10 py-16 space-y-5 origin-top-left IngresaElCDigoQueTeEnviamosPorEMail">
					<span className="text-2xl font-semibold text-sky-500">Ingresa </span>
					<span className="text-2xl font-semibold text-black">
						{" "}
						el código que te enviamos
						<br />
						por e-mail
					</span>
					<div className="LoEnviamosASomebodyHotmailComSiNoLoEncuentrasRevisaElCorreoNoDeseado w-[380.81px] origin-top-left ">
						<span className="text-base font-normal leading-normal text-black">
							Lo enviamos a{" "}
						</span>
						<span className="text-base font-bold leading-normal text-black">
							{email}{" "}
						</span>
						<span className="text-base font-normal leading-normal text-black">
							Si no lo encuentras revisa el{" "}
						</span>
						<span className="text-base font-normal leading-normal text-sky-500">
							correo no deseado
						</span>
					</div>
					<div className="flex justify-center gap-2">
						<input
							{...register("code1")}
							type="text"
							className="w-[59px] h-[66px] text-center rounded-lg border border-neutral-500 focus:border-2 focus:border-primary ps-2 focus:outline-none text-slate-800 text-base"
						/>
						<input
							{...register("code2")}
							type="text"
							className="w-[59px] h-[66px] text-center rounded-lg border border-neutral-500 focus:border-2 focus:border-primary ps-2 focus:outline-none text-slate-800 text-base"
						/>
						<input
							{...register("code3")}
							type="text"
							className="w-[59px] h-[66px] text-center rounded-lg border border-neutral-500 focus:border-2 focus:border-primary ps-2 focus:outline-none text-slate-800 text-base"
						/>
						<input
							{...register("code4")}
							type="text"
							className="w-[59px] h-[66px] text-center rounded-lg border border-neutral-500 focus:border-2 focus:border-primary ps-2 focus:outline-none text-slate-800 text-base"
						/>
					</div>
					<button className="mt-4 text-center text-neutral-500 text-base font-bold leading-normal w-[343.22px] h-[50.08px] py-3 ml-4 bg-secondary rounded-md justify-center items-center gap-2 inline-flex">
						Código confirmación
					</button>
				</div>
			</form>
		</>
	);
}
