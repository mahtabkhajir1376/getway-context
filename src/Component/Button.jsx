import React from "react";
const ButtonSimple =({textBtn,onClick})=>{
    return(
        <div className="w-[90%]  mx-auto flex flex-row items-center justify-center text-lg rounded-md hover:opacity-90 cursor-pointer  py-3 mt-10   font-semibold">
            <button className="btn btn-primary  w-full "  onClick={onClick}>{textBtn}</button>
        </div>
    )
}

export default ButtonSimple;
