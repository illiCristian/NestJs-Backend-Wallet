import { Navbar } from '@/components'
import Image from 'next/image'
import Footer from './pages/footer/page'
// import SecondCard from './pages/secondCard/page'

const Page = (): JSX.Element => {
  return (
    <div>
      <Navbar />
      <main></main>
      <Footer />
      {/* <SecondCard /> */}
    </div>
  )
}

export default Page
