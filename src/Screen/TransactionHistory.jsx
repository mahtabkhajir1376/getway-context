import React,{useContext} from "react";
import { Context } from "../Contexts/Contexts";
import Header from "../Component/Header";
import HistoryCard from "../Component/HistoryCard";
const TransactionHistory =()=>{
    const{historyList}=useContext(Context)
    return(
        <div className="my-5 mx-auto   w-[70%] rounded-lg py-1 ">
        <Header/>
        <div className=" mt-5 flex flex-col justify-start items-end pb-14">
        {
            historyList.map((item)=>{
           return  item != null ? (<HistoryCard Number={item.Number} Name={item.Name} Cash={item.Cash} price={item.p}/>):null;
            })
        }
        </div>
        </div>
    )
  

};
export default  TransactionHistory ;