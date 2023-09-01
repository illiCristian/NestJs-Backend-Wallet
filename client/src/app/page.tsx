import { Navbar } from '@/components'
import Footer from '../components/LandingPage/Footer/Footer'
import SuccessfulDebitTransfer from '../components/transferDebit/successfulTransfer/SuccessfulDebitTransfer'
import UnsuccessfulDebitTransfer from '../components/transferDebit/unsuccessTransfer/UnsuccessfulDebitTransfer'
//import Banner from '@/components/LandingPage/Banner/Banner';

const Page = (): JSX.Element => {
  return (
    <div>
      <Navbar />
      <main></main>
      <Footer />
    </div>
  )
}

export default Page
