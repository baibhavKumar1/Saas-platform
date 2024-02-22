import {
    Card,
    CardContent,

} from "@/components/ui/card"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Link } from "react-router-dom"

export function TabsDemo() {
    return (
        <Tabs defaultValue="linkedin" className="w-max items-start flex h-full">
            <TabsList className="flex flex-col h-full items-start w-max">
                <TabsTrigger value="linkedin">Linkedin Profile Optimization</TabsTrigger>
                <TabsTrigger value="web" className="">Web Development</TabsTrigger>
                <TabsTrigger value="seo">SEO Optimization</TabsTrigger>
                <TabsTrigger value="social">Social Media Management</TabsTrigger>
                <TabsTrigger value="content">Content Creation</TabsTrigger>
                <TabsTrigger value="logo">Logo Designing</TabsTrigger>
                <TabsTrigger value="production">Production Marketing & Brand Promotion</TabsTrigger>
                <TabsTrigger value="influencer">Influencer Marketing</TabsTrigger>
            </TabsList>
            <TabsContent value="linkedin">
                <Card className="h-[200px] border-none w-max">
                    <CardContent className=" grid grid-cols-3 grid-flow-row gap-2">
                        <Link to='/services/linkedin1'><div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div></Link>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>

                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="web">
                <Card className="h-[200px] border-none w-max">
                    <CardContent className=" grid grid-cols-3 grid-flow-row gap-2">
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>

                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="seo">
                <Card className="h-[200px] border-none w-max">
                    <CardContent className=" grid grid-cols-3 grid-flow-row gap-2">
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>

                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="social">
                <Card className="h-[200px] border-none w-max">
                    <CardContent className=" grid grid-cols-3 grid-flow-row gap-2">
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>

                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="content">
                <Card className="h-[200px] border-none w-max">
                    <CardContent className=" grid grid-cols-3 grid-flow-row gap-2">
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>

                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="logo">
                <Card className="h-[200px] border-none w-max">
                    <CardContent className=" grid grid-cols-3 grid-flow-row gap-2">
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>

                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="production">
                <Card className="h-[200px] border-none w-max">
                    <CardContent className=" grid grid-cols-3 grid-flow-row gap-2">
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>

                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="influencer">
                <Card className="h-[200px] border-none w-max">
                    <CardContent className=" grid grid-cols-3 grid-flow-row gap-2">
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>
                        <div className="border w-60 p-2 rounded">
                            <p>Profile Optimization</p>
                            <p className="text-sm">optimize your Linkedin profile to attract attention from potential clients and employers</p>
                        </div>

                    </CardContent>
                </Card>
            </TabsContent>

        </Tabs>
    )
}
