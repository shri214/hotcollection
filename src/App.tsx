import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./component/homePage";
import { DetailItem } from "./component/detailItem";
import { Navbar } from "./component/navbar";
import { About } from "./component/Navlist/about";
import { Category } from "./component/Navlist/category";

function App() {
  return (
    <>
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/home" Component={HomePage} />
          <Route path="/about" Component={About}/>
          <Route path="/category" Component={Category}/>
          <Route path="/details/:id" Component={DetailItem} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
