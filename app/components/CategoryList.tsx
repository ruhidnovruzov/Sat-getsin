import React from "react";
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

const categories = [
  { name: "Daşınmaz əmlak", image: real_estate },
  { name: "Nəqliyyat", image: transport },
  { name: "Ev və bağ", image: garden },
  { name: "Xidmətlər", image: services },
  { name: "Moda", image: fashion },
  { name: "Uşaq", image: children },
  { name: "Elektronika", image: electronics },
  { name: "Heyvanlar", image: animals },
  { name: "Hobbi", image: sport },
  { name: "Biznes", image: business },
  { name: "Vakansiyalar", image: vacancies },
];

interface CategoryListProps {
    onCategoryChange: (category: string) => void;
    onShowAll: () => void;
  }
  
  const CategoryList: React.FC<CategoryListProps> = ({ onCategoryChange, onShowAll }) => {
  return (
    <div className="pt-24 max-sm:pt-5">
      <h1 className="text-[30px] text-[#484B5E] font-bold">Kateqoriya seçin</h1>
      <div className="pt-10">
        <div className="flex pb-10">
          {categories.slice(0, 6).map((category, index) => (
            <div key={index} className="flex justify-center max-sm:gap-5 items-center w-1/6 ">
              <button onClick={() => onCategoryChange(category.name)} className="p-1">
                <Image src={category.image} alt={category.name} className="" height={130} width={130} />
                <span className="max-sm:hidden">{category.name}</span>
              </button>
            </div>
          ))}
        </div>
        <div className="flex">
          {categories.slice(6).map((category, index) => (
            <div key={index} className="flex justify-center items-center w-1/6 ">
              <button onClick={() => onCategoryChange(category.name)} className="p-1">
                <Image src={category.image} alt={category.name} height={130} className="" width={130} />
                <p className="max-sm:hidden">{category.name}</p>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-10">
        <button onClick={onShowAll}>
          <h1 className="font-bold text-[30px] mt-24 max-sm:mt-5 mb-10">Bütün elanlar</h1>
        </button>
      </div>
    </div>
  );
};

export default CategoryList;
