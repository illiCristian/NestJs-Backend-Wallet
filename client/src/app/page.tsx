'use client'

import { Navbar } from '@/components'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'
import Footer from '../components/LandingPage/Footer/Footer'

const Page = (): JSX.Element => {
  const { status } = useSession()

  useEffect(() => {
    if (status == 'authenticated') {
      return redirect('/home')
    }
  }, [status])

  return (
    <div>
      <Navbar />
      <main></main>
      <Footer />
    </div>
  )
}

export default Page
