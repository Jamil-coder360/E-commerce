import React, { useContext } from "react";
import { Link } from "react-router";
import WishlistIcon from "./Icons/WishlistIcon";
import CartIcon from "./Icons/CartIcon";
import { SunIcon, User, MoonIcon } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, themeChange } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);
  console.log(user);
  // Navber data list
  const menuItems = [
    { id: 1, name: "Home", path: "/" },
    {
      id: 2,
      name: "Contact",
      path: "/contact",
    },
    { id: 3, name: "About", path: "/about" },
    { id: 4, name: "signup", path: "/signup" },
    // { id: 4, name: "login", path: "/login" },
  ];

  return (
    <section className="bg-white dark:bg-black pt-11.75 pb-6.75 border-b border-[#000000]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/">
              <img src="./logo.svg" alt="logo" />
            </Link>
          </div>
          <div>
            <nav>
              <ul className="flex items-center gap-5">
                {/* item mapping from "menuItem" data list */}
                {menuItems.map((item) => (
                  <li
                    key={item.id}
                    className="text-[#000000] hover:text-[#000090] hover:underline transition-colors duration-300"
                  >
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="text-gray-950 flex items-center gap-5">
            <input
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Search..."
            />
            <WishlistIcon />
            <CartIcon />
            {user && (
              <div className="relative">
                <div className="cursor-pointer group">
                  <User />

                  <ProfileDropdown
                    className={
                      "transition-all group-hover:visible invisible opacity-0 group-hover:opacity-100"
                    }
                  />
                </div>
              </div>
            )}

            <div className="relative w-6 h-6">
              <SunIcon
                onClick={themeChange}
                className={`absolute inset-0 text-yellow-400 transition-all duration-500 cursor-pointer 
    ${theme === "dark" ? "rotate-0 opacity-0" : "rotate-180 opacity-100"}`}
              />

              <MoonIcon
                onClick={themeChange}
                className={`absolute fill-blue-300 inset-0 text-gray-700 dark:text-white transition-all duration-500 cursor-pointer 
    ${theme === "light" ? "rotate-180 opacity-0" : "rotate-0 opacity-100"}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
