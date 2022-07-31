import { render } from "react-dom";
import React from "react";
import { hackathon_semifinal_backend } from "../../declarations/hackathon_semifinal_backend";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

const AppRoot = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}


render(<AppRoot></AppRoot>, document.querySelector(".app"));


