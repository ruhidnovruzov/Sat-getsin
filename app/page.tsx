"use client";
import Image from "next/image";
import real_estate from "@/public/assets/real-estate.png";
import transport from "@/public/assets/transport.png";
import garden from "@/public/assets/garden.png";
import services from "@/public/assets/service.png";
import fashion from "@/public/assets/fashion.png";
import children from "@/public/assets/children.png";
import electronics from "@/public/assets/electronics.png";
import animals from "@/public/assets/animals.png";
import sport from "@/public/assets/sport.png";
import business from "@/public/assets/business.png";
import vacancies from "@/public/assets/vacancies.png";
import clock from "@/public/assets/date.svg";
import location from "@/public/assets/location.svg";
import { useState } from "react";
import { useEffect } from "react";
import search from "@/public/assets/search.png";
import Navbar from "./components/navbar";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.npoint.io/f84817a5c4ad79222529"
        );
        if (!response.ok) {
          throw new Error("Error");
        }
        const fetchedData = await response.json();
        console.log(fetchedData);
        setData(fetchedData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  const handleShowAll = () => {
    setSelectedCategory("");
  };

  const filteredProducts = selectedCategory
    ? data.filter(
        (product) =>
          product.category === selectedCategory &&
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="w-full h-full bg-[#F6F8FE] relative pb-28">
      <div className="w-[90%] m-auto  py-12">
        {/* Categories */}

        <div className="pt-24">
          <h1 className="text-[30px] text-[#484B5E] font-bold">
            Kateqoriya seçin
          </h1>
          <div className="pt-10">
            <div className="flex pb-10">
              <div className="flex flex-col justify-center items-center w-1/6 ">
                <button onClick={() => handleCategoryChange("Daşınmaz əmlak")}>
                  <Image
                    src={real_estate}
                    alt="real_estate"
                    height={130}
                    width={130}
                  />
                  <span>Daşınmaz əmlak</span>
                </button>
              </div>
              <div className="flex flex-col justify-center items-center w-1/6 ">
                <button onClick={() => handleCategoryChange("Nəqliyyat")}>
                  <Image
                    src={transport}
                    alt="transport"
                    height={130}
                    width={130}
                  />
                  <span>Nəqliyyat</span>
                </button>
              </div>
              <div className="flex flex-col justify-center items-center w-1/6 ">
                <button onClick={() => handleCategoryChange("Ev və bağ")}>
                  <Image src={garden} alt="garden" height={130} width={130} />
                  <span>Ev və bağ üçün</span>
                </button>
              </div>
              <div className="flex flex-col justify-center items-center w-1/6 ">
                <button onClick={() => handleCategoryChange("Xidmətlər")}>
                  <Image
                    src={services}
                    alt="services"
                    height={130}
                    width={130}
                  />
                  <span>Xidmətlər</span>
                </button>
              </div>
              <div className="flex flex-col justify-center items-center w-1/6 ">
                <button onClick={() => handleCategoryChange("Moda")}>
                  <Image src={fashion} alt="fashion" height={130} width={130} />
                  <span>Moda və stil</span>
                </button>
              </div>
              <div className="flex flex-col justify-center items-center w-1/6 ">
                <button onClick={() => handleCategoryChange("Uşaq")}>
                  <Image
                    src={children}
                    alt="children"
                    height={130}
                    width={130}
                  />
                  <span>Uşaq aləmi</span>
                </button>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col justify-center items-center w-1/6 ">
                <button onClick={() => handleCategoryChange("Elektronika")}>
                  <Image
                    src={electronics}
                    alt="electronics"
                    height={130}
                    width={130}
                  />
                  <span>Elektronika və texnika</span>
                </button>
              </div>
              <div className="flex flex-col justify-center items-center w-1/6 ">
                <button onClick={() => handleCategoryChange("Heyvanlar")}>
                  <Image src={animals} alt="animals" height={130} width={130} />
                  <span>Heyvanlar</span>
                </button>
              </div>
              <div className="flex flex-col justify-center items-center w-1/6 ">
                <button onClick={() => handleCategoryChange("Hobbi")}>
                  <Image src={sport} alt="sport" height={130} width={130} />
                  <span>Hobbi,idman,asudə</span>
                </button>
              </div>
              <div className="flex flex-col justify-center items-center w-1/6 ">
                <button onClick={() => handleCategoryChange("Biznes")}>
                  <Image
                    src={business}
                    alt="business"
                    height={130}
                    width={130}
                  />
                  <span>Biznes</span>
                </button>
              </div>
              <div className="flex flex-col justify-center items-center w-1/6 ">
                <button onClick={() => handleCategoryChange("Vakansiyalar")}>
                  <Image
                    src={vacancies}
                    alt="vacancies"
                    height={130}
                    width={130}
                  />
                  <span>Vakansiyalar</span>
                </button>
              </div>
            </div>
          </div>
          <div className="pt-10">
            <button onClick={handleShowAll}>
              <h1 className="font-bold text-[30px] mt-24 mb-10">Elanlar</h1>
            </button>

            <div className="w-full relative h-10 mb-10">
              <input
                type="text"
                placeholder="Axtaracağınız məhsul adını yazın"
                className="outline-none placeholder:text-sm h-10 ml-4 w-[30%] pl-4 absolute right-0"
                value={searchTerm}
                onChange={handleSearch}
              />
              <Image src={search} alt="search" height={20} width={20} className="absolute right-2 top-3" />
            </div>
            <div className="flex flex-wrap gap-[91px] text-[#656569] -z-10">
              {filteredProducts.map((items, index) => (
                <div
                  key={index}
                  className="w-[20%] bg-white pb-9 rounded relative"
                >
                  <img
                    src={items.image}
                    alt=""
                    className="h-56 w-full rounded"
                  />
                  <div className="p-4">
                    <p className="w-[80%] font-bold">{items.name}</p>
                    <p className="flex gap-1 text-sm mt-3">
                      <Image src={location} alt="" height={25} width={25} />
                      {items.city}
                    </p>
                    <p className="flex gap-1 text-sm ml-[2px]">
                      <Image src={clock} alt="" height={20} width={20} />
                      {items.date}
                    </p>
                    <p className="font-bold absolute bottom-5 right-5">
                      {items.price + " " + items.unit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
