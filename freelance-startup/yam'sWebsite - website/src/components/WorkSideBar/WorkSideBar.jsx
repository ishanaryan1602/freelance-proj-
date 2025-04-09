import React, { useEffect, useState } from "react";
import { sidebar_work } from "../../constants/constants.js";
import "./WorkSideBar.css";

const WorkSideBar = () => {
  const [openItem, setOpenItem] = useState(["Photoshoots"]);

  const handleMainHeadingClick = (mainHeading) => {
    if (openItem.includes(mainHeading)) {
      setOpenItem(openItem.filter((item) => item !== mainHeading));
    } else {
      setOpenItem([...openItem, mainHeading]);
    }
  };

  const sidebarRender = () =>
    sidebar_work.map((item, index) => (
      <div key={item.main_heading}>
        <span
          className={`text-sm md:text-[16px] cursor-pointer hover:text-black transition-all opacity-0 duration-200 transform translate-x-[-20px] ${
            openItem.includes(item.main_heading) && "text-black"
          } ${!openItem.includes(item.main_heading) && "text-gray-500"}`}
          onClick={() => handleMainHeadingClick(item.main_heading)}
          style={{
            animation: "fadeIN 0.2s forwards",
            animationDelay: `${index * 0.1}s`,
          }}
        >
          {item.main_heading}
        </span>

        {item.sub_menu && openItem.includes(item.main_heading) && (
          <div className="sub_menu_of_main_heading flex flex-col ml-5 font-normal overflow-hidden">
            {item.sub_menu.map((subItem, subIndex) => (
              <span
                key={subIndex}
                className="sub_menu_individual_item mt-[10px] uppercase text-[13px] text-gray-500 tracking-wide hover:text-black cursor-pointer transition-all"
                style={{
                  animation: "translateIn 0.2s forwards",
                  animationDelay: `${subIndex * 0.06}s`,
                }}
              >
                {subItem}
              </span>
            ))}
          </div>
        )}
      </div>
    ));

  return (
    <div className="relative sidebar-container mt-[40px] flex flex-wrap flex-row md:flex-col gap-5 w-full h-[fit-content] hide-scrollbar">
      {sidebarRender()}
    </div>
  );
};

export default WorkSideBar;
