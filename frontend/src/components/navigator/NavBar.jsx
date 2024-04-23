import React from 'react'
import { CgProfile } from "react-icons/cg"
import { IoChatboxEllipses } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className='fixed w-[70px] h-screen bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 left-0 flex justify-center flex-col items-center'>
        <a href='/profile'><button className='h-[50px] w-[50px] mt-3'><CgProfile className='h-[50px] w-[50px]'/></button></a>
        <a href='/'><button className='h-[50px] w-[50px] mt-3'><IoChatboxEllipses className='h-[50px] w-[50px]'/></button></a>
    </div>
  )
}

export default NavBar