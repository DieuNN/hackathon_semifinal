import { render } from "react-dom";
import React from "react";
import { hackathon_semifinal_backend, idlFactory, canisterId } from "../../declarations/hackathon_semifinal_backend";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ListUser from "./pages/List/ListUser";
import "antd/dist/antd.css";
import Update from "./pages/Update/Update";
import { defaultProviders } from "@connect2ic/core/providers"
import { createClient } from "@connect2ic/core"
import { Connect2ICProvider } from "@connect2ic/react"
import "@connect2ic/core/style.css"
import { PlugWallet } from "@connect2ic/core/providers";
import Resgister from "./pages/Resgister/Resgister";

const AppRoot = () => {
  const client = createClient({
    canisters: {
      hackathon_semifinal_backend: {
        idlFactory,
        canisterId
      }
    },
    providers: [
      new PlugWallet()
    ]
  })

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />}></Route>
        <Route path="/list" element={<ListUser />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>

        <Route path="/register" element={<Resgister />}></Route>
      </Routes>
    </BrowserRouter>
  );
}


render(<AppRoot></AppRoot>, document.querySelector(".app"));


