import React from "react";
import { Route, Routes } from "react-router-dom";

import Tab from "./component/TabComponent/Tab";
import PhotoReservationRM from "./component/ProjectComponent/PhotoReservationRM";
import MyReactPortfolioRM from "./component/ProjectComponent/MyReactPortfolioRM";
import Dessert40RM from "./component/ProjectComponent/Dessert40RM";

import "./assets/css/cssreset.css"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/MyReactPortfolio" element={<Tab />}/>
        <Route path="/MyReactPortfolioRM" element={<MyReactPortfolioRM />}/>
        <Route path="/PhotoReservationRM" element={<PhotoReservationRM />} />
        <Route path="/Dessert40RM" element={<Dessert40RM />} />
      </Routes>
    </div>
  );
}

export default App;
