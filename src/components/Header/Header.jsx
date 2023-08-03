import { useNavigate } from "react-router-dom"
import userService from "../../utils/userService"


function Header() {

  const navigate = useNavigate()

  async function handleSignOut(){
    try {
      const signOut = await userService.logout()
      navigate('/login')
    } catch (e) {
      console.log(e)
      
    }
  }
  return (
    
      <nav className="bg-white text-[#407bff] border-b-2 border-[#407bff] flex justify-evenly space-x-5 list-none absolute w-screen left-0 top-0 p-2">
        <p className="flex-1">Logo</p>
          <p>Home</p>
          <p>Jobs</p>
          <p>Pets</p>
          <a onClick={handleSignOut} className="cursor-pointer"><p>Sign out</p></a>
          
    
      </nav>
   
  )
}

export default Header