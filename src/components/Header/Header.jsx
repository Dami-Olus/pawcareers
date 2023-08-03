import { useNavigate } from "react-router-dom";
import userService from "../../utils/userService";

function Header() {
  const navigate = useNavigate();

  async function handleSignOut() {
    try {
      const signOut = await userService.logout();
      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <nav className="bg-white text-[#407bff] border-b-2 border-[#407bff] flex justify-end space-x-5 list-none  w-screen left-0 top-0 p-2 fixed ">
      <div className="flex-grow fixed left-5">
        <p>Logo</p>
      </div>
      <div className="flex gap-5">
        <p>Home</p>
        <a onClick={() => {navigate('/jobs')}} className="cursor-pointer">
          <p>Jobs</p>
        </a>

        <p>Pets</p>
        <a onClick={handleSignOut} className="cursor-pointer">
          <p>Sign out</p>
        </a>
      </div>
    </nav>
  );
}

export default Header;
