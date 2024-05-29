import React from "react";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import Clock from "./Clock";
const Header = () => {
  return (
    <div className=" flex flex-row justify-between items-center w-[90%] my-10 mx-auto">
      <h1 className="flex flex-row justify-center items-center text-[24px] font-bold ">
      <button className="btn btn-primary rounded-full mr-3">
          <CreditScoreIcon className="mb-1" fontSize="small" />
        </button>
        AceCoinPay
      </h1>
      <div className="flex flex-row justify-around items-center w-[40%] text-lg font-semibold">
        <Clock/>
      </div>
    </div>
  );
};

export default Header;
