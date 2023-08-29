"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type FormData = yup.InferType<typeof schema>;

const schema = yup.object().shape({
	emailOrPhone: yup
		.string()
		.email("El formato del campo email no es válido")
		.required("El campo email es requerido"),
	password: yup
		.string()
		.required("El campo contraseña es requerido")
		.min(6, "El campo contraseña debe tener al menos 6 caracteres"),
});

const IntoEmail: React.FC = () => {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data: FormData) => {
		try {
			const responseNextAuth = await signIn("credentials", {
				email: data.emailOrPhone,
				password: data.password,
				callbackUrl: "/home",
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section className="h-full max-w-2xl px-12 py-20 mb-1 md:flex md:flex-col md:items-start md:justify-start">
			<h1 className="text-lg font-normal text-black">Email o teléfono</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col items-center w-full p-4"
			>
				<input
					{...register("emailOrPhone")}
					type="text"
					placeholder="Email"
					className={`md:w-full py-4 px-3 border outline-none ${
						formState.errors.emailOrPhone
							? "border-red-500"
							: "border-[#00B1EA]"
					}  rounded-md`}
				/>
				{formState.errors.emailOrPhone && (
					<p className="mb-4 text-sm text-red-500">
						{formState.errors.emailOrPhone.message}
					</p>
				)}
				<br />
				<input
					{...register("password")}
					type="password"
					placeholder="Contraseña"
					className={`md:w-full py-4 px-3 border outline-none ${
						formState.errors.password ? "border-red-500" : "border-[#00B1EA]"
					}  rounded-md`}
				/>
				{formState.errors.password && (
					<p className="mb-4 text-sm text-red-500">
						{formState.errors.password.message}
					</p>
				)}
				<br />
				<div className="md:flex md:justify-around">
					<button
						type="submit"
						className={`${
							formState.errors.emailOrPhone || formState.errors.password
								? "bg-[#797979] text-slate-600"
								: "bg-[#00B1EA] text-white"
						} block px-16 py-2 rounded-md mr-4`}
						disabled={
							formState.errors.emailOrPhone || formState.errors.password
								? true
								: false
						}
					>
						Continuar
					</button>
					<br />
					<Link href="/register">
						<button className="block px-12 py-2 text-[#00B1EA] bg-[#E4F0F8] rounded-md">
							Crear Cuenta
						</button>
					</Link>
				</div>
			</form>
		</section>
	);
};

export default IntoEmail;
