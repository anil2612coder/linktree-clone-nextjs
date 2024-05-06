"use client"
import {FcGoogle} from "react-icons/fc"
import { signIn, useSession} from "next-auth/react"

const LoginWithGoogle = ({page}) => {

  
  return (
    <button onClick={() => signIn("google",{ callbackUrl:  "/"})} className=' rounded-full shadow font-semibold flex gap-2 items-center justify-center flex-row border border-black text-center w-full py-2'> 
    <FcGoogle className='text-2xl'/><span>
     Sign In with Google
    </span>
     </button>
  )
}

export default LoginWithGoogle