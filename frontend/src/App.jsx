import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Profile, Register,  } from "./Pages";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {Toaster} from 'sonner';

export default function App() {
  return (
    <>
    <Toaster position="top-right"/>
      <Header />
      <main className="min-h-[60vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </main>
      <Footer />
    </>
  );
}
