"use client";

import { useStepperState } from "@/store/registerStore";

export default function Stepper() {
	const { stepOne, stepThree, stepTwo } = useStepperState();

	return (
		<>
			<section className="flex my-10">
				{/* Lista ordenada que contiene los pasos */}
				<ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
					{/* Primer paso */}
					<li className="flex items-center space-x-2.5">
						{/* Círculo con número del paso */}
						<span
							className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${
								stepOne ? "bg-tertiary" : "bg-secondary"
							} text-white font-extrabold`}
						>
							1
						</span>
						{/* Descripción del primer paso */}

						<p className="text-base font-normal leading-normal text-center text-black">
							Elije el tipo de cuenta
						</p>
					</li>
					{/* Segundo paso */}
					<li className="flex items-center text-gray-500  space-x-2.5">
						{/* Círculo con número del paso */}
						<span
							className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${
								stepTwo ? "bg-tertiary" : "bg-secondary"
							} text-white font-extrabold`}
						>
							2
						</span>
						{/* Descripción del segundo paso */}

						<p className="text-base font-normal leading-normal text-center text-black">
							Completa los datos
						</p>
					</li>
					{/* Tercer paso */}
					<li className="flex items-center text-gray-500  space-x-2.5">
						{/* Círculo con número del paso */}
						<span
							className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${
								stepThree ? "bg-tertiary" : "bg-secondary"
							} text-white font-extrabold`}
						>
							3
						</span>
						{/* Descripción del tercer paso */}

						<p className="text-base font-normal leading-normal text-center text-black">
							Cuenta creada con éxito
						</p>
					</li>
				</ol>
			</section>
		</>
	);
}
