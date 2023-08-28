import Image from "next/image";
import Link from "next/link";

const InfoValidation = () => {
  return (
    <section className="px-8 py-2 max-w-xl h-screen rounded-lg bg-white border">
      <article className="py-6">
        <h6 className="pb-4 text-[#797979] text-lg">Inicia sesión</h6>
        <h1 className="text-black font-semibold text-4xl">
          Elige un método de verificación para iniciar sesión
        </h1>
      </article>
      <article className="py-6">
        <div className="bg-slate-100 max-w-md shadow-xl py-1 px-2">
          <div className="flex items-center justify-between text-xs">
            <Image
              src="/assets/login/icons/user.svg"
              className="text-[#00B1EA]"
              width={24}
              height={24}
              alt="user-icon"
            />
            <div className="flex flex-col justify-start py-2 pr-52">
              <span>somebody@hotmail.com</span>
              <span className="text-[#00B1EA] block">Cambiar cuenta</span>
            </div>
            <Link href="#">
              <Image
                src="/assets/login/icons/arrow.svg"
                width={24}
                height={24}
                alt="arrow-icon"
              />
            </Link>
          </div>
        </div>
      </article>
      <Link className="py-6" href="#">
        <h5 className="text-[#00B1EA] font-normal text-xs">Necesito ayuda</h5>
      </Link>
    </section>
  );
};

export default InfoValidation;
