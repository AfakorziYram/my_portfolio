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
      position:"hjn",
      duration:"89",
    },
    {
      project:"hhukj",
      position:"hjn",
      duration:"89",
    },
    {
      project:"hhukj",
      position:"hjn",
      duration:"89",
    },
    {
      project:"hhukj",
      position:"hjn",
      duration:"89",
    },
    {
      project:"hhukj",
      position:"hjn",
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
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>


        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume

