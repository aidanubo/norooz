import React from "react";
import GenderCollectionSection from "./GenderCollectionSection";
import NewArrivals from "./NewArrivals";
import ProductDetails from "./ProductDetails";

export default function Products() {
  return (
    <>
      <GenderCollectionSection />
      <NewArrivals />
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetails />
    </>
  );
}
