import React from "react";
import { useState } from "react";
import { Context } from "../Contexts/Contexts";
import ChangeTheme from "../Component/ChangeTheme";
import { empty } from "../helper/helper";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../Screen/Cart";
import Transaction from "../Screen/Tansaction";
import CartStyle from "../Component/CartStyle";
import Navbar from "./Navbar";
import TransactionHistory from "../Screen/TransactionHistory";

const Root = () => {

  const [List, setList] = useState([]);
  const [historyList, sethistoryList] = useState([]);
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [cash, setcash] = useState("");
  const [password, setpassword] = useState("");
  const [cvv, setcvv] = useState("");
  const [month, setmonth] = useState("");
  const [year, setyear] = useState("");

  const [cartNumber, setcartNumber] = useState("");
  const [cartName, setcartName] = useState("");
  const [cartCvv2, setcartCvv2] = useState("");
  const [cartPass, setcartPass] = useState("");
  const [yearexpire, setyearexpire] = useState("");
  const [monthexpire, setmonthexpire] = useState("");
  const [price, setprice] = useState(0);
  const [cartid, setcartid] = useState("");

  const AddCart = (Number, Name, Cvv2, Pass, Cash, ydate, mdate) => {
    const newCard = {
      id: List.length + 1,
      Name,
      Number,
      Cvv2,
      Pass,
      Cash,
      ydate,
      mdate,
    };
    setList([...List, newCard]);
    setname("");
    setnumber("");
    setcvv("");
    setpassword("");
    setmonth("");
    setyear("");
    setcash("");
  };

  const ClickHandler = (item) => {
    const findCard = List.filter((card) => {
      return card.id === item.id;
    });
    if (!empty(findCard)) {
      setcartName(item.Name),
        setcartNumber(item.Number),
        setcartPass(item.Pass),
        setcartCvv2(item.Cvv2),
        setmonthexpire(item.mdate),
        setyearexpire(item.ydate);
      setcartid(item.id);
    }
  };

  const mines = (minesPrice, id) => {
    const newCash = List.map((card) => {
      return card.id === id && card.Cash >= minesPrice
        ? { ...card, Cash: card.Cash - minesPrice }
        : card;
    });

    newCash.map((item) => {
      if (item.id === id) {
        const UpdatedcardCash = { ...item, p: minesPrice };
        sethistoryList([...historyList, UpdatedcardCash]);
      }
    });
    setList(newCash);
    setcartNumber("");
    setcartName("");
    setcartPass("");
    setyearexpire("");
    setmonthexpire("");
    setprice("");
    setcartCvv2("");
  };
  return (
    <BrowserRouter>
      <Context.Provider
        value={{
          List,
          setList,
          ClickHandler,
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
          cartName,
          cartNumber,
          cartPass,
          cartCvv2,
          yearexpire,
          monthexpire,
          price,
          setprice,
          cartid,
          mines,
          historyList,
        }}
      >
        <ChangeTheme />
        <Navbar />
        <Routes>
          <Route path="/" element={<Cart />} />
          cartName
          <Route path="/trans" element={<Transaction />} />
          <Route path="/history" element={<TransactionHistory />} />
        </Routes>
      </Context.Provider>
      <div className="flex flex-row justify-around items-center w-[70%] my-10 mx-auto flex-wrap mt-5  min-h-[300px] rounded-lg py-5">
        {List.map((card) => {
          return (
            <CartStyle
              Name={card.Name}
              Number={card.Number}
              Cvv2={card.Cvv2}
              Cash={card.Cash}
              year={card.ydate}
              month={card.mdate}
              ClickHandler={() => ClickHandler(card)}
            />
          );
        })}
      </div>
    </BrowserRouter>
  );
};
export default Root;
