import Image from "next/image";
import Link from "next/link";

const IntoValidation = () => {
  return (
    <section className="px-12 max-w-2xl h-screen">
      <div className=" w-[550px] h-[451px] bg-primary rounded-lg border px-5 py-7">
        {/* Primer artículo */}
        <article className=" w-[500px] h-[68px] relative bg-primary rounded-lg shadow-[2px_3px_4px_0px_#e2e8f0] mb-2">
          <Link
            className="relative flex items-end justify-end pt-6 pr-2"
            href="#"
          >
            <Image
              src="/assets/login/icons/arrow.svg"
              width={24}
              height={24}
              alt="arrow-icon"
            />
          </Link>
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
              src="/assets/register/mail.svg"
              width={24}
              height={24}
              alt="mail"
              className=" w-6 h-6 relative flex-col justify-start items-start flex"
            />
          </figure>
        </article>
        {/* Segundo artículo */}
        <article className=" w-[500px] h-[68px] relative bg-primary rounded-lg shadow-[2px_3px_4px_0px_#e2e8f0]  mb-2">
          <Link
            className="relative flex items-end justify-end pt-6 pr-2"
            href="#"
          >
            <Image
              src="/assets/login/icons/arrow.svg"
              width={24}
              height={24}
              alt="arrow-icon"
            />
          </Link>
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
              src="/assets/register/contact.svg"
              width={24}
              height={24}
              alt="mail"
              className=" w-6 h-6 relative flex-col justify-start items-start flex"
            />
          </figure>
        </article>
        {/* Tercer artículo */}
        <article className=" w-[500px] h-[68px] relative bg-primary rounded-lg shadow-[2px_3px_4px_0px_#e2e8f0]  mb-2">
          <Link
            className="relative flex items-end justify-end pt-6 pr-2"
            href="#"
          >
            <Image
              src="/assets/login/icons/arrow.svg"
              width={24}
              height={24}
              alt="arrow-icon"
            />
          </Link>
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
              src="/assets/register/phone.svg"
              width={24}
              height={24}
              alt="phone"
              className=" w-6 h-6 relative flex-col justify-start items-start flex"
            />
          </figure>
        </article>
        {/* Cuarto artículo */}
        <article className="w-[500px] h-[68px] relative bg-primary rounded-lg shadow-[2px_3px_4px_0px_#e2e8f0] mb-2">
          <Link
            className="relative flex items-end justify-end pt-6 pr-2"
            href="#"
          >
            <Image
              src="/assets/login/icons/arrow.svg"
              width={24}
              height={24}
              alt="arrow-icon"
            />
          </Link>
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
              src="/assets/register/atom.svg"
              width={24}
              height={24}
              alt="atom"
              className="w-6 h-6 relative flex-col justify-start items-start flex"
            />
          </figure>
        </article>
        {/* Quinto artículo */}
        <article className="w-[500px] h-[68px] relative bg-primary rounded-lg shadow-[2px_3px_4px_0px_#e2e8f0] mb-2">
          <Link
            className="relative flex items-end justify-end pt-6 pr-2"
            href="#"
          >
            <Image
              src="/assets/login/icons/arrow.svg"
              width={24}
              height={24}
              alt="arrow-icon"
            />
          </Link>
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
              src="/assets/register/terms.svg"
              width={24}
              height={24}
              alt="terms"
              className="w-6 h-6 relative flex-col justify-start items-start flex"
            />
          </figure>
        </article>
      </div>
    </section>
  );
};
export default IntoValidation;
