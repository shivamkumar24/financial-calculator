import React from "react";
import Home from "../Pages/Home";
import HouseRent from "../Pages/HouseRent";
import AdvanceTax from "../Pages/AdvanceTax";
import { Route, Routes } from "react-router-dom";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/houserent" element={<HouseRent />} />
      <Route path="/advancetax" element={<AdvanceTax />} />
    </Routes>
  );
};

export default AllRoutes;
