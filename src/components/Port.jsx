import Navbar from "./Navbar";
import Skills from "./Skills";

import img from "../assets/image.png";
import img1 from "../assets/react.png";
import img2 from "../assets/logo.jpg";
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
import {
  SiRust,
  SiCplusplus,
  SiC,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiPostman,
  SiGit,
  SiNetlify,
  SiGithub,
  SiVercel,
} from "react-icons/si";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { rating, message };
    console.log("Stored Data (send to backend later):", data);
    setRating(0);
    setMessage("");
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <div className="relative min-h-screen flex justify-center   text-white">
      <div className="absolute inset-0 bg-grid shadow-overlay"></div>

      <div className="relative z-10 w-[80%]  h-full">
        <Navbar />
        <div className="mt-18">
          <span className="name text-2xl text-gray-300">
            {" "}
            Hello, I’m Pramod a
          </span>
        </div>

        <h1 className="title mt-4 text-5xl text-white ">full-stack</h1>
        <h1 className="title2 mt-1 text-5xl text-white">developer</h1>
        <p className="text-right text-3xl mt-10 tagline">
          I build softwares, which makes human effots more efficient
        </p>
        <div>
          <button>projects</button>
          <button>resume</button>
        </div>

        <Skills />

        {/* projects section */}

        <div className=" projects-section flex mt-[100px]">
          <div className="w-[50%]  h-full flex flex-col items-center">
            <div className=" text-[100px] leading-none latest">
              Latest projects
            </div>

            {/** second project */}

            {/* Card */}
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

            {/* Overlay */}
            {open && (
              <div className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center">
                <div className="bg-[#18181B] rounded-2xl mt-[30px] mx-[100px] p-6 w-[1000px] h-[1000px] overflow-y-scroll shadow-lg relative">
                  {/* Close Button */}
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute top-4 right-4 text-white hover:text-green cursor-pointer border-1 p-2 rounded-xl"
                  >
                    go back
                  </button>

                  {/* Content inside layover */}
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

                  {/* Add a lot of dummy text to show scroll */}
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
            {/** first project */}

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

            {/** third project */}

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
        </div>

        {/* about  */}

        <section className="py-16 bg-transparent mt-[100px] relative overflow-hidden">
          {/* Heading */}
          <h2 className="text-[100px] font-bold text-[#121212]whi dark:text-[#ffffff] leading-none latest">
            why
          </h2>
          <h2 className="text-[100px] font-bold text-[#121212] dark:text-[#a5a5a5] leading-none latest">
            consider me?
          </h2>
          <div className="text-xl text-[#3d3d3d] dark:text-[#ffffff] text-left flex flex-col gap-2 pl-[400px] mt-[80px]">
            <p>
              ○ I bring a unique blend of technical expertise, creativity, and
              problem-solving mindset.
            </p>
            <p>○ I put my pure efforts instead of creating buzz</p>
            <p>
              ○ Continuously working onmany projects from last few months to
              sharpen my skills
            </p>
            <p>
              ○ Manintaining DSA streak not to flex but to make deep
              understanding about algorithm
            </p>
            <p>○ Trying to be a good solver on every step i'm improving </p>
          </div>

          {/* Carousel Container */}
          <div className="relative w-full max-w-[1200px] mx-auto overflow-hidden mt-[100px]">
            {/* Left & Right Fades */}

            <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#0a0a0a] via-black/70 to-transparent z-20"></div>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#0a0a0a] via-black/70 to-transparent z-20"></div>

            {/* Scrolling Wrapper */}
            <div className="flex gap-6 animate-scroll">
              {/* Duplicate cards twice for seamless loop */}
              {[...Array(2)].map((_, loopIndex) => (
                <div key={loopIndex} className="flex gap-6">
                  {/* Card 1 */}
                  <div className="min-w-[300px] p-6 bg-white dark:bg-[#1c1c1c] rounded-2xl shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-[#121212] dark:text-[#f5f5f5] mb-2">
                      ⚡ Strong Frontend Skills
                    </h3>
                    <p className="text-[#3d3d3d] dark:text-[#a6a6a6]">
                      Proficient in React.js, JavaScript, Tailwind CSS, and
                      responsive design.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="min-w-[300px] p-6 bg-white dark:bg-[#1c1c1c] rounded-2xl shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-[#121212] dark:text-[#f5f5f5] mb-2">
                      🛠 Full-Stack Mindset
                    </h3>
                    <p className="text-[#3d3d3d] dark:text-[#a6a6a6]">
                      Currently mastering the MERN stack to build end-to-end
                      applications.
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="min-w-[300px] p-6 bg-white dark:bg-[#1c1c1c] rounded-2xl shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-[#121212] dark:text-[#f5f5f5] mb-2">
                      💡 Problem Solver
                    </h3>
                    <p className="text-[#3d3d3d] dark:text-[#a6a6a6]">
                      Write clean, efficient code and tackle challenges with
                      logical solutions.
                    </p>
                  </div>

                  {/* Card 4 */}
                  <div className="min-w-[300px] p-6 bg-white dark:bg-[#1c1c1c] rounded-2xl shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-[#121212] dark:text-[#f5f5f5] mb-2">
                      🤝 Team Collaboration
                    </h3>
                    <p className="text-[#3d3d3d] dark:text-[#a6a6a6]">
                      Skilled with Git/GitHub, work well in teams, and
                      communicate effectively.
                    </p>
                  </div>

                  {/* Card 5 */}
                  <div className="min-w-[300px] p-6 bg-white dark:bg-[#1c1c1c] rounded-2xl shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-[#121212] dark:text-[#f5f5f5] mb-2">
                      🎨 Creative & Detail-Oriented
                    </h3>
                    <p className="text-[#3d3d3d] dark:text-[#a6a6a6]">
                      Focus on delivering beautiful UI/UX with attention to
                      design details.
                    </p>
                  </div>

                  {/* Card 6 */}
                  <div className="min-w-[300px] p-6 bg-white dark:bg-[#1c1c1c] rounded-2xl shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-[#121212] dark:text-[#f5f5f5] mb-2">
                      🚀 Growth-Oriented
                    </h3>
                    <p className="text-[#3d3d3d] dark:text-[#a6a6a6]">
                      Quick learner, adaptable, and always upgrading my skills.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* image */}
        <div className="flex justify-center items-center mt-10">
          <img
            src={portfolioImg}
            alt="portfolio image"
            className="w-[300px] h-[300px] object-cover object-[50%_20%]  rounded-full shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* rate portfolio */}
        <div className="flex justify-between gap-20 mt-[150px] px-10 ">
          {/* LEFT SIDE - Rate Section */}
          <div className="w-1/2">
            <h2 className="text-4xl font-bold text-white mb-6 latest">
              Rate this portfolio...
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Rating Input */}
              <div className="flex gap-6 mt-8">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="relative group">
                    {/* Rating Button */}
                    <button
                      type="button"
                      className={`px-4 py-2 rounded-lg border transition ${
                        rating === num
                          ? "bg-white text-black"
                          : "border-gray-400 text-white"
                      }`}
                      onClick={() => setRating(num)}
                    >
                      {num}
                    </button>

                    {/* Emoji Popup */}
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 text-2xl">
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
                className="p-3 rounded-lg bg-transparent border border-gray-400 text-white focus:outline-none focus:border-blue-500"
              />

              {/* Submit */}
              <div className="text-right">
                <button
                  type="submit"
                  className="px-6 w-[200px] py-3 rounded-lg bg-gray-300 text-black cursor-pointer transition-transform duration-150 ease-in-out font-semibold active:scale-95"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT SIDE - Infinite Carousel */}
          <div className="w-1/2 relative overflow-hidden h-[400px]">
            {/* Shadow overlay top & bottom */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>

            {/* Infinite vertical scroll */}
            <div className="animate-[moveUp_15s_linear_infinite] grid grid-cols-2 gap-6">
              {testimonials.concat(testimonials).map((t, idx) => (
                <div
                  key={idx}
                  className={`bg-white/10 backdrop-blur-lg text-white p-4 rounded-xl shadow-md 
              transform ${idx % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <p className="font-semibold">{t.name}</p>
                  </div>
                  <p className="mt-2 text-sm">{t.message}</p>
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

        {/* contact  */}
        <div className=" mt-[150px] ">
          {/* headings */}
          <div className="flex justify-between items-end">
            <h2 className="text-[100px] font-bold text-white leading-none latest flex items-center gap-14">
              connect
              <FaLink className="text-6xl mt-[18px] cursor-pointer text-white hover:text-blue-500 transition" />
            </h2>
            <h3 className="text-4xl font-bold  latest text-right flex justify-end gap-4">
              <BsSendFill className="" />
              Send me a message
            </h3>
          </div>

          <div className="flex justify-between mt-[50px]">
            {/* Social Icons */}
            <div className="pt-[30px]">
              <div className="flex gap-10">
                <div className="group relative flex flex-col items-center">
                  <MdEmail className="text-4xl cursor-pointer text-white hover:text-purple-400 transition" />
                  <span className="absolute bottom-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 text-white text-sm">
                    Email
                  </span>
                </div>
                {/* LinkedIn */}
                <div className="group relative flex flex-col items-center">
                  <FaLinkedin className="text-4xl cursor-pointer text-white hover:text-blue-500 transition" />
                  <span className="absolute bottom-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 text-white text-sm">
                    LinkedIn
                  </span>
                </div>

                {/* X / Twitter */}
                <div className="group relative flex flex-col items-center">
                  <FaXTwitter className="text-4xl cursor-pointer text-white hover:text-gray-400 transition" />
                  <span className="absolute bottom-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 text-white text-sm">
                    X
                  </span>
                </div>

                {/* GitHub */}
                <div className="group relative flex flex-col items-center">
                  <FaGithub className="text-4xl cursor-pointer text-white hover:text-purple-400 transition" />
                  <span className="absolute bottom-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 text-white text-sm">
                    GitHub
                  </span>
                </div>

                <div className="group relative flex flex-col items-center">
                  <FaWhatsappSquare className="text-4xl cursor-pointer text-white hover:text-green-400 transition" />
                  <span className="absolute bottom-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 text-white text-sm">
                    Whatsapp
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
                {/* Email */}
                <div className="pt-[20px]">
                  <p className="text-white text-4xl underline cursor-pointer">
                    rawatpramod@392.com
                  </p>
                </div>
              </div>
            </div>

            <div className=" w-[50%] pt-4">
              <div className="flex-1">
                <form className="flex flex-col gap-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="p-3 rounded-lg bg-transparent border-b border-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="p-3 rounded-lg bg-transparent border-b border-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="p-3 rounded-lg bg-transparent border border-gray-700 focus:outline-none focus:border-blue-500"
                  ></textarea>
                  <div className="text-right">
                    <button
                      type="submit"
                      className="px-6 w-[200px] py-3 rounded-lg bg-gray-300 text-black cursor-pointer transition-transform duration-150 ease-in-out font-semibold active:scale-95"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* image curve */}
        {/* <div className="relative h-[400px] w-full border-2 overflow-y-hidden">
        
          <img
            src={bottomPro1}
            alt="img1"
            className="absolute rounded-2xl"
            style={{
              left: "0%", // horizontal position
              bottom: "0", // vertical position
              width: "500px",
              height: "300px",
              transform: "rotate(-10deg)", // rotation
            }}
          />

          
          <img
            src={bottomPro1}
            alt="img2"
            className="absolute"
            style={{
              left: "30%",
              bottom: "80px",
              width: "420px",
              height: "220px",
              transform: "rotate(5deg)",
            }}
          />

         
          <img
            src={bottomPro1}
            alt="img3"
            className="absolute"
            style={{
              left: "60%",
              bottom: "80px",
              width: "420px",
              height: "220px",
              transform: "rotate(-5deg)",
            }}
          />

         
          <img
            src={bottomPro1}
            alt="img4"
            className="absolute"
            style={{
              left: "60%",
              bottom: "50px",
              width: "400px",
              height: "200px",
              transform: "rotate(10deg)",
            }}
          />
        </div> */}

        <div className="h-[500px] relative overflow-hidden w-screen -ml-[calc((100vw-1200px)/2)] mt-[50px] hidden lg:block">
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
