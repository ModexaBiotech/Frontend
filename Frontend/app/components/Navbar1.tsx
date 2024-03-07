import Image from "next/image"
import logo from "../assets/logo.jpg"
import Link from "next/link"

const Navbar1 = () => {
    return (
        <nav className="m-[20px] lg:h-[70px] lg:w-full lg:shadow-sm fixed  top-0 left-0 right-0 lg:px-[50px] flex justify-between items-center">
            <div className="flex items-center gap-3">
                < Link href={"/"}>
                    <Image src={logo} className="w-[20px] h-[20px] md:h-[30px] md:w-[30px] lg:w-[40px] lg:h-[40px]" alt="logo" />
                </Link>
                <h1 className="font-semibold">Care Link</h1>
            </div>
            <div className="flex gap-5">
                <Link href={"/signUp"}><button className="bg-blue-black w-[150px] hidden lg:block  rounded-md  font-medium tracking-wider h-[55px] text-white text-[12px]">Get Started</button></Link>
            </div>
            <div className="lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>

            </div>
        </nav>
    )
}


export default Navbar1