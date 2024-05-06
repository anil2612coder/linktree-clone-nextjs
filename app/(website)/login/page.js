


import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import LoginWithGoogle from '@/components/buttons/LoginWithGoogle'
import { Page } from '@/models/Page';
import mongoose from 'mongoose';
import { getServerSession } from 'next-auth';
  
import React from 'react'





const page = async () => {
  const session = await getServerSession(authOptions);
  mongoose.connect(process.env.MONGO_URI);
  const page = await Page.findOne({owner: session?.user?.email});
 
 
 
  return (
  <div className='bg-white rounded-lg border mt-16 px-5  pt-4 pb-8 max-w-xs mx-auto'>

    <h1 className='text-3xl text-blue-700 font-bold text-center mb-2'> Sign In</h1>
    <p className='text-center mb-6'>Sign in to your account using one of the methods below</p>
    <LoginWithGoogle page={page}/>
   
  </div>
  )
}

export default page