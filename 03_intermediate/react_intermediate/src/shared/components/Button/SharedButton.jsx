import React from 'react'

const SharedButton = ({text = "Next Step"}) => {
  return (
    <button className='bg-blue-900 px-4 py-2 text-white rounded-lg'>
      {text}
    </button>
  )
}

export default SharedButton
