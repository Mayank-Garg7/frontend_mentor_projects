import React from "react";
// import background from "./assets/images/";

const App = () => {
  // console.log(background)
  return (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-4 flex rounded-xl shadow-lg">
        <div
          className="w-72 h-137.5 p-8 text-white"
          style={{
            backgroundImage: "url('/bg-sidebar-desktop.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <ul className="space-y-8">
            <li><span>1</span> STEP 1 - YOUR INFO</li>
            <li><span>2</span> STEP 2 - SELECT PLAN</li>
            <li><span>3</span> STEP 3 - ADD-ONS</li>
            <li><span>4</span> STEP 4 - SUMMARY</li>
          </ul>
        </div>

        <div className="p-10">
          {/* Right side content */}
        </div>
      </div>
    </div>
  );
};

export default App;