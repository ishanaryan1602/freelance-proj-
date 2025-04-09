import React, { useMemo, useState } from "react";
import { sidebar_work } from "../../constants/constants.js";
import "./WorkSideBar.css";

const WorkSideBar = ({ setSelectedSubmenu, openImg, setOpenImg }) => {
  const [active, setActive] = useState("fashion");
  const [activeMainHeadings, setActiveMainHeadings] = useState(["Photoshoots"]);

  const handleMainHeadingClick = (mainHeading) => {
    setActiveMainHeadings((prev) =>
      prev.includes(mainHeading)
        ? prev.filter((heading) => heading !== mainHeading)
        : [...prev, mainHeading]
    );
  };

  const handleSubmenuClick = (submenu) => {
    setSelectedSubmenu(submenu);
    setActive(submenu);
  };

  // Memoize the sidebar rendering logic
  const sidebarContent = useMemo(
    () =>
      sidebar_work.map((item, index) => (
        <div key={item.main_heading}>
          <span
            className={`md:text-[16px] cursor-pointer hover:text-black transition-all opacity-0 duration-200 transform translate-x-[-20px] text-[14px] capitalize`}
            style={{
              animation: "fadeIN 0.2s forwards",
              animationDelay: `${index * 0.1}s`,
            }}
            onClick={() => {handleMainHeadingClick(item.main_heading) , setOpenImg(false)}}
          >
            {item.main_heading}
          </span>

          {item.sub_menu && activeMainHeadings.includes(item.main_heading) && (
            <div className="sub_menu_of_main_heading flex flex-col ml-5 font-normal overflow-hidden">
              {item.sub_menu.map((subItem, subIndex) => (
                <span
                  key={subIndex}
                  className={`sub_menu_individual_item mt-[10px] uppercase tracking-wide hover:text-black cursor-pointer transition-all flex items-center gap-1 ${
                    active === subItem ? "text-black" : "text-gray-500"
                  } md:text-[13.5px] text-[12px] capitalize duration-500`}
                  onClick={() => {handleSubmenuClick(subItem),setOpenImg(false)}}
                  style={{
                    animation: "translateIn 0.2s forwards",
                    animationDelay: `${subIndex * 0.06}s`,
                  }}
                >
                  {active === subItem && (
                    <span
                      className="transform text-[9px] duration-[1s] scale-0!"
                      style={{
                        animation: "translateIn 0.25s forwards",
                      }}
                    >
                      ●
                    </span>
                  )}
                  {subItem}
                </span>
              ))}
            </div>
          )}
        </div>
      )),
    [active, activeMainHeadings, sidebar_work]
  );

  return (
    <div className="relative sidebar-container mt-[0px] flex md:gap-2 gap-1 w-full flex-col md:overflow-y-scroll hide-scrollbar">
      {sidebarContent}
    </div>
  );
};

export default WorkSideBar;
