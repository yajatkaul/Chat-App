import React from 'react'
import "./App.css"
import Login from "./pages/login/Login"
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'
import Profile from './pages/profile/Profile'


const App = () => {
  const {authUser} = useAuthContext();
  return (
    <div className='flex h-screen items-center justify-center'>
        <Routes>
            <Route path='/' element={authUser ? <Home /> : <Navigate to="/login" />} />
            <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />} />
            <Route path='/signup' element={authUser ? <Navigate to="/" /> : <SignUp />} />
            <Route path='/profile' element={authUser ? <Profile /> : <Navigate to = "/" />} />
        </Routes>
        <Toaster />
    </div>
  )
}

export default App