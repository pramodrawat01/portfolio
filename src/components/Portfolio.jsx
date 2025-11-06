import Navbar from "./Navbar";
import Skills from "./Skills";

import img from "../assets/project2.png";
import img1 from "../assets/project1.png";
import img2 from "../assets/flipcoin.png";
import cinemaGhar from '../assets/cinemaghar.png';

import cinemaGharVid from '../assets/cinemaghar.mp4'
import ProjectVideo from '../components/ProjectVideo.jsx'

import flipcoinVid from '../assets/flipcoinVid.mp4'

import bottomPro1 from "../assets/project1.png";
import bottomPro2 from "../assets/project2.png";
import bottomPro3 from "../assets/project3.png";

import portfolioImg from "../assets/portfolio.jpg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaLink } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsSendFill } from "react-icons/bs";
import { FaReact, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiAxios } from "react-icons/si";
import { RiCodeSSlashLine } from "react-icons/ri";
import { FaFilePdf } from "react-icons/fa";



import pro1 from "../assets/peershape.png";

import Typewriter from "./Typewriter";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RatePortfolio from "./RatePortfolio";
import ContactForm from "./ContactForm";

gsap.registerPlugin(ScrollTrigger);



export default function Portfolio() {

  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [selectedProject]);



  /// text animation 
  const textRef = useRef(null);
  useEffect(() => {
    gsap.from(textRef.current, {
      y: 50,            
      opacity: 0,       
      duration: 1,      
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,  
        start: "top 80%",          
        toggleActions: "play none none none", 
      },
    });
  }, []);

  const textRef2 = useRef(null);
  useEffect(() => {
  gsap.from(textRef2.current, {
    x: -100,         
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: textRef2.current,
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
  });
}, []);

const textRef3 = useRef(null);
  useEffect(() => {
  gsap.from(textRef3.current, {
    x: 100,         
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: textRef3.current,
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
  });
}, []);


  const project01 = useRef(null);
  useEffect(() => {
    gsap.from(project01.current, {
      y: 50,           
      opacity: 0,       
      duration: 1,     
      ease: "power3.out",
      scrollTrigger: {
        trigger: project01.current,  
        start: "top 80%",          
        toggleActions: "play none none none",
      },
    });
  }, []);

  const project02 = useRef(null);
  useEffect(() => {
    gsap.from(project02.current, {
      y: 50,            
      opacity: 0,       
      duration: 1,      
      ease: "power3.out",
      scrollTrigger: {
        trigger: project02.current,  
        start: "top 80%",          
        toggleActions: "play none none none",
      },
    });
  }, []);
  const project03 = useRef(null);
  useEffect(() => {
    gsap.from(project03.current, {
      y: 50,            
      opacity: 0,       
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: project03.current,  
        start: "top 80%",          
        toggleActions: "play none none none",
      },
    });
  }, []);
  const project04 = useRef(null);
  useEffect(() => {
    gsap.from(project04.current, {
      y: 50,            
      opacity: 0,       
      duration: 1,      
      ease: "power3.out",
      scrollTrigger: {
        trigger: project04.current,  
        start: "top 80%",          
        toggleActions: "play none none none",
      },
    });
  }, []);

  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };




  return (
    <div className="relative min-h-screen flex justify-center   text-white overflow-x-hidden">
     
      <div className="absolute right-[9%] top-[90px] h-[calc(100%-90px)] w-[70px]  border-2 border-[#3c3b3b] z-10 rounded-full md:w-[100px] "></div>

      <div className="absolute w-[100px] h-[100px] bg-transparent  rounded-full flex flex-col justify-center items-center z-10 top-[1.4%] right-[8%] md:right-[9%]">
        {/* Eyes */}
        <div className="flex justify-between w-1/2 mb-2">
          <div className="w-[15px] h-[15px] bg-[#e2e0e0] rounded-full animate-blink"></div>
          <div className="w-[15px] h-[15px] bg-[#e2e0e0] rounded-full animate-blink"></div>
        </div>
        
        <div className="w-8 md:w-10 h-6 border-b-4 border-white rounded-b-full"></div>

        {/* Blink animation */}
        <style>{`
          @keyframes blink {
            0%, 20%, 100% { height: 15px; }
            10% { height: 0px; }
          }
          .animate-blink {
            animation: blink 2s infinite;
          }
        `}</style>
      </div>
      <div className="absolute inset-0 bg-grid shadow-overlay "></div>

      {/* all sections */}
      <div className="relative z-10 w-[80%]  h-full ">
        {/* navbar */}
        <Navbar scrollToProjects={scrollToProjects} />

        {/* hero section */}
        <div className=" text-center mt-[150px] sm:text-left xl:mt-[100px]">
          <span className="name text-xl sm:text-2xl md:text-3xl text-gray-300 block">
            Hello, I’m Pramod a
          </span>

          <h1 className="title text-6xl sm:text-5xl md:text-6xl xl:text-[180px] text-white mt-4">
            <Typewriter
              words={["full-stack", "front-end"]}
              typingSpeed={300}
              deletingSpeed={60}
              pause={3000}
              startDelay={3000}
              className="title text-[55px] sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[180px]  text-white"
            />
          </h1>
          <h1 className="title2 text-6xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[180px]  text-white mt-1">
            developer
          </h1>

          <p className="mt-6  subText sm:mt-10 text-md sm:text-xl md:text-2xl text-right text-gray-300">
            I build software solutions that streamline processes and make human effort more efficient.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:justify-start">
            <div className="text-center md:text-right">
              <button
                onClick={scrollToProjects}
                type="submit"
                className="px-6 w-full sm:w-[200px] py-3 rounded-lg bg-transparent border-1 border-[#55d63b] text-white cursor-pointer transition-transform duration-150 ease-in-out font-semibold active:scale-95"
              >
                Projects
              </button>
            </div>
            <div className="text-center md:text-right">
            <a
              href="/Resume_pramod_rawat.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="submit"
                className="px-6 w-full sm:w-[200px] py-3 rounded-lg bg-[#55d63b] text-black cursor-pointer transition-transform duration-150 ease-in-out font-semibold active:scale-95"
              >
                view Resume
              </button>
            </a>
              
            </div>
          </div>
        </div>

        {/* skills section */}
        <Skills />

        {/* projects section */}
        <div
          ref={projectsRef}
          className=" projects-section flex flex-col lg:flex-row mt-[100px] gap-10"
        >
          {/* Left side */}
          <div className="w-full  h-full flex flex-col items-start">
            <div
              ref={textRef}
              className="text-5xl sm:text-6xl md:text-[100px] leading-none latest  md:text-left"
            >
              Latest projects
            </div>

            {/*project 01 */}
            <div
              ref={project01}
              
              className="border border-[#4a4a4a] w-full sm:w-[400px] p-4
              px-1 rounded-2xl mt-10 sm:mt-[150px] xl:mt-[250px] hover:shadow-lg transition group self-center relative"
            >
              <div className="absolute top-[-10px] right-[-20px] border-1 px-2 rounded-sm text-[#55d63b] bg-[#181818]">in progress</div>
              <div
              onClick={() => setSelectedProject("peerShape")}
               className="h-[200px] sm:h-[230px] w-full rounded-2xl overflow-hidden hover:scale-99 transition duration-300 cursor-pointer">
                <img src={img} className="w-full h-full object-contain hover:grayscale-100" />
              </div>

              <div className="flex mt-3 justify-between">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">
                  peerShape
                </div>
                <div className="flex gap-3 items-center ">
                  <a  className="">
                    {/* <p className="border-1 border-[#55d63b] rounded-md px-2 py-0">LIVE</p> */}
                  </a>
                  <a href="https://github.com/pramodrawat01/peerShape" target="_blank">
                    <FaGithub className="text-3xl text-[#55d63b] "/>
                  </a>
                </div>
              </div>

              <div className="project-description px-4 mt-4 text-[#c1bfbf] text-sm  sm:text-base md:text-md">
                Project-driven SaaS for aspiring developers to build, showcase, and collaborate. Features profile creation, team discovery, and project showcase. Built with React, Tailwind CSS, Node.js.

                
              </div>
            </div>

            {/* project 02 */}
            <div
              ref={project03}
              className="border border-[#4a4a4a] w-full sm:w-[400px] p-4 px-1 rounded-2xl mt-10 sm:mt-[150px] hover:shadow-lg transition group self-center relative"
            >
              <div className="absolute top-[-10px] right-[-20px] border-1 px-2 rounded-sm text-[#55d63b] bg-[#181818]">in progress</div>
              <div
              onClick={() => setSelectedProject("minakriti")}
               className="h-[200px] sm:h-[230px] w-full rounded-2xl overflow-hidden hover:scale-99 transition duration-300 cursor-pointer">
                <img src={img1} className="w-full h-full object-contain hover:grayscale-100" />
              </div>

              <div className="flex mt-3 justify-between">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">
                  MinaKriti
                </div>
                {/* <div className="flex gap-3 items-center ">
                  <a  className="">
                    <p className="border-1 border-[#55d63b] rounded-md px-2 py-0">LIVE</p>
                  </a>
                  <a href="" target="_blank">
                    <FaGithub className="text-3xl text-[#55d63b] "/>
                  </a>
                </div> */}
              </div>
              <div className="project-description px-4 mt-4 text-[#c1bfbf] text-sm sm:text-base md:text-md">
                Full-stack MERN e-commerce platform for handcrafted art & craft products. Features product listing, cart, checkout, and user authentication. Built with MongoDB, Express, React, Node.js, and Tailwind CSS.
              </div>
            </div>

            {/* Overlay stays same */}

            {selectedProject && (
              <div className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center overflow-y-auto">
                <div className="bg-[#18181B] rounded-2xl mt-[30px] mx-4 sm:mx-[100px] p-6 w-full sm:w-[1000px] max-h-[90vh] overflow-y-auto shadow-lg relative">
                  

                  {selectedProject === "peerShape" && (
                    <>
                      <div className="flex justify-between items-center mb-4">
                         <h2 className="text-xl sm:text-2xl font-bold ">
                          peerShape
                        </h2>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className=" text-white border-[#55d63b] hover:text-green cursor-pointer border p-2 rounded-xl"
                        > 
                          go back
                        </button>
                      </div>
                      <img
                        src={pro1}
                        className="w-full h-[250px] sm:h-[550px] object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-2xl sm:text-3xl font-bold mt-8">
                        About this project
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-lg mb-4 mt-4">
                        A project-driven SaaS platform built for aspiring developers to build, perform, showcase, win, and increase their chances of getting hired. Developed using React, Tailwind CSS, and Node.js, it allows users to create profiles, find teammates for projects or hackathons, and showcase their work in a collaborative environment. Deployed on Vercel.
                      </p>
                    </>
                  )}

                  {selectedProject === "minakriti" && (
                    <>
                      <div className="flex justify-between items-center mb-4">
                         <h2 className="text-xl sm:text-2xl font-bold ">
                          MinaKriti
                        </h2>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className=" text-white border-[#55d63b] hover:text-green cursor-pointer border p-2 rounded-xl"
                        > 
                          go back
                        </button>
                      </div>
                      <img
                        src={img1}
                        className="w-full h-[250px] sm:h-[550px] object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-2xl sm:text-3xl font-bold mt-8">
                        About this project
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-lg mb-4 mt-4">
                        Full-stack MERN e-commerce platform for handcrafted art & craft products. Features product listing, cart, checkout, and user authentication. Built with MongoDB, Express, React, Node.js, and Tailwind CSS.
                      </p>
                    </>
                  )}

                  {selectedProject === "flipcoin" && (
                    

                    <>
                      {/* Project Title */}
                      <div className="flex justify-between items-center mb-4">
                         <h2 className="text-xl sm:text-2xl font-bold ">
                          flipCoin
                        </h2>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className=" text-white border-[#55d63b] hover:text-green cursor-pointer border p-2 rounded-xl"
                        > 
                          go back
                        </button>
                      </div>
                     
                      {/* Project Video */}
                      
                      <ProjectVideo
                      thumbnail={img2}
                      videoSrc={flipcoinVid}
                      />

                      {/* One-line Description */}
                     <p className="text-gray-300 text-base sm:text-lg mb-4">
                        A personal finance tracker where users can record their daily expenses, track spending habits, and visualize their financial data easily.
                      </p>

                      {/* About Project Section */}
                      <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-2">About this Project</h3>
                      <p className="text-gray-300 text-sm sm:text-lg mb-6">
                        FlipCoin is a modern expense tracking web app designed to help users manage their finances efficiently. 
                        It allows users to add, edit, and delete transactions, categorize expenses, and get insights into their monthly spending. 
                        The app features dynamic charts, smooth UI interactions, and responsive design to make expense tracking effortless and visually appealing.
                      </p>

                      {/* Tech Stack Section */}
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">Tech Stack</h3>
                      <div className="flex flex-wrap gap-6 items-center text-gray-300 text-lg mb-8">
                        <div className="flex items-center gap-2">
                          <FaReact className="text-blue-400 text-3xl"/>
                          <span>React</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiTailwindcss className="text-sky-400 text-3xl"/>
                          <span>Tailwind CSS</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaJs className="text-yellow-400 text-3xl" />
                          <span>JavaScript</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <FaFilePdf className="text-red-600 text-3xl" />
                          <span>JS pdf converter</span>
                        </div>
                      </div>

                      {/* Learnings & Challenges */}
                      <h4 className="text-xl sm:text-2xl font-bold mb-2">Learnings & Challenges</h4>
                      <p className="text-gray-300 text-sm sm:text-lg mb-8">
                        While building FlipCoin, I learned how to structure data efficiently and manage global states for transactions using React hooks. 
                        I also deepened my understanding of CRUD operations and dynamic rendering based on user actions.  
                        One major challenge was ensuring real-time UI updates after every transaction and keeping the app lightweight — 
                        which I overcame by optimizing state management and minimizing re-renders through component memoization.
                      </p>


                      {/* Buttons */}
                      <div className="flex gap-4">
                        <a
                          href="https://use-buddy.vercel.app"
                          target="_blank"
                          className="bg-[#55d63b] border-2 hover:text-[#fff] hover:bg-transparent hover:border-2 hover:border-[#55d63b] text-black px-5 py-2 rounded-lg transition"
                        >
                          Live Demo
                        </a>
                        <a
                          href="https://github.com/pramodrawat01/flip_coin"
                          target="_blank"
                          className="border-2 border-[#55d63b] text-white px-5 py-2 rounded-lg transition hover:text-black hover:bg-[#55d63b] "
                        >
                          GitHub
                        </a>
                      </div>
                    </>
                  )}

                  {selectedProject === "cinemaghar" && (
                    <>
                      {/* Project Title */}
                      <div className="flex justify-between items-center mb-4">
                         <h2 className="text-xl sm:text-2xl font-bold ">
                          cinemaGhar
                        </h2>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className=" text-white border-[#55d63b] hover:text-green cursor-pointer border p-2 rounded-xl"
                        > 
                          go back
                        </button>
                      </div>
                     


                      {/* Project Video */}
                      {/* <video
                        src={cinemaGharVid} // your video import or URL here
                        className="w-full h-[250px] sm:h-[550px] object-contain rounded-lg mb-4"
                        autoPlay
                        muted
                        loop
                        controls
                      ></video> */}
                      <ProjectVideo
                      thumbnail={cinemaGhar}
                      videoSrc={cinemaGharVid}
                      />

                      {/* One-line Description */}
                      <p className="text-gray-300 text-base sm:text-lg mb-4 ">
                        A movie booking platform where users can explore movies, view trailers, and book tickets easily.
                      </p>

                      {/* About Project Section */}
                      <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-2">About this Project</h3>
                      <p className="text-gray-300 text-sm sm:text-lg mb-6">
                        CinemaGhar is a full-stack movie booking web app where users can browse the latest releases,
                        check showtimes, and book tickets online. The UI is designed to resemble a real-world theater
                        booking experience, providing a smooth and interactive flow from movie selection to payment.
                      </p>

                      {/* Tech Stack Section */}
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">Tech Stack</h3>
                      <div className="flex flex-wrap gap-6 items-center text-gray-300 text-lg mb-8">
                        <div className="flex items-center gap-2">
                          <FaReact className="text-blue-400 text-3xl"/>
                          <span>React</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiTailwindcss className="text-sky-400 text-3xl"/>
                          <span>Tailwind css</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaJs className="text-yellow-400 text-3xl" />
                          <span>JavaScript</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiAxios className="text-blue-500 text-3xl"/>
                          <span>Axios</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <RiCodeSSlashLine className="text-green-400 text-3xl"/>
                          <span>Api</span>
                        </div>
                      </div>

                      {/* Learnings & Challenges */}
                      <h4 className="text-xl sm:text-2xl font-bold mb-2">Learnings & Challenges</h4>
                      <p className="text-gray-300 text-sm sm:text-lg mb-8">
                        I learned how to integrate APIs for fetching dynamic movie data, manage complex states using
                        React hooks, and handle responsive layouts efficiently.  
                        One major challenge was optimizing the video thumbnails and managing state updates efficiently,
                        which I solved by implementing lazy loading and state batching.
                      </p>

                      {/* Buttons */}
                      <div className="flex gap-4">
                        <a
                          href="https://cinema-ghar-ebon.vercel.app"
                          target="_blank"
                          className="bg-[#55d63b] border-2 hover:text-[#fff] hover:bg-transparent hover:border-2 hover:border-[#55d63b] text-black px-5 py-2 rounded-lg transition"
                        >
                          Live Demo
                        </a>
                        <a
                          href="https://github.com/pramodrawat01/cinemaGhar"
                          target="_blank"
                          className="border-2 border-[#55d63b] text-white px-5 py-2 rounded-lg transition hover:text-black hover:bg-[#55d63b] "
                        >
                          GitHub
                        </a>
                      </div>
                    </>

                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right side */}
          <div className="w-full h-full flex flex-col items-end gap-10 sm:gap-[100px]">

            {/* project 3 */}
            <div
              ref={project02}
              className="border border-[#4a4a4a]  w-full sm:w-[400px] p-4 px-1 rounded-2xl mt-10 sm:mt-[150px]  hover:shadow-lg  transition group self-center"
            >
             <div
              onClick={() => setSelectedProject("cinemaghar")}
               className="h-[200px] sm:h-[230px] w-full rounded-2xl overflow-hidden hover:scale-99 transition duration-300 cursor-pointer">
                <img src={cinemaGhar} className="w-full h-full object-contain hover:grayscale-100" />
              </div>

               <div className="flex mt-3 justify-between">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">
                  cinemaGhar
                </div>
                <div className="flex gap-3 items-center ">
                  <a href="https://cinema-ghar-ebon.vercel.app" target="_blank"  className="">
                    <p className="border-1 border-[#55d63b] rounded-md px-2 py-0 hover:text-white">LIVE</p>
                  </a>
                  <a href="https://github.com/pramodrawat01/cinemaGhar" target="_blank">
                    <FaGithub className="text-3xl text-[#55d63b] "/>
                  </a>
                </div>
              </div>

              <div className="project-description  text-[#c1bfbf] text-sm sm:text-base md:text-md px-4 mt-4">
                A movie discovery web app built with React, Tailwind CSS, and The Movie Database (TMDb) API. It allows users to explore trending movies, search by title, and view detailed information like ratings, genres, and descriptions. Deployed seamlessly on Vercel.
              </div>
            </div>
            
            {/* fourth project */}
            <div
              ref={project04}
              className="border border-[#4a4a4a]  w-full sm:w-[400px] p-4 px-1 rounded-2xl mt-10 sm:mt-[150px] hover:shadow-lg  transition group self-center"
            >
              <div
              onClick={() => setSelectedProject("flipcoin")}
               className="h-[200px] sm:h-[230px] w-full rounded-2xl overflow-hidden hover:scale-99 transition duration-300 cursor-pointer">
                <img src={img2} className="w-full h-full object-contain hover:grayscale-100" />
              </div>
              <div className="flex mt-3 justify-between">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">
                  flip coin
                </div>
                <div className="flex gap-3 items-center ">

                  <a href="https://use-buddy.vercel.app" target="_blank" className="">
                    <p className="border-1 border-[#55d63b] rounded-md px-2 py-0">LIVE</p>
                  </a>
                  <a href="https://github.com/pramodrawat01/flip_coin" target="_blank">
                    <FaGithub className="text-3xl text-[#55d63b] "/>
                  </a>
                </div>
              </div>
              <div className="project-description text-[#c1bfbf] text-sm sm:text-base md:text-md px-4 mt-4">
               An expense management web app built with React, Tailwind CSS, and local storage integration. It helps users track their daily expenses, categorize spending, and visualize transactions in a simple and intuitive interface. Deployed on Vercel.
              </div>
            </div>
            </div>
          </div>

        {/* about  */}
        <section className="py-16 bg-transparent mt-[100px] relative overflow-hidden ">

          {/* Heading */}
          <div ref={textRef2} className="">
            <h2 className="text-5xl sm:text-6xl md:text-[100px] font-bold text-[#ffffff] leading-none latest md:text-left">
              why
            </h2>
            <h2 className="text-5xl sm:text-6xl md:text-[90px] font-bold text-[#a5a5a5] leading-none latest  md:text-left">
              consider me?
            </h2>
          </div>

          {/* Paragraphs */}
          <div
            ref={textRef3}
            className="text-sm  sm:text-base  md:text-xl  text-[#ffffff] flex flex-col gap-2 mt-6 sm:mt-[40px] md:mt-[80px] px-4 sm:px-10 md:px-2 xl:pl-[400px] text-left"
          >
            <p>○ I bring a strong mix of technical expertise, creativity, and a problem-solving mindset.</p>
            <p>○ I believe in putting genuine effort into my work rather than just creating noise.</p>
            <p>○ I have been consistently working on multiple projects over the past few months to sharpen my skills.</p>
            <p>○ I maintain a DSA streak not for show, but to build a deeper understanding of algorithms.</p>
            <p>○ I strive to become a better problem-solver with every step of improvement I take.</p>

          </div>

          {/* Carousel Container */}
          <div className="relative w-full max-w-[1200px] mx-auto overflow-hidden mt-[60px] sm:mt-[80px] md:mt-[100px] px-4 sm:px-6 md:px-0">
  {/* Left & Right Gradients */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-10 sm:w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20"></div>
  <div className="pointer-events-none absolute right-0 top-0 h-full w-10 sm:w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20"></div>

  {/* Scrolling Container */}
  <div className="flex w-max animate-scroll gap-4 sm:gap-6">
    {[...Array(2)].map((_, i) => (
      <div key={i} className="flex gap-4 sm:gap-6">
        {[
          {
            title: "⚡ Strong Frontend Skills",
            text: "Proficient in React.js, JavaScript, Tailwind CSS, and responsive design.",
          },
          {
            title: "🛠 Full-Stack Mindset",
            text: "Currently mastering the MERN stack to build end-to-end applications.",
          },
          {
            title: "💡 Problem Solver",
            text: "Write clean, efficient code and tackle challenges with logical solutions.",
          },
          {
            title: "🤝 Team Collaboration",
            text: "Skilled with Git/GitHub, work well in teams, and communicate effectively.",
          },
          {
            title: "🎨 Creative & Detail-Oriented",
            text: "Focus on delivering beautiful UI/UX with attention to design details.",
          },
          {
            title: "🚀 Growth-Oriented",
            text: "Quick learner, adaptable, and always upgrading my skills.",
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="min-w-[220px] sm:min-w-[260px] md:min-w-[280px] lg:min-w-[300px] bg-[#1c1c1c] rounded-2xl shadow hover:shadow-lg transition p-4 sm:p-5 md:p-6"
          >
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#f5f5f5] mb-2">
              {card.title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-[#a6a6a6]">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    ))}
  </div>
</div>

        </section>

        {/*profile image section*/}
        <div className="flex justify-center items-center mt-10 mb-[100px]">
          <img
            src={portfolioImg}
            alt="portfolio image"
            className="w-[210px] h-[210px] sm:w-[300px] sm:h-[300px] object-cover object-[50%_20%]  rounded-full shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)]"
          />
        </div>

        

        {/* contect section  */}
        <div className="mt-[150px] mb-[100px] px-4 sm:px-6 md:px-10">
          <div className=" flex flex-col md:flex-col xl:flex-row justify-between xl:mt-[50px] gap-4">
            {/* connect */}
            <div className="">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <h2 className="text-5xl sm:text-6xl md:text-6xl lg:text-[80px] xl:text-[100px] font-bold text-white leading-none latest flex  gap-6 sm:gap-10">
                  connect
                  <FaLink className="text-[25px] sm:text-5xl md:text-6xl mt-[20px] md:mt-[30px] cursor-pointer text-white hover:text-[#55d63b] transition" />
                </h2>
              </div>
              {/* Social Icons */}
              <div className="pt-[30px] w-full xl:mt-[50px] ">
                <div className="flex flex-wrap gap-6 sm:gap-10">

                  {/* email */}
                  <a href="mailto:rawatpramod392@gmail.com">
                    <div className="group relative flex flex-col items-center">
                      <MdEmail className="text-3xl sm:text-4xl cursor-pointer text-white hover:text-purple-400 transition" />
                      <span className="absolute bottom-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 text-white text-xs sm:text-sm">
                        Email
                      </span>
                    </div>
                  </a>
                  
                  {/* LinkedIn */}
                  <a href="https://linkedin.com/" target="_blank">
                    <div className="group relative flex flex-col items-center">
                      <FaLinkedin className="text-3xl sm:text-4xl cursor-pointer text-white hover:text-blue-500 transition" />
                      <span className="absolute bottom-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 text-white text-xs sm:text-sm">
                        LinkedIn
                      </span>
                    </div>
                  </a>
                  

                  {/* X / Twitter */}
                  <a href="https://twitter.com/" target="_blank">
                    <div className="group relative flex flex-col items-center">
                      <FaXTwitter className="text-3xl sm:text-4xl cursor-pointer text-white hover:text-gray-400 transition" />
                      <span className="absolute bottom-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 text-white text-xs sm:text-sm">
                        X
                      </span>
                    </div>
                  </a>
                  

                  {/* GitHub */}
                  <a href="https://github.com/" target="_blank">
                    <div className="group relative flex flex-col items-center">
                      <FaGithub className="text-3xl sm:text-4xl cursor-pointer text-white hover:text-purple-400 transition" />
                      <span className="absolute bottom-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 text-white text-xs sm:text-sm">
                        GitHub
                      </span>
                    </div>
                  </a>
                  

                  {/* Whatsapp */}
                  <a href="https://wa.me/918233880908?text=Hi%20Pramod,%20I%20just%20checked%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you!" target="_blank">
                    <div className="group relative flex flex-col items-center">
                      <FaWhatsappSquare className="text-3xl sm:text-4xl cursor-pointer text-white hover:text-green-400 transition" />
                      <span className="absolute bottom-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 text-white text-xs sm:text-sm">
                        Whatsapp
                      </span>
                    </div>
                  </a>
                  
                </div>

                <div className="flex flex-col items-start gap-4">
                  {/* Email */}
                  <div className="pt-[20px]">
                    <a href="mailto:rawatpramod392@gmail.com">
                      <p className="text-[#55d63b] text-lg sm:text-3xl underline cursor-pointer break-words">
                        rawatpramod392@gmail.com
                      </p>
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>

            {/* send me message Form */}
            
            <ContactForm/>
          </div>
        </div>

        {/* image curve section*/}
        <div className="h-[500px] relative overflow-hidden w-screen -ml-[calc((100vw-1200px)/2)] mt-[50px] hidden 2xl:block">
          {/* The curve - downward facing */}
          <div
            className="h-[800px] w-full bg-[#0a0a0a] rounded-[50%] absolute top-[550px] z-10 rotate-180"
            style={{
              boxShadow: "0px 0px 200px 300px rgba(0, 0, 0, 0.9)",
              // format => offset-x | offset-y | blur-radius | spread-radius | color
            }}
          ></div>

          {/* Freely positionable images */}
          <img
            src={bottomPro3}
            alt="img3"
            className="absolute z-9 rounded-2xl grayscale-100 hover:grayscale-25 "
            style={{
              left: "-5%",
              bottom: "-50px",
              width: "550px",
              height: "320px",
              transform: "rotate(-24deg)",
            }}
          />
          <img
            src={bottomPro1}
            alt="img1"
            className="absolute z-8 rounded-2xl grayscale-100 hover:grayscale-25 "
            style={{
              left: "11%",
              bottom: "50px",
              width: "550px",
              height: "320px",
              transform: "rotate(-10deg)",
            }}
          />
          <img
            src={bottomPro2}
            alt="img2"
            className="absolute z-7 rounded-2xl grayscale-100 hover:grayscale-25 "
            style={{
              left: "25%",
              bottom: "80px",
              width: "550px",
              height: "320px",
              transform: "rotate(0deg)",
            }}
          />
          <img
            src={bottomPro3}
            alt="img3"
            className="absolute z-6 rounded-2xl grayscale-100 hover:grayscale-25 "
            style={{
              left: "40%",
              bottom: "60px",
              width: "550px",
              height: "320px",
              transform: "rotate(9deg)",
            }}
          />
          <img
            src={bottomPro1}
            alt="img3"
            className="absolute z-5 rounded-2xl grayscale-100 hover:grayscale-25 "
            style={{
              left: "55%",
              bottom: "50px",
              width: "550px",
              height: "320px",
              transform: "rotate(15deg)",
            }}
          />
          <img
            src={bottomPro3}
            alt="img3"
            className="absolute z-4 rounded-2xl grayscale-100 hover:grayscale-25 "
            style={{
              left: "75%",
              bottom: "-60px",
              width: "550px",
              height: "320px",
              transform: "rotate(25deg)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
