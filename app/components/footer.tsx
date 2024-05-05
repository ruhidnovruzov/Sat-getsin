import React from 'react'
import add from "@/public/assets/add.png";
import Image from 'next/image';
import call from "@/public/assets/call.png"
import mail from "@/public/assets/mail.png"
import instagram from "@/public/assets/instagram.png"
import facebook from "@/public/assets/facebook.png"
import Link from 'next/link';


const Footer = () => {



  return (
    <div className='pt-12'>
        <footer className='w-[90%] m-auto'>
            <div className='flex justify-between pb-10 border-b border-[#F6F6F6]'>
            <Link href='../'><h1 className="text-[24px] text-[#6B5959]">Logo</h1></Link>
                <Link href='/new'>
                <button className='bg-[#6A5BCD] text-white flex gap-2 rounded-[5px] px-4 h-12 items-center justify-center'><Image src={add} alt="add" height={15} width={15} />Elan yerləşdirin</button>
                </Link>
            </div>
            <div className='flex'>
            <div className='text-[#9A9CA8] flex flex-col gap-4 mt-12 w-fit h-fit pr-28 border-r border-[#F6F6F6]'>
                <div className='flex gap-4'>
                <Image src={call} alt="call" height={30} width={30} /> <span>(+994)70 256 24 89</span>
                </div>
                <div className='flex gap-4'>
                <Image src={mail} alt="mail" height={30} width={30} /> <span>example@az</span>
                </div>
            <div className='flex gap-6 border-t border-[#F6F6F6] w-full pt-4'>
            <Image src={instagram} alt="instagram" height={30} width={30} />
            <Image src={facebook} alt="facebook" height={15} width={15} />
            </div>
            </div>

            <div className='flex pl-28 mt-12 justify-between w-[77%]'>
                <div>
                <h3 className='font-bold mb-4 text-[#484B5E]'>Kateqoriyalar</h3>
                <ul className='text-[#9A9CA8] flex flex-col gap-3'>
                    <li>Daşınmaz əmlak</li>
                    <li>Nəqliyyat</li>
                    <li>Ev və bağ üçün</li>
                    <li>Xidmətlər</li>
                    <li>Şəxsi əşyalar</li>
                    <li>Uşaq aləmi</li>
                    <li>Elektronika və texnika</li>
                    <li>Heyvanlar</li>
                </ul>
                </div>
                <div className='flex justify-center items-center'>
                    <ul className='text-[#9A9CA8] flex flex-col gap-3'>
                    <li>Hobbi,asudə,idman</li>
                    <li>Biznes</li>
                    <li>Vakansiyalar</li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-bold mb-4 text-[#9A9CA8]'>Kömək</h3>
                    <ul className='text-[#9A9CA8] flex flex-col gap-3'>
                    <li>Elanlar</li>
                    <li>Yardım və dəstək</li>
                    <li>Qaydalar</li>
                    <li>İstifadəçi razılaşması</li>
                    <li>Məxfilik siyasəti</li>
                    </ul>
                </div>
            </div>
            </div>
            <div className='text-[#9A9CA8] font-bold text-[15px] flex justify-between mt-14 py-7 border-t border-[#F6F6F6]'>
                <h4>Bütün hüquqlar qorunur 2022</h4>
                <h4>Site by Jedai</h4>
            </div>
        </footer>
    </div>

  )
}

export default Footer