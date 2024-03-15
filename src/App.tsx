import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./component/homePage";
import { DetailItem } from "./component/detailItem";
import { Navbar } from "./component/navbar";
import { About } from "./component/Navlist/about";
import { Category } from "./component/Navlist/category";
import { Contact } from "./component/Navlist/contact";

function App() {
  return (
    <>
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/home" Component={HomePage} />
          <Route path="/details/:id" Component={DetailItem} />
          <Route path="/about" Component={About}/>
          <Route path="/category" Component={Category}/>
          <Route path="/contact" Component={Contact}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
