import React from 'react'

const index = ({ name = "Name", type = "text", placeholder = "Mayank Garg", isNeeded = true }) => {
  return (
    <div className='flex flex-col gap-2 my-7'>
      <label htmlFor={name}>Name</label>
      <input
        type={type}
        placeholder={placeholder}
        required
        id={name}
        className='border border-gray-400 px-5 py-2 rounded-lg'
      />
    </div>
  )
}

export default index
