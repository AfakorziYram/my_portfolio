"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name:"home",
        path:"/"
    },
    {
        name:"skills",
        path:"/skills"
    },
    {
        name:"resume",
        path:"/resume"
    },
    {
        name:"projects",
        path:"/projects"
    },
    {
        name:"contact",
        path:"/contact"
    }
]

const DesktopNav = () => {

    const pathname = usePathname();
    console.log(pathname);

  return (
    <nav className="flex gap-8 text-[#00B5EE]">
        {links.map((link, index )=>{
            return <Link className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`} href={link.path} key={index}>{link.name}</Link>
        })}
    </nav>
  )
}

export default DesktopNav