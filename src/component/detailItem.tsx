import React from "react";
import "./home.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/reducer/combineReducer";

export const DetailItem: React.FC = () => {
  const data = useSelector((state: RootState) => state.reducers.CollectionData);
  const { id } = useParams<{ id: string }>();
  console.log("params id is ", id);
  return (
    <div className="container">
      <div className="dashboard">
        {data
          .filter((val) => val.id === parseInt(id!))
          .map((val) => {
            return (
              <div className="detail-container" key={val.id + 1}>
                <img src={val.image} alt="img" />
              </div>
            );
          })}
      </div>
    </div>
  );
};
