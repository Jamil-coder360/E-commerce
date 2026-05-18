import React, { useContext, useState } from "react";
import { Link } from "react-router";
import WishlistIcon from "./Icons/WishlistIcon";
import CartIcon from "./Icons/CartIcon";
import { SunIcon, User, MoonIcon } from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import Logo from "./Icons/Logo";
import { cartSlice } from "../features/cart/cartSlice";
import { useSelector } from "react-redux";
import ProfileDropdown from "./account/ProfileDropdown";

const Navbar = () => {
  const { theme, themeChange } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);
  const { cartList } = useSelector((state) => state.cart);
  const { wishList } = useSelector((state) => state.wishlist);
  const [active, setActive] = useState(false);

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
    <section className="bg-white dark:bg-black pt-11.75 pb-6.75 border-b dark:border-slate-100 border-[#000000]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/">
              {/* <img src="./logo.svg" alt="logo" /> */}
              <Logo className="fill-black dark:fill-white" />
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
            {/* icon color change */}
            {/* <Link to={"wish"} className="relative"    onClick={() => setActive((prev) => !prev)} >

            <WishlistIcon className="stroke-black dark:stroke-white " stroke={active ? "black" : "red"}
        fill={active ? "red" : "none"} /> */}
        
            <Link to={"wish"} className="relative">
              <WishlistIcon />
              <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center absolute -top-2 -right-2">
                {wishList?.length}
              </span>
            </Link>
            <Link to={"cart"} className="relative">
              <CartIcon className="stroke-black dark:stroke-white" />
              <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center absolute -top-2 -right-2">
                {cartList?.length}
              </span>
            </Link>
            {user && (
              <div className="relative">
                <div className="cursor-pointer group">
                  <User className="text-black dark:text-white" />

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
