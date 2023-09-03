import { Navbar } from '@/components'
import Providers from './providers'
import Footer from '../components/LandingPage/Footer/Footer'

const Page = (): JSX.Element => {
  return (
    <div>
      <Providers>
        <Navbar />
        <main></main>
        <Footer />
      </Providers>
    </div>
  )
}

export default Page
