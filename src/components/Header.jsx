import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router";

const Header = () => {
  return (
    <section className="bg-slate-100 dark:bg-black dark:text-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center justify-between gap-10 text-center">
            <p className="text-center">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <Link to="/shop">
              <button className="border-b border-[#FAFAFA]">ShopNow</button>
            </Link>
            {/* <input type="text" /> */}
          </div>
          <select>
            <option value="English">English</option>
            <option value="Bangla">Bangla</option>
          </select>
        </div>
      </div>
      <Navbar />
    </section>
  );
};

export default Header;
