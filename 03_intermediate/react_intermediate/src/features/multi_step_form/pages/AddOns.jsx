import React from 'react'
import Input from '../../../shared/components/Input/Input'
import data from '../../../mock/formData.json'


const AddOns = () => {
  return (
    <form className='p-10 '>
      <div className="mb-10">
        <h1 className='text-black font-bold text-3xl'>Personal Info</h1>
        <p className='text-gray-400 text-lg'>Please provide you name, email address, and phone number.</p>
      </div>
      {data.map(item => (
        <Input key={item.id} name={item.name} type={item.type} placeholder={item.placeholder} isNeeded={item.isNeeded} />
      ))}

    </form>
  )
}

export default AddOns
