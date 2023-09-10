import InfoEmail from "@/components/login/InfoEmail"
import IntoEmail from "@/components/login/IntoEmail"


const pageLogin: React.FC = () => {
  return (
    <section className="px-4 py-8 m-auto md:flex md:justify-between max-w-7xl ">
      <InfoEmail />
      <IntoEmail />
    </section>
  )
}

export default pageLogin
