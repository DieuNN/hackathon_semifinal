import { render } from "react-dom";
import React from "react";
import { hackathon_semifinal_backend } from "../../declarations/hackathon_semifinal_backend";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ListUser from "./pages/List/ListUser";
import "antd/dist/antd.css";
import Update from "./pages/Update/Update";

const AppRoot = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/list" element={<ListUser />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
}


render(<AppRoot></AppRoot>, document.querySelector(".app"));


