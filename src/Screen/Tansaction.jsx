import React, { useContext } from "react";
import { Context } from "../Contexts/Contexts";
import Input from "../Component/Input";
import Header from "../Component/Header";
import ButtonSimple from "../Component/Button";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import Paragraph from "../Component/Paragraph";

const Transaction = () => {
  const {
    cartName,
    cartNumber,
    cartCvv2,
    cartPass,
    yearexpire,
    monthexpire,
    price,
    setprice,
    mines,
    cartid,
  } = useContext(Context);
  return (
    <div>
      <div className="w-[70%] mx-auto my-5 py-1 pb-14 px-5 rounded-lg shadow-2xl">
        <Header />
        <Input
          disabled={true}
          value={cartNumber}
          width={"w-[90%]"}
          margin={"my-0 mx-auto"}
        />
        <div className="flex flex-row justify-between items-center w-[90%] mx-auto my-4">
          <Paragraph
            header={"Name"}
            text={"Enter your first name and last name"}
            flex={"flex flex-col justify-center items-start"}
          />
          <Input
            width={"w-[60%]"}
            type={"text"}
            disabled={true}
            value={cartName}
            haveText={true}
            icon={
              <PermIdentityOutlinedIcon
                fontSize="medium"
                className="text-gray-400"
              />
            }
          />
        </div>
        <div className="flex flex-row justify-between items-center w-[90%] mx-auto my-4">
          <Paragraph
            flex={"flex flex-col justify-center items-start"}
            text={"Enter the 3 or 4 digit number on the card"}
            header={"Cvv2 Number"}
          />
          <Input
            width={"w-[60%]"}
            type={"number"}
            disabled={true}
            value={cartCvv2}
            icon={<AppsIcon fontSize="medium" className="text-gray-400" />}
          />
        </div>
        <div className="flex flex-row justify-between items-center w-[90%] mx-auto my-4">
          <Paragraph
            text={"Enter your Dynamic password"}
            header={"Password"}
            flex={"flex flex-col justify-center items-start"}
          />
          <Input
            type={"number"}
            value={cartPass}
            disabled={true}
            width={"w-[60%]"}
            icon={
              <VpnKeyOutlinedIcon fontSize="medium" className="text-gray-400" />
            }
          />
        </div>
        <div className="flex flex-row justify-between items-center w-[90%] my-4 mx-auto">
          <Paragraph
            flex={"flex flex-col justify-center items-start"}
            header={"Expire Date"}
            text={"Enter Date of Expire Cart"}
          />
          <div className="flex flex-row justify-between items-center w-[20%]">
            <Input
              maxLength={"2"}
              value={yearexpire}
              width={"w-[45%]"}
              disabled={true}
              type={"text"}
              className="outline-none text-center font-bold w-full bg-white"
            />
            /
            <Input
              value={monthexpire}
              disabled={true}
              maxLength={"2"}
              type={"text"}
              width={"w-[45%]"}
              className="outline-none text-center font-bold w-full bg-white"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-[90%] my-4 mx-auto">
          <Paragraph
            header={"Transaction amount"}
            text={"Enter the transaction amount"}
            flex={"flex flex-col justify-center items-start"}
          />
          <Input
            value={price}
            onChange={(e) => {
              setprice(e.target.value);
            }}
            width={"w-[60%]"}
            type={"text"}
            maxLength={"6"}
            haveText={true}
            icon={
              <CurrencyExchangeOutlinedIcon
                fontSize="medium"
                className="text-gray-400"
              />
            }
          />
        </div>
        <ButtonSimple
          textBtn={"Transaction"}
          onClick={() => mines(price, cartid)}
        />
      </div>
    </div>
  );
};
export default Transaction;
