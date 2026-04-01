import { ChevronRight } from "lucide-react";
import React from "react";

import { Link } from "react-router";
import { v4 as uuidv4 } from 'uuid';

const SideMenu = () => {
  const menuItems = [
    {id:uuidv4(), name: "Woman’s Fashion", link: "/",  submenu: [
      {id:uuidv4(), name: "Dresses", link: "/dresses" },
      {id:uuidv4(), name: "Tops & Blouses", link: "/tops-blouses" },
    ]},
    {id:uuidv4(), name: "Men’s Fashion", link: "/about" },
    {id:uuidv4(), name: "Electronics", link: "/contact" },
    {id:uuidv4(), name: "Home & Lifestyle", link: "/contact" },
    {id:uuidv4(), name: "Medicine", link: "/contact" },
    {id:uuidv4(), name: "Sports & Outdoor", link: "/contact" },
    {id:uuidv4(), name: "Baby’s & Toys", link: "/contact" },
    {id:uuidv4(), name: "Groceries &  ", link: "/contact" },
    {id:uuidv4(), name: "Health & Beauty", link: "/contact" },
  ];

  return( 
     <nav className="max-w-[220px] bg-white pr-4 border-r-[.5px] border-[#000000]/30">
    <ul className="flex flex-col gap-4 ">
        {menuItems.map(item => (
          <li key={item.id} className="flex justify-between items-center gap6 font-normal text-base text-[#000000] hover:text-gray-900">
            <Link to={item.link}>{item.name}</Link>
            {item.submenu && item.submenu.length > 0 &&(
              <ChevronRight className="inline-block ml-2" />
            )}
          </li>
        ))}

    </ul>
  </nav>)
};

export default SideMenu;
