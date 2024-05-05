"use client";
import React from "react";
import { useState } from "react";
import { BiSolidHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";
import Link from "next/link";

const Sign_In = () => {
  const [emailPageVisible, setEmailPageVisible] = useState(true);
  const [phonePageVisible, setPhonePageVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [registerVisible, setRegisterVisible] = useState<boolean>(false)
  const [password, setPassword] = useState<string>("");
  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleEmailButtonClick = () => {
    setEmailPageVisible(true);
    setPhonePageVisible(false);
    setRegisterVisible(false)
  };

  const handlePhoneButtonClick = () => {
    setEmailPageVisible(false);
    setPhonePageVisible(true);
    setRegisterVisible(false)
  };

  const handleRegisterButtonClick = () => {
    setEmailPageVisible(false);
    setPhonePageVisible(false);
    setRegisterVisible(true)
  }

  return (
    <div className="w-full flex items-center justify-center py-32 bg-[#F6F8FE]">
      <div className="w-[28%]">
        <h3 className="text-[20px] font-bold text-[#484B5E]">
          “Sat Getsin” ə xoş gəlmişsiniz !
        </h3>
        <p className="text-sm text-[#ABACB4] mt-3">
          Qeydiyyat zamanı istifadə etdiyiniz e-mail (nömrə) və şifrə vasitəsilə
          daxil olun
        </p>
        <div className="flex gap-8 pt-2">
          <button onClick={handleEmailButtonClick}>
            <span className="border-b-2">Email</span>
          </button>
          <button onClick={handlePhoneButtonClick}>
            <span className="border-b-2">Mobil nömrə</span>
          </button>
        </div>
        <div></div>
        {
          registerVisible && (
            <div>
               <div className="mt-10">
              <label className="font-bold text-[#ABA9B7]">Ad soyad</label>
              <br />
              <input
                type="text"
                placeholder=""
                className="mt-3 h-12 pl-5 bg-[#EFF3FA] w-[80%] rounded-[5px]"
              />
            </div>
            <div className="mt-10">
              <label className="font-bold text-[#ABA9B7]">Email</label>
              <br />
              <input
                type="email"
                placeholder=""
                className="mt-3 h-12 pl-5 bg-[#EFF3FA] w-[80%] rounded-[5px]"
              />
            </div>
            <div className="mt-10">
              <label className="font-bold text-[#ABA9B7]">Mobil nömrə</label>
              <br />
              <input
                type="number"
                placeholder=""
                className="mt-3 h-12 pl-5 bg-[#EFF3FA] w-[80%] rounded-[5px]"
              />
            </div>
            <div className="mt-7">
              <label className="font-bold text-[#ABA9B7]">Şifrə</label>
              <br />
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=" Şifrənizi daxil edin"
                  className="mt-3 h-12 pl-5 bg-[#EFF3FA] w-[80%] rounded-[5px]"
                />
                <button
                  className="text-[#d0cfd6] absolute mt-6 right-24"
                  onClick={handleTogglePassword}
                >
                  {passwordVisible ? (
                    <BiSolidShow className="size-7" />
                  ) : (
                    <BiSolidHide className="size-7" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex mt-2 items-center gap-2">
            <input type="checkbox" className="h-6 w-6" />{" "}
            <label className="text-[#ABA9B7] font-bold text-sm">
            <span className="font-bold text-[#6A5BCD]">İstifadəçi şərtləri </span>ilə razıyam
            </label>
          </div>
          <div className="mt-10">
          <button className="w-[80%] h-16 font-bold rounded-[5px] bg-[#E9E8EE] text-white transition-all duration-300 hover:bg-[#6A5BCD]">
            Qeydiyyatdan keçin
          </button>
        </div>
        <p className="my-5 text-center w-[80%]">Hesabınız var? o zaman</p>
        <div>
          <button className="w-[80%] h-16 border-2 rounded-[5px] text-[#6A5BCD] border-[#6A5BCD] font-bold transition-all duration-300 hover:bg-[#E9E8EE]" onClick={handleRegisterButtonClick}>
          Daxil ol
          </button>
        </div>
            </div>
          )
        }
        {emailPageVisible && (
          <div>
            <div className="mt-10 block">
              <label className="font-bold text-[#ABA9B7]">Email</label>
              <br />
              <input
                type="email"
                placeholder="Emailinizi daxil edin"
                className="mt-3 h-12 pl-5 bg-[#EFF3FA] w-[80%] rounded-[5px]"
              />
            </div>
            <div className="mt-7">
              <label className="font-bold text-[#ABA9B7]">Şifrə</label>
              <br />
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=" Şifrənizi daxil edin"
                  className="mt-3 h-12 pl-5 bg-[#EFF3FA] w-[80%] rounded-[5px]"
                />
                <button
                  className="text-[#d0cfd6] absolute mt-6 right-24"
                  onClick={handleTogglePassword}
                >
                  {passwordVisible ? (
                    <BiSolidShow className="size-7" />
                  ) : (
                    <BiSolidHide className="size-7" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex justify-between w-[80%] mt-5">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="h-6 w-6" />{" "}
            <label className="text-[#ABA9B7] font-bold text-sm">
              Şifrəni xatırla
            </label>
          </div>
          <a href="" className="font-bold text-sm text-[#6A5BCD]">
            Şifrəmi unutdum
          </a>
        </div>
        <div className="mt-10">
          <button className="w-[80%] h-16 font-bold rounded-[5px] bg-[#E9E8EE] text-white transition-all duration-300 hover:bg-[#6A5BCD]">
            Daxil ol
          </button>
        </div>
        <p className="my-5 text-center w-[80%]">Saytımızda yenisiz? o zaman</p>
        <div>
          <button className="w-[80%] h-16 border-2 rounded-[5px] text-[#6A5BCD] border-[#6A5BCD] font-bold transition-all duration-300 hover:bg-[#E9E8EE]" onClick={handleRegisterButtonClick}>
            Qeydiyyatdan keçin
          </button>
        </div>
          </div>
        )}
        {phonePageVisible && (
          <div>
            <div className="mt-10 block">
              <label className="font-bold text-[#ABA9B7]">Mobil nömrə</label>
              <br />
              <input
                type="tel"
                placeholder="Nömrənizi daxil edin"
                className="mt-3 h-12 pl-5 bg-[#EFF3FA] w-[80%] rounded-[5px]"
              />
            </div>
            <div className="mt-7">
              <label className="font-bold text-[#ABA9B7]">Şifrə</label>
              <br />
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=" Şifrənizi daxil edin"
                  className="mt-3 h-12 pl-5 bg-[#EFF3FA] w-[80%] rounded-[5px]"
                />
                <button
                  className="text-[#d0cfd6] absolute mt-6 right-24"
                  onClick={handleTogglePassword}
                >
                  {passwordVisible ? (
                    <BiSolidShow className="size-7" />
                  ) : (
                    <BiSolidHide className="size-7" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex justify-between w-[80%] mt-5">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="h-6 w-6" />{" "}
            <label className="text-[#ABA9B7] font-bold text-sm">
              Şifrəni xatırla
            </label>
          </div>
          <a href="" className="font-bold text-sm text-[#6A5BCD]">
            Şifrəmi unutdum
          </a>
        </div>
        <div className="mt-10">
          <button className="w-[80%] h-16 font-bold rounded-[5px] bg-[#E9E8EE] text-white transition-all duration-300 hover:bg-[#6A5BCD]">
            Daxil ol
          </button>
        </div>
        <p className="my-5 text-center w-[80%]">Saytımızda yenisiz? o zaman</p>
        <div>
          <button className="w-[80%] h-16 border-2 rounded-[5px] text-[#6A5BCD] border-[#6A5BCD] font-bold transition-all duration-300 hover:bg-[#E9E8EE]" onClick={handleRegisterButtonClick}>
            Qeydiyyatdan keçin
          </button>
        </div>
          </div>
        )}
      
      </div>
    </div>
  );
};

export default Sign_In;
