import React, { useState } from "react";
import logo from "../logo.png";

export default function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-blue-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2 gap-3">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Remote Jobs Logo"
            loading="lazy"
            className="w-20 md:w-24 object-contain"
          />
        </div>

        {/* Search */}
        <form
          role="search"
          onSubmit={handleSearch}
          className="flex w-full md:w-auto items-center gap-2"
        >
          <input
            id="job-search"
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              if (onSearch) onSearch(e.target.value);
            }}
            className="w-full md:w-64 px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
