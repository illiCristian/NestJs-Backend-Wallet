import { InfoEmail, IntoEmail } from "@/components/login";

const pageLogin: React.FC = () => {
  return (
    <section className="md:flex md:justify-between max-w-7xl m-auto px-4 py-8  ">
      <InfoEmail />
      <IntoEmail />
    </section>
  );
};

export default pageLogin;
