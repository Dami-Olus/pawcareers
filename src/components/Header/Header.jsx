import { useNavigate } from "react-router-dom";
import userService from "../../utils/userService";

function Header({ handleSignOut, user }) {
  const navigate = useNavigate();

  return (
    <nav className="bg-white text-[#407bff] border-b-2 border-[#407bff] flex items-center justify-end space-x-5 list-none  w-screen h-fit left-0 top-0 fixed text-xl px-5 ">
      <div className="flex-grow left-5">
        <img
          src="https://i.imgur.com/J9TSS4Y.png"
          alt="Vite logo"
          className="h-20"
        />
      </div>
      <div>
        <p>Welcome, <span className="font-bold">{user.username}</span></p>
      </div>
      <div className="flex gap-5">
        <a
          href=""
          onClick={() => {
            navigate("/");
          }}
          className="cursor-pointer font-bold hover:bg-[#407bff] hover:text-white "
        >
          <p>Home</p>
        </a>

        <a
          onClick={() => {
            navigate("/jobs");
          }}
          className="cursor-pointer font-bold hover:bg-[#407bff] hover:text-white "
        >
          <p>Jobs</p>
        </a>

        <a
          href=""
          onClick={() => {
            navigate("/pets");
          }}
          className="cursor-pointer font-bold hover:bg-[#407bff] hover:text-white h-full"
        >
          <p>Pets</p>
        </a>

        <a
          onClick={handleSignOut}
          className="cursor-pointer font-bold hover:bg-[#407bff] hover:text-white h-full"
        >
          <p>Sign out</p>
        </a>
      </div>
    </nav>
  );
}

export default Header;
