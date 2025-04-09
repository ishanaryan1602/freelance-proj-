import React, { useState } from "react";
import Navbar from "./pageComponents/Navbar/Navbar";
import { navbarLinks } from "./constants/constants";
import { Button } from "./components/ui/button";
import { images } from "./assets/assets";
import Hero_Section from "./pageComponents/Hero_Section/Hero_Section";
import DemoCont from "./pageComponents/DemoCont/DemoCont";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const components = {
    "/": <Home />,
    "/about": <About />,
    "/services": <Services />,
    "/contact": <Contact />,
    "/blog": <Blog />,
  };

  return (
    <>
      <Navbar isSignedIn={isSignedIn} />
      <div className="w-[85%] mx-auto">
        <Routes>
          {navbarLinks.map((link, index) => (
            <Route key={index} path={link.url} element={components[link.url]} />
          ))}
        </Routes>
      </div>
    </>
  );
};

export default App;
