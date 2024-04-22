import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import toast from 'react-hot-toast'


const useLogout = () => {
  const [loading,setloading] = useState(false);
  const { setAuthUser }= useAuthContext();

  const logout = async () => {
    setloading(true);
    try{
        const res = await fetch("/api/auth/logout",{
            method: "POST",
            headers: {"Content-Type": "application/json"}
        })
        const data = await res.json()
        if(data.err){
            throw new Error(data.err)
        }

        localStorage.removeItem("chat-user")
        setAuthUser(null)
    }catch (err){
        toast.error(err.message);
    }finally{
        setloading(false);
    };
    };
    return {loading,logout};
}
export default useLogout;