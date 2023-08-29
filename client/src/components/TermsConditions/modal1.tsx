"use client";

import { API } from "@/services/config";
import { useRegisterUser } from "@/store/registerStore";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import formIcon from "../../../public/form-icon-conditions.svg";

type UserData = {
	name: string | undefined;
	email: string | undefined;
	password: string | undefined;
};

function Modal1(props: any) {
	const { email, resetUserData, name, password } = useRegisterUser();

	const { mutateAsync } = useMutation({
		mutationFn: (data: UserData) => {
			return API.post("auth/signup", data);
		},
	});

	const handleSubmit = async () => {
		try {
			const { data: user } = await mutateAsync(
				{
					name: name,
					email: email,
					password: password,
				},
				{
					onSuccess: () => {
						resetUserData();
						props.onClose();
						props.isVisible2();
					},
				}
			);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div
			className={`fixed inset-0 bg-black 
    bg-opacity-25 backdrop-blur-sm 
    flex justify-center items-center ${props.isVisible}`}
		>
			<button onClick={() => props.onClose()}>X</button>
			<div className="w-[400px] bg-white flex flex-col justify-center items-center rounded border-2 border-gray-400">
				<Image
					src={formIcon}
					alt="security"
					width={90}
					height={90}
					className="mt-9"
				/>
				<h1 className="my-3 font-semibold">Términos y condiciones</h1>
				<p className="my-3 text-blue-400 text-xs mr-[75px]">
					Validado con éxito
				</p>
				<button
					onClick={handleSubmit}
					className="bg-[#00B1EA] py-3 px-12 text-white rounded-lg mt-6 mb-12 text-xs font-semibold"
				>
					Continuar
				</button>
			</div>
		</div>
	);
}

export default Modal1;
