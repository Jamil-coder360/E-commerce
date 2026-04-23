import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import LoadingPage from "../pages/LoadingPage";
import { useLocation } from "react-router";
// import { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext";

const Root = () => {

	const [loading,setLoading] =useState("true");
const location = useLocation();
  useEffect(() => {
	setLoading(true);

	const timer = setTimeout(() => {
	  setLoading(false);
	}, 1000);

	return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return <LoadingPage /> ;
  }
	// const { theme,handleThemeChange } = useContext(ThemeContext);
	// console.log(theme);

	return (
		<main className="bg-[#ffffff] dark:bg-black">
			{/* <div onClick={handleThemeChange} class="bg-gray-500 w-20 mx-auto mt-10 cursor-pointer rounded-3xl toggler dark:bg-green-500 fixed top-5 right-5 z-30">
				<div
					class={`bg-white w-10 h-10 scale-75 rounded-3xl transition-transform dark:bg-black ${theme == "light" ? "translate-x-0" : "translate-x-full"}`}
				></div>
			</div> */}
			<Header />
			<Outlet />
			<Footer />
		</main>
	);
};

export default Root;
