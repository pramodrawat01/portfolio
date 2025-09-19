import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Port from "./components/Port.jsx";

const App = () => {
  return (
    // <Routes>
    //   <Route element={<Layout/>}>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/projects" element={<Projects />} />
    //     <Route path="/articles" element={<Articles />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Route>
      
    // </Routes>


    

    // <div className="bg-black flex justify-center h-screen">
    //   <div className='bg-[#000001]  text-white  w-[80%] h-full border-2 border-amber-600'>
    //     <Navbar/>
    //     {/* <Portfolio/> */}
    //     <Port/>
    //   </div>
    // </div>
    <div>
      <Port/>
    </div>

  );
};

export default App;
