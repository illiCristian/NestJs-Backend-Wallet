"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";

type FormData = yup.InferType<typeof schema>;

const schema = yup.object().shape({
  emailOrPhone: yup
    .string()
    .email("invalid email format")
    .required("Email or phone number is required"),
});

const IntoEmail: React.FC = () => {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    router.push("/login/validation-method");
  };

  return (
    <section className="md:flex md:flex-col md:items-start md:justify-start px-12 py-20 max-w-2xl h-screen">
      <h1 className="text-black font-normal text-lg">Email o teléfono</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full items-center p-4"
      >
        <input
          {...register("emailOrPhone")}
          type="text"
          className={`md:w-full py-6 px-4 mb-4 border outline-none ${
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
        <div className="md:flex md:justify-around">
          <button
            type="submit"
            className={`${
              formState.errors.emailOrPhone
                ? "bg-[#797979] text-slate-600"
                : "bg-[#00B1EA] text-white"
            } block px-16 py-2 rounded-md mr-4`}
            disabled={formState.errors.emailOrPhone ? true : false}
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
