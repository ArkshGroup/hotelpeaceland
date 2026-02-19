import React from 'react'
import Image from 'next/image'

const LoginLogo = () => {
  return (
    <>
      <Image
        src="/hpc.jpeg" 
        alt="Hotel Peaceeland Logo"
        width={180}
        height={60}
        priority
      />
    </>
  )
}

export default LoginLogo
