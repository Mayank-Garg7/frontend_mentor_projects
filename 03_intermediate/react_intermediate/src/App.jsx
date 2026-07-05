import React from "react";
import LeftNavigation from "./features/multi_step_form/components/LeftNavigation";
import RightSideRendering from "./features/multi_step_form/components/RightSideRendering";
import Footer from "./shared/Footer/Footer";

const App = () => {
  return (
    <>
      <div className="bg-blue-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-4 flex rounded-xl shadow-lg gap-15">

          {/*Left side content*/}
          <LeftNavigation />
          {/* Right side content */}
          <RightSideRendering />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;