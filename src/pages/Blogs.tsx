import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

const Blogs = () => {
    return (
        <div>
            <div className="pt-16 h-screen">
                <div className="p-32 w-3/5 space-y-2">
                    <p className="text-6xl">Our Blogs</p>
                    <p className="text-lg">Discover a wealth of knowledge and stay engaged with our blog, where you'll find a treasure trove of insights, expert tips, and thought-provoking articles across diverse subjects</p>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="p-4 border bg-black rounded-lg space-y-4 w-1/3 text-white dark:text-black">
                    <img className="rounded" src="https://www.growitrapid.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fd1gimo04%2Fproduction%2F94369578ddb53f258a86c6dd268bc24137b0632d-1280x720.jpg&w=1080&q=75"/>
                    <p>Stunning Splash Screen in React Native, stunning-splash-screen-in-react-native</p>
                    <p className="text-sm line-clamp-4">Are you tired of staring at a boring white screen while your React Native app loads? Well, fear not! In this article, we'll be diving into how to create a splashAre you tired of staring at a boring white screen while your React Native app loads? Well, fear not! In this article, we'll be diving into how to create a splash</p>
                    <div className="space-x-2">
                        <Badge>react-native</Badge>
                        <Badge>app-development</Badge>
                        <Badge>react</Badge>
                    </div>
                    <Button className="w-full flex justify-between">Read Now <ChevronRight/></Button>
                </div>
                <div className="p-4 border bg-black rounded-lg space-y-4 w-1/3 text-white dark:text-black">
                    <img className="rounded" src="https://www.growitrapid.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fd1gimo04%2Fproduction%2F7f7b38450ea0780688b78d0549cb31c39d65a98d-1280x720.png&w=1080&q=75"/>
                    <p>LinkedIn Profile Optimization for Professional Success, linkedin-profile-optimization-for-professional-success</p>
                    <p className="text-sm line-clamp-4">Start on a transformative journey with growitrapid as we breathe life into your LinkedIn presence through our exquisite LinkedIn Profile Optimization services. In Start on a transformative journey with growitrapid as we breathe life into your LinkedIn presence through our exquisite LinkedIn Profile Optimization services. In</p>
                    <div className="space-x-2">
                        <Badge>linkedin</Badge>
                        <Badge>profile-optimization</Badge>
                        <Badge>career</Badge>
                        <Badge>growth</Badge>
                    </div>
                    <Button className="w-full flex justify-between">Read Now <ChevronRight/></Button>
                </div>
                <div className="p-4 border bg-black rounded-lg space-y-4 w-1/3 text-white dark:text-black">
                    <img className="rounded" src="https://www.growitrapid.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fd1gimo04%2Fproduction%2F57b50b249193a3c7b77fe5f6a75c24a1ce81a2f6-1280x720.png&w=1080&q=75"/>
                    <p>LinkedIn Profile vs. Resume: What's the Difference?, linkedin-profile-vs-resume-what-s-the-difference</p>
                    <p className=" line-clamp-4 text-sm">New Blog DescriptionIn today's dynamic job market, where first impressions matter more than ever, your professional online presence can be just as vital as you New Blog DescriptionIn today's dynamic job market, where first impressions matter more than ever, your professional online presence can be just as vital as you</p>
                    <div className="space-x-2">
                        <Badge>resume</Badge>
                        <Badge>best practice</Badge>
                        <Badge>tips and tricks</Badge>
                        <Badge>difference</Badge>
                    </div>
                    <Button className="w-full flex justify-between">Read Now <ChevronRight/></Button>
                </div>
                
            </div>
            <div><Button className="w-full my-4">Load More Blogs !!</Button></div>
        </div>
    )
}

export default Blogs
