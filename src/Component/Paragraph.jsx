import React from "react";
const Paragraph = ({ header, text, flex, icon,flexAll }) => {
  return (
    <div className={`${flexAll}`}  >
        <div className={`${flex}`} >
      <h2 className="text-base font-bold">{header}</h2>
      <p className="text-gray-500 text-sm mt-1 ">{text}</p>
      </div>

      {icon}
    </div>
  );
};
export default Paragraph;
