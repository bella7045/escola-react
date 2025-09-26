import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Escola from "./components/Escola";
import SobreMim from "./components/SobreMim";
import"./index/index.css";

export default function app() {
  return (
    <div className="font-sans">
      <Navbar />
      <Home />
      <Escola />
      <SobreMim />
    </div>
  );
}
