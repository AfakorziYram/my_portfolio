"use client";
import {motion} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React,{ useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {BsArrowUpRight , BsGithub} from "react-icons/bs";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"; 
import ProjectSlideBtns from "@/components/ProjectSlideBtns";



const projects = [
  {
    num:"01",
    category:"frontend",
    title:"project 1",
    description:"qwgdhbsaoxjx zjncwlk kiuhskjcnbs  cwkncdw colosdhwiyfjsdbhcbdsndscbqoi",
    stack:[{name:"Html 5"},{name:"Html 5"},{name:"Html 5"},],
    image:"/assets/photo.jpg",
    live:"",
    github:""
  },
  {
    num:"02",
    category:"backend",
    title:"project 1",
    description:"qwgdhbsaoxjx zjncwlk kiuhskjcnbs  cwkncdw colosdhwiyfjsdbhcbdsndscbqoi",
    stack:[{name:"Html 5"},{name:"Html 5"},{name:"Html 5"},],
    image:"/assets/photo.jpg",
    live:"",
    github:""
  },
  {
    num:"03",
    category:"full stack",
    title:"project 1",
    description:"qwgdhbsaoxjx zjncwlk kiuhskjcnbs  cwkncdw colosdhwiyfjsdbhcbdsndscbqoi",
    stack:[{name:"Html 5"},{name:"Html 5"},{name:"Html 5"},],
    image:"/assets/photo.jpg",
    live:"",
    github:""
  },
]

const Projects = () => {

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange =(swiper) =>{
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  };

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
            <div className="group flex flex-col gap-[30px] h-[50%]">
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
          <div className="w-full md:w-[50%]">
            <Swiper            
               spaceBetween={30}
               slidesPerView={1}
               onSlideChange={handleSlideChange}
               className="md:h-[520px] mb-12"
            >
              {projects.map((project, index)=>{
                return(
                  <SwiperSlide key={index}>
                    <div className=" h-[400px] flex group justify-center items-center bg-pink-50/20 relative">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill alt="project image" className="object-cover"/>
                      </div>
                    </div>
                  </SwiperSlide>
                ); 
              })}
              {/* swiper buttons */}
              <ProjectSlideBtns 
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_20px)] md:bottom-0 z-20 w-full justify-between md:w-max md:justify-none"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Projects