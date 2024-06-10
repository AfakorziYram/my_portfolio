"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {motion} from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";



const info = [
  {
    icon:<FaPhoneAlt/>,
    title:"Phone",
    description:"23332425678"
  },
  {
    icon:<FaEnvelope/>,
    title:"Email",
    description:"23332425678"
  },
  {
    icon:<FaMapMarkerAlt/>,
    title:"Address",
    description:"23332425678"
  },
]

const Contact = () => {
  return (
    <motion.section
    initial={{opacity:0}}
    animate={{
        opacity:1,
        transition:{
          delay:2.4,
          duration:0.4,
          ease:"easeIn"
        },
    }}
    className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-[30px]">
          {/* form */}
          <div className="md:w-[54%] order-2 md:order-none">
            <form className="flex flex-col gap-6 bg-[#232329] rounded-xl p-10">
              <h3 className="text-4xl text-accent">Want me to join your company?</h3>
              <p className="text-white/60">
              Software engineer who is a conscientious and diligent individual with team working and problem-solving skills. I am ready to apply my knowledge to actual practice as well as ready for high exposure to multinational and diversified environments.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname"/>
                <Input type="lastname" placeholder="Lastname"/>
                <Input type="email" placeholder="Email Address"/>
                <Input type="phone" placeholder="Phone number"/>
              </div>

              <Textarea className="h-[200px]"
              placeholder="Type your message here."
              />

              <Button size="md" className="max-w-40">Send message</Button>
            </form>
          </div>
          {/* info */}
          <div className="flex flex-1 items-center md:justify md:order-none order-1 mb-8 md:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item,index)=>{
                return<li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] md:w-[72px] md:h-[72px] bg-[#232329] text-[#FF45A4] rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact