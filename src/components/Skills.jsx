// import { frameSteps } from "framer-motion";
// import React from "react";
// import {
//   SiRust,
//   SiCplusplus,
//   SiC,
//   SiJavascript,
//   SiTypescript,
//   SiReact,
//   SiNextdotjs,
//   SiBootstrap,
//   SiTailwindcss,
//   SiPostman,
//   SiGit,
//   SiNetlify,
//   SiGithub,
//   SiVercel,
// } from "react-icons/si";
// import img from '../assets/image.png'
// import img1 from '../assets/react.png'
// import img2 from '../assets/logo.jpg'


// import { VscVscode } from "react-icons/vsc";


// const Skills = () => {

//   const farameworks = [
//     {name : "React ", icon : <SiReact className="w-8 h-8 text-cyan-500 mb-2" />},
//     {name : "Next.js", icon : <SiNextdotjs className="w-8 h-8 text-white mb-2 " />},
//     {name :"Bootstrap", icon : <SiBootstrap className="w-8 h-8 text-purple-600 mb-2" />},
//     {name : "Tailwind css", icon : <SiTailwindcss className="w-8 h-8 text-sky-400 mb-2" />}
//   ]

//   const Languages = [
//     {
//       name : "rust",
//       icon : <SiRust className="w-8 h-8 text-orange-600 mb-2 " />
//     },
//     {
//       name : "C++",
//       icon :  <SiCplusplus className="w-8 h-8 text-blue-600 mb-2" />
//     },
//     {
//       name : "javascript",
//       icon : <SiJavascript className="w-8 h-8 text-yellow-500 mb-2" />
//     },
//     {
//       name : "C",
//       icon : <SiC className="w-8 h-8 white mb-2" />
//     },
//     {
//       name : "Typescript",
//       icon : <SiTypescript className="w-8 h-8 text-blue-500 mb-2" />
//     },
//   ]

//   const Tools = [
//     {
//       name : "Postman ",
//       icon : <SiPostman className =" w-8 h-8 text-orange-500 mb-2" />
//     },
//     {
//       name : "Git",
//       icon :  <SiGit className="w-8 h-8 text-red-500 mb-2" />
//     },
//     {
//       name : "VS code",
//       icon : <VscVscode className="w-8 h-8 text-blue-600 mb-2" />
//     },
//     {
//       name : "Netlify",
//       icon : <SiNetlify className="w-8 h-8 text-green-500 mb-2" />
//     },
//     {
//       name : "Github",
//       icon : <SiGithub className="w-8 h-8 text-white mb-2" />
//     },
//     {
//       name : "Vercel",
//       icon : <SiVercel className="w-8 h-8 text-white mb-2" />
//     },
//   ]


//   return (
//     <div className="mt-20  py-12 flex flex-col flex-wrap justify-start  ">


//       {/* Programming Languages */}
//       <div className="mb-10 relative ">
//         <h1 className="text-2xl font-bold">Programming Languages</h1>
//         <div className="flex justify-between border-l-1  gap-y-10 py-10 rounded-bl-[100px]">
//           <div className="flex">
//             {Languages.map((item,index)=>(
//           <div key={index} className="flex flex-col items-center w-[100px] ">
//               {item.icon}
//               <p>{item.name}</p>
//             </div>
//           ))}
//           </div>
           

//          <div className="mt-[100px]">
//            <div className="text-right w-full">○  solved more then 150 DSA problems in c++ on platforms like leatcode and codeforces</div>
//           <div className="text-right w-full">○ i work with jsavscript and Typescript to make web experience better for users</div>
//          </div>
          
//         </div>

        

       
//       </div>

//       {/* Frameworks/Libraries */}
      
//       <div className="mb-10 relative ">
//         <h1 className="text-2xl  font-bold">Frameworks & lybraries</h1>
//         <div className="flex justify-between border-l-1 border-b-1  gap-y-10 py-10 rounded-bl-[100px]">
//           <div className="flex">
//             {farameworks.map((item, index)=>(
//           <div key={index} className="flex flex-col items-center w-[100px] ">
//               {item.icon}
//               <p>{item.name}</p>
//             </div>
//           ))}
//           </div>
           

//          <div className="mt-[100px]">
//            <div className="text-right w-full">○  solved more then 150 DSA problems in c++ on platforms like leatcode and codeforces</div>
//           <div className="text-right w-full">○ i work with jsavscript and Typescript to make web experience better for users</div>
//          </div>
          
//         </div>

        

       
//       </div>


//       {/* Tools */}
//       <div className="mb-10 relative ">
//         <h1 className="text-2xl  font-bold">Tools & Technologies</h1>
//         <div className="flex justify-between border-l-1  gap-y-10 py-10 rounded-bl-[100px]">
//           <div className="flex">
//             {Tools.map((item, index)=>(
//           <div key={index} className="flex flex-col items-center w-[100px] ">
//               {item.icon}
//               <p>{item.name}</p>
//             </div>
//           ))}
//           </div>
           

//          <div className="mt-[100px]">
//            <div className="text-right w-full">○  solved more then 150 DSA problems in c++ on platforms like leatcode and codeforces</div>
//           <div className="text-right w-full">○ i work with jsavscript and Typescript to make web experience better for users</div>
//          </div>
          
//         </div>

        

       
//       </div>
//     </div>
//   );
// };

// export default Skills;



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
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const frameworks = [
    { name: "React", icon: <SiReact className="w-10 h-10 text-cyan-500 mb-2" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-10 h-10 text-white mb-2" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="w-10 h-10 text-purple-600 mb-2" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="w-10 h-10 text-sky-400 mb-2" /> },
  ];

  const Languages = [
    { name: "Rust", icon: <SiRust className="w-10 h-10 text-orange-600 mb-2" /> },
    { name: "C++", icon: <SiCplusplus className="w-10 h-10 text-blue-600 mb-2" /> },
    { name: "JavaScript", icon: <SiJavascript className="w-10 h-10 text-yellow-500 mb-2" /> },
    { name: "C", icon: <SiC className="w-10 h-10 text-white mb-2" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-10 h-10 text-blue-500 mb-2" /> },
  ];

  const Tools = [
    { name: "Postman", icon: <SiPostman className="w-10 h-10 text-orange-500 mb-2" /> },
    { name: "Git", icon: <SiGit className="w-10 h-10 text-red-500 mb-2" /> },
    { name: "VS Code", icon: <VscVscode className="w-10 h-10 text-blue-600 mb-2" /> },
    { name: "Netlify", icon: <SiNetlify className="w-10 h-10 text-green-500 mb-2" /> },
    { name: "Github", icon: <SiGithub className="w-10 h-10 text-white mb-2" /> },
    { name: "Vercel", icon: <SiVercel className="w-10 h-10 text-white mb-2" /> },
  ];

  return (
    <div className="mt-16 px-4 sm:px-8 lg:px-16 py-12 flex flex-col gap-16">
      {/* Languages */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold mb-6">Programming Languages</h1>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {Languages.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center w-[90px]">
                {item.icon}
                <p className="text-sm sm:text-base">{item.name}</p>
              </div>
            ))}
          </div>
          {/* Text */}
          <div className="lg:mt-[50px] text-sm sm:text-base lg:text-right lg:w-1/2">
            <p>○ Solved more than 150 DSA problems in C++ on LeetCode & Codeforces</p>
            <p className="mt-2">○ I work with JavaScript and TypeScript to improve user experience</p>
          </div>
        </div>
      </div>

      {/* Frameworks */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold mb-6">Frameworks & Libraries</h1>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {frameworks.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center w-[90px]">
                {item.icon}
                <p className="text-sm sm:text-base">{item.name}</p>
              </div>
            ))}
          </div>
          <div className="lg:mt-[50px] text-sm sm:text-base lg:text-right lg:w-1/2">
            <p>○ Experienced in building modern UIs with React & Next.js</p>
            <p className="mt-2">○ Skilled in responsive design with Tailwind & Bootstrap</p>
          </div>
        </div>
      </div>

      {/* Tools */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold mb-6">Tools & Technologies</h1>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {Tools.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center w-[90px]">
                {item.icon}
                <p className="text-sm sm:text-base">{item.name}</p>
              </div>
            ))}
          </div>
          <div className="lg:mt-[50px] text-sm sm:text-base lg:text-right lg:w-1/2">
            <p>○ Skilled in version control using Git & GitHub</p>
            <p className="mt-2">○ Deploying projects on Netlify & Vercel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
