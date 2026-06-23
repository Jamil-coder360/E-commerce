import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

import { Link } from "react-router";
import { v4 as uuidv4 } from "uuid";

const SideMenu = () => {
  // data list for side menu and side menu drop down
  const menuItems = [
    {
      id: uuidv4(),
      name: "Woman's Fashion",
      link: "#",
      submenu: [
        { id: uuidv4(), name: "Dresses", link: "/dresses" },
        { id: uuidv4(), name: "Tops & Blouses", link: "/tops-blouses" },
      ],
    },
    { id: uuidv4(), name: "Men's Fashion", link: "/about" },
    { id: uuidv4(), name: "Electronics", link: "/contact" },
    { id: uuidv4(), name: "Home & Lifestyle", link: "/contact" },
    { id: uuidv4(), name: "Medicine", link: "/contact" },
    { id: uuidv4(), name: "Sports & Outdoor", link: "/contact" },
    { id: uuidv4(), name: "Baby's & Toys", link: "/contact" },
    { id: uuidv4(), name: "Groceries &  ", link: "/contact" },
    { id: uuidv4(), name: "Health & Beauty", link: "/contact" },
  ];
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="max-w-full lg:max-w-55 bg-white dark:bg-black pr-4 border-r-[.5px] dark:border-white/30 lg:border-[#000000]/30">
      <ul className="flex flex-wrap lg:flex-nowrap lg:flex-col gap-4">
        {menuItems.map((item) => (
          <li
            key={item.id}
            onMouseEnter={() => setActiveDropdown(item.id)}
            onMouseLeave={() => setActiveDropdown(null)}
            className=" relative group flex justify-between items-center gap-6 font-normal text-base text-[#000000] dark:text-white hover:text-gray-900"
          >
            <Link to={item.link}>{item.name}</Link>
            {item.submenu && item.submenu.length > 0 && (
              <ChevronRight className="inline-block ml-2" />
            )}

            {item.submenu && (
              <div
                className={`absolute left-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40`}
              >
                   <div className="bg-white rounded-md shadow-lg border border-gray-200 min-w-50 py-2 border-b-2 border-b-red-500">
                {item.submenu.map((subitem) => (
                  <li
                    key={subitem.id}
                    className=" pl-2 flex justify-between items-center gap6 font-normal text-base text-[#000000] dark:text-white hover:text-gray-900"
                  >
                    <Link to={subitem.link}>{subitem.name}</Link>
                
                  </li>
                ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideMenu;
