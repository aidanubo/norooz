import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div>
          <Link to="/" className="text-2xl font-medium">
            Norooz
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm  font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm  font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm  font-medium uppercase"
          >
            Top wear
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm  font-medium uppercase"
          >
            Bottom wear 
          </Link>
        </div>
      </nav>
    </>
  );
}
