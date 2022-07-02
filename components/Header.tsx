import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div className=" z-2 h-30  flex w-full  max-w-7xl flex-row justify-between border-b bg-black px-5 py-3  text-white">
      <Image
        src="/jwVectorLogoWhite.svg"
        alt="Logo"
        layout="intrinsic"
        width={100}
        height={100}
      ></Image>

      {/* <Image
        src="/wavesVectorTextwhite.svg"
        alt="Logo"
        layout="intrinsic"
        width={500}
        height={100}
      ></Image> */}

      <div className=" flex flex-row justify-between space-x-5">
        <h1>Bio</h1>
        <h1>Mixes</h1>
        <h1>Releases</h1>
        <h1>Shop</h1>
      </div>
    </div>
  )
}

export default Header
