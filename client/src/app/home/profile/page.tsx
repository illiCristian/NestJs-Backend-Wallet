'use client'
import Link from 'next/link'
import Image from 'next/image'
import { FaCamera } from 'react-icons/fa'
import './styles.css'
import ProfileCard from './profile-card/page'

export default function Profile () {
  const profileData = {
    image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    name: 'John Doe',
    email: 'john.doe@example.com'
  }

  if (!profileData) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <section>
        <div className='profile-container mt-20'>
          <div className='profile-info flex text-center w-2/3 h-44 mt-30 mb-10 rounded-md relative'>
            <div>
              <img
                src={profileData.image}
                alt='Admin'
                className='rounded-full p-1 bg-primary mt-10 ml-5 cursor-pointer relative'
                width='110'
                height='110'
              />
              <div className='absolute bottom-2 left-24 mb-5 bg-white cursor-pointer'>
                <FaCamera size={24} color='gray' />
              </div>
            </div>
            <div className='leading-loose text-left ml-10 mt-10'>
              <h4 className='font-semibold'>{profileData.name}</h4>
              <p>{profileData.email}</p>
              <p className='text-cyan-600 text-base mt-2'>
                Estás en Ivi 2- Mercado puntos
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ProfileCard />
      </section>
    </div>
  )
}
