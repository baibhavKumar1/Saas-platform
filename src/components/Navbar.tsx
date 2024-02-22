import { ModeToggle } from "./mode-toggle"
import { Link } from "react-router-dom"
import { LogIn } from "lucide-react"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { TabsDemo } from "@/pages/TabsDemo"
const Navbar = () => {
  return (
    <div className="absolute top-2 w-full z-20 h-14 p-2 px-6 dark:bg-white/40 bg-black/40 rounded-full border border-black dark:border-white flex justify-between m-auto">
        <img src="https://www.growitrapid.com/_next/static/media/logo_dark.160d8e6c.svg" className="p-2" alt="logo" />
        <div>
            <Menubar>
                <MenubarMenu>
                    <Link to='/'><MenubarTrigger>Home</MenubarTrigger></Link>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Discover</MenubarTrigger>
                    <MenubarContent>
                        <Link to='/about'><MenubarItem>About Us</MenubarItem></Link>
                        <Link to='/blogs'><MenubarItem>Blogs</MenubarItem></Link>
                        <MenubarItem>Courses</MenubarItem>
                        <MenubarItem>Services</MenubarItem>
                        <MenubarItem>Terms & Policy</MenubarItem>
                        <MenubarItem>Contact Us</MenubarItem>
                        <MenubarItem>FAQs</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Blogs</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>Coming Soon...</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Courses</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>Coming Soon...</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Services</MenubarTrigger>
                    <MenubarContent>
                        <TabsDemo/>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Terms & Policy</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>New Window</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Share</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Print</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </div>
        <div className="flex gap-2 items-center">
          <ModeToggle />
          <Link to='/login'><span className="flex gap-2 border border-black dark:border-white rounded p-1.5 px-4 dark:bg-black bg-white text-black dark:text-white"><LogIn /> Sign In</span></Link>
        </div>
      </div>
  )
}

export default Navbar
