import React from 'react';

const loading = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black gap-3">
      <div
        className="w-32 aspect-square rounded-full relative flex justify-center items-center animate-[spin_3s_linear_infinite] z-40 
        bg-[conic-gradient(#1e40af_0deg,#1e40af_300deg,transparent_270deg,transparent_360deg)]
        before:animate-[spin_2s_linear_infinite]
        before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80]
        before:bg-[conic-gradient(#dc2626_0deg,#dc2626_270deg,transparent_180deg,transparent_360deg)]
        after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60]
        after:animate-[spin_3s_linear_infinite]
        after:bg-[conic-gradient(#0f172a_0deg,#0f172a_180deg,transparent_180deg,transparent_360deg)]"
      >
        <span
          className="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite]
          bg-[conic-gradient(#ef4444_0deg,#ef4444_180deg,transparent_180deg,transparent_360deg)]"
        ></span>
      </div>

      <p className="text-white font-semibold text-4xl tracking-wide animate-pulse">
        Loading Quartus
      </p>
    </div>
  );
};

export default loading;
