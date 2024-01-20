"use client"
// import { getServerSession } from 'next-auth'
import { signIn } from 'next-auth/react'
import React, { useState } from 'react'

const HeroForm =  () => {
    const [text,setText] = useState("")
    // const session = await getServerSession(authOptions);

    async function handleSubmit (e){
       e.preventDefault()
       console.log(text)
       if(text.length >0)
     { await  signIn("google",{ callbackUrl: `/account?username=${text}` })}

    }
  return (
    <form onSubmit={handleSubmit} className=" items-center shadow-lg shadow-gray-400 inline-flex">
    <span className="bg-white py-4 pl-4">linktree.to/</span>
    <input className="py-4  outline-none " value={text} onChange={(e)=>setText(e.target.value)} type="text" placeholder="username"/>
    <button type="submit" className="bg-blue-500 text-white py-4 px-6">Join For Free</button>
  </form>
  )
}

export default HeroForm