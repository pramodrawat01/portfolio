import Navbar from "./Navbar";
import Skills from "./Skills";

import img from "../assets/image.png";
import img1 from "../assets/react.png";
import img2 from "../assets/logo.jpg";
import portfolioImg from "../assets/portfolio.jpg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

export default function Port() {
  const [open, setOpen] = useState(false);

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

        {/* <div className="h-[500px] border-2">
          <div>fmiliear with -</div>
          <div className="languages">
            <div>programming languages</div>
            <div>
              <div>C++</div>
            </div>
          </div>
          <div className="frameworks">
            <div>frameworks & lybraries</div>
            <div>
              <div>react</div>
            </div>
          </div>

          <div className="tools">
            <div>tools</div>
            <div>
              <div>git</div>
            </div>
          </div>

        </div> */}

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
          <h2 className="text-[100px] font-bold text-[#121212] dark:text-[#a5a5a5] leading-none latest">
            Why Consider Me?
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

        <div className="h-[400px]"></div>
      </div>
    </div>
  );
}
