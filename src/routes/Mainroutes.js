import React from "react";
import { Route, Routes } from "react-router-dom";


import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import AddCar from "../Pages/AddCar";
import AddCarForm from "../components/AddCarForm";

function MainRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/addcar" element={<AddCar />} />
      <Route path="/addcar/:id" element={<AddCarForm />} />

    </Routes>
  );
}

export default MainRoutes;