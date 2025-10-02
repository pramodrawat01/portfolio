import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Navbar = ({scrollToProjects}) => {
  useEffect(() => {
    // Animate navbar items from top on page load
    gsap.from(".nav-item", {
      y: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);


  return (
    <nav className="w-full h-[70px] text-white relative ">
      <div className="max-w-full mx-auto py-4 flex flex-col items-start md:flex-row md:justify-between">
        
        <h1 className="text-xl font-bold nav-item">
          <Link to="/">pramod.rawat.</Link>
        </h1>

        <ul className="flex space-x-6 text-sm md:text-base font-medium">
          <li className="nav-item cursor-pointer hover:text-[#55d63b]" onClick={scrollToProjects}>
            Projects
          </li>
          <li className="nav-item hover:text-[#55d63b]">
            <a href="https://github.com/" target="_blank" rel="noreferrer">Github</a>
          </li>
          <li className="nav-item hover:text-[#55d63b]">
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">Linkedin</a>
          </li>
          <li className="nav-item hover:text-[#55d63b]">
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">X</a>
          </li>
          <li className="nav-item  border-1 px-4 rounded-lg border-[#55d63b]">
            <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
