import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import toast from "react-hot-toast";

const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const {setAuthUser} = useAuthContext()

  const login = async (username, password) => {
    setLoading(true);
    try{
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password})
        })
        const data = await res.json()
        if(data.err){
            throw new Error(data.err);
        }

        localStorage.setItem("chat-user", JSON.stringify(data))
        setAuthUser(data)
    }catch(err){
        toast.error(err.message)
    }finally{
        setLoading(false);
    }
  }
  return { loading, login }
}

export default useLogin