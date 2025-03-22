import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import UserLayout from "./Components/Layout/UserLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}
