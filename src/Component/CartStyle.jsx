import React from "react";
const CartStyle = ({Name,Number,Cvv2,Cash,year,month,ClickHandler}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full" >
    <figure> </figure>
    <div className="card-body">
      <h2 className="card-title">{Number}</h2>
      <div className="flex flex-row justify-between items-center w-full mt-2">
            <h2 className="text-sm">{`cvv2 ${Cvv2}`}</h2>
            <h2 className="text-sm">{`cash ${Cash}`}</h2>
          </div>
          <div className="flex flex-row justify-between items-center w-full mt-2">
            <h2 className="text-sm">{`${year} / ${month}`}</h2>
            <h2 className="font-semibold text-lg">{Name}</h2>
          </div>
      <div className="card-actions justify-end">
        <button className="btn btn-primary mt-3" onClick={ClickHandler}>select cart</button>
      </div>
    </div>
  </div>
    
  );
};
export default CartStyle;


