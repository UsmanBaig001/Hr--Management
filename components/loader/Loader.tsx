import React from "react";

const Loader = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-customOrange rounded-full animate-spin">
            <div className="w-6 h-6 border-2 border-customOrange rounded-full animate-spin">
              <div className="w-4 h-4  border-2 border-customOrange rounded-full animate-spin">
                <div className="w-2 h-2 border-2 border-customOrange rounded-full animate-spin"></div>
              </div>
            </div>
          </div>
          <div className=" ms-3">Loading</div>
          <div className="flex ms-2">
            <div className="animate-bounce h-1 w-1 rounded-full mx-1 mt-1 bg-white bounce-delay-1"></div>
            <div className="animate-bounce h-1 w-1 rounded-full mx-1 mt-1 bg-white bounce-delay-2"></div>
            <div className="animate-bounce h-1 w-1 rounded-full mx-1 mt-1 bg-white bounce-delay-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
