import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Dex from "../page/Dex";

import Detail from "../page/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />

        <Route path="/pokemon-detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
