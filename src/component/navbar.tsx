import React, { useEffect, useState } from "react";
import "./nav.scss";
import "./Navlist/categories.scss";
import image1 from "../img/1196306.jpg";
import { handleClick } from "./share";
import { filter, reset } from "../Redux/action/actionCreation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/reducer/combineReducer";
interface IFilter {
  category: string;
  name: string;
  duration: number;
  language: string;
  storyType: boolean;
  fullVideo: boolean;
}

export const Navbar: React.FC = () => {
  const [visibility, setVisibility] = useState<boolean>(false);
  const [cat, setCat] = useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<IFilter>({
    category: "",
    name: "",
    duration: 10,
    language: "",
    storyType: false,
    fullVideo: false,
  });
  const collection = useSelector((state: RootState) => state.reducers);
  const dispatch = useDispatch();

  const setButton = (
    filter: string | boolean | number,
    filterType: keyof IFilter
  ) => {
    setActiveButton((prevState) => ({
      ...prevState,
      [filterType]: filter,
    }));
  };

  const handleButtonClick = (
    filter: string | boolean | number,
    filterType: keyof IFilter,
    e: React.MouseEvent
  ) => {
    if (filterType === "category") {
      setButton(filter, filterType);
    } else if (filterType === "name") {
      setButton(filter, filterType);
    } else if (filterType === "language") {
      setButton(filter, filterType);
    } else if (filterType === "duration") {
      setButton(filter, filterType);
    } else if (filterType === "storyType") {
      setButton(filter, filterType);
    } else if (filterType === "fullVideo") {
      setButton(filter, filterType);
    }
    e.stopPropagation();
  };
  const searchFuc = () => {
    const data = collection.CollectionData.filter(
      (val) =>
        val.body.category?.toLocaleLowerCase() ===
          activeButton.category.toLocaleLowerCase() ||
        val.body.name?.toLocaleLowerCase() ===
          activeButton.name.toLocaleLowerCase() ||
        val.body.language?.toLocaleLowerCase() ===
          activeButton.language.toLocaleLowerCase()
    );
    console.log(data);
    dispatch(filter(data));
    dispatch(reset(1));
    setCat(false);
  };
  const handleVisibility = (e: React.MouseEvent) => {
    setVisibility(!visibility);
    e.stopPropagation();
  };
  const handleCat = (e: React.MouseEvent) => {
    setCat(!cat);
    e.stopPropagation();
  };

  useEffect(() => {
    const func = () => {
      setVisibility(false);
      setCat(false);
    };
    document.addEventListener("click", func);
    return () => {
      document.removeEventListener("click", func);
    };
  }, []);

  return (
    <nav id="navbar">
      <a href="/home">
        <div className="logo">
          <img className="logo1" src={image1} alt="images1" />
        </div>
      </a>
      <div className={`lists ${visibility ? "visible" : ""}`}>
        <ul className="list">
          <li className="items">
            <a href="/home">Home</a>
          </li>
          <li className="item cate" onClick={handleCat}>
            Category
          </li>
          <li className="items">
            <a href="/about">About</a>
          </li>
          <li className="item" onClick={handleClick}>
            Share
          </li>
        </ul>
      </div>
      <div className="icons">
        <span className="material-icons icon" onClick={handleVisibility}>
          menu
        </span>
      </div>
      {cat && (
        <div className="category-component">
          <div className="filter-component">
            <div className="filterBy">
              <p className="filterHeading">Filter By Category</p>
              <div className="buttons">
                <button
                  className={`filter-btns ${
                    activeButton.category === "ULLU" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("ULLU", "category", e)}
                >
                  ULLU
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.category === "KOOKU" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("KOOKU", "category", e)}
                >
                  KOOKU
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.category === "NETFLIX" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("NETFLIX", "category", e)}
                >
                  NETFLIX
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.category === "AMAZON" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("AMAZON", "category", e)}
                >
                  AMAZON
                </button>
              </div>
            </div>
            <div className="filterBy">
              <p className="filterHeading">Filter By Name</p>
              <div className="buttons">
                <button
                  className={`filter-btns ${
                    activeButton.name === "pakistani actress" ? "active" : ""
                  }`}
                  onClick={(e) =>
                    handleButtonClick("pakistani actress", "name", e)
                  }
                >
                  pakistani actress
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.name === "kajal agarawal" ? "active" : ""
                  }`}
                  onClick={(e) =>
                    handleButtonClick("kajal agarawal", "name", e)
                  }
                >
                  kajal agarawal
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.name === "sanchita" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("sanchita", "name", e)}
                >
                  sanchita
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.name === "pooja" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("pooja", "name", e)}
                >
                  pooja
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.name === "kathrine" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("kathrine", "name", e)}
                >
                  kathrine
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.name === "keerthy" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("keerthy", "name", e)}
                >
                  keerthy
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.name === "south actress" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("south actress", "name", e)}
                >
                  south actress
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.name === "rashmika" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("rashmika", "name", e)}
                >
                  rashmika
                </button>
              </div>
            </div>
            <div className="filterBy">
              <p className="filterHeading">Filter By language</p>
              <div className="buttons">
                <button
                  className={`filter-btns ${
                    activeButton.language === "hindi" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("hindi", "language", e)}
                >
                  hindi
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.language === "english" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("english", "language", e)}
                >
                  english
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.language === "urdu" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("urdu", "language", e)}
                >
                  urdu
                </button>
              </div>
            </div>
            <div className="search-btn">
              <button className="search" onClick={searchFuc}>
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
