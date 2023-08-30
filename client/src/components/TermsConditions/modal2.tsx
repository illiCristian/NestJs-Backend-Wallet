"use client";

import Image from "next/image";
import congratsAccount from "../../../public/congrats-account.png";
import { useStepperState } from "@/store/registerStore";
import { useEffect } from "react";
import Link from "next/link";

function Modal2(props: any) {
	const { setStepper } = useStepperState();

	useEffect(() => {
		setStepper({ stepOne: true, stepTwo: true, stepThree: true });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div
			className={`fixed inset-0 bg-black 
    bg-opacity-25 backdrop-blur-sm 
    flex justify-center items-center ${props.isVisible}`}
		>
			<button onClick={() => props.onClose()}>X</button>
			<div className="w-[500px] bg-white flex flex-col justify-center items-center">
				<Image
					src={congratsAccount}
					alt="security"
					width={110}
					height={110}
					className="mt-10"
				/>
				<h1 className="my-3 font-semibold">
					¡Genial! Ya puedes utilizar tu cuenta
				</h1>
				<p className="my-3 text-blue-400 text-xs mr-[140px]">
					Cuenta creada con éxito
				</p>
				<p className="mb-3 text-xs mr-[14px]">
					Inicia sesión con tu móvil o número de teléfono.
				</p>
				<Link
					href={"/login"}
					className=" w-[200.23px] h-[48.69px] px-16 py-3 bg-sky-500 rounded-md justify-center items-center gap-2 inline-flex"
				>
					<p className="CrearCuentaPersonal origin-top-left rotate-[0.55deg] text-center text-white text-base font-bold leading-normal">
						Continuar
					</p>
				</Link>
			</div>
		</div>
	);
}

export default Modal2;
