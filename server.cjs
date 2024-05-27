const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3005;

app.use(bodyParser.json());
app.use(cors());

let products = [
  {
    id: 1,
    city: "Bakı",
    date: "12.03.2024",
    name: "Şirkətə satış meneceri axtarılır",
    unit: "AZN",
    image:
      "https://i.pinimg.com/564x/d6/7c/be/d67cbea3711a42d7efc9cb5c234f8dce.jpg",
    price: "700",
    category: "Vakansiyalar",
  },
  {
    id: 2,
    city: "Sumqayıt",
    date: "19.03.2024",
    name: "Yükdaşıma xidməti",
    unit: "",
    image:
      "https://i.pinimg.com/564x/46/7f/d4/467fd489422e345c357387cb068a9f14.jpg",
    price: "razılaşma yolu ilə",
    category: "Nəqliyyat",
  },
  {
    id: 3,
    city: "Bakı",
    date: "24.03.2024",
    name: "Santexnik xidməti",
    unit: "AZN",
    image:
      "https://i.pinimg.com/564x/6a/6e/a9/6a6ea97aecad4c7479b21ae87c85ed58.jpg",
    price: "250",
    category: "Xidmətlər",
  },
  {
    id: 4,
    city: "Gəncə",
    date: "11.02.2024",
    name: "Pişik",
    unit: "AZN",
    image:
      "https://i.pinimg.com/564x/96/5e/0c/965e0c4a1b2e8d501473a1cc32e033f2.jpg",
    price: "300",
    category: "Heyvanlar",
  },
  {
    id: 5,
    city: "Sumqayıt",
    date: "24.04.2024",
    name: "Iphone 15 PRO",
    unit: "AZN",
    image:
      "https://i.pinimg.com/736x/ac/fb/b4/acfbb45895d2bbd5a8f3fd742bfdb865.jpg",
    price: "3000",
    category: "Elektronika",
  },
  {
    id: 6,
    city: "Bakı",
    date: "12.03.2024",
    name: "BMW",
    unit: "AZN",
    image:
      "https://i.pinimg.com/564x/27/c9/7b/27c97b542abfe5dcf5595c747b48b80a.jpg",
    price: "33000",
    category: "Nəqliyyat",
  },
  {
    id: 7,
    city: "Abşeron",
    date: "28.04.2024",
    name: "Oyuncaq",
    unit: "AZN",
    image:
      "https://i.pinimg.com/564x/aa/48/42/aa4842b8d18976b45761de5f2fa2abe0.jpg",
    price: "15",
    category: "Uşaq",
  },
  {
    id: 8,
    city: "Quba",
    date: "10.04.2024",
    name: "Saat",
    unit: "AZN",
    image:
      "https://i.pinimg.com/564x/e8/ad/2b/e8ad2b4b7b524279f864c6e7e808459a.jpg",
    price: "900",
    category: "Şəxsi əşyalar",
  },
  {
    id: 9,
    city: "Sumqayıt",
    date: "10.01.2024",
    name: "Bağ alətləri",
    unit: "",
    image:
      "https://i.pinimg.com/564x/60/9a/d2/609ad268d6aefaf0ce3f005ef7f33c17.jpg",
    price: "razılaşma yolu ilə",
    category: "Ev və bağ",
  },
  {
    id: 10,
    city: "Gəncə",
    date: "02.02.2024",
    name: "Soyuducu",
    unit: "AZN",
    image:
      "https://i.pinimg.com/564x/ed/11/42/ed1142ff9d35d903754028f548653aff.jpg",
    price: "1700",
    category: "Elektronika",
  },
  {
    id: 11,
    city: "Bakı",
    date: "17.03.2024",
    name: "Ayaqqabı",
    unit: "AZN",
    image:
      "https://i.pinimg.com/564x/be/bc/39/bebc39387a737244809a7ed2a0c57b85.jpg",
    price: "150",
    category: "Moda",
  },
  {
    id: 12,
    city: "Qəbələ",
    date: "19.03.2024",
    name: "Villa",
    unit: "AZN",
    image:
      "https://i.pinimg.com/564x/96/9e/29/969e29466c4040aa181f7d80e6cac331.jpg",
    price: "1500000",
    category: "Daşınmaz əmlak",
  },
  {
    id: 13,
    city: "Sumqayıt",
    date: "10.04.2024",
    name: "Basketbol topu",
    unit: "AZN",
    image:
      "https://i.pinimg.com/564x/8b/85/a6/8b85a6f24858d682d843dec83d2ae200.jpg",
    price: "60",
    category: "Hobbi",
  },
  {
    id: 14,
    city: "Bakı",
    date: "18.02.2024",
    name: "Hazır biznes",
    unit: "",
    image:
      "https://i.pinimg.com/564x/3f/b8/d4/3fb8d4fc28943b6d27a5ab75a71b7166.jpg",
    price: "razılaşma yolu ilə",
    category: "Biznes",
  },
  {
    id: 15,
    city: "Bakı",
    date: "29.04.2024",
    name: "Mercedes",
    unit: "USD",
    email: "ruhidnovruzov2@gmail.com",
    image:
      "https://turbo.azstatic.com/uploads/full/2024%2F02%2F28%2F09%2F06%2F30%2Feb881988-804c-4fd9-b781-e536482009f6%2F32444_OikwS_ZIYofkU92pw8zouQ.jpg",
    price: "200000",
    number: "0507796099",
    status: "yeni",
    category: "Nəqliyyat",
    wp_number: "0507796099",
    description: "Test",
    seller_name: "Ruhid Novruzov",
    sub_category: "Avtomobil",
  },
  {
    id: 16,
    city: "Sumqayıt",
    date: "29.04.2024",
    name: "Mühasibat",
    unit: "USD",
    email: "ruhidnovruzov0@gmail.com",
    image:
      "https://i.pinimg.com/564x/5b/5d/c0/5b5dc0a1a25a4af5ea0730867593d9a2.jpg",
    price: "219",
    number: "0552716171",
    status: "yeni",
    category: "Vakansiyalar",
    wp_number: "0552716171",
    description: "Test",
    seller_name: "Tural Babayev",
    sub_category: "Vakansiya",
  },
  {
    id: 17,
    city: "Sumqayıt",
    date: "01.05.2024",
    name: "Villa",
    unit: "AZN",
    email: "ruhidnovruzov4@gmail.com",
    image:
      "https://i.pinimg.com/564x/0a/73/be/0a73bed166891727fd3e99586d4b51a8.jpg",
    price: "2000000",
    number: "0507796099",
    status: "yeni",
    category: "Daşınmaz əmlak",
    wp_number: "0507796099",
    description: "Test",
    seller_name: "Ruhid Novruzov",

    sub_category: "Villa",
  },
  {
    id: 18,
    city: "Bakı",
    date: "16.05.2024",
    name: "Apple Watch",
    unit: "AZN",
    email: "ruhidnovruzov4@gmail.com",
    image:
      "https://i.pinimg.com/564x/00/22/a9/0022a9eb283ba672c92cdc2db32de556.jpg",
    price: "900",
    number: "0507796099",
    status: "yeni",
    category: "Moda",
    wp_number: "507796097",
    description: "This is Apple Watch",
    seller_name: "Ruhid Novruzov",

    sub_category: "Saat",
  },
  {
    id: 19,
    city: "Bakı",
    date: "16.05.2024",
    name: "Kreslo",
    unit: "AZN",
    email: "ruhidnovruzov4@gmail.com",
    image:
      "https://i.pinimg.com/564x/c5/7b/a2/c57ba221a0b15859d591dd1161ee3486.jpg",
    price: "350",
    number: "0507796099",
    status: "işlənmiş",
    category: "Ev və bağ",
    wp_number: "507796096",
    description: "Kreslo",
    seller_name: "Ruhid Novruzov",

    sub_category: "Mebel",
  },
  {
    id: 20,
    city: "Bakı",
    date: "16.05.2024",
    name: "Kreslo",
    unit: "AZN",
    email: "ruhidnovruzov4@gmail.com",
    image:
      "https://i.pinimg.com/564x/c5/7b/a2/c57ba221a0b15859d591dd1161ee3486.jpg",
    price: "350",
    number: "0507796099",
    status: "işlənmiş",
    category: "Ev və bağ",
    wp_number: "0507796099",
    description: "Yaxşı vəziyyətdə kreslo)",
    seller_name: "Ruhid Novruzov",

    sub_category: "Mebel",
  },
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.post("/api/products", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    city: req.body.city,
    date: req.body.date,
    unit: req.body.unit,
    email: req.body.email,
    price: req.body.price,
    number: req.body.number,
    status: req.body.status,
    category: req.body.category,
    wp_number: req.body.wp_number,
    seller_name: req.body.seller_name,
    sub_category: req.body.sub_category,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.delete("/api/products/:id", (req, res) => {
  const productId = Number(req.params.id);
  products = products.filter((product) => product.id !== productId);
  res.status(200).json({ message: "Product deleted" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server works in ${port} port`);
});
