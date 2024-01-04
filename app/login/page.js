


import LoginWithGoogle from '@/components/buttons/LoginWithGoogle'
import React from 'react'



const page = () => {
 
  return (
  <div className='bg-white rounded-lg border mt-16 px-5  pt-4 pb-8 max-w-xs mx-auto'>

    <h1 className='text-3xl text-blue-700 font-bold text-center mb-2'> Sign In</h1>
    <p className='text-center mb-6'>Sign in to your account using one of the methods below</p>
    <LoginWithGoogle/>
   
  </div>
  )
}

export default page