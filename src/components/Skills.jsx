import React from "react";
import {
  
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

import { VscVscode } from "react-icons/vsc";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const Skills = () => {

  const farameworks = [
    {name : "React ", icon : <SiReact className="w-8 h-8 text-cyan-500 mb-2" />},
    {name :"Bootstrap", icon : <SiBootstrap className="w-8 h-8 text-purple-600 mb-2" />},
    {name : "Tailwind css", icon : <SiTailwindcss className="w-8 h-8 text-sky-400 mb-2" />},
    {name : "Next.js (learning)", icon : <SiNextdotjs className="w-8 h-8 text-white mb-2 " />},
  ]

  const Languages = [
    
    {
      name : "javascript",
      icon : <SiJavascript className="w-8 h-8 text-yellow-500 mb-2" />
    },
    {
      name : "C++",
      icon :  <SiCplusplus className="w-8 h-8 text-blue-600 mb-2" />
    },
    {
      name : "C",
      icon : <SiC className="w-8 h-8 white mb-2" />
    },
    {
      name : "Typescript (learning)",
      icon : <SiTypescript className="w-8 h-8 text-blue-500 mb-2" />
    },
  ]

  const Tools = [
    {
      name : "Postman ",
      icon : <SiPostman className =" w-8 h-8 text-orange-500 mb-2" />
    },
    {
      name : "Git",
      icon :  <SiGit className="w-8 h-8 text-red-500 mb-2" />
    },
    {
      name : "VS code",
      icon : <VscVscode className="w-8 h-8 text-blue-600 mb-2" />
    },
    {
      name : "Netlify",
      icon : <SiNetlify className="w-8 h-8 text-green-500 mb-2" />
    },
    {
      name : "Github",
      icon : <SiGithub className="w-8 h-8 text-white mb-2" />
    },
    {
      name : "Vercel",
      icon : <SiVercel className="w-8 h-8 text-white mb-2" />
    },
  ]


  const textRef = useRef(null);
  useEffect(() => {
    gsap.from(textRef.current, {
      y: 50,          // start 50px below
      opacity: 0,     // start invisible
      duration: 1,    // animation duration
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current, // animate when this element is in view
        start: "top 80%",         // trigger when top hits 80% of viewport
        toggleActions: "play none none none",
      },
    });
  }, []);

  const textRef2 = useRef(null);
  useEffect(() => {
    gsap.from(textRef2.current, {
      y: 50,          // start 50px below
      opacity: 0,     // start invisible
      duration: 1,    // animation duration
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef2.current, // animate when this element is in view
        start: "top 80%",         // trigger when top hits 80% of viewport
        toggleActions: "play none none none",
      },
    });
  }, []);

  const textRef3= useRef(null);
  useEffect(() => {
    gsap.from(textRef3.current, {
      y: 50,          // start 50px below
      opacity: 0,     // start invisible
      duration: 1,    // animation duration
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef3.current, // animate when this element is in view
        start: "top 80%",         // trigger when top hits 80% of viewport
        toggleActions: "play none none none",
      },
    });
  }, []);






  return (
  <div className="mt-20 py-12 flex flex-col flex-wrap justify-start">

    {/* Programming Languages */}
    <div ref={textRef} className="mb-10 relative">
      <h1
        className="text-xl sm:text-2xl lg:text-3xl font-bold sm:text-left">
        Programming Languages
      </h1>
      <div className="flex flex-col sm:flex-row sm:justify-between border-l-1 gap-y-10 py-10 rounded-bl-[100px]">
        
        {/* icons */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-6">
          {Languages.map((item,index)=>(
            <div key={index} className="flex flex-col items-center w-[80px] sm:w-[100px] text-center">
              <div className="hover:scale-130 transition duration-300">{item.icon}</div>
              <p className="text-sm sm:text-base">{item.name}</p>
            </div>
          ))}
        </div>

        {/* text */}
        <div className="mt-6 sm:mt-[100px] text-center sm:text-right text-sm sm:text-base px-4 sm:px-0">
          <div className="w-full">○ solving DSA questions in c++ on platforms like leetcode and codeforces</div>
          <div className="w-full">○ i harness the power of JavaScript to build interactive, scalable, and user-friendly web experiences.</div>
        </div>
      </div>
    </div>

    {/* Frameworks/Libraries */}
    <div ref={textRef2} className="mb-10 relative">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold  sm:text-left">
        Frameworks & libraries
      </h1>
      <div className="flex flex-col sm:flex-row sm:justify-between border-l-1 border-b-1 gap-y-10 py-10 rounded-bl-[100px]">
        
        {/* icons */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-6">
          {farameworks.map((item,index)=>(
            <div key={index} className="flex flex-col items-center w-[80px] sm:w-[100px] text-center">
              <div className="hover:scale-130 transition duration-300">{item.icon}</div>
              <p className="text-sm sm:text-base">{item.name}</p>
            </div>
          ))}
        </div>

        {/* text */}
        <div className="mt-6 sm:mt-[100px] text-center sm:text-right text-sm sm:text-base px-4 sm:px-0">
          <div className="w-full">○ I build modern and scalable UIs using React and Tailwind CSS</div>
          <div className="w-full">○ I work with React.js to create fast, optimized, and SEO-friendly web applications</div>

        </div>
      </div>
    </div>

    {/* Tools */}
    <div ref={textRef3} className="mb-10 relative">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold sm:text-left">
        Tools & Technologies
      </h1>
      <div className="flex flex-col sm:flex-row sm:justify-between border-l-1 gap-y-10 py-10 rounded-bl-[100px]">
        
        {/* icons */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-6">
          {Tools.map((item,index)=>(
            <div key={index} className="flex flex-col items-center w-[80px] sm:w-[100px]">
              <div className="hover:scale-130 transition duration-300">{item.icon}</div>
              <p className="text-sm sm:text-base">{item.name}</p>
            </div>
          ))}
        </div>

        {/* text */}
        <div className="mt-6 sm:mt-[100px] text-center sm:text-right text-sm sm:text-base px-4 sm:px-0">
          <div className="w-full">○ I use Git & GitHub for version control and collaboration</div>
          <div className="w-full">○ Comfortable with tools like Postman, VS Code, and Vercel for efficient development and deployment</div>

        </div>
      </div>
    </div>

  </div>
);


};

export default Skills;

