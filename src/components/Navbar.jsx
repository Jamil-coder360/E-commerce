import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import WishlistIcon from "./Icons/WishlistIcon";
import CartIcon from "./Icons/CartIcon";
import { SunIcon, User, MoonIcon, Menu, X } from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import Logo from "./Icons/Logo";
import { cartSlice } from "../features/cart/cartSlice";
import { useSelector } from "react-redux";
import ProfileDropdown from "./account/ProfileDropdown";
import SearchBox from "./SearchBox";
import axios from "axios";

const Navbar = () => {
  const { theme, themeChange } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);
  const { cartList } = useSelector((state) => state.cart);
  const { wishList } = useSelector((state) => state.wishlist);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchBoxOpen, setSearchBoxOpen] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((data) => setMenus(data.data));
  }, []);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((data) => {
      setProducts(data.data.products);
    });
  }, []);
  console.log(user);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
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

  const searchResult = products.filter((element) => {
    if (searchText.length == 0) {
      return;
    }

    return element.title.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <section className="bg-white dark:bg-black pt-11.75 pb-6.75 border-b dark:border-slate-100 border-[#000000]">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between">
          <div>
            <Link to="/">
              {/* <img src="./logo.svg" alt="logo" /> */}
              <Logo className="fill-black dark:fill-white" />
            </Link>
          </div>
          {/* desktop menu */}
          <div className="hidden sm:flex ">
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
          <div className=" relative hidden text-gray-950 sm:flex items-center gap-5">
            <input
              className=" w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              onChange={handleSearch}
              onFocus={() => setSearchBoxOpen(true)}
              onBlur={() => setSearchBoxOpen(false)}
              placeholder="Search..."
            />
            {searchText.length > 0 && searchBoxOpen && (
              <div className=" absolute top-full right-0 mt-2 z-9999">
                <SearchBox searchProduct={searchResult} />
              </div>
            )}
          </div>
          <div className="hidden text-gray-950 sm:flex items-center gap-5">
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

          <div
            className="flex sm:hidden cursor-pointer text-black"
            onClick={() => setOpen(!open)}
          >
            {open ?( <X/> ):( <Menu />)}
          </div>

          {/* mobile menu */}
          {open && (
            <div
              className={`fixed top-0 left-0  h-full w-full py-10 px-5 bg-white z-50 transform transition-transform duration-300 md:hidden lg:hidden
        ${setOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
               <div className="flex items-center justify-between px-5 py-4 border-b">
    <button onClick={() => setOpen(false)}>
      <X className="text-black absolute right-5"  size={25}/>
    </button>
  </div>
              <div className=" text-gray-950 flex items-center gap-5 pb-10">
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
              <div className=" relative text-gray-950 flex items-center gap-5 pb-10">
                <input
                  className=" w-full border border-gray-300 rounded-md py-5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  onChange={handleSearch}
                  onFocus={() => setSearchBoxOpen(true)}
                  onBlur={() => setSearchBoxOpen(false)}
                  placeholder="Search..."
                />
                {searchText.length > 0 && searchBoxOpen && (
                  <div className=" absolute top-full right-0 mt-2 z-9999">
                    <SearchBox searchProduct={searchResult} />
                  </div>
                )}
              </div>

              <div>
                <nav>
                  <ul className="flex flex-col items-start gap-5">
                    {/* item mapping from "menuItem" data list */}
                    {menuItems.map((item) => (
                      <li
                        key={item.id}
                        className="text-[#000000] text-[30px] hover:text-[#000090] hover:underline transition-colors duration-300"
                      >
                        <Link to={item.path}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
