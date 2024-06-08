"use client";

import { motion } from "framer-motion";

const skills = [
  {
    num:"01",
    title:"React",
    logo:"YRAM"
  },
  {
    num:"02",
    title:"React",
    logo:"YRAM"
  },
  {
    num:"03",
    title:"React",
    logo:"YRAM"
  },
  {
    num:"04",
    title:"React",
    logo:"YRAM"
  },
]

const Skills = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 md:py-0">
      <div className="container mx-auto">
        <motion.div
        initial={{opacity:0}}
        animate={{
            opacity:1,
            transition:{
                delay:2.4,
                duration:0.4,
                ease:"easeIn"
            }
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {skills.map((skill, index)=>{
            return(
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group ml-10">
                {/* top */}
                <div className="w-full flex items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{skill.num}</div>
                </div>
                  {/* heading */}
                <h2 className="text-[42px] font-bold leading-none group-hover:text-[#FF45A4] transition-all duration-500">{skill.title}</h2>
                {/* logo */}
                <div>{skill.logo}</div>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills