import React from "react";
import { Route, Routes } from "react-router-dom";
import { CollectionPage, Home, Login, OrderConfirmationPage, Profile, Register,  } from "./Pages";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {Toaster} from 'sonner';
import ProductDetails from "./Components/Products/ProductDetails";
import Checkout from "./Components/CartDrawer/Checkout";

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
          <Route path="/collections/:collection" element={<CollectionPage />}/>
          <Route path="/product/:id" element={<ProductDetails />}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/order-confirmation" element={<OrderConfirmationPage />}/>
        </Routes>
      </main>
      <Footer />
    </>
  );
}
