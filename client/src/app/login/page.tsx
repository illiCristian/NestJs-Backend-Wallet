import { InfoEmail, IntoEmail } from '@/components/Login';

const pageLogin: React.FC = () => {
  return (
    <section className='md:flex md:justify-between px-4 py-8  '>
      <InfoEmail />
      <IntoEmail />
    </section>
  );
};

export default pageLogin;
