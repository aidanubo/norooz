import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  AdminHomePage,
  CollectionPage,
  Home,
  Login,
  OrderConfirmationPage,
  Profile,
  Register,
} from "./Pages";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Toaster } from "sonner";
import ProductDetails from "./Components/Products/ProductDetails";
import Checkout from "./Components/CartDrawer/Checkout";
import OrderDetailsPage from "./Pages/OrderDetailsPage";
import MyOrder from "./Pages/Profile/MyOrder";
import Admin from "./Components/Admin";
import UserManagement from "./Components/Admin/UserManagement";
import ProductManagement from "./Components/Admin/ProductManagement";

export default function App() {
  return (
    <>
      <Toaster position="top-right" />

      <Routes>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdminHomePage />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="products" element={<ProductManagement />} />
        </Route>
        <Route
          path="/*"
          element={
            <>
              <Header />
              <main className="min-h-[60vh]">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route
                    path="/collections/:collection"
                    element={<CollectionPage />}
                  />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route
                    path="/order-confirmation"
                    element={<OrderConfirmationPage />}
                  />
                  <Route path="/order/:id" element={<OrderDetailsPage />} />
                  <Route path="/my-orders" element={<MyOrder />} />
                </Routes>
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}
