import React, { useContext } from "react";
import { Context } from "../Contexts/Contexts";
import Input from "../Component/Input";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import Paragraph from "../Component/Paragraph";
import ButtonSimple from "../Component/Button";
import Header from "../Component/Header";
const Cart = () => {
  const {
    name,
    setname,
    number,
    setnumber,
    cvv,
    setcvv,
    password,
    setpassword,
    month,
    setmonth,
    year,
    setyear,
    cash,
    setcash,
    AddCart,
  } = useContext(Context);

  const onSubmitForm = (data) => {
    console.log(data)
  };
  // const {register,handleSubmit,formState}=useForm({resolver:yupResolver(schema)})
  // const ValidNumber =(e)=>{
  //   const regex =/^\d{0-9}16$/;
  //   if(regex.test(number)){
  //     setnumber(e.target.value)
  //   }
  // }
  const BankLogo = (Number) => {
    const FirstNumber = Number.slice(0, 4);
    switch (FirstNumber) {
      case "6221":
        return "parsian";
      case "6273":
        return "tejarat";
      case "5029":
        return "dey";
      case "5892":
        return "sepah";
      case "6393":
        return "sina";
      case "6037":
        return "melli";
      case "5028":
        return "shahr";
      case "6280":
        return "maskan";
      case "6063":
        return "mehr-Iran";
      case "6104":
        return "mellat";
      case "6219":
        return "saman";
      case "6037":
        return "saderat";
      default:
        return "Bank";
        break;
    }
  };
  return (
    <form
      onSubmit={onSubmitForm}
      className="  w-[70%] mx-auto my-5 py-1 pb-8 rounded-lg shadow-2xl"
    >
      <Header className="flex flex-row justify-center items-center" />

      <Paragraph
        header={"Card Number"}
        text={"Enter the 16-digit card number on the card"}
        flexAll={
          "flex flex-row justify-between items-center w-[87%] my-10 mx-auto"
        }
        flex={"flex flex-col justify-center items-start"}
      />
      <Input
        type={"text"}
        value={number}
        maxLength={"16"}
        onChange={(e) => {
          setnumber(e.target.value);
          // register={register}
          // register="number"
        }}
        
        width={"w-[90%]"}
        margin={"my-0 mx-auto"}
        badge={<div className="badge badge-neutral">{BankLogo(number)}</div>}
      />
      <div className="flex flex-row justify-between items-center w-[90%] mx-auto my-4">
        <Paragraph
          text={"Enter your first name and last name"}
          flex={"flex flex-col justify-center items-start"}
          header={"Name"}
        />
        <Input
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
          width={"w-[60%]"}
          type={"text"}
          maxLength={"16"}
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
          header={"Cvv2 Number"}
          text={"Enter the 3 or 4 digit number on the card"}
          flex={"flex flex-col justify-center items-start"}
        />
        <Input
          value={cvv}
          onChange={(e) => {
            setcvv(e.target.value);
          }}
          maxLength={"3"}
          type={"text"}
          haveText={true}
          icon={<AppsIcon fontSize="medium" className="text-gray-400" />}
          width={"w-[60%]"}
        />
      </div>
      <div className="flex flex-row justify-between items-center w-[90%] mx-auto my-4">
        <Paragraph
          text={"Enter your Dynamic password"}
          header={"Password"}
          flex={"flex flex-col justify-center items-start"}
        />
        <Input
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          width={"w-[60%]"}
          type={"password"}
          maxLength={"12"}
          haveText={true}
          icon={
            <VpnKeyOutlinedIcon fontSize="medium" className="text-gray-400" />
          }
        />
      </div>
      <div className="flex flex-row justify-between items-center w-[90%] mx-auto my-4">
        <Paragraph
          text={"Enter your Cash"}
          header={"Cash"}
          flex={"flex flex-col justify-center items-start"}
        />
        <Input
          value={cash}
          onChange={(e) => {
            setcash(e.target.value);
          }}
          width={"w-[60%]"}
          min={1}
          max={10000}
          type={"number"}
          haveText={true}
          icon={
            <SavingsOutlinedIcon fontSize="medium" className="text-gray-400" />
          }
        />
      </div>
      <div className="flex flex-row justify-between items-center w-[90%] my-4 mx-auto">
        <Paragraph flex={"flex flex-col justify-center items-start"}
        header={"Expire Date"}  text={"Enter Date of Expire Cart"} />
        <div className="flex flex-row justify-between items-center w-[20%]">
            <Input
              maxLength={"2"}
              value={year}
              onChange={(e) => {
                setyear(e.target.value);
              }}
              width={"w-[45%]"}
              type={"text"}
              className="outline-none text-center font-bold w-full bg-white"
              inputwidth={"w-[20%]"}
            />
          /
            <Input
              value={month}
              onChange={(e) => {
                setmonth(e.target.value);
              }}
              width={"w-[45%]"}
              maxLength={"2"}
              type={"text"}
              className="outline-none text-center font-bold w-full bg-white"
              inputwidth={"w-[20%]"}
            />
        </div>
      </div>
      <ButtonSimple
        textBtn={"Save Cart"}
        onClick={() => AddCart(number, name, cvv, password, cash, year, month)}
      />
    </form>
  );
};
export default Cart;
