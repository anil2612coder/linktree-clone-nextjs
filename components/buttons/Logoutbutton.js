"use client"

import { signOut } from "next-auth/react"



const Logoutbutton = () => {
  return (
    <button className="bg-blue-600 pl-2 pr-2 border text-white pt-1 pb-1 rounded-md font-semibold font-sans overflow-hidden" onClick={()=>signOut("google")}>Sign out</button>
  )
}

export default Logoutbutton