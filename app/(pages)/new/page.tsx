"use client";
import "./new.css";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Product {
  name: string;
  city: string;
  price: string;
  category: string;
  unit: string;
  seller_name: string;
  number: string;
  wp_number: string;
  email: string;
  sub_category: string;
  status: string;
  description: string;
  date: string;
  image: string;
}

const getCurrentDate = () => {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = currentDate.getFullYear();
  return `${day}.${month}.${year}`;
};

function New() {
  const [errorMessage, setErrorMessage] = useState("");
  const [existingData, setExistingData] = useState<Product[]>([]);
  const currentDate = getCurrentDate();

  const [formData, setFormData] = useState<Product>({
    name: "",
    city: "",
    price: "",
    category: "Seç",
    unit: "AZN",
    seller_name: "",
    number: "",
    wp_number: "",
    email: "",
    sub_category: "",
    status: "",
    description: "",
    date: currentDate,
    image: "",
  });

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  const fetchDataFromAPI = async () => {
    try {
      const response = await fetch("http://localhost:3005/api/products");
      if (response.ok) {
        const data = await response.json();
        setExistingData(data);
      } else {
        console.error("API-den melumat almaq olmadi");
      }
    } catch (error) {
      console.error("Bir xeta oldu", error);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    for (const key in formData) {
      if (formData[key as keyof Product] === "") {
        setErrorMessage("Lütfən bütün yerləri doldurun.");
        return;
      }
    }

    try {
      const response = await fetch("http://localhost:3005/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Məhsul uğurla əlavə edildi");
        setErrorMessage("");
        setFormData({
          name: "",
          city: "",
          price: "",
          category: "Seç",
          unit: "AZN",
          seller_name: "",
          number: "",
          wp_number: "",
          email: "",
          sub_category: "",
          status: "",
          description: "",
          date: currentDate,
          image: "",
        });
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || "Error");
        toast.error(errorData.error || "Error");
      }
    } catch (error) {
      console.error("error", error);
      setErrorMessage("Error");
      toast.error("Error");
    }
  };

  return (
    <div className="bg-[#F6F8FE] pb-28">
      <div className="w-[90%] m-auto pb-10">
        <h1 className="text-[25px] font-bold pt-20">Yeni elan yarat</h1>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div className="mt-10">
          <div className="bg-[#F0F1FAD9] p-8">
            <p className="text-[20px] text-[#686877]">Qaydalarımız</p>
            <ol className="list-decimal ml-9 text-[#686877] mt-3 flex flex-col gap-2">
              <li>Eyni elanı bir neçə dəfə təqdim etməyin</li>
              <li>
                “Şəkil” lərinizdə telefon nömrələri, e-mail və ya sayt ünvanları
                qeyd etməyin. Onları “şəxsi məlumatlar” bölməsində qeyd edə
                bilərsiniz
              </li>
              <li>
                “Elanın adı” bölməsində qiyməti daxil etməyin. Qiymət üçün sizə
                ayırdığımız bölməmiz var
              </li>
              <li>Qadağan olunmuş məhsulların siyahısı</li>
              <li>Saytın tam qaydaları</li>
            </ol>
          </div>
        </div>
        <div className="pt-10">
          <h1 className="text-[25px] max-sm:text-[20px] font-bold">
            Şəxsi məlumatlar
          </h1>
          <div className="personal_info">
            <form
              onSubmit={handleSubmit}
              className="flex flex-wrap w-ful gap-10 mt-10"
            >
              <div className="input">
                <label>Ad Soyad</label> <br />
                <input
                  type="text"
                  name="seller_name"
                  value={formData.seller_name}
                  onChange={handleInputChange}
                  placeholder="Ad soyad"
                />
              </div>
              <div className="input">
                <label>Telefon nömrəniz</label> <br />
                <input
                  type="number"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  placeholder="(+994) XX XXX XX XX"
                />
              </div>
              <div className="input">
                <label>Email</label> <br />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                />
              </div>
              <div className="input">
                <label>Whatsapp nömrəniz </label> <br />
                <input
                  type="number"
                  name="wp_number"
                  value={formData.wp_number}
                  onChange={handleInputChange}
                  placeholder="Nömrə"
                />
              </div>
            </form>
          </div>

          <div className="product_info ">
            <h1 className="text-[25px] font-bold max-sm:text-[20px]">
              Məhsul haqqında məlumatlar
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-wrap w-ful gap-10 mt-10"
            >
              <div className="input">
                <label className="">Elanın adı</label> <br />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Elanın adı"
                />
              </div>

              <div className="input">
                <label>Kateqoriya</label> <br />
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="h-[50px] w-[70%] max-sm:w-full"
                >
                  <option value="">Seç</option>
                  <option value="Ev və bağ">Ev və bağ</option>
                  <option value="Elektronika">Elektronika və texnika</option>
                  <option value="Daşınmaz əmlak">Daşınmaz əmlak</option>
                  <option value="Nəqliyyat">Nəqliyyat</option>
                  <option value="Şəxsi əşyalar">Şəxsi əşyalar</option>
                  <option value="Moda">Moda və stil</option>
                  <option value="Hobbi">Hobbi,asudə</option>
                  <option value="Uşaq">Uşaq aləmi</option>
                  <option value="Heyvan">Heyvan</option>
                  <option value="Xidmətlər">Xidmətlər</option>
                  <option value="Vakansiyalar">Vakansiyalar</option>
                  <option value="Digər">Digər</option>
                </select>
              </div>

              <div className="input">
                <label className="">Alt kateqoriya</label> <br />
                <input
                  type="text"
                  name="sub_category"
                  value={formData.sub_category}
                  onChange={handleInputChange}
                  placeholder="Alt kateqoriya"
                />
              </div>

              <div className="input">
                <label> Şəhər</label> <br />
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Şəhər"
                />
              </div>

              <div className="input">
                <label>Vəziyyəti</label> <br />
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="h-[50px] w-[70%] max-sm:w-full"
                >
                  <option value="işlənmiş">İşlənmiş</option>
                  <option value="yeni">Yeni</option>
                </select>
              </div>

              <div className="input relative">
                <label>Qiymət</label> <br />
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="Qiymət"
                />
                <select
                  name="unit"
                  value={formData.unit}
                  onChange={handleInputChange}
                  className="h-[50px] w-16 absolute max-sm:right-0 right-[30%] bottom-0"
                >
                  <option value="USD">USD</option>
                  <option value="AZN">AZN</option>
                  <option value="razılaşma yolu ilə">razılaşma yolu ilə</option>
                </select>
              </div>

              <div className="input">
                <label>Ətraflı</label> <br />
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Ətraflı"
                />
              </div>

              <div className="input">
                <label>Tarix</label> <br />
                <input type="text" readOnly name="date" value={formData.date} />
                <div className="mt-16">
                  <label>Şəkil</label> <br />
                  <input
                    type="url"
                    name="image"
                    placeholder="URL"
                    value={formData.image}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="w-[71%] max-sm:w-full relative">
                <button
                  type="submit"
                  className="bg-[#6A5BCD] max-sm:w-full w-[20%] h-14 rounded-[5px] text-white absolute right-0"
                >
                  Yeni elan yarat
                </button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default New;
