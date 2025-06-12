"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button2";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/Checkbox";
import { X, Filter, ArrowUpDown } from "lucide-react";

export const companies = [
  { kp: "ezes-1", name: "EZE'S", category: "Retail", Established: "2024", img: "/EZE'S.png" },
  
];

const categories = ["Tech", "Finance", "Health", "Education", "Entertainment", "Retail"];

const CompaniesPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc'); // 'asc' or 'desc'

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleSortClick = () => {
    setSortOrder(current => current === 'asc' ? 'desc' : 'asc');
  };

  const filteredCompanies = companies
    .filter(
      (company) =>
        company.name.toLowerCase().includes(search.toLowerCase()) &&
        (selectedCategories.length === 0 || selectedCategories.includes(company.category))
    )
    .sort((a, b) => {
      const yearA = parseInt(a.Established);
      const yearB = parseInt(b.Established);
      return sortOrder === 'asc' 
        ? yearA - yearB 
        : yearB - yearA;
    });

  return (
    <div
      className="flex min-h-screen relative"
      style={{
        background: 'linear-gradient(to bottom, rgb(43, 7, 98) 0%, rgb(39, 39, 42) 100%)',
        zIndex: 5,
      }}
    >
      {/* Sidebar - completely preserved as in original */}
      <div
        className={`fixed top-20 left-0 h-full w-64 bg-gray-900 text-white p-5 mt-[20px] transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:ml-[84px]`}
        style={{
          zIndex: 10,
          borderRadius: '10px',
          border: '1px solid white',
        }}
      >
        <div className="flex justify-between items-center pb-4 border-b">
          <h2 className="text-xl font-bold">Filters</h2>
          <X className="cursor-pointer md:hidden" onClick={() => setSidebarOpen(false)} />
        </div>

        {/* Sort button */}
        <div className="py-4 border-b">
          <h3 className="text-lg mb-2">Sort</h3>
          <Button
            onClick={handleSortClick}
            variant="outline"
            className="w-full flex items-center justify-between"
          >
            <span>Established Date</span>
            <ArrowUpDown className={`h-4 w-4 transform ${sortOrder === 'asc' ? 'rotate-180' : ''}`} />
          </Button>
        </div>

        <div className="mt-5">
          <h3 className="text-lg font-semibold">Categories</h3>
          <div className="mt-2 space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center">
                <Checkbox
                  checked={selectedCategories.includes(category)}
                  onChange={() => toggleCategory(category)}
                  className="mr-2"
                />
                {category}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="w-full p-5 mt-[57px] min-h-screen"
        style={{
          zIndex: 5,
        }}
      >
        <div className="flex justify-between items-center mb-5">
          <Input
            placeholder="Search companies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md"
          />

          <div className="flex justify-end items-center p-6">
            <p className="text-white text-xl mr-4">sort by</p>
            <div className="relative">
              <select className="border-2 border-indigo-900 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="Default">Default</option>
                <option value="Establishment">Establishment</option>
              </select>
              <button 
                onClick={handleSortClick} 
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                <ArrowUpDown className={`w-5 h-5 ${sortOrder === 'asc' ? 'text-blue-500' : 'text-gray-400'}`} />
              </button>
            </div>
          </div>

          <Button className="md:hidden" onClick={() => setSidebarOpen(true)}>
            <Filter className="mr-2" /> Filters
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCompanies.map((company, index) => (
            <a 
              key={index} 
              href={`investors/company/${company.kp}`}
              className="block bg-white p-4 rounded-lg shadow relative hover:shadow-lg transition-shadow"
            >
              <div className="absolute top-2 right-2">
                <img 
                  src={company.img} 
                  alt={company.name} 
                  className="w-20 h-auto rounded max-w-full mr-10" 
                />
              </div>
              <h3 className="text-lg font-bold pr-20">{company.name}</h3>
              <p className="text-gray-600">{company.category}</p>
              <p className="text-gray-500 mt-2">Established: {company.Established}</p>
            </a>
          ))}
          {filteredCompanies.length === 0 && (
            <p className="col-span-full text-center text-gray-500">No companies found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompaniesPage;