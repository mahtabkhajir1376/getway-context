import React from "react";

const HistoryCard = ({Number,Name,Cash,price}) => {
  return (
    <div tabIndex={0} className="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content">
    <div className="collapse-title flex flex-row justify-around items-center">
    <h1 className="text-lg font-bold">{Number}</h1>
    <h2 className="text-xl font-semibold">{Name}</h2>
    </div>
    <div className="collapse-content flex flex-row justify-around items-center mt-3"> 
    <h2>{`price  ${price}`}</h2>
    <h2>{`cash ${Cash}`}</h2>
    </div>
  </div>
  );
};
export default HistoryCard;
