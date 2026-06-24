import React from 'react'
import image from './assets/images/bg-sidebar-desktop.svg'


const App = () => {
  console.log(image)
  return (
    <div className="bg-blue-100 min-h-screen text-black flex">
      <div className="bg-white m-auto">
        <div
          style={{
            width: "300px",
            height: "500px",
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            border: "1px solid red",
          }}
        >
          {/* <img src={image} alt="" /> */}
          <ul>
            <li><span>1</span> <div>STEP 1</div><p>YOUR INFO</p></li>
            <li><span>2</span> <div>STEP 2</div><p>SELECT PLAN</p></li>
            <li><span>3</span> <div>STEP 3</div><p>ADD-ONS</p></li>
            <li><span>4</span> <div>STEP 4</div><p>SUMMARY</p></li>
          </ul>
        </div>
      </div>
    </div >
  )
}

export default App