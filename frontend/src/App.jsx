import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/index";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
