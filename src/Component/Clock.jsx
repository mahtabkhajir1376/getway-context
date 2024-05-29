import React from "react";
import { useState, useEffect } from "react";
const Clock = () => {
  const[hour,sethour]=useState()
  const[minute,setminute]=useState()
  const[second,setsecond]=useState()
  useEffect(() => {
    const timer = setInterval(() => {
      const dataObject = new Date();
      const Hour = dataObject.getHours();
      const Minute =dataObject.getMinutes();
      const Second = dataObject.getSeconds();
      sethour(Hour)
      setminute(Minute)
      setsecond(Second)
    }, 1000);
    return ()=>{clearInterval(timer)}
  }, []);
  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className=" font-mono text-5xl">
      <span>{hour}</span>
    </span>
    hours
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="font-mono text-5xl">
      <span>{minute}</span>
    </span>
    min
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="font-mono text-5xl">
      <span >{second}</span>
    </span>
    second
  </div> 
</div>
  );
};
export default Clock;
