import React from 'react'
import "../../App.css"
import Sidebar from "../../components/sidebar/Sidebar"
import MessageContainer from '../../components/messages/MessageContainer'
import NavBar from '../../components/navigator/NavBar';

const Home = () => {
  return (
    <>
    <NavBar />
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <Sidebar />
        <MessageContainer />
    </div>
    </>
  )
}

export default Home
