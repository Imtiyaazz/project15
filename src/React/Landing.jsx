import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "./Nav";
import { Home } from "./Home";
import { Greeting } from "./Greeting";
import { Fruits } from "./Fruits";

export const Landing = () => {
  return (
    <BrowserRouter>
      <Nav />
      <br />
      <br />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greet" element={<Greeting />} />
        <Route path="/furit" element={<Fruits />} />
      </Routes>
    </BrowserRouter>
  );
};
