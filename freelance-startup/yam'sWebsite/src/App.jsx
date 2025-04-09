import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { navbarLinks } from "./constants/constants";
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import Service from "./pages/Service/Service";
import Support from "./pages/Support/Support";
import About from "./pages/AboutYam/About";

const App = () => {
  const components = {
    "/": <Home />,
    "/work": <Work />,
    "/service": <Service />,
    "/about": <About />,
    "/support": <Support />,
  };
  const [isSignedIn , setIsSignedIn] = useState(true)

  return (
    <>
      <div className="app">
        <Navbar isSignedIn={isSignedIn} />
        <div className="w-[95%] mx-auto md:pb-0 pb-[15px]">
          <Routes>
          {navbarLinks.map((item, index) => (
            <Route key={index} path={item.url} element={components[item.url]} />
          ))}
        </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
