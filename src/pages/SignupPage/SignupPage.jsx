import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userService from '../../utils/userService'

function SignupPage({handleSignUpOrLogin}) {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConf: "",
    consent: false
  });

  const [selectedFile, setSelectedFile] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function handleFileInput(e) {
    setSelectedFile(e.target.files[0]);
  }

  function handleCheckBox(){
    setState({
      ...state,
      consent: !state.consent
    })
  }

  async function handleSubmit(e){
    e.preventDefault()

    const formData = new FormData()
    formData.append('photoUrl', selectedFile)
    formData.append('username', state.username)
    formData.append('email', state.email)
    formData.append('password', state.password)

    try {

      const signUp = await userService.signup(formData)
      navigate('/login')
      // handleSignUpOrLogin()
      

    } catch (e) {
      console.log(e, ' err in handleSubmit');
				setError('Check your terminal for your error and the chrome console!')
    }
    
  }

  return (
    <div className="border-2 border-[#407bff]">
      <form
        action=""
        className="flex flex-col gap-5 border-[1px] p-5 rounded-lg border-[#407bff]"
        onSubmit={handleSubmit}
      >
        <input
          type="file"
          placeholder="upload image"
          name="photoUrl"
          value={state.photoUrl}
          onChange={handleFileInput}
        />
        <input
          type="text"
          name="username"
          value={state.username}
          placeholder="Full name"
          className="border-b-2 border-blue-100 ml-5 rounded-md text-[#407bff]"
          onChange={handleChange}
        />
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
        <input
          type="password"
          name="passwordConf"
          value={state.passwordConf}
          placeholder="Confirm Password"
          className="border-b-2 border-blue-100 ml-5 rounded-md text-[#407bff]"
          onChange={handleChange}
        />
        <div className="flex gap-5 ml-5">
          <input type="checkbox" name="consent" id="" checked={state.consent} onChange={handleCheckBox} />
          <p className="text-[#407BFF]">
            I have read and agreed to the terms of services and privacy policy
          </p>
        </div>
        <button className="bg-[#407BFF] py-2 rounded-md">Create Account</button>
        <p className="text-slate-500">
          Already have an account?{" "}
          <span className="text-[#407bff]">Log In</span>
        </p>
      </form>
    </div>
  );
}

export default SignupPage;
