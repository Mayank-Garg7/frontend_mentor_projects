// import React from 'react'
import image from './assets/image-qr-code.png'
import QRCode from "react-qr-code";

const App = () => {
  return (
    <div className="min-h-screen bg-blue-200 flex justify-center items-center">
      <div className="bg-white w-76 p-4 rounded-2xl flex gap-5 flex-col justify-center-safe">
        <img
          src={image}
          alt="QR Code"
          className="w-full rounded-xl"
        />
        <div className="w-full rounded-xl flex justify-center items-center p-14.5 bg-blue-500">
          <QRCode
            value={import.meta.env.VITE_PROFILE_URL}
            size={156}
            bgColor="#3B82F6"
            fgColor="#FFFFFF"
          />
        </div>

        <h1 className='font-bold text-xl m-auto place-self-center-safe'>Improve your front-end skills by building projects</h1>
        <p className='text-gray-600 justify-self-center'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  )
}

export default App
