"use client"

import { Page } from '@/models/Page'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
// import { redirect } from 'next/navigation'

import React, { useState } from 'react'
import toast from 'react-hot-toast'


const HeroForm =  ({session, page}) => {
    const [text,setText] = useState("")
    const router = useRouter()
    
    

    async function handleSubmit (e){
       e.preventDefault()
      //  console.log(text)
   
       if(page){
        return router.push(`/account?desiredUsername=${page.uri}`)
      }
  
       if(text.length >0)
     {
      if(session){
        router.push(`/account?desiredUsername=${text}`)
      }else
       await  signIn("google",{ callbackUrl: `/account?desiredUsername=${text}` })
      }

    }
  return (
    <form onSubmit={handleSubmit} className="inline-flex items-center shadow-lg bg-white shadow-gray-500/20">
    <span className="bg-white py-4 pl-4">linktree.to/</span>
    <input  type="text"
  className="outline-none"
  style={{backgroundColor:'white',marginBottom:0,paddingLeft:0}} value={text} onChange={(e)=>setText(e.target.value)}  placeholder="username"/>
    <button type="submit" className="bg-blue-500 text-white py-4 px-6 whitespace-nowrap">Join For Free</button>
  </form>
  )
}

export default HeroForm
