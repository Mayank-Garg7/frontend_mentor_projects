import React from 'react'
import AddOns from '../pages/AddOns'
import SharedButton from '../../../shared/components/Button/SharedButton'

const RightSideRendering = () => {
  return (
    <div className='text-black flex flex-col px-15'>
      <AddOns />
      <div className='flex justify-end mt-4 px-10'>
        <SharedButton />
      </div>
    </div>
  )
}

export default RightSideRendering
