"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiKnexdotjs,
} from "react-icons/si";

import {motion} from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// about info
const about = {
  title:"About me",
  description:"Software engineer who is a conscientious and diligent individual with team working and problem-solving skills. I am ready to apply my knowledge to actual practice as well as ready for high exposure to multinational and diversified environments.",
  info: [
    {
      fieldName:"Name",
      fieldValue:"Yram Afakorzi"
    },
    {
      fieldName:"Phone",
      fieldValue:"908776"
    },
    {
      fieldName:"Experience",
      fieldValue:"06 months"
    },
    {
      fieldName:"Name",
      fieldValue:"Yram Afakorzi"
    },
    {
      fieldName:"Language",
      fieldValue:"English, French"
    },
    {
      fieldName:"Freelance",
      fieldValue:"Available"
    },
  ]
};

//experience data
const experience = {
  icon:"Yram",
  title:"My Experience",
  description:"Software engineer who is a conscientious and diligent individual with team working and problem-solving skills. I am ready to apply my knowledge to actual practice as well as ready for high exposure to multinational and diversified environments.",
  items: [
    {
      project:"hhukj",
      position:"Freelance",
      duration:"89",
    },
    {
      project:"hhukj",
      position:"Freelance",
      duration:"89",
    },
    {
      project:"hhukj",
      position:"Freelance",
      duration:"89",
    },
    {
      project:"hhukj",
      position:"Freelance",
      duration:"89",
    },
    {
      project:"hhukj",
      position:"Freelance",
      duration:"89",
    },
  ]
}


const education = {
  icon:"Yram",
  title:"My Education",
  description:"Software engineer who is a conscientious and diligent individual with team working and problem-solving skills. I am ready to apply my knowledge to actual practice as well as ready for high exposure to multinational and diversified environments.",
  items: [
    {
      institution:"Lovely Professional University",
      degree:"BTECH Petroleum Engineering",
      duration:"2023",
    },
    

  ]
};


const skills = {
  title:"My skills",
  description:"Software engineer who is a conscientious and diligent individual with team working and problem-solving skills. I am ready to apply my knowledge to actual practice as well as ready for high exposure to multinational and diversified environments.",
  skillList: [
    {
      icon:<FaHtml5/>,
      name:"Html5",
    },
    {
      icon:<FaHtml5/>,
      name:"Html5",
    },
    {
      icon:<FaHtml5/>,
      name:"Html5",
    },
    {
      icon:<FaHtml5/>,
      name:"Html5",
    },
    {
      icon:<FaHtml5/>,
      name:"Html5",
    },
    {
      icon:<FaHtml5/>,
      name:"Html5",
    },
    {
      icon:<FaHtml5/>,
      name:"Html5",
    },
    {
      icon:<FaHtml5/>,
      name:"Html5",
    },
    {
      icon:<FaHtml5/>,
      name:"Html5",
    },
    

  ]
};






const Resume = () => {
  return (
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
    className="min-h-[80vh] flex items-center justify-center py-12 md:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col md:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto md:mx-0 gap-6">
            <TabsTrigger value="experience">
              Experience
            </TabsTrigger>
            <TabsTrigger value="education">
              Education
            </TabsTrigger>
            <TabsTrigger value="skills">
              Skills
            </TabsTrigger>
            <TabsTrigger value="about">
              About Me
            </TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center md:text-left">
                <h3 className="text-white/80 text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] mx-auto md:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px] text-white/80">
                    {experience.items.map((item,index)=>{
                      return<li key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center md:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h1 className="text-xl max-w-[260px] min-h-[60px] items-center md:text-left">{item.position}</h1>
                        <div className="flex items-center gap-3">
                          <span   className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.project}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center md:text-left">
                <h3 className="text-white/80 text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] mx-auto md:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px] text-white/80">
                    {education.items.map((item,index)=>{
                      return<li key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center md:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h1 className="text-xl max-w-[260px] min-h-[60px] items-center md:text-left">{item.degree}</h1>
                        <div className="flex items-center gap-3">
                          <span   className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
                      {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] items-center md:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto md:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index)=>{
                    return<li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent><p className="capitalize">{skill.name}</p></TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full text-center md:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold text-white/80">{about.title}</h3>
                <p  className="max-w-[600px] mx-auto md:mx-0">{about.description}</p>
                <ul className="text-white/80 grid grid-cols-1 md:grid-cols-2 gap-y-6 max-w-[620px] mx-auto md:mx-0">
                  {about.info.map((item, index)=>{
                    return<li key={index} className="flex items-center justify-center md:justify-start gap-4">
                      <span className="text-white/60 ">{item.fieldName}</span>
                      <span className="text-xl ">{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>


        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume

