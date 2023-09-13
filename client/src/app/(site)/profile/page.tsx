"use client"

import ProfileCard from '@/components/ProfileCard/ProfileCard'
import { FaCamera } from 'react-icons/fa'
import './styles.css'
import { useUserProfile } from '@/store/userStore'


export default function Profile() {
  const profileData = {
    image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    name: 'John Doe',
    email: 'john.doe@example.com',
  }

  if (!profileData) {
    return <div>Loading...</div>
  }
  const {name, email} = useUserProfile();
 

  return (
    <div>
      <section>
        <div className="mt-10 profile-container">
          <div className="relative flex w-2/3 mb-10 text-center rounded-md profile-info h-44 mt-30">
            <div>
              <img
                src={profileData.image}
                alt="Admin"
                className="relative p-1 mt-10 ml-5 rounded-full cursor-pointer bg-primary"
                width="110"
                height="110"
              />
              <div className="absolute mb-5 bg-white cursor-pointer bottom-2 left-24">
                <FaCamera size={24} color="gray" />
              </div>
            </div>
            <div className="mt-10 ml-10 leading-loose text-left">
              {/* <h4 className="font-semibold">{profileData.name}</h4>
              <p>{profileData.email}</p> */}
              <h4 className="font-semibold">{name ===""? 'Loading...': name}</h4>
              <p>{email=== ""? '' : email}</p>
              <p className="mt-2 text-base text-cyan-600">
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
