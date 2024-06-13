import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import Link from "next/link";



const Home = () => {
  return (
    <section className="h-full ">
      <div className="container mx-auto h-full">
        <div className="flex flex-col md:flex-row items-center justify-between md:pt-8 md:pb-24">
          {/* text div */}
          <div className="text-center md:text-left order-2 md:order-none">
            <h1 className="text-6xl mb-6" >
              Yram {""}
              <span
                className=" sm:relative sm:text-primary sm:font-semibold z-20 sm:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1] text-5xl "
              >
                Afakorzi
              </span>
            </h1>

            <p className=" max-w-[500px] mb-9 text-white/60 h3">
            Software engineer who is a conscientious and diligent individual with team working and 
            problem-solving skills. I am ready to apply my knowledge to actual practice as well as 
            ready for high exposure to multinational and diversified environments.
            </p>

            {/* button & Social media icons */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <Link href="/resume">Download CV</Link>
                <FiDownload className="text-xl "/>
              </Button>
              {/* social icons */}
              <div className="mb-8 md:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center 
                text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>

          </div>

          {/* photo */}
          <div className="sm:mt-8 order-1 md:order-nonemb-8 md:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
