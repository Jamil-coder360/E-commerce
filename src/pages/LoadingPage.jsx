import React from "react";

const LoadingPage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#FF3D00]/10">
      <div
        role="status"
        className="relative w-12 h-12 bg-slate-900 rounded-full animate-spin text-[#FF3D00]"
      >
        <div className="absolute w-3 h-3 bg-current rounded-full top-2.5 left-1.5 shadow-[25px_2px_0_0_currentColor,10px_22px_0_0_currentColor]"></div>
        <span className="sr-only">Loading…</span>
      </div>
    </div>
  );
};

export default LoadingPage;
