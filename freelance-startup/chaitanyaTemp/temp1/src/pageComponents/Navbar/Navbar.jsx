import React, { useEffect, useState } from "react";
import { navbarLinks } from "@/constants/constants";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ isSignedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const lastIndex = navbarLinks.length - 1;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    if (screenWidth > 768) {
      setIsOpen(false);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  const renderNavItems = () =>
    navbarLinks.map((item, index) => (
      <Link
        to={item.url}
        key={index}
        onClick={() => {
          if (screenWidth < 768) {
            setIsOpen(false); // Close the navigation menu
          }
        }}
      >
        <span
          key={index}
          className={`nav_link_items uppercase text-[13px] cursor-pointer transition-all text-gray-600 hover:tracking-[4px] ${
            active === item.name
              ? "text-gray-900 tracking-[4px] scale-[1.09] font-semibold text-center"
              : "tracking-[1px] scale-[0.9]"
          } ${screenWidth < 768 && "text-center text-[18px]"}`}
          style={{
            animation: `fadeIn 1s ease-in-out forwards`,
            animationDelay: `${index * 0.1}s`,
            transition: "0.3s",
            transformOrigin: "center",
          }}
          onClick={() => setActive(item.name)}
        >
          {item.name}
        </span>
      </Link>
    ));

  return (
    <div className="flex justify-between items-center w-11/12 mx-auto py-[20px] sticky top-0 z-10 bg-[white] bg-opacity-50 backdrop-blur-[10px]">
      <div className="logo_side">
        <span
          className="uppercase font-black flex align-middle"
          style={{
            animation: `fadeIn 1s ease-in-out forwards`,
            animationDelay: `0.05s`,
          }}
        >
          Logo
        </span>
      </div>

      <div className="nav_menu_items md:flex hidden gap-5">
        {renderNavItems()}
      </div>

      <div className="user_signup_login md:flex hidden">
        <button>{isSignedIn ? "LOGIN" : "SIGNUP"}</button>
      </div>

      <FaBars
        className="block md:hidden cursor-pointer"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div className="mobile_nav absolute top-0 left-0 z-10 bg-white bg-opacity-100 h-screen flex flex-col justify-center w-full">
          <RxCross1
            className="absolute right-[-1px] top-[25px] cursor-pointer"
            onClick={() => setIsOpen(false)}
            style={{
              animation: `fadeIn 1s ease-in-out forwards`,
              animationDuration: "0.5s",
            }}
          />
          <div className="logo_top w-[fit-content] mx-auto mt-14 mb-10">
            <span className="uppercase font-black">Logo</span>
          </div>

          <div className="nav_menu_items gap-5 flex flex-col w-full mx-auto justify-center items-center">
            {renderNavItems()}
          </div>

          <div className="user_signup_login w-[fit-content] mx-auto my-[50px]">
            <button
              className="mobile_nav_login"
              style={{
                animation: `fadeIn 1s ease-in-out forwards`,
                animationDelay: `${lastIndex * 0.1}s`,
              }}
            >
              {isSignedIn ? "LOGIN" : "SIGNUP"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
