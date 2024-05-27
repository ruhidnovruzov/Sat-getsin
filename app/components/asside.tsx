import React from 'react'
import Link from 'next/link'

const Asside = () => {
  return (
    <div className="flex flex-col font-bold text-[#5A5C68] w-[20%] max-sm:w-[40%] bg-white  rounded-[10px] px-3  max-sm:h-[300px] h-[450px]">
    <Link
      href="./my-announcement"
      className="duration-300 transition-all ease-in py-3 pl-5 hover:bg-[#EFEFFD] rounded-[10px] hover:text-[#6A5BCD]"
    >
      Elanlarım
    </Link>
    <Link
      href="#"
      className="duration-300 transition-all ease-in py-3 pl-5 hover:bg-[#EFEFFD] rounded-[10px] hover:text-[#6A5BCD]"
    >
      Seçilənlər
    </Link>
    <Link
      href="#"
      className="duration-300 transition-all ease-in py-3 pl-5 hover:bg-[#EFEFFD] rounded-[10px] hover:text-[#6A5BCD]"
    >
      Ayarlar
    </Link>
    <Link
      href="#"
      className="duration-300 transition-all ease-in py-3 pl-5 hover:bg-[#EFEFFD] rounded-[10px] hover:text-[#6A5BCD]"
    >
      Yardım və dəstək
    </Link>
    <Link
      href="/sign-in"
      className="duration-300 transition-all ease-in py-3 pl-5 hover:bg-[#EFEFFD] rounded-[10px] hover:text-[#6A5BCD]"
    >
      Çıxış
    </Link>
  </div>
)
}

export default Asside