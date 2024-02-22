import { Avatar, AvatarImage } from "@/components/ui/avatar"
const About = () => {
    return (
        <div>
            <div className='h-screen w-[700px] pt-16'>
                <p className="text-6xl p-28">Helping Millions grow better</p>
            </div>
            <div>
                <div className="w-[80%] m-auto flex flex-col gap-14 p-10">
                    <div className="flex gap-2">
                        <div className="dark:bg-black bg-white border-2 m-auto p-10 rounded-xl text-center space-y-4">
                            <p className="text-4xl">It's Our Story</p>
                            <p className="text-lg text-left">Welcome to Grow It Rapid.com, the ultimate destination for cutting-edge 360-degree marketing solutions. Our innovative approach combines technology-driven strategies with unparalleled experties to help businesses thrive in the ever-changing digital landscape. Whether you're a startup or an established enterprise, our personalized solutions drive unparalleled growth and success, transforming your brand's digital presence</p>
                        </div>
                        <img className="w-1/2 rounded-xl" src="https://www.growitrapid.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrow_plants.091a606b.jpg&w=640&q=1" />
                    </div>
                    <div className="flex gap-2">
                        <img className="w-1/2 rounded-xl" src="https://www.growitrapid.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbeatle.275e89b7.jpg&w=640&q=75" />
                        <div className="dark:bg-black bg-white border-2 m-auto p-10 rounded-xl text-center space-y-4">
                            <p className="text-4xl">Our Visions</p>
                            <p className="text-lg text-left">At Grow It Rapid, our vision is to revolutionize the way brands connect with their target audience. We strive to be the catalyst that propels businesses towards unparalleled growth and success in the digital realm. Through our forward-thinking mindset and commitment to innovation, we aim to reshape the future of marketing.</p>
                        </div>
                    </div>
                </div>
                <div className="flex w-[90%] pb-10 m-auto gap-2">
                    <div className="dark:bg-black bg-white border-2 m-auto p-10 rounded-xl text-center space-y-4">
                        <p className="text-4xl">Our Missions</p>
                        <p className="text-lg text-left">Our mission is to empower businesses by delivering comprehensive and tailored marketing solutions that drive results. We are dedicated to leveraging the latest advancements in technology, data analytics, and automation to create personalized strategies that maximize brand visibility, engagement, and revenue generation. We work tirelessly to ensure that our clients stay ahead of the competition and achieve their marketing goals.</p>
                    </div>
                    <div className="dark:bg-black bg-white border-2 m-auto p-10 rounded-xl text-center space-y-4">
                        <p className="text-4xl">Our Values</p>
                        <p className="text-lg text-left">Integrity, collaboration, and excellence form the foundation of our values at Grow It Rapid. We believe in conducting our business with utmost integrity, maintaining transparency, and building strong partnerships with our clients. Our team fosters a collaborative environment, encouraging open communication and teamwork to deliver the best possible outcomes. We are relentless in our pursuit of excellence, consistently pushing the boundaries of creativity and innovation.</p>
                    </div>
                </div>
                <div className="flex gap-2 p-24">
                    <div className="dark:bg-black bg-white border-2 m-auto p-10 rounded-xl text-center space-y-4">
                        <p className="text-4xl">Our Team</p>
                        <p className="text-lg text-left">Behind Grow It Rapid's success is a team of experienced professionals who are passionate about delivering exceptional results. Our team members possess a diverse range of skills and expertise, spanning areas such as marketing strategy, data analytics, content creation, LinkedIn profile optimization and management, web design, and more. With their extensive knowledge and unwavering dedication, they ensure that every client receives the highest level of service and achieves their marketing objectives.</p>
                    </div>
                    <img className="w-1/2 rounded-xl" src="https://www.growitrapid.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteamwork.e97ce358.jpg&w=640&q=75" />
                </div>
                <div className="w-[90%] mb-10 m-auto border rounded-xl p-6 bg-black space-y-4">
                    <p className="text-3xl">Our Members</p>
                    <p className="text-xl w-2/5">Our Valued Members: A community of success-driven partners, benefiting from personalized attention and exclusive resources.</p>
                    <div className="flex gap-2">
                        <Avatar>
                            <AvatarImage src="https://cdn.sanity.io/images/d1gimo04/production/5f52648aeb57fed31662289be6c397e213c72cda-200x200.jpg" />
                        </Avatar>
                        <Avatar>
                            <AvatarImage src="https://cdn.sanity.io/images/d1gimo04/production/590ce5843ec277f4906afc9c6f00dd4094f64236-640x640.jpg" />
                        </Avatar>
                    </div>
                </div>
                <div className="flex w-[90%] pb-10 m-auto gap-2">
                    <div className="dark:bg-black bg-white border-2 m-auto p-10 rounded-xl text-center space-y-4">
                        <p className="text-4xl">Get Involved</p>
                        <p className="text-lg text-left">We invite you to join us on this transformative journey towards digital marketing excellence. Whether you are a small startup or an established enterprise, we have the expertise and solutions to elevate your brand to new heights. Get involved with Grow It Rapid today and experience the power of our technology-driven marketing strategies firsthand.</p>
                    </div>
                    <div className="dark:bg-black bg-white border-2 m-auto p-10 rounded-xl text-center space-y-4">
                        <p className="text-4xl">Conclusion</p>
                        <p className="text-lg text-left">In a fast-paced and digitally driven world, Grow It Rapid stands as your trusted partner in achieving marketing success. With our visionary approach, dedicated team, and unwavering commitment to excellence, we are ready to empower your brand's growth. Contact us today and embark on a rewarding partnership that will transform your business and propel you towards unparalleled success in the digital realm.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
