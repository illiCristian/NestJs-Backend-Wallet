import { Navbar } from '@/components'
import Providers from './providers'
import Footer from '../components/LandingPage/Footer/Footer'
import Profile from '@/app/home/profile/page'

const Page = (): JSX.Element => {
  return (
    <div>
      <Providers>
        <Navbar />
        <main>
          <Profile />
        </main>
        <Footer />
      </Providers>
    </div>
  )
}

export default Page
