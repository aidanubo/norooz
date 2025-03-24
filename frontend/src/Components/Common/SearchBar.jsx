import React, { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = () => {
    e.preventDefault()
    setIsOpen(false)
  }
  return (
    <div
      className={`flex items-center justify-center w-full  transition-all duration-300 ${
        isOpen ? "absolute  top-0  left-0 w-full bg-white h-24 z-50" : "w-auto"
      }`}
    >
      {isOpen ? (
        <form onSubmit={handleSearch} className="relative flex items-center justify-center w-full">
          <div className="relative w-1/2">
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
              value={searchTerm}
              className="h-10 bg-gray-100 px-4 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700 "
            />
          </div>
          <button
            type="submit"
            className="absolute left-[73%] top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
          >
            <HiMagnifyingGlass className="h-6 w-6 " />
          </button>
          <button
            type="button"
            onClick={handleSearchToggle}
            className="absolute right-[23%]  top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
          >
            <HiMiniXMark className="h-6 w-6 " />
          </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="h-8 w-8 " />
        </button>
      )}
    </div>
  );
}
