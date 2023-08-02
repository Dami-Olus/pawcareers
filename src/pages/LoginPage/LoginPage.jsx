import React, { useState } from 'react';
import './LoginPage.css';


export default function LoginPage(props){

  const [state, setState] = useState({
    email: '',
    password: ''
  })

  function handleSubmit(){

  }

  function handleChange(){

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
          Already have an account?{" "}
          <span className="text-[#407bff]">Log In</span>
        </p>
      </form>
    </div>
      );
}

