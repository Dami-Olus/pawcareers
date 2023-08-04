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
    <nav className="bg-white text-[#407bff] border-b-2 border-[#407bff] flex justify-end space-x-5 list-none  w-screen left-0 top-0 fixed ">
      <div className="flex-grow fixed left-5">
        <p>Logo</p>
      </div>
      <div className="flex gap-5">
        <a
          href=""
          onClick={() => {
            navigate("/");
          }}
          className="cursor-pointer hover:bg-[#407bff] hover:text-white h-full"
        >
          <p>Home</p>
        </a>

        <a
          onClick={() => {
            navigate("/jobs");
          }}
          className="cursor-pointer hover:bg-[#407bff] hover:text-white h-full"
        >
          <p>Jobs</p>
        </a>

          <a href="" onClick={() => {
            navigate("/pets");
          }}
          className="cursor-pointer hover:bg-[#407bff] hover:text-white h-full"><p>Pets</p></a>
        
        <a onClick={handleSignOut} className="cursor-pointer hover:bg-[#407bff] hover:text-white h-full">
          <p>Sign out</p>
        </a>
      </div>
    </nav>
  );
}

export default Header;
