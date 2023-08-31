import { Navbar } from '@/components'
import Footer from '../components/LandingPage/Footer/Footer'
import SuccessfulDebitTransfer from '../components/transferDebit/SuccessfulDebitTransfer'
//import Banner from '@/components/LandingPage/Banner/Banner';

const Page = (): JSX.Element => {
  return (
    <div>
      <Navbar />
      <main>
        <SuccessfulDebitTransfer />
      </main>
      <Footer />
    </div>
  )
}

export default Page
