import React, { useContext } from "react";
import { Link } from "react-router";
import WishlistIcon from "./Icons/WishlistIcon";
import CartIcon from "./Icons/CartIcon";
import { User } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
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
    <section className="bg-white pt-11.75 pb-6.75 border-b border-[#000000]">
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
            <WishlistIcon/>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
