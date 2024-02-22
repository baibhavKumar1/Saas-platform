import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter,  CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight } from "lucide-react"

const Services = () => {

  return (
    <div>
    <div className="h-screen flex justify-around items-center ">
        <Card className="w-2/5 bg-black p-2 pt-4 space-y-8">
            <CardTitle className="text-5xl">Profile Optimization</CardTitle>
            <CardDescription className="text-lg">~ Linkedin Profile Optimization</CardDescription>
            <CardContent>Optimize your Linkedin profile to attract attention from potential clients and employers.</CardContent>
            <CardFooter><Button className="rounded justify-between w-full">Get a Quote Now <ChevronRight/></Button></CardFooter>
        </Card>     
      <img className="w-2/5 rounded" src="https://www.growitrapid.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fd1gimo04%2Fproduction%2Fb23e13144d11becd54cb2f55f482db6aedc86fef-4376x2917.png&w=1920&q=75"/>
    </div>
    <div className="flex justify-end p-4">
    <div className="w-2/5 rounded p-4 mr-16 space-y-4 text-left bg-black">
        <p>Get the Quote Now</p>
        <p>Fill the form below to enroll for this service</p>
        <Input placeholder="Name"/>
        <Input placeholder="Email"/>
        <Input placeholder="Phone Number"/>
        <Textarea placeholder="Message"/>
        <Button className="w-full justify-between">Enroll Now <ChevronRight/></Button>
    </div>
    </div>
    </div>
  )
}

export default Services
