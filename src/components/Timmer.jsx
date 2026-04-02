import React, { useEffect, useState } from "react";

const Timer = ({sec=3600*24*3}) => {
  const [time, setTime] = useState(sec); // 1 hour (seconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // convert seconds → hh:mm:ss
  // const formatTime = (sec) => {
    const day = Math.floor(time / (3600 * 24));
    const hours = String(Math.floor((time % (3600 * 24)) / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");

  //   return `${day}d ${hours}:${minutes}:${seconds}`;
  // };

  return (
    <div>
      {/* <h1 className="text-black">Flash Sale Ends In</h1> */}
      {/* <span className="text-black">{day}d {hours}:{minutes}:{seconds}</span> */}
      <div className="flex  gap-2 text-black items-center mt-2  ">

        <div className="flex flex-col items-center gap-1 ">
          <span className="font-medium text-[12px] leading-[1.5]">Days</span>
          <span className="text-[32px] font-bold text-[#000000]" >{day}</span>
        </div>
  <span className="text-2xl font-bold text-[#E07575]">:</span>

        <div className="flex flex-col items-center gap-1 ">
          <span className="font-medium text-[12px] leading-[1.5]">Hours</span>
          <span className="text-[32px] font-bold text-[#000000]" >{hours}</span>
        </div>
          <span className="text-2xl font-bold text-[#E07575]">:</span>

        <div className="flex flex-col items-center gap-1 ">
          <span className="font-medium text-[12px] leading-[1.5]">Minutes</span>
          <span className="text-[32px] font-bold text-[#000000]" >{minutes}</span>
        </div>
          <span className="text-2xl font-bold text-[#E07575]">:</span>

        <div className="flex flex-col items-center gap-1 ">
           <span className="font-medium text-[12px] leading-[1.5]">Seconds</span>
          <span  className="text-[32px] font-bold text-[#000000]]">{seconds}</span>
        </div>

      </div>
    </div>
  );
};

export default Timer;