import React, { useState } from 'react'
import "../../App.css"
import Gender from './Gender'
import useSignup from '../../hooks/useSignup'


const SignUp = () => {
  const [inputs,setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const {loading,signup} = useSignup()

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs,gender})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    await signup(inputs);
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 backdrop-blur-lg bg-grey rounded-xl'>
            <h1 className='flex items-center justify-center text-3xl'>SignUp</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    {/* Username */}
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input 
                            type="text" 
                            className="grow" 
                            placeholder="Username" 
                            value={inputs.username} //inputs is the useState Hook
                            onChange={(e) => setInputs({...inputs, username: e.target.value})}
                        />
                    </label>
                    {/* Display Name */}
                    <label className='label p-2'>
                        <span className='text-base label-text'>Display Name</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input 
                            type="text" 
                            className="grow" 
                            placeholder="Display Name" 
                            value={inputs.fullName}
                            onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                        />
                    </label>
                    {/* Password */}
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input 
                            type="password" 
                            className="grow" 
                            placeholder="Password" 
                            value={inputs.password}
                            onChange={(e) => setInputs({...inputs, password: e.target.value})}
                        />
                    </label>
                    {/* Confirm Password */}
                    <label className='label p-2'>
                        <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input 
                            type="password" 
                            className="grow" 
                            placeholder="Confirm Password" 
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                        />
                    </label>
                    {/* Gender Checkbox */}
                    <Gender onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender}/>

                    <div className='mb-2'><a href='/login'>Already have an account?</a></div>

                    {/* SignUp Btn */}
                    <div className='flex items-center justify-center'>
                        <button className="btn btn-wide">SignUp</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp