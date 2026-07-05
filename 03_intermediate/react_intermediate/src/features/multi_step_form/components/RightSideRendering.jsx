import React from 'react'
import Input from '../../../shared/components/Input/Input'

const RightSideRendering = () => {
  return (
    <div className='text-black'>
      <form className='p-10 '>
        <div className="mb-10">
          <h1 className='text-black font-bold text-3xl'>Personal Info</h1>
          <p className='text-gray-400 text-lg'>Please provide you name, email address, and phone number.</p>
        </div>
        <Input />
        <Input name="Email Address"  />
      </form>
    </div>
  )
}

export default RightSideRendering
