import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
  return (
    <header className="bg-white py-4 border-b ">
      <div className="max-w-4xl mx-auto flex justify-between ">
      <div className="flex  sm:gap-6 gap-2 sm:px-7 px-3 ">
      <Link className=" text-center   sm:h-7 sm:w-32 h-5 w-24 relative sm:top-0 top-1 " href={"/"}><Image src={"/images/logo-2.png"} alt="logo" fill={true}/></Link>
       <nav className="flex gap-2 sm:gap-5 font-semibold items-center font-sans text-gray-500">
        <Link href={"/about"}>About</Link>
        <Link href={"/price"}>Price</Link>
        <Link href={"/contact"}>Contact</Link>
       </nav>
      </div>
       <nav className="flex md:gap-3 gap-1 text-base text-center">
        <Link href={"/login"} className="bg-blue-600 pl-2 pr-2 border text-white pt-1 pb-1 rounded-md font-semibold font-sans overflow-hidden">Sign In</Link>
        <Link href={"/login"} className="bg-blue-600 pl-3 pr-3 border text-white pt-1 pb-1 rounded-md font-semibold font-sans overflow-hidden" >New Account</Link>
       </nav>
      </div>
     
    </header>
  )
}

export default Navbar