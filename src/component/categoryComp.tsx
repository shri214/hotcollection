import React from "react";
import { categoryFunc } from "./categoryFunc";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/reducer/combineReducer";
import { filter, reset } from "../Redux/action/actionCreation";
import './category.scss'


export const CategoryComp: React.FC = () => {
    const collection=useSelector((state:RootState)=>state.reducers.CollectionData);
    const dispatch=useDispatch()
    const handleFilter=(val:string)=>{
        const data=categoryFunc(collection, val);
        dispatch(filter(data))
        dispatch(reset(1));
    }
  return (
    <div className="filterContainer">
      <button className="btn" onClick={()=>handleFilter("ullu")}>ULLU</button>
      <button className="btn" onClick={()=>handleFilter("kooku")}>KOOKU</button>
      <button className="btn" onClick={()=>handleFilter("netflix")}>NETFLIX</button>
      <button className="btn" onClick={()=>handleFilter("amazon")}>AMAZON</button>
    </div>
  );
};
