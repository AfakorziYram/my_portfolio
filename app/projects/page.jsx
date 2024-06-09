"use client";
import {motion} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {BsArrowUpRight , BsGithub} from "react-icons/bs";


const projects = [
  {
    num:"01",
    category:"frontend",
    title:"project 1",
    description:"qwgdhbsaoxjx zjncwlk kiuhskjcnbs  cwkncdw colosdhwiyfjsdbhcbdsndscbqoi",
    stack:[{name:"Html 5"},{name:"Html 5"},{name:"Html 5"},],
    image:"/assets/whatsappyr.jpg",
    live:"",
    github:""
  },
  {
    num:"02",
    category:"frontend",
    title:"project 1",
    description:"qwgdhbsaoxjx zjncwlk kiuhskjcnbs  cwkncdw colosdhwiyfjsdbhcbdsndscbqoi",
    stack:[{name:"Html 5"},{name:"Html 5"},{name:"Html 5"},],
    image:"/assets/whatsappyr.jpg",
    live:"",
    github:""
  },
  {
    num:"03",
    category:"frontend",
    title:"project 1",
    description:"qwgdhbsaoxjx zjncwlk kiuhskjcnbs  cwkncdw colosdhwiyfjsdbhcbdsndscbqoi",
    stack:[{name:"Html 5"},{name:"Html 5"},{name:"Html 5"},],
    image:"/assets/whatsappyr.jpg",
    live:"",
    github:""
  },
]

const Projects = () => {

  const [project, setProject] = useState(projects[0]);

  return (
    <motion.section
    initial={{opacity:0}}
    animate={{
        opacity:1,
        transition:{
            delay:2.4,
            duration:0.4,
            ease:"easeIn"
        }
    }}
    className="min-h-[80vh] flex flex-col justify-center py-12 md:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:gap-[30px]">
          <div className="w-full md:w-[50%] md:h-[400px] flex flex-col md:justify-between order-2 md:order-none">
            <div className="group">
              {/* outline for number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white/80 group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index)=>{
                  return<li key={index} className="text-xl">
                    {item.name}
                    {/* to remove last comma */}
                    {index!==project.stack.length -1 && ","} 
                  </li>
                })}
              </ul>
              <div className="border border-white/20 "></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip> 
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/10 flex justify-center items-center">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip> 
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/10 flex justify-center items-center">
                        <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%]">slider</div>
        </div>
      </div>
    </motion.section>
  )
}

export default Projects