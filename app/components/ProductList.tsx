import React from "react";
import Image from "next/image";
import location from "@/public/assets/location.svg";
import clock from "@/public/assets/date.svg";
import "./product.css";

interface Product {
  image: string;
  name: string;
  city: string;
  date: string;
  price: string;
  unit: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="flex flex-wrap gap-[91px] text-[#656569] -z-10">
      {products.map((items, index) => (
        <div
          key={index}
          id="product"
          className="w-[20%] max-sm:w-full bg-white pb-9 rounded relative "
        >
          <img src={items.image} alt="" className="h-56  w-full rounded" />
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
  );
};

export default ProductList;
