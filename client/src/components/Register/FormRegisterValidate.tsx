"use client";

import { useRegisterUser, useStepperState } from "@/store/registerStore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import atom from "../../../public/assets/register/atom.svg";
import contact from "../../../public/assets/register/contact.svg";
import mail from "../../../public/assets/register/mail.svg";
import phone from "../../../public/assets/register/phone.svg";
import terms from "../../../public/assets/register/terms.svg";
import Modal from "../TermsConditions/modal";
import Modal1 from "../TermsConditions/modal1";
import Modal2 from "../TermsConditions/modal2";

export default function FormRegisterValidate() {
	const { setStepper } = useStepperState();
	const { validateEmail, validateIdentity, validateTerms } = useRegisterUser();
	const [showModal, setShowModal] = useState("hidden");
	const [showModal1, setShowModal1] = useState("hidden");
	const [showModal2, setShowModal2] = useState("hidden");

	useEffect(() => {
		setStepper({ stepOne: true, stepTwo: true, stepThree: false });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div className=" w-[625px] h-[491px] bg-primary rounded-lg  shadow-[0px_1px_4px_2px_#00000025] px-5 py-7">
				{/* Sección principal */}
				<section className="flex justify-start origin-top-left rotate-[0.55deg] text-center text-black text-2xl font-semibold mb-5">
					Completa los datos para crear tu cuenta
				</section>
				{/* Primer artículo */}
				<article className=" w-[577px] h-[68px] relative bg-primary rounded-lg shadow-[2px_3px_4px_0px_#e2e8f0] mb-2">
					<header className=" p-1 left-[43px] top-[8px] absolute justify-center items-center gap-1 inline-flex">
						<div className=" origin-top-left rotate-[0.55deg] text-center text-black text-base font-normal leading-normal">
							Valida tu e-mail
						</div>
					</header>
					<section className=" p-1 left-[43px] top-[32px] absolute justify-center items-center gap-1 inline-flex">
						<span className=" origin-top-left rotate-[0.55deg] text-center text-neutral-500 text-xs font-normal leading-normal">
							Recibirás información de tu cuenta.
						</span>
					</section>
					<figure className=" w-6 h-6 left-[8px] top-[21px] absolute justify-center items-center inline-flex">
						<Image
							src={mail}
							alt="mail"
							className="relative flex flex-col items-start justify-start w-6 h-6 "
						/>
					</figure>
					{validateEmail && (
						<Link
							href={"/register/email"}
							className=" w-[90px] h-[33px] px-16 py-3 left-[435px] top-[17px] absolute bg-tertiary rounded-md justify-center items-center gap-2 inline-flex hover:bg-tertiaryDark transition-all duration-700"
						>
							<div className=" origin-top-left rotate-[0.55deg] text-center text-white text-base font-bold leading-normal">
								Validar
							</div>
						</Link>
					)}
				</article>
				{/* Segundo artículo */}
				<article className=" w-[577px] h-[68px] relative bg-primary rounded-lg shadow-[2px_3px_4px_0px_#e2e8f0]  mb-2">
					<div className=" p-1 left-[43px] top-[8px] absolute justify-center items-center gap-1 inline-flex">
						<section className=" origin-top-left rotate-[0.55deg] text-center text-black text-base font-normal leading-normal">
							Valida tu Identidad
						</section>
					</div>
					<header className=" p-1 left-[43px] top-[32px] absolute justify-center items-center gap-1 inline-flex">
						<div className=" origin-top-left rotate-[0.55deg] text-center text-neutral-500 text-xs font-normal leading-normal">
							Nadie más podrá crear una cuenta a tu nombre.
						</div>
					</header>
					<figure className=" w-6 h-6 left-[8px] top-[21px] absolute justify-center items-center inline-flex">
						<Image
							src={contact}
							alt="mail"
							className="relative flex flex-col items-start justify-start w-6 h-6 "
						/>
					</figure>
					{validateIdentity && (
						<Link
							href={"/register/identity"}
							className="w-[90px] h-[33px] px-16 py-3 left-[435px] top-[17px] absolute bg-tertiary rounded-md justify-center items-center gap-2 inline-flex hover:bg-tertiaryDark transition-all duration-700"
						>
							<div className=" origin-top-left rotate-[0.55deg] text-center text-white text-base font-bold leading-normal">
								Validar
							</div>
						</Link>
					)}
				</article>
				{/* Tercer artículo */}
				<article className=" w-[577px] h-[68px] relative bg-primary rounded-lg shadow-[2px_3px_4px_0px_#e2e8f0]  mb-2">
					<div className=" p-1 left-[43px] top-[8px] absolute justify-center items-center gap-1 inline-flex">
						<section className=" origin-top-left rotate-[0.55deg] text-center text-black text-base font-normal leading-normal">
							Valida tu teléfono
						</section>
					</div>
					<header className=" p-1 left-[43px] top-[32px] absolute justify-center items-center gap-1 inline-flex">
						<div className=" origin-top-left rotate-[0.55deg] text-center text-neutral-500 text-xs font-normal leading-normal">
							Lo usarás para ingresar a tu cuenta.
						</div>
					</header>
					<figure className=" w-6 h-6 left-[8px] top-[21px] absolute justify-center items-center inline-flex">
						<Image
							src={phone}
							alt="phone"
							className="relative flex flex-col items-start justify-start w-6 h-6 "
						/>
					</figure>
					<Link
						href={"/"}
						className="hidden w-[90px] h-[33px] px-16 py-3 left-[435px] top-[17px] absolute bg-tertiary rounded-md justify-center items-center gap-2 "
					>
						<div className=" origin-top-left rotate-[0.55deg] text-center text-white text-base font-bold leading-normal">
							Validar
						</div>
					</Link>
				</article>
				{/* Cuarto artículo */}
				<article className="w-[577px] h-[68px] relative bg-primary rounded-lg shadow-[2px_3px_4px_0px_#e2e8f0] mb-2">
					<header className="p-1 left-[43px] top-[8px] absolute justify-center items-center gap-1 inline-flex">
						<div className="origin-top-left rotate-[0.55deg] text-center text-black text-base font-normal leading-normal">
							Regulaciones vigentes
						</div>
					</header>
					<section className="p-1 left-[43px] top-[32px] absolute justify-center items-center gap-1 inline-flex">
						<div className="origin-top-left rotate-[0.55deg] text-center text-neutral-500 text-xs font-normal leading-normal">
							Completa algunos datos regulatorios.
						</div>
					</section>
					<figure className="w-6 h-6 left-[8px] top-[21px] absolute justify-center items-center inline-flex">
						<Image
							src={atom}
							alt="atom"
							className="relative flex flex-col items-start justify-start w-6 h-6"
						/>
					</figure>
					<Link
						href={"/"}
						className="hidden w-[90px] h-[33px] px-16 py-3 left-[435px] top-[17px] absolute bg-tertiary rounded-md justify-center items-center gap-2"
					>
						<div className="origin-top-left rotate-[0.55deg] text-center text-white text-base font-bold leading-normal">
							Validar
						</div>
					</Link>
				</article>
				{/* Quinto artículo */}
				<article className="w-[577px] h-[68px] relative bg-primary rounded-lg shadow-[2px_3px_4px_0px_#e2e8f0] mb-2">
					<header className="p-1 left-[43px] top-[8px] absolute justify-center items-center gap-1 inline-flex">
						<div className="origin-top-left rotate-[0.55deg] text-center text-black text-base font-normal leading-normal">
							Términos y Condiciones
						</div>
					</header>
					<section className="p-1 left-[43px] top-[32px] absolute justify-center items-center gap-1 inline-flex">
						<div className="origin-top-left rotate-[0.55deg] text-center text-neutral-500 text-xs font-normal leading-normal">
							Acéptalos para poder crear tu cuenta.
						</div>
					</section>
					<figure className="w-6 h-6 left-[8px] top-[21px] absolute justify-center items-center inline-flex">
						<Image
							src={terms}
							alt="terms"
							className="relative flex flex-col items-start justify-start w-6 h-6"
						/>
					</figure>
					{validateTerms && (
						<button
							onClick={() => setShowModal("flex")}
							className="w-[90px] h-[33px] px-16 py-3 left-[435px] top-[17px] absolute bg-tertiary rounded-md justify-center items-center gap-2 inline-flex hover:bg-tertiaryDark transition-all duration-700 text-white font-semibold"
						>
							Validar
						</button>
					)}
				</article>
			</div>
			<Modal
				isVisible={showModal}
				onClose={() => setShowModal("hidden")}
				isVisible1={() => setShowModal1("flex")}
			/>
			<Modal1
				isVisible={showModal1}
				onClose={() => setShowModal1("hidden")}
				isVisible2={() => setShowModal2("flex")}
			/>
			<Modal2 isVisible={showModal2} onClose={() => setShowModal2("hidden")} />
		</>
	);
}
