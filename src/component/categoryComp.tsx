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
      <button className="btn" onClick={()=>handleFilter("")}>All</button>
      <button className="btn" onClick={()=>handleFilter("webSeries")}>WebSeries</button>
      <button className="btn" onClick={()=>handleFilter("Hindi Drama")}>Hindi Drama</button>
      <button className="btn"  onClick={()=>handleFilter("Desi")}>Desi</button>
      <button className="btn" onClick={()=>handleFilter("Family")}>Family</button>
    </div>
  );
};
