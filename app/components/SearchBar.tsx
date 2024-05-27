import React from "react";
import Image from "next/image";
import search from "@/public/assets/search.png";

interface SearchBarProps {
  searchTerm: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearch }) => {
  return (
    <div className="w-full relative h-10 mb-10">
      <input
        type="text"
        placeholder="Axtaracağınız məhsul adını yazın"
        className="outline-none placeholder:text-sm h-10 ml-4 max-sm:w-full w-[30%] pl-4 absolute right-0"
        value={searchTerm}
        onChange={onSearch}
      />
      <Image
        src={search}
        alt="search"
        height={20}
        width={20}
        className="absolute right-2 top-3"
      />
    </div>
  );
};

export default SearchBar;
