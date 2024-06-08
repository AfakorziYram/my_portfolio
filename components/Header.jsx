import Link from "next/link";
import { Button } from "./ui/button";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";


const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">

            {/* logo */}
            <Link href="/">
                <h1 className="text-4xl font-medium text-[#FF45A4]">
                    YA
                </h1>
            </Link>

            {/* Desktop Navbar */}
            <div className="hidden md:flex items-center gap-8">
                <DesktopNav/>
                <Link href="/contact">
                    <Button className=" bg-[#FF45A4]">Hire me</Button>
                </Link>
            </div>
            
            {/* mobile nav */}
            <div className="md:hidden">
                <MobileNav/>
            </div>



        </div>
    </header>
  )
}

export default Header