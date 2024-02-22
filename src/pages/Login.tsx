import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"
const Login = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <Tabs defaultValue="account" className=" w-[700px] h-[300px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="mt-2">
          <Card className="text-xl">
            <CardHeader>
              <CardTitle>Log In To Grow It Rapid</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 ">
              <div className="space-y-1 ">
                <Input id="name" placeholder="Email Address" />
              </div>
              <Button className="w-full text-lg gap-4">Continue With Email <ArrowRight /></Button>
              <div className="flex justify-center items-center gap-4 w-[92%] m-auto">
                <Separator orientation="horizontal" className="w-1/2" />
                <p>Or</p>
                <Separator className="w-1/2" />
              </div>
              <Button className="gap-4 text-lg w-full"><FcGoogle size="1.5em"/> Continue with Google</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="password" className="mt-2">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

    </div>
  )
}

export default Login
