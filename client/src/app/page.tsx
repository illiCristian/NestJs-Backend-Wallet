import { Navbar } from '@/components';
import Image from 'next/image';
import Footer from '../components/LandingPage/Footer/Footer';
import Banner from '@/components/LandingPage/Banner/Banner';
//import SecondCard from './pages/secondCard/page'

const Page = (): JSX.Element => {
  return (
    <div>
      <Navbar />
      <main>
        <Banner />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
