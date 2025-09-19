import { frameSteps } from "framer-motion";
import React from "react";
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
import img from '../assets/image.png'
import img1 from '../assets/react.png'
import img2 from '../assets/logo.jpg'


import { VscVscode } from "react-icons/vsc";


const Skills = () => {

  const farameworks = [
    {name : "React ", icon : <SiReact className="w-8 h-8 text-cyan-500 mb-2" />},
    {name : "Next.js", icon : <SiNextdotjs className="w-8 h-8 text-white mb-2 " />},
    {name :"Bootstrap", icon : <SiBootstrap className="w-8 h-8 text-purple-600 mb-2" />},
    {name : "Tailwind css", icon : <SiTailwindcss className="w-8 h-8 text-sky-400 mb-2" />}
  ]

  const Languages = [
    {
      name : "rust",
      icon : <SiRust className="w-8 h-8 text-orange-600 mb-2 " />
    },
    {
      name : "C++",
      icon :  <SiCplusplus className="w-8 h-8 text-blue-600 mb-2" />
    },
    {
      name : "javascript",
      icon : <SiJavascript className="w-8 h-8 text-yellow-500 mb-2" />
    },
    {
      name : "C",
      icon : <SiC className="w-8 h-8 white mb-2" />
    },
    {
      name : "Typescript",
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


  return (
    <div className="mt-20  py-12 flex flex-col flex-wrap justify-start  ">


      {/* Programming Languages */}
      <div className="mb-10 relative ">
        <h1 className="text-2xl font-bold">Programming Languages</h1>
        <div className="flex justify-between border-l-1  gap-y-10 py-10 rounded-bl-[100px]">
          <div className="flex">
            {Languages.map((item)=>(
          <div className="flex flex-col items-center w-[100px] ">
              {item.icon}
              <p>{item.name}</p>
            </div>
          ))}
          </div>
           

         <div className="mt-[100px]">
           <div className="text-right w-full">○  solved more then 150 DSA problems in c++ on platforms like leatcode and codeforces</div>
          <div className="text-right w-full">○ i work with jsavscript and Typescript to make web experience better for users</div>
         </div>
          
        </div>

        

       
      </div>

      {/* Frameworks/Libraries */}
      
      <div className="mb-10 relative ">
        <h1 className="text-2xl  font-bold">Frameworks & lybraries</h1>
        <div className="flex justify-between border-l-1 border-b-1  gap-y-10 py-10 rounded-bl-[100px]">
          <div className="flex">
            {farameworks.map((item)=>(
          <div className="flex flex-col items-center w-[100px] ">
              {item.icon}
              <p>{item.name}</p>
            </div>
          ))}
          </div>
           

         <div className="mt-[100px]">
           <div className="text-right w-full">○  solved more then 150 DSA problems in c++ on platforms like leatcode and codeforces</div>
          <div className="text-right w-full">○ i work with jsavscript and Typescript to make web experience better for users</div>
         </div>
          
        </div>

        

       
      </div>


      {/* Tools */}
      <div className="mb-10 relative ">
        <h1 className="text-2xl  font-bold">Tools & Technologies</h1>
        <div className="flex justify-between border-l-1  gap-y-10 py-10 rounded-bl-[100px]">
          <div className="flex">
            {Tools.map((item)=>(
          <div className="flex flex-col items-center w-[100px] ">
              {item.icon}
              <p>{item.name}</p>
            </div>
          ))}
          </div>
           

         <div className="mt-[100px]">
           <div className="text-right w-full">○  solved more then 150 DSA problems in c++ on platforms like leatcode and codeforces</div>
          <div className="text-right w-full">○ i work with jsavscript and Typescript to make web experience better for users</div>
         </div>
          
        </div>

        

       
      </div>
    </div>
  );
};

export default Skills;
