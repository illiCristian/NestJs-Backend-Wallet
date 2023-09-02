'use client'
import React, { useState } from 'react'
import { FaCamera } from 'react-icons/fa'
import Icons from '../../../public/assets/profile/icons.svg'
import './styles.css'

export default function Profile () {
  const profileData = {
    image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    name: 'John Doe',
    email: 'john.doe@example.com'
  }

  // State to manage whether the image is clicked for change

  if (!profileData) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <section>
        <div className='profile-container mt-40'>
          <div className='profile-info flex text-center w-2/3 h-44 mt-30 mb-10 rounded-md relative'>
            <div>
              <img
                src={profileData.image}
                alt='Admin'
                className='rounded-full p-1 bg-primary mt-10 ml-5 cursor-pointer relative'
                width='110'
              />
              <div className='absolute bottom-2 left-24 mb-5 bg-white cursor-pointer'>
                {/* Use the camera icon from react-icons */}
                <FaCamera size={24} color='gray' />
              </div>
            </div>
            <div className='leading-loose text-left ml-10 mt-10'>
              <h4 className='font-semibold'>{profileData.name}</h4>
              <p>{profileData.email}</p>
              <p className='text-cyan-600 text-sm mt-2'>
                Estás en Ivi 2- Mercado puntos
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='profile-container'>
          <div className='profile-info flex text-center w-2/3 h-44 mt-30 mb-36 rounded-md relative'>
            <div>
              <img
                src={profileData.image}
                alt='Admin'
                className='rounded-full p-1 bg-primary mt-10 ml-5 cursor-pointer relative'
                width='110'
              />
              <div className='absolute bottom-2 left-24 mb-5 bg-white cursor-pointer'>
                {/* Use the camera icon from react-icons */}
                <FaCamera size={24} color='gray' />
              </div>
            </div>
            <div className='leading-loose text-left ml-10 mt-10'>
              <h4 className='font-semibold'>{profileData.name}</h4>
              <p>{profileData.email}</p>
              <p className='text-cyan-600 text-sm mt-2'>
                Estás en Ivi 2- Mercado puntos
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
