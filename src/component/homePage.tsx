import React, { ChangeEvent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux/reducer/combineReducer";
import "./home.scss";
import { Paginator } from "./pagination";
import {
  decrement,
  filter,
  increment,
  reset,
} from "../Redux/action/actionCreation";
import { useNavigate } from "react-router-dom";
import { IData } from "../Redux/reducer/collectionList";
import { CategoryComp } from "./categoryComp";
import { Spinner } from "./spinner";

interface PaginationOptions {
  pageSize: number;
  currentPage: number;
}

export const HomePage: React.FC = () => {
  let collections = useSelector((state: RootState) => state.reducers);

  let filterDataIs = collections.FilterData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    filterDataIs = collections.FilterData.filter((val) =>
      val.body.name.includes(e.target.value)
    );
    if (e.target.value !== "") {
      if (filterDataIs.length === 0) {
        dispatch(filter(collections.CollectionData));
        dispatch(reset(1));
      } else {
        dispatch(filter(filterDataIs));
        dispatch(reset(1));
      }
    } else if (e.target.value === "") {
      dispatch(filter(collections.CollectionData));
      dispatch(reset(1));
    }
  };

  const handleClickEvent = (val: IData) => {
    let id = val.id;
    navigate(`/details/${id}`);
  };

  const maxPageNumber = Math.ceil(collections.FilterData.length / 6);
  const handleNextEvents = (e: React.MouseEvent) => {
    if (collections.PageNum < maxPageNumber) {
      dispatch(increment(1));
    } else {
      dispatch(reset(1));
      console.log("restart");
    }
  };
  const handlePrevEvents = (e: React.MouseEvent) => {
    if (collections.PageNum >= 2) {
      dispatch(decrement(1));
    } else {
      dispatch(reset(1));
      console.log("reset");
    }
  };

  const paginationOptions: PaginationOptions = {
    pageSize: 6,
    currentPage: collections.PageNum,
  };

  const paginator = new Paginator<IData>(
    collections.FilterData,
    paginationOptions
  );
  const paginatedResult = paginator.paginate();

  useEffect(() => {
    dispatch(filter(collections.CollectionData));
    console.log("rerendering done");
  }, [collections.CollectionData, dispatch]);

  if (collections.FilterData.length === 0) {
    return <Spinner />;
  }
  return (
    <div className="home">
      <div className="search">
        <input
          type="search"
          placeholder="Enter Name of Actress"
          onChange={handleInput}
        />
      </div>
      <CategoryComp />
      <div className="container">
        {paginatedResult.data.map((val: IData, ind: number) => {
          return (
            <div key={ind} className="dashboard">
              <img
                className="images"
                src={val.image}
                alt={val.image}
                onClick={() => handleClickEvent(val)}
              />
            </div>
          );
        })}
      </div>
      <div className="pagination">
        <button onClick={handlePrevEvents}>Prev</button>
        <button onClick={handleNextEvents}>Next</button>
      </div>
    </div>
  );
};
