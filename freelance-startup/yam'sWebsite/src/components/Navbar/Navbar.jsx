import React, { useEffect, useState } from "react";
import { navbarLinks, nav_hook_line } from "../../constants/constants";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import "./Navbar.css";
import { imagesAssets } from "../../constants/constants.js";

const Navbar = ({ isSignedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [currentPath, setCurrentPath] = useState("");
  const lastIndex = navbarLinks.length - 1;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  useEffect(() => {
    const matchingLink = navbarLinks.find((item) => item.url === currentPath);
    if (matchingLink) {
      setActive(matchingLink.name);
    }
  }, [currentPath]);

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

  // Render navigation items
  const renderNavItems = () =>
    navbarLinks.map((item, index) => (
      <Link
        to={item.url}
        key={index}
        className={`nav_stag_class hover:bg-gray-300 duration-[0.3s] py-1 px-5 rounded-lg ${
          isOpen && "transform -translate-y-[350px]"
        } ${
          active === item.name
            ? "border-[1px] bg-gray-300"
            : "border-[transparent]"
        } border-[1px]`}
        onClick={() => {
          setActive(item.name);
          setIsOpen(false);
        }}
        style={
          isOpen
            ? {
                animation: "transverseDown 0.2s forwards",
                animationDelay: `${index * 0.07}s`,
              }
            : {}
        }
      >
        <span className="text-center">{item.name}</span>
      </Link>
    ));

  // Render logo
  const renderLogo = () => (
    <div>
      {/* <h1 className="font-black">LOGO</h1> */}
      <img src={imagesAssets.logo} alt="" className="w-[90px]" />
    </div>
  );

  // Render user button
  const renderUserButton = () => (
    <button
      className={`btn ${
        isOpen ? "text-[17px]" : "text-[11px]"
      } md:border-[1px] md:border-gray-300 rounded-lg p-[2px] px-[4px] hover:bg-gray-300 transition-all duration-[0.5s]`}
    >
      {!isSignedIn ? "Sign-in" : "Log-in"}
    </button>
  );

  return (
    <div className="bg-white flex justify-between p-5 px-10 align-middle items-center min-h-[89.5px] relative overflow-hidden ">
      {/* Logo */}
      <div className={`${isOpen && "hidden"} boreder-2 `}>{renderLogo()}</div>
      {/* Render navigation items */}
      <div className="md:flex align-middle md:gap-0 hidden text-[14px] !w-[fit-content] lg:w-[900px] !gap-2 md:justify-between justify-center">
        {renderNavItems()}
      </div>
      {/* Login */}
      <div className="md:block hidden">{renderUserButton()}</div>
      {/* hamburger menu */}
      <FaBars
        className={`block md:hidden cursor-pointer ${isOpen && "hidden"} `}
        onClick={() => setIsOpen(true)}
      />
      {/* mobile nav */}
      {isOpen && (
        <div className="mobile_nav_menu absolute bg-white bg-opacity-50 backdrop-blur-sm h-screen w-full z-50 inset-0 flex flex-col justify-center items-center gap-5 border-2 ">
          <RxCross1
            className="absolute top-[37px] right-[30px] border-2 hover:border-gray-200 transition-all duration-[0.5s] rounded-[50%] p-[5px] text-[30px] border-transparent cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
          {/* Logo */}
          <div
            className="mb-20 transform translate-y-40"
            style={{ animation: "transverseDown 0.5s forwards" }}
          >
            {renderLogo()}
          </div>
          {/* Navigation items */}
          <div className="mobile_nav_items flex flex-col align-middle gap-5 items-center overflow-hidden ">
            {renderNavItems()}
          </div>
          {/* Login */}
          <div className="overflow-hidden">
            <div
              className="mob_login mt-20"
              style={{
                animation: "transverseDown 0.2s forwards",
                animationDelay: `${lastIndex * 0.09}s`,
              }}
            >
              {renderUserButton()}
            </div>
          </div>
        </div>
      )}
      {/* Hook line */}
      <div className="absolute top-[0px] xl:w-[900px] w-[500px] left-[52%] transform translate-x-[-52%] ">
        <span className="text-[13px] bg-[#FF931EB2] p-[6px] md:flex hidden justify-center items-center rounded-md text-[white] w-full">
          {nav_hook_line}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
