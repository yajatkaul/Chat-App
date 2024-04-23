import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";


const useSignup = () => {
  const [loading,setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();

  const signup = async({fullName,username,password,confirmPassword,gender}) => {
    const success = handleInputErrors({fullName,username,password,confirmPassword,gender})
    if(!success) return;

    setLoading(true);
    try{
        const res = await fetch("/api/auth/signup",{
            method: "POST",
            headers: { "Content-Type": "application/json "},
            body: JSON.stringify({fullName,username,password,confirmPassword,gender}),
        })

        const data = await res.json();
        console.log(data);
        if(data.err){
            throw new Error(data.err)
        }
        //localstorage
        localStorage.setItem("chat-user",JSON.stringify(data))

        //context
        setAuthUser(data)

    }catch(err){
        toast.error(err.message)
    }finally{
        setLoading(false);
    }
}
    return { loading, signup }

};

export default useSignup

function handleInputErrors({fullName,username,password,confirmPassword,gender}){
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error("Please fill all the fields");
        return false
    }

    if(password !== confirmPassword){
        toast.error("Passwords don't match");
        return false;
    }

    if(password.lengh < 6){
        toast.error("Password must be at least 6 characters")
        return false;
    }


    return true;
}