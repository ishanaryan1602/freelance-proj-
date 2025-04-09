import React, { useState, useMemo, useEffect } from "react";
import Masonry from "react-masonry-css";
import WorkSideBar from "../../components/WorkSideBar/WorkSideBar";
import { imageMapping } from "../../constants/constants.js";
import "./Work.css";
import { RxCross1 } from "react-icons/rx";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Work = () => {
  const [selectedSubmenu, setSelectedSubmenu] = useState("");
  const [imgClickedIndex, setImgClickedIndex] = useState(null);
  const [openImg, setOpenImg] = useState(false);

  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1,
  };

  const filteredImages = useMemo(
    () => imageMapping[selectedSubmenu] || imageMapping.fashion,
    [selectedSubmenu]
  );

  const handleNextImage = () => {
    setImgClickedIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
  };

  const handlePrevImage = () => {
    setImgClickedIndex((prevIndex) =>
      prevIndex === 0 ? filteredImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full flex md:flex-row flex-col md:gap-[40px] mb-[15px] gap-[20px]">
      <div className="md:w-[200px] w-[100%]">
        <WorkSideBar
          openImg={openImg}
          setOpenImg={setOpenImg}
          setSelectedSubmenu={setSelectedSubmenu}
        />
      </div>
      <div
        className={`w-full bg-gray-100 rounded-lg h-[fit-content] min-h-[85vh] p-5 ${
          openImg && "md:h-[fit-content]"
        }`}
      >
        {!openImg ? (
          <div
            className="overflow-y-scroll hide-scrollbar overflow-hidden"
            style={{
              animation: "slideIn 0.8s forwards",
            }}
          >
            <Masonry
              key={selectedSubmenu}
              breakpointCols={breakpointColumnsObj}
              className="masonry-grid"
              columnClassName="masonry-grid_column"
            >
              {filteredImages.map((img, index) => (
                <div key={index} className="masonry-item">
                  <img
                    src={img}
                    loading="lazy"
                    alt={`masonry-img-${index}`}
                    className="sub_menu_img object-cover rounded-[5px] cursor-pointer"
                    style={{
                      animation: "fadeIn 0.3s forwards",
                      animationDelay: `${index * 0.1}s`,
                    }}
                    onClick={() => {
                      setImgClickedIndex(index);
                      setOpenImg(true);
                    }}
                  />
                </div>
              ))}
            </Masonry>
          </div>
        ) : (
          <div className="w-[100%] h-[85vh] flex justify-center items-center overflow-hidden relative">
            <RxCross1
              className="absolute top-[-10px] right-[-10px] cursor-pointer z-10 bg-gray-100 rounded-[10px] text-[30px] p-2 text-gray-500 hover:text-black transition-all"
              onClick={() => setOpenImg(false)}
            />
            <img
              src={filteredImages[imgClickedIndex]}
              alt=""
              className="opened_img object-contain rounded-[7px] h-[70vh] 
              min-h-[100%]
              "
              style={{
                animation: "openUp 0.3s forwards",
              }}
            />
            <button
              onClick={handlePrevImage}
              className="prev_car_arrow absolute left-4 bg-gray-100 rounded-[50%] duration-200 font-black origin-center w-[40px] h-[40px] flex justify-center items-center text-gray-800 text-[12px] transition-all"
            >
              ➤
            </button>
            <button
              onClick={handleNextImage}
              className="next_car_arrow absolute right-4 bg-gray-100 rounded-[50%] duration-200 font-black origin-center w-[40px] h-[40px] flex justify-center items-center text-gray-800 text-[12px] transition-all "
            >
              ➤
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
