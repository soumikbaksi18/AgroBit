import profile from "../assets/profile.svg";
import { useAuth } from "../context/AuthContext";

import "../App.css";
import Logo from "../components/Logo";

const SystemPage = () => {
    const { logout, currentUser } = useAuth();

  return (
    <>
      <nav className="flex justify-between mt-5 mx-10">
        <div className="flex ">
          <Logo/>
          <h2 className="text-gray-500 flex items-center ml-4">
            Your Dashboard
          </h2>
        </div>
        <div className="flex ">
          <h2 className="flex items-center mr-2 font-semibold text-xl">
            Hello, {currentUser?.displayName ?? currentUser?.email}
          </h2>
          <button onClick={logout} className="mx-2">
            Logout
            {/* <img src="../assets/logout.svg" className="w-10" /> */}
          </button>
          <img
            src={currentUser?.photoURL ?? profile}
            className="rounded-full object-cover w-10"
          />
        </div>
      </nav>
    </>
  );
};

export default SystemPage;
