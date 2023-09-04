import BalanceWallet from "@/components/Home/BalanceWallet";
import PieChart from "../../../components/Balance/PieChart";
import Image from "next/image";
import search from "../../../../public/assets/dashboard/search.svg";
import Link from "next/link";

const pageBalance = (): JSX.Element => {
  const numbers = [42, 34, 45];
  const labels = ["42", "34", "45"];

  return (
    <section className="flex items-center justify-center gap-7 max-w-5xl">
      <article className="flex flex-col items-start gap-7">
        <section className="flex justify-between py-2 w-[370px] h-[60px] bg-white rounded-lg shadow-lg">
          <BalanceWallet />
        </section>
        <div className="w-[370px] h-[570px] flex flex-col bg-white rounded-lg shadow-lg">
          <header className="">
            <h3 className="text-start text-black text-base font-semibold leading-normal px-16 mt-5">
              Movimientos de tu dinero
            </h3>
            <div className=" w-[370px] h-px bg-zinc-300 mt-3" />
          </header>
          <section className="px-16">
            <input className=" w-[270px] h-[41px] bg-zinc-300 rounded-lg absolute focus:border-2 focus:border-primary mt-5 ps-10 px-10 focus:outline-none" />
            <Image
              src={search}
              alt="search"
              className="top-7 left-3  w-6 h-6 relative"
            ></Image>
          </section>
          <br />
          <hr />
          <br />
          <Link href={"/home"}>
            <span className="text-primary">Consultar más movimientos</span>
          </Link>
        </div>
      </article>
      <PieChart data={numbers} labels={labels} />
    </section>
  );
};

export default pageBalance;
