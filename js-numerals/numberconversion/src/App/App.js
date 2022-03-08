import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { homeRoute } from "../Constants/routes";
import HomePage from "../Pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={homeRoute} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
