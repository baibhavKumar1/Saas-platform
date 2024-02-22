import { Separator } from './ui/separator'
import { Twitter, Instagram, Mail, Linkedin, Facebook, Copyright } from 'lucide-react'
const Footer = () => {
    return (
        <div className="bg-black/90 text-white space-y-8 p-8">
            <div className="flex  justify-around">
                <div>
                    <ul>
                        <p className="text-xl font-semibold mb-4">Discover</p>
                        <li>Products</li>
                        <li>Trials</li>
                        <li>Services</li>
                        <li>Industries</li>
                        <li>Case Studies</li>
                        <li>Financing</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <p className="text-xl font-semibold mb-4">Connect with us</p>
                        <li>Support</li>
                        <li>Find a Business Partner</li>
                        <li>Developers</li>
                        <li>Business Partners</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <p className="text-xl font-semibold mb-4">About Grow It Rapid</p>
                        <li>Careers</li>
                        <li>Latest news</li>
                        <li>Investor relations</li>
                        <li>Corporate responsibility</li>
                        <li>About Us</li>
                    </ul>
                </div>
            </div>
            <div className=" flex flex-col items-center gap-4">
                <div className="flex justify-center items-center gap-4 mb-14">
                    <Separator orientation="horizontal" className="w-96" />
                    <Facebook className="fill-black" size="2em" />
                    <Linkedin size="2em" />
                    <Instagram size="2em" />
                    <Twitter size="2em" />
                    <Mail size="2em" />
                    <Separator orientation="horizontal" className="w-96" />
                </div>
                <img src="https://www.growitrapid.com/_next/static/media/logo_dark.160d8e6c.svg" className="h-7 m-auto" />
                <p className="flex gap-2">Copyright <Copyright /> 2024 Grow It Rapid, LTD.</p>
                <span className="flex gap-4"><p>About Us</p><p>Terms & Conditions</p><p>Privacy Policies</p><p>legal Stuffs</p><p>Partners</p></span>
            </div>
        </div>
    )
}

export default Footer

