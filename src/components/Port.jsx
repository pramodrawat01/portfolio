import Navbar from "./Navbar";
import Skills from "./Skills";

import img from "../assets/project2.png";
import img1 from "../assets/project1.png";
import img2 from "../assets/flipcoin.png";
import cinemaGhar from '../assets/cinemaghar.png'


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

import pro1 from "../assets/peershape.png";

import Typewriter from "./Typewriter";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Aarav Sharma",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    message: "Amazing portfolio! The design feels modern and clean.",
  },
  {
    name: "Priya Mehta",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    message: "Loved the animations, really smooth and engaging.",
  },
  {
    name: "Karan Patel",
    img: "https://randomuser.me/api/portraits/men/53.jpg",
    message: "Great UI/UX, everything looks professional.",
  },
  {
    name: "Sneha Kapoor",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    message: "Impressive work, shows a lot of creativity!",
  },
];

export default function Port() {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { rating, message };
    console.log("Stored Data (send to backend later):", data);
    setRating(0);
    setMessage("");
  };

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
      y: 50,            // start 50px below
      opacity: 0,       // start invisible
      duration: 1,      // animation duration
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,  // element to watch
        start: "top 80%",          // when top hits 80% of viewport
        toggleActions: "play none none none", // animate once
      },
    });
  }, []);

  const textRef2 = useRef(null);
  useEffect(() => {
  gsap.from(textRef2.current, {
    x: -100,         // start 100px left
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
    x: 100,         // start 100px right
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
      y: 50,            // start 50px below
      opacity: 0,       // start invisible
      duration: 1,      // animation duration
      ease: "power3.out",
      scrollTrigger: {
        trigger: project01.current,  // element to watch
        start: "top 80%",          // when top hits 80% of viewport
        toggleActions: "play none none none",
      },
    });
  }, []);

  const project02 = useRef(null);
  useEffect(() => {
    gsap.from(project02.current, {
      y: 50,            // start 50px below
      opacity: 0,       // start invisible
      duration: 1,      // animation duration
      ease: "power3.out",
      scrollTrigger: {
        trigger: project02.current,  // element to watch
        start: "top 80%",          // when top hits 80% of viewport
        toggleActions: "play none none none",
      },
    });
  }, []);
  const project03 = useRef(null);
  useEffect(() => {
    gsap.from(project03.current, {
      y: 50,            // start 50px below
      opacity: 0,       // start invisible
      duration: 1,      // animation duration
      ease: "power3.out",
      scrollTrigger: {
        trigger: project03.current,  // element to watch
        start: "top 80%",          // when top hits 80% of viewport
        toggleActions: "play none none none",
      },
    });
  }, []);
  const project04 = useRef(null);
  useEffect(() => {
    gsap.from(project04.current, {
      y: 50,            // start 50px below
      opacity: 0,       // start invisible
      duration: 1,      // animation duration
      ease: "power3.out",
      scrollTrigger: {
        trigger: project04.current,  // element to watch
        start: "top 80%",          // when top hits 80% of viewport
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
     
      <div className="absolute right-[9%] top-[90px] h-[calc(100%-90px)] w-[100px] border-2 border-[#4d4c4c] z-10 rounded-full"></div>

      <div className="absolute w-[100px] h-[100px] bg-transparent  rounded-full flex flex-col justify-center items-center z-10 top-[1.4%] right-[9%]">
        {/* Eyes */}
        <div className="flex justify-between w-1/2 mb-2">
          <div className="w-[15px] h-[15px] bg-white rounded-full animate-blink"></div>
          <div className="w-[15px] h-[15px] bg-white rounded-full animate-blink"></div>
        </div>
        {/* Mouth */}
        <div className="w-12 h-6 border-b-4 border-white rounded-b-full"></div>

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
              className="title text-6xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[180px]  text-white"
            />
          </h1>
          <h1 className="title2 text-6xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[180px]  text-white mt-1">
            developer
          </h1>

          <p className="mt-6   sm:mt-10 text-md sm:text-xl md:text-2xl text-right text-gray-300">
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
              <button
                type="submit"
                className="px-6 w-full sm:w-[200px] py-3 rounded-lg bg-[#55d63b] text-black cursor-pointer transition-transform duration-150 ease-in-out font-semibold active:scale-95"
              >
                Resume
              </button>
            </div>
          </div>
        </div>

        {/* skills section */}
        <Skills />

        {/* projects section */}

        {/* <div className=" projects-section flex mt-[100px]">
          <div className="w-[50%]  h-full flex flex-col items-center">
            <div className=" text-[100px] leading-none latest">
              Latest projects
            </div>

           
            <div
              onClick={() => setOpen(true)}
              className="border border-gray-600 h-[450px] w-[400px] p-4 rounded-2xl mt-[150px] cursor-pointer hover:shadow-lg hover:border-gray-400 transition group"
            >
              <div className="h-[230px] w-full rounded-2xl overflow-hidden">
                <img src={img} className="w-full h-full object-cover " />
              </div>

              <div className="flex mt-3">
                <div className="text-3xl font-bold">peerShape</div>
                <div className="linkedin-icon ml-2"></div>
              </div>

              <div className="project-description mt-2 text-gray-400 text-lg">
                a project driven saas platform built for aspiring developers to
                build, perform, showcase, win and increase chances to get hired
              </div>
            </div>

            {open && (
              <div className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center">
                <div className="bg-[#18181B] rounded-2xl mt-[30px] mx-[100px] p-6 w-[1000px] h-[1000px] overflow-y-scroll shadow-lg relative">
                  
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute top-4 right-4 text-white hover:text-green cursor-pointer border-1 p-2 rounded-xl"
                  >
                    go back
                  </button>

                  
                  <h2 className="text-2xl font-bold mb-4">peerShape</h2>
                  <img
                    src={pro1}
                    className="w-full h-[550px] object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-3xl font-bold mt-8">
                    About this project
                  </h3>
                  <p className="text-white text-lg mb-4 mt-4">
                    peerShape is a commnity based learning plartform for those
                    who build stuff, and make impact on, here u build the
                    projects u showcase them in public, make them for real
                    problems and test them real time usecase u submit them on
                    plartfom. The consistency makes the user enter in elite club
                    by earning coins The user can help others in community share
                    new tech updates and get himself envolved with every
                    activity and he build more and more.........
                  </p>

                  <div className="text-3xl font-bold mt-8">Tech Stack</div>
                  <div className="flex gap-4">
                    <div className="p-2 bg-gray-400 rounded-lg">
                      <SiReact className="text-blue-800 text-2xl group" />
                      <div className="hidden group:hover:visible">React</div>
                    </div>
                  </div>

                  
                  <div className="space-y-4">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <p key={i} className="text-gray-600">
                        Scroll content line {i + 1} — this will show scrolling
                        inside the overlay only.
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="w-[50%]  h-full  flex flex-col items-center gap-[100px]">
           

            <div className="border-1 border-gray-600 h-[450px] w-[400px] p-4 rounded-2xl">
              <div className="h-[230px] w-full rounded-2xl overflow-hidden">
                <img src={img1} className="w-full h-full object-cover" />
              </div>

              <div className="flex mt-3">
                <div className="text-3xl font-bold">peerShape</div>
                <div className="linkedin-icon"></div>
              </div>

              <div className="project-description mt-2 text-gray-400 text-lg ">
                a project driven saas plartform build for aspering developers to
                build, win, perform and increse chances to get hired{" "}
              </div>
            </div>

          

            <div className="border-1 border-gray-600 h-[450px] w-[400px] p-4 rounded-2xl">
              <div className="h-[230px] w-full rounded-2xl overflow-hidden">
                <img src={img2} className="w-full h-full object-cover" />
              </div>

              <div className="flex mt-3">
                <div className="text-3xl font-bold">flipcoin</div>
                <div className="linkedin-icon"></div>
              </div>

              <div className="project-description mt-2 text-gray-400 text-lg ">
                a project driven saas plartform build for aspering developers to
                build, win, perform and increse chances to get hired{" "}
              </div>
            </div>
          </div>
        </div> */}

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
              px-1 rounded-2xl mt-10 sm:mt-[150px] xl:mt-[250px] hover:shadow-lg transition group self-center"
            >
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
                    <p className="border-1 border-[#55d63b] rounded-md px-2 py-0">LIVE</p>
                  </a>
                  <a href="https://github.com/pramodrawat01/peerShape" target="_blank">
                    <FaGithub className="text-3xl text-[#55d63b] "/>
                  </a>
                </div>
              </div>

              <div className="project-description mt-2 text-[#c1bfbf] text-sm sm:text-base md:text-md">
                Project-driven SaaS for aspiring developers to build, showcase, and collaborate. Features profile creation, team discovery, and project showcase. Built with React, Tailwind CSS, Node.js. Deployed on Vercel.

                
              </div>
            </div>

            {/* project 02 */}
            <div
              ref={project03}
              className="border border-[#4a4a4a] w-full sm:w-[400px] p-4 px-1 rounded-2xl mt-10 sm:mt-[150px] hover:shadow-lg transition group self-center"
            >
              <div
              onClick={() => setSelectedProject("minakriti")}
               className="h-[200px] sm:h-[230px] w-full rounded-2xl overflow-hidden hover:scale-99 transition duration-300 cursor-pointer">
                <img src={img1} className="w-full h-full object-contain hover:grayscale-100" />
              </div>

              <div className="flex mt-3 justify-between">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">
                  MinaKriti
                </div>
                <div className="flex gap-3 items-center ">
                  <a  className="">
                    <p className="border-1 border-[#55d63b] rounded-md px-2 py-0">LIVE</p>
                  </a>
                  <a href="" target="_blank">
                    <FaGithub className="text-3xl text-[#55d63b] "/>
                  </a>
                </div>
              </div>
              <div className="project-description px-4 mt-4 text-[#c1bfbf] text-sm sm:text-base md:text-md">
                Full-stack MERN e-commerce platform for handcrafted art & craft products. Features product listing, cart, checkout, and user authentication. Built with MongoDB, Express, React, Node.js, and Tailwind CSS.
              </div>
            </div>

            {/* Overlay stays same */}

            {selectedProject && (
              <div className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center overflow-y-auto">
                <div className="bg-[#18181B] rounded-2xl mt-[30px] mx-4 sm:mx-[100px] p-6 w-full sm:w-[1000px] max-h-[90vh] overflow-y-auto shadow-lg relative">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 text-white hover:text-green cursor-pointer border p-2 rounded-xl"
                  >
                    go back
                  </button>

                  {selectedProject === "peerShape" && (
                    <>
                      <h2 className="text-xl sm:text-2xl font-bold mb-4">
                        peerShape
                      </h2>
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
                      <h2 className="text-xl sm:text-2xl font-bold mb-4">
                        MinaKriti
                      </h2>
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
                      <h2 className="text-xl sm:text-2xl font-bold mb-4">
                        Flipcoin
                      </h2>
                      <img
                        src={img2}
                        className="w-full h-[250px] sm:h-[550px] object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-2xl sm:text-3xl font-bold mt-8">
                        About this project
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-lg mb-4 mt-4">
                        Flipcoin is a fun project for testing probability...
                      </p>
                    </>
                  )}

                  {selectedProject === "cinemaghar" && (
                    <>
                      <h2 className="text-xl sm:text-2xl font-bold mb-4">
                        cinemaGhar
                      </h2>
                      <img
                        src={cinemaGhar}
                        className="w-full h-[250px] sm:h-[550px] object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-2xl sm:text-3xl font-bold mt-8">
                        About this project
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-lg mb-4 mt-4">
                        a cinema ghar
                      </p>
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
                    <p className="border-1 border-[#55d63b] rounded-md px-2 py-0">LIVE</p>
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
        <section className="py-16 bg-transparent mt-[100px] relative overflow-hidden">
          {/* Heading */}
          <div ref={textRef2}>
            <h2 className="text-5xl sm:text-6xl md:text-[100px] font-bold text-[#121212] dark:text-[#ffffff] leading-none latest md:text-left">
              why
            </h2>
            <h2 className="text-5xl sm:text-6xl md:text-[100px] font-bold text-[#121212] dark:text-[#a5a5a5] leading-none latest  md:text-left">
              consider me?
            </h2>
          </div>

          {/* Paragraphs */}
          <div
            ref={textRef3}
            className="text-base sm:text-lg md:text-xl text-[#3d3d3d] dark:text-[#ffffff] flex flex-col gap-2 mt-6 sm:mt-[40px] md:mt-[80px] px-4 sm:px-10 md:pl-[400px] text-left"
          >
            <p>
              ○ I bring a unique blend of technical expertise, creativity, and
              problem-solving mindset.
            </p>
            <p>○ I put my pure efforts instead of creating buzz</p>
            <p>
              ○ Continuously working on many projects from last few months to
              sharpen my skills
            </p>
            <p>
              ○ Maintaining DSA streak not to flex but to make deep
              understanding about algorithm
            </p>
            <p>○ Trying to be a good solver on every step I'm improving </p>
          </div>

          {/* Carousel Container */}
          <div className="relative w-full max-w-[1200px] mx-auto overflow-hidden mt-[60px] sm:mt-[80px] md:mt-[100px] px-4 sm:px-6 md:px-0">
            {/* Left & Right Fades */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-24 md:w-32 bg-gradient-to-r from-[#0a0a0a] via-black/70 to-transparent z-20"></div>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-24 md:w-32 bg-gradient-to-l from-[#0a0a0a] via-black/70 to-transparent z-20"></div>

            {/* Scrolling Wrapper */}
            <div className="flex gap-4 sm:gap-6 animate-scroll">
              {[...Array(2)].map((_, loopIndex) => (
                <div key={loopIndex} className="flex gap-4 sm:gap-6">
                  {/* Card 1 */}
                  <div className="min-w-[250px] sm:min-w-[280px] md:min-w-[300px] p-4 sm:p-6 bg-white dark:bg-[#1c1c1c] rounded-2xl shadow hover:shadow-lg transition">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#121212] dark:text-[#f5f5f5] mb-2">
                      ⚡ Strong Frontend Skills
                    </h3>
                    <p className="text-sm sm:text-base text-[#3d3d3d] dark:text-[#a6a6a6]">
                      Proficient in React.js, JavaScript, Tailwind CSS, and
                      responsive design.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="min-w-[250px] sm:min-w-[280px] md:min-w-[300px] p-4 sm:p-6 bg-white dark:bg-[#1c1c1c] rounded-2xl shadow hover:shadow-lg transition">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#121212] dark:text-[#f5f5f5] mb-2">
                      🛠 Full-Stack Mindset
                    </h3>
                    <p className="text-sm sm:text-base text-[#3d3d3d] dark:text-[#a6a6a6]">
                      Currently mastering the MERN stack to build end-to-end
                      applications.
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="min-w-[250px] sm:min-w-[280px] md:min-w-[300px] p-4 sm:p-6 bg-white dark:bg-[#1c1c1c] rounded-2xl shadow hover:shadow-lg transition">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#121212] dark:text-[#f5f5f5] mb-2">
                      💡 Problem Solver
                    </h3>
                    <p className="text-sm sm:text-base text-[#3d3d3d] dark:text-[#a6a6a6]">
                      Write clean, efficient code and tackle challenges with
                      logical solutions.
                    </p>
                  </div>

                  {/* Card 4 */}
                  <div className="min-w-[250px] sm:min-w-[280px] md:min-w-[300px] p-4 sm:p-6 bg-white dark:bg-[#1c1c1c] rounded-2xl shadow hover:shadow-lg transition">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#121212] dark:text-[#f5f5f5] mb-2">
                      🤝 Team Collaboration
                    </h3>
                    <p className="text-sm sm:text-base text-[#3d3d3d] dark:text-[#a6a6a6]">
                      Skilled with Git/GitHub, work well in teams, and
                      communicate effectively.
                    </p>
                  </div>

                  {/* Card 5 */}
                  <div className="min-w-[250px] sm:min-w-[280px] md:min-w-[300px] p-4 sm:p-6 bg-white dark:bg-[#1c1c1c] rounded-2xl shadow hover:shadow-lg transition">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#121212] dark:text-[#f5f5f5] mb-2">
                      🎨 Creative & Detail-Oriented
                    </h3>
                    <p className="text-sm sm:text-base text-[#3d3d3d] dark:text-[#a6a6a6]">
                      Focus on delivering beautiful UI/UX with attention to
                      design details.
                    </p>
                  </div>

                  {/* Card 6 */}
                  <div className="min-w-[250px] sm:min-w-[280px] md:min-w-[300px] p-4 sm:p-6 bg-white dark:bg-[#1c1c1c] rounded-2xl shadow hover:shadow-lg transition">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#121212] dark:text-[#f5f5f5] mb-2">
                      🚀 Growth-Oriented
                    </h3>
                    <p className="text-sm sm:text-base text-[#3d3d3d] dark:text-[#a6a6a6]">
                      Quick learner, adaptable, and always upgrading my skills.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/*profile image section*/}
        <div className="flex justify-center items-center mt-10">
          <img
            src={portfolioImg}
            alt="portfolio image"
            className="w-[300px] h-[300px] object-cover object-[50%_20%]  rounded-full shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* rate portfolio section*/}
        <div className="flex flex-col md:flex-row justify-between gap-20 mt-[150px] px-4 sm:px-6 md:px-10">
          {/* LEFT SIDE - Rate Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 latest">
              Rate this portfolio...
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Rating Input */}
              <div className="flex gap-3 sm:gap-6 mt-8 flex-wrap">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="relative group">
                    <button
                      type="button"
                      className={`px-3 sm:px-4 py-2 rounded-lg border transition ${
                        rating === num
                          ? "bg-white text-black"
                          : "border-[#55d63b] text-white"
                      }`}
                      onClick={() => setRating(num)}
                    >
                      {num}
                    </button>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 text-xl sm:text-2xl">
                      {["😐", "😀", "😊", "😎", "🤩"][num - 1]}
                    </span>
                  </div>
                ))}
              </div>

              {/* Message */}
              <textarea
                placeholder="Your feedback..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                className="p-3 rounded-lg bg-transparent border border-gray-400 text-white focus:outline-none focus:border-blue-500 text-sm sm:text-base"
              />

              {/* Submit */}
              <div className="text-center md:text-right">
                <button
                  type="submit"
                  className="px-6 w-full sm:w-[200px] py-3 rounded-lg bg-gray-300 text-black cursor-pointer transition-transform duration-150 ease-in-out font-semibold active:scale-95"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT SIDE - Infinite Carousel */}
          <div className="w-full md:w-1/2 relative overflow-hidden h-[300px] sm:h-[350px] md:h-[400px] mt-10 md:mt-0">
            <div className="absolute top-0 left-0 w-full h-16 sm:h-20 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>

            <div className="animate-[moveUp_15s_linear_infinite] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {testimonials.concat(testimonials).map((t, idx) => (
                <div
                  key={idx}
                  className={`bg-white/10 backdrop-blur-lg text-white p-3 sm:p-4 rounded-xl shadow-md 
          transform ${idx % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                    />
                    <p className="font-semibold text-sm sm:text-base">
                      {t.name}
                    </p>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm">{t.message}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Custom animation */}
          <style>
            {`
      @keyframes moveUp {
        0% { transform: translateY(0); }
        100% { transform: translateY(-50%); }
      }
    `}
          </style>
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
                  <div className="group relative flex flex-col items-center">
                    <MdEmail className="text-3xl sm:text-4xl cursor-pointer text-white hover:text-purple-400 transition" />
                    <span className="absolute bottom-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 text-white text-xs sm:text-sm">
                      Email
                    </span>
                  </div>
                  {/* LinkedIn */}
                  <div className="group relative flex flex-col items-center">
                    <FaLinkedin className="text-3xl sm:text-4xl cursor-pointer text-white hover:text-blue-500 transition" />
                    <span className="absolute bottom-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 text-white text-xs sm:text-sm">
                      LinkedIn
                    </span>
                  </div>

                  {/* X / Twitter */}
                  <div className="group relative flex flex-col items-center">
                    <FaXTwitter className="text-3xl sm:text-4xl cursor-pointer text-white hover:text-gray-400 transition" />
                    <span className="absolute bottom-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 text-white text-xs sm:text-sm">
                      X
                    </span>
                  </div>

                  {/* GitHub */}
                  <div className="group relative flex flex-col items-center">
                    <FaGithub className="text-3xl sm:text-4xl cursor-pointer text-white hover:text-purple-400 transition" />
                    <span className="absolute bottom-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 text-white text-xs sm:text-sm">
                      GitHub
                    </span>
                  </div>

                  {/* Whatsapp */}
                  <div className="group relative flex flex-col items-center">
                    <FaWhatsappSquare className="text-3xl sm:text-4xl cursor-pointer text-white hover:text-green-400 transition" />
                    <span className="absolute bottom-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 text-white text-xs sm:text-sm">
                      Whatsapp
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-4">
                  {/* Email */}
                  <div className="pt-[20px]">
                    <p className="text-[#55d63b] text-lg sm:text-3xl underline cursor-pointer break-words">
                      rawatpramod@392.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* send me message Form */}
            <div className=" mt-[100px] xl:mt-0 ">
              <h3 className="text-xl items-center sm:text-2xl md:text-4xl font-bold latest md:text-right justify-end  flex gap-2 sm:gap-4">
                <BsSendFill className="" />
                Send me a message
              </h3>
              <div className="w-full pt-[60px]">
                <div className="flex-1">
                  <form className="flex flex-col gap-5">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="p-3 text-right rounded-lg bg-transparent border-b border-gray-400 focus:outline-none focus:border-blue-500 text-sm sm:text-base"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="p-3 text-right rounded-lg bg-transparent border-b border-gray-400 focus:outline-none focus:border-blue-500 text-sm sm:text-base"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className="p-3 text-right rounded-lg bg-transparent border border-gray-700 focus:outline-none focus:border-blue-500 text-sm sm:text-base"
                    ></textarea>
                    <div className="text-center md:text-right">
                      <button
                        type="submit"
                        className="px-6 w-full sm:w-[200px] py-3 rounded-lg bg-gray-300 text-black cursor-pointer transition-transform duration-150 ease-in-out font-semibold active:scale-95"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
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

// import Navbar from "./Navbar";
// import Skills from "./Skills";

// import img from "../assets/image.png";
// import img1 from "../assets/react.png";
// import img2 from "../assets/logo.jpg";
// import bottomPro1 from "../assets/project1.png";
// import bottomPro2 from "../assets/project2.png";
// import bottomPro3 from "../assets/project3.png";

// import portfolioImg from "../assets/portfolio.jpg";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { FaLinkedin, FaGithub } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { HiOutlineMail } from "react-icons/hi";
// import { FaLink } from "react-icons/fa";
// import { FaWhatsappSquare } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { BsSendFill } from "react-icons/bs";

// import pro1 from "../assets/peershape.png";
// import {
//   SiReact,
// } from "react-icons/si";

// const testimonials = [
//   {
//     name: "Aarav Sharma",
//     img: "https://randomuser.me/api/portraits/men/32.jpg",
//     message: "Amazing portfolio! The design feels modern and clean.",
//   },
//   {
//     name: "Priya Mehta",
//     img: "https://randomuser.me/api/portraits/women/44.jpg",
//     message: "Loved the animations, really smooth and engaging.",
//   },
//   {
//     name: "Karan Patel",
//     img: "https://randomuser.me/api/portraits/men/53.jpg",
//     message: "Great UI/UX, everything looks professional.",
//   },
//   {
//     name: "Sneha Kapoor",
//     img: "https://randomuser.me/api/portraits/women/65.jpg",
//     message: "Impressive work, shows a lot of creativity!",
//   },
// ];

// export default function Port() {
//   const [open, setOpen] = useState(false);
//   const [rating, setRating] = useState(0);
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = { rating, message };
//     console.log("Stored Data (send to backend later):", data);
//     setRating(0);
//     setMessage("");
//   };

//   useEffect(() => {
//     if (open) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => (document.body.style.overflow = "auto");
//   }, [open]);

//   return (
//     <div className="relative min-h-screen flex justify-center text-white">
//       <div className="absolute inset-0 bg-grid shadow-overlay"></div>

//       <div className="relative z-10 w-full md:w-[90%] lg:w-[80%] h-full px-4 md:px-0">
//         <Navbar />
//         <div className="mt-18 text-left md:text-center">
//           <span className="name text-xl md:text-2xl text-gray-300">
//             Hello, I’m Pramod a
//           </span>
//           <h1 className="title mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
//             full-stack
//           </h1>
//           <h1 className="title2 mt-1 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
//             developer
//           </h1>
//           <p className="text-sm sm:text-lg md:text-3xl mt-6 md:mt-10 text-gray-300">
//             I build softwares, which makes human efforts more efficient
//           </p>
//           <div className="flex gap-4 mt-6 md:mt-8 flex-wrap justify-center md:justify-start">
//             <button className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition">
//               Projects
//             </button>
//             <button className="px-6 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 transition">
//               Resume
//             </button>
//           </div>
//         </div>

//         <Skills />

//         {/* projects section */}
//         <div className="projects-section flex flex-col lg:flex-row mt-20 gap-10 lg:gap-0">
//           <div className="flex-1 flex flex-col items-center lg:items-start">
//             <h2 className="text-4xl lg:text-[100px] font-bold leading-none mb-10 text-center lg:text-left">
//               Latest projects
//             </h2>

//             {/* Project Cards */}
//             <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-8">
//               {[img, img1, img2].map((image, idx) => (
//                 <div
//                   key={idx}
//                   onClick={() => setOpen(true)}
//                   className="border border-gray-600 h-[300px] sm:h-[400px] w-[260px] sm:w-[300px] md:w-[400px] p-4 rounded-2xl cursor-pointer hover:shadow-lg hover:border-gray-400 transition group"
//                 >
//                   <div className="h-[150px] sm:h-[230px] w-full rounded-2xl overflow-hidden">
//                     <img src={image} className="w-full h-full object-cover" />
//                   </div>
//                   <div className="flex mt-3">
//                     <div className="text-xl sm:text-3xl font-bold">Project {idx + 1}</div>
//                   </div>
//                   <div className="mt-2 text-gray-400 text-sm sm:text-lg">
//                     Lorem ipsum project description goes here for project {idx + 1}.
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Overlay */}
//             {open && (
//               <div className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center overflow-auto">
//                 <div className="bg-[#18181B] rounded-2xl mt-10 sm:mt-20 p-6 w-full sm:w-[800px] lg:w-[1000px] max-h-[90vh] overflow-y-scroll shadow-lg relative">
//                   <button
//                     onClick={() => setOpen(false)}
//                     className="absolute top-4 right-4 text-white hover:text-green cursor-pointer border p-2 rounded-xl"
//                   >
//                     Go Back
//                   </button>

//                   <h2 className="text-2xl font-bold mb-4">Project Details</h2>
//                   <img
//                     src={pro1}
//                     className="w-full h-[300px] sm:h-[550px] object-cover rounded-lg mb-4"
//                   />
//                   <h3 className="text-xl sm:text-3xl font-bold mt-4 sm:mt-8">About this project</h3>
//                   <p className="text-white text-sm sm:text-lg mt-2">
//                     Detailed project description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* image curve section - hide on mobile/tablet */}
//         <div className="h-[500px] relative overflow-hidden w-screen -ml-[calc((100vw-1200px)/2)] mt-20 hidden lg:block">
//           {/* Curve */}
//           <div
//             className="h-[800px] w-full bg-[#0a0a0a] rounded-[50%] absolute top-[550px] z-10 rotate-180"
//             style={{
//               boxShadow: "0px 0px 200px 300px rgba(0, 0, 0, 0.9)",
//             }}
//           ></div>

//           {[bottomPro3, bottomPro1, bottomPro2, bottomPro3, bottomPro1, bottomPro3].map(
//             (imgSrc, i) => (
//               <img
//                 key={i}
//                 src={imgSrc}
//                 alt={`img${i}`}
//                 className={`absolute z-${9 - i} rounded-2xl grayscale-100 hover:grayscale-25`}
//                 style={{
//                   left: `${i * 15}%`,
//                   bottom: `${i % 2 === 0 ? "50px" : "-50px"}`,
//                   width: "550px",
//                   height: "320px",
//                   transform: `rotate(${i * 10 - 24}deg)`,
//                 }}
//               />
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
