"use client";
import React, { useState, useEffect } from "react";
import Asside from "@/app/components/asside";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const MyAnnouncement = () => {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3005/api/products");
      if (!response.ok) {
        throw new Error("Error");
      }
      const fetchedData = await response.json();
      setData(fetchedData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter(
      (item) => item.seller_name === "Ruhid Novruzov"
    );
    setFilteredData(filtered);
  }, [data]);

  const handleDelete = async (productId: any) => {
    try {
      await axios.delete(`http://localhost:3005/api/products/${productId}`);
      toast.success("Məhsul uğurla silindi");
      fetchData();
    } catch (error) {
      toast.error("Error: Məhsul silinmədi");
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-[#F6F8FE]">
      <div className="bg-[#F6F8FE] flex w-[90%] py-20 m-auto">
        <Asside />
        <div className="ml-10 max-sm:ml-4 flex max-sm:gap-8 flex-wrap w-full">
          {filteredData.map((item, index) => (
            <div
              key={index}
              className="w-[22%] max-sm:w-full bg-white pb-9  rounded relative m-4 max-sm:m-0"
            >
              <img src={item.image} alt="" className="h-48 w-full rounded" />
              <div className="p-4">
                <p className="w-[80%] font-bold">{item.name}</p>
                <p className="flex gap-1 text-sm mt-3">{item.city}</p>
                <p className="flex gap-1 text-sm ml-[2px]">{item.date}</p>
                <p className="font-bold absolute bottom-5 right-5">
                  {item.price + " " + item.unit}
                </p>
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyAnnouncement;
