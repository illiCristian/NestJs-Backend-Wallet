// 'use client'
// import React, { createContext, useContext, useState } from 'react'

// const ProfileContext = createContext()

// export function ProfileProvider ({ children }) {
//   const [profileData, setProfileData] = useState({
//     image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
//     name: 'John Doe',
//     email: 'john.doe@example.com'
//   })

//   const [isImageClicked, setIsImageClicked] = useState(false)

//   const updateProfileData = newData => {
//     setProfileData(newData)
//   }

//   const toggleImageClick = () => {
//     setIsImageClicked(!isImageClicked)
//   }

//   return (
//     <ProfileContext.Provider
//       value={{
//         profileData,
//         isImageClicked,
//         toggleImageClick,
//         updateProfileData
//       }}
//     >
//       {children}
//     </ProfileContext.Provider>
//   )
// }

// export function useProfile () {
//   const context = useContext(ProfileContext)
//   if (!context) {
//     throw new Error('useProfile must be used within a ProfileProvider')
//   }
//   return context
// }
