import React from "react";
import { images } from "../../assets/assets";
import { hero_slogan } from "@/constants/constants";

const Hero_Section = () => {
  return (
    <div
      className=" bg-[#f5f5f5] bg-cover bg-center bg-no-repeat h-[70vh] mt-[15px] rounded-xl relative"
      style={{ backgroundImage: `url(${images.hero_banner})` }}
    >
      {/* <div className="hero_contents flex flex-col bg-white bg-opacity-[0.1] backdrop-blur-[10px] absolute left-[10px] p-[20px] bottom-[10px] w-9/12 rounded-xl">
        <h1 className=" text-[4vw] font-mono uppercase text-white mb-[20px] ml-[20px]">{hero_slogan}</h1>
      </div> */}
    </div>
  );
};

export default Hero_Section;
