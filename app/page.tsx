"use client";

import React, { useState, useEffect } from "react";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import { useStore } from "./store/useStore";

export default function Home() {
  const { data, setData, selectedCategory, setSearchTerm, setSelectedCategory, searchTerm } = useStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3005/api/products");
        if (!response.ok) {
          throw new Error("Error");
        }
        const fetchedData = await response.json();
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [setData]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleShowAll = () => {
    setSelectedCategory("");
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = selectedCategory
    ? data.filter(
        (product) =>
          product.category === selectedCategory &&
          product.name &&
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data.filter(
        (product) =>
          product.name &&
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div className="w-full h-full bg-[#F6F8FE] relative pb-28">
      <div className="w-[90%] m-auto py-12">
        <CategoryList
          onCategoryChange={handleCategoryChange}
          onShowAll={handleShowAll}
        />
        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ProductList products={filteredProducts} />
        )}
      </div>
    </div>
  );
}