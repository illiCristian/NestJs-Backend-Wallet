"use client";

import { useStepperState } from "@/store/registerStore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import image from "../../../public/assets/register/image-1.svg";
import warningImg from "../../../public/assets/register/warning.svg";

export default function FormRegister() {
	const { setStepper } = useStepperState();
	const [checked, setChecked] = useState(false);

	const handleChangeCheckbox = () => {
		if (checked) setChecked(false);
		if (!checked) setChecked(true);
	};

	useEffect(() => {
		setStepper({ stepOne: true, stepTwo: false, stepThree: false });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<section className="account-creation-form w-[470px] h-[545px] bg-primary rounded-lg shadow-[0px_1px_4px_2px_#00000025] flex flex-col justify-center items-center">
				{/* Imagen */}
				<figure className="image-container w-[164px] h-[133px]">
					<Image
						alt="image"
						className="w-[164px] h-[133px]"
						src={image}
						priority
					/>
				</figure>
				{/* Título */}
				<h4 className="mt-8 mb-5 text-2xl font-semibold text-center text-black origin-top-left form-title">
					Para crear tu cuenta necesitamos
					<br /> validar algunos datos
				</h4>
				{/* Descripción */}
				<p className="mb-5 text-base font-normal leading-normal text-center text-black origin-top-left form-description">
					Solo te tomará unos minutos
				</p>
				{/* Casilla de verificación */}
				<div className="relative flex mb-5 terms-checkbox gap">
					<input
						type="checkbox"
						checked={checked}
						onChange={handleChangeCheckbox}
						name="terms"
						id="terms"
						className="ml-10 w-4 h-4 border-stone-300 border-3 absolute right-[320px] top-[5px] appearance-none border-2 rounded-sm bg-primary me-2 checked:bg-tertiary checked:border-0"
					/>
					<svg
						className="absolute w-4 h-4 pointer-events-none mr-10 stroke-white fill-none peer-checked:!fill-error mt-[5px]"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="4"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<polyline points="20 6 9 17 4 12"></polyline>
					</svg>
					{/* Artículo de texto */}
					<article className="terms-text w-[319.11px]t text-[11.5px] text-center ms-6">
						<span className="text-black text-[11.5px] leading-[24px] font-normal ">
							Acepto los{" "}
						</span>
						<span className="text-sky-500 text-[11.5px] font-normal leading-normal">
							términos y condiciones
						</span>
						<span className="text-black text-[11.5px] font-normal leading-normal">
							{" "}
							y autorizo el uso de mis
							<br />
							datos de acuerdo a la
						</span>
						<span className="text-sky-500 text-[11.5px] font-normal leading-normal">
							{" "}
							Declaración de Privacidad.
						</span>
					</article>
				</div>
				{/* Mensaje de advertencia */}
				{!checked && (
					<figure className="flex justify-start gap-2 mb-2">
						<Image src={warningImg} alt="warning" className="w-4 h-4" />
						<span className="text-xs font-normal leading-normal text-start text-error">
							Debe aceptar los terminos y condiciones para continuar
						</span>
					</figure>
				)}
				{/* Botón de creación de cuenta personal */}
				<Link href={"/register/validate-steps"}>
					<button
						disabled={!checked ? true : false}
						className={`${
							!checked
								? "bg-secondary text-secundary"
								: "bg-tertiary text-white"
						}personal-account-button w-[289.22px] h-[49.55px] py-3 rounded-md justify-center items-center gap-2 inline-flex mb-3 origin-top-left  text-center text-white text-base font-bold leading-normal`}
					>
						Crear cuenta personal
					</button>
				</Link>
				{/* Botón de creación de cuenta de empresa */}
				<Link href={"#"}>
					<button className="business-account-button w-[289.22px] h-[49.55px] py-3 bg-secondary rounded-md justify-center items-center gap-2 inline-flex origin-top-left  text-center text-sky-500 text-base font-bold leading-normal">
						Crear cuenta empresa
					</button>
				</Link>
			</section>
		</>
	);
}
