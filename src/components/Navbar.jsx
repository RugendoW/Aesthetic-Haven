
import { LayoutDashboard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const Navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token); // true if token exists
    };

    checkLogin(); // run once on load

    // Listen for login/logout changes in localStorage
    window.addEventListener("storage", checkLogin);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("storage", checkLogin);
    };
  }, []);


  const handleLogoClick = () => {
    Navigate("/");
  };

  return (
    <nav className="absolute fixed top-0 right-0 justify-between  ">
      {/* Logo / Brand */}
      <h1
        className="text-2xl font-bold text-pink-600 cursor-pointer"
        onClick={handleLogoClick}
      >
      </h1>

    </nav>
  );
}

export default Navbar;