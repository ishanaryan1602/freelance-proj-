import React from "react";
import { home_page_tags } from "../../constants/constants";
import './Home.css'

const Home = () => {
  const HighlightString = ({ inputString, boldRange }) => {
    const stringArray = inputString.split("");

    const [start, end] = boldRange;

    return (
      <p>
        {stringArray.map((char, index) => (
          <span
            key={index}
            className="md:text-[22px] text-[16px] text-left opacity-0 origin-left"
            style={{
              fontWeight: index >= start && index <= end ? "bold" : "normal",
              animation: "fadeIn 0.5s forwards",
              animationDelay: `${index * 0.025}s`,
            }}
          >
            {char}
          </span>
        ))}
      </p>
    );
  };

  return (
    <>
      <div className="w-full bg-gray-100 rounded-lg h-[85vh] transition-all">
        <div className="lg:w-[60%] w-[fit-content] mx-auto max-w-[1057px]">
          <div className="w-full flex flex-wrap items-start justify-between p-10 gap-[50px]">
            {home_page_tags.map((item, index) => (
              <div
                className="flex flex-col text-left w-[40%] max-w-[300px] "
                key={index}
              >
                <HighlightString
                  inputString={item.text}
                  boldRange={item.boldRange}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
