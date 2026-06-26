// import React from 'react'
import QRCode from "react-qr-code";

const App = () => {
  return (
    <div className="min-h-screen bg-[hsl(212,45%,89%)] flex justify-center items-center">
      <div className="bg-white w-72 p-4 rounded-2xl flex gap-5 flex-col justify-center-safe">
        <div className="w-full rounded-xl flex justify-center items-center p-13 bg-blue-500">
          <QRCode
            value={import.meta.env.VITE_PROFILE_URL}
            size={156}
            bgColor="#3B82F6"
            fgColor="#FFFFFF"
          />
        </div>

        <h1 className="text-center font-bold text-xl">
          Improve your front-end skills by building projects
        </h1>

        <p className="text-center text-gray-600 text-md">
          Scan the QR code to visit Mayank's profile and take your coding skills to the next level
        </p>
      </div>
    </div>
  )
}

export default App
