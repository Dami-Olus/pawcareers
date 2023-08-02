import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userService from '../../utils/userService';
import './LoginPage.css';


export default function LoginPage({handleSignUpOrLogin}){

  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('')

  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()

    try {
      const user = await userService.login(state)
      navigate('/')
      handleSignUpOrLogin()

    } catch (e){
      console.log(e, 'error in handleSubmit')
      setError(e)
    }
  }

  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }
   

    return (
      <div className="border-2 border-[#407bff]">
      <form
        action=""
        className="flex flex-col gap-5 border-[1px] p-5 rounded-lg border-[#407bff]"
        onSubmit={handleSubmit}
      >
        
       
        <input
          type="text"
          name="email"
          value={state.email}
          placeholder="Email"
          className="border-b-2 border-blue-100 ml-5 rounded-md text-[#407bff]"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={state.password}
          placeholder="Password"
          className="border-b-2 border-blue-100 ml-5 rounded-md text-[#407bff]"
          onChange={handleChange}
        />
        
        
        <button className="bg-[#407BFF] py-2 rounded-md">Create Account</button>
        <p className="text-slate-500">
          Don't have an account?
          <span className="text-[#407bff]">Sign Up</span>
        </p>
      </form>
    </div>
      );
}

