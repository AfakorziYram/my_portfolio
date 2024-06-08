import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {CiMenuFries} from "react-icons/ci";
import Link from "next/link";

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

const MobileNav = () => {

    const pathname = usePathname();

  return (
    <Sheet>
        <SheetTrigger>
            <CiMenuFries className="text-[32px] text-[#FF45A4]"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            {/* logo */}
            <div className="mt-32 mb-40 text-center text-2xl">
                <Link href="/">
                    <h1 className="text-4xl font-semibold text-[#FF45A4]">YA</h1>
                </Link>
            </div>
            {/* mobilenav */}
            <nav className="flex flex-col justify-center items-center gap-8 text-[#00B5EE]">
                {links.map((link, index )=>{
                return <Link className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`} href={link.path} key={index}>{link.name}</Link>
                 })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav