import React from "react";
import Masonry from "react-masonry-css";
import WorkSideBar from "../../components/WorkSideBar/WorkSideBar";
import { masonry_1 } from "../../constants/constants.js";
import "./Work.css";

const Work = () => {
  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1,
  };

  return (
    <>
      <div className="w-full flex md:flex-row flex-col md:gap-[40px] mb-[15px] gap-[20px]">
        <div className="md:w-[200px] w-[100%]">
          <WorkSideBar />
        </div>
        <div
          className="w-full opacity-100 bg-gray-100 rounded-lg h-[85vh] overflow-y-scroll p-4 hide-scrollbar"
          style={{
            animation: "slideIn 0.8s forwards",
          }}
        >
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {masonry_1.map((img, index) => (
              <div key={index} className="masonry-item">
                <img
                  src={img}
                  alt={`masonry-img-${index}`}
                  className="w-full object-cover rounded-[7px]"
                />
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </>
  );
};

export default Work;
