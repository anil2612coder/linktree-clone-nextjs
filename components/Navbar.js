import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
  return (
    <header className="bg-white p-3 border-b flex justify-between">
      <div className="flex sm:gap-6 gap-2 ">
      <Link className="font-bold text-xl text-center relative top-1 font-serif" href={"/"}><Image src={"/images/linktree-logo.png"} alt="logo" width={100} height={18}/></Link>
       <nav className="flex gap-2 items-center text-slate-600">
        <Link href={"/about"}>About</Link>
        <Link href={"/price"}>Price</Link>
        <Link href={"/contact"}>Contact</Link>
       </nav>
      </div>
       <nav className="flex md:gap-3 gap-1 text-base text-center">
        <Link href={"/login"} className="bg-blue-600 pl-2 pr-2 border text-white pt-1 pb-1 rounded-md font-semibold font-sans overflow-hidden">Sign In</Link>
        <Link href={"/register"} className="bg-blue-600 pl-3 pr-3 border text-white pt-1 pb-1 rounded-md font-semibold font-sans overflow-hidden" >New Account</Link>
       </nav>
    </header>
  )
}

export default Navbar