import React , { useState } from 'react'
import "../../App.css"
import useLogin from '../../hooks/useLogin';


const Login = () => {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const {loading,login} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username,password);
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 backdrop-blur-lg bg-grey rounded-xl'>
            <h1 className='flex items-center justify-center text-3xl'>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input 
                            type="text" 
                            className="grow" 
                            placeholder="Username" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input 
                            type="password" 
                            className="grow" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}    
                        />
                    </label>
                    <div className='mb-2'><a href='/signup'>Don't have an account?</a></div>
                    <div className='flex items-center justify-center'>
                        <button className="btn btn-wide"
                                disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Login"}
                         </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login