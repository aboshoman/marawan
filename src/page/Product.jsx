import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../zustand/useStore";

function Product() {
  const products = [
    {
      id: 0,
      image: "src/assets/imgs/imgs/imgs21.jpg",
      category: "أجهزة, ميزان حرارة",
      name: "Object thermometer",
      star: 4.95,
      reveiw: 73,
      price: 175,
    },
    {
      id: 1,
      image: "src/assets/imgs/imgs/imgs28.jpg",
      category: "أجهزة, ميزان حرارة",
      name: "Non-Contact thermometer",
      star: 4.8,
      reveiw: 56,
      price: 295,
    },
    {
      id: 2,
      image: "src/assets/imgs/imgs/imgs47.jpg",
      category: "أجهزة, ميزان حرارة",
      name: "LCD Thermometer",
      star: 4.4,
      reveiw: 27,
      price: 325,
    },
    {
      id: 3,
      image: "src/assets/imgs/imgs/imgs46.jpg",
      category: "أجهزة, ميزان حرارة",
      name: "Non-touch thermometer",
      star: 4.15,
      reveiw: 98,
      price: 350,
    },
    {
      id: 4,
      image: "src/assets/imgs/imgs/imgs11.jpg",
      category: "أقراص , حبوب",
      name: "MORINGA",
      star: 4.35,
      reveiw: 298,
      price: 205,
    },
    {
      id: 5,
      image: "src/assets/imgs/imgs/imgs12.jpg",
      category: "معدات , مستلزمات طبية",
      name: "مناديل معقمة",
      star: 4.85,
      reveiw: 408,
      price: 35,
    },
    {
      id: 6,
      image: "src/assets/imgs/imgs/imgs13.jpg",
      category: "أقراص , حبوب",
      name: "MAGNESIUM",
      star: 4.23,
      reveiw: 38,
      price: 50,
    },
    {
      id: 7,
      image: "src/assets/imgs/imgs/imgs14.jpg",
      category: "أقراص , حبوب",
      name: "AMOXICILLIN 500 MG",
      star: 4.15,
      reveiw: 98,
      price: 97,
    },
    {
      id: 8,
      image: "src/assets/imgs/imgs/imgs15.jpg",
      category: "معدات , مستلزمات طبية",
      name: "ماسك طبي",
      star: 4.1,
      reveiw: 79,
      price: 5,
    },
    {
      id: 9,
      image: "src/assets/imgs/imgs/imgs16.jpg",
      category: "معدات , مستلزمات طبية",
      name: "جوانتي لاتكس",
      star: 4.2,
      reveiw: 108,
      price: 10,
    },
    {
      id: 10,
      image: "src/assets/imgs/imgs/imgs17.jpg",
      category: "معدات , مستلزمات طبية",
      name: "Hand Wash",
      star: 4.1,
      reveiw: 98,
      price: 75,
    },
    {
      id: 11,
      image: "src/assets/imgs/imgs/imgs18.jpg",
      category: "معدات , مستلزمات طبية",
      name: "Hand Sanitizer",
      star: 4.5,
      reveiw: 91,
      price: 80,
    },
    {
      id: 12,
      image: "src/assets/imgs/imgs/imgs19.jpg",
      category: "أقراص , حبوب",
      name: "HEADACHE tablet",
      star: 4.55,
      reveiw: 18,
      price: 46.5,
    },
    {
      id: 13,
      image: "src/assets/imgs/imgs/imgs20.jpg",
      category: "أقراص , حبوب",
      name: "Antibiotic 250mg",
      star: 3.9,
      reveiw: 17,
      price: 28.5,
    },
    {
      id: 14,
      image: "src/assets/imgs/imgs/imgs22.jpg",
      category: "معدات , مستلزمات طبية",
      name: "Bp Checker",
      star: 4.6,
      reveiw: 33,
      price: 390,
    },
    {
      id: 15,
      image: "src/assets/imgs/imgs/imgs23.jpg",
      category: "معدات , مستلزمات طبية",
      name: "glasses",
      star: 4.01,
      reveiw: 8,
      price: 89,
    },
    {
      id: 16,
      image: "src/assets/imgs/imgs/imgs24.jpg",
      category: "أجهزة, ميزان حرارة",
      name: "Infrared thermometer",
      star: 3.7,
      reveiw: 12,
      price: 230,
    },
    {
      id: 17,
      image: "src/assets/imgs/imgs/imgs25.jpg",
      category: "أجهزة, ميزان حرارة",
      name: "جوانتي لاتكس",
      star: 4.9,
      reveiw: 119,
      price: 15,
    },
    {
      id: 18,
      image: "src/assets/imgs/imgs/imgs26.jpg",
      category: "أجهزة, ميزان حرارة",
      name: "ثوب جراحي",
      star: 4.72,
      reveiw: 430,
      price: 120,
    },
    {
      id: 19,
      image: "src/assets/imgs/imgs/imgs27.jpg",
      category: "أجهزة, ميزان حرارة",
      name: "LCD Thermometer",
      star: 4.35,
      reveiw: 149,
      price: 230,
    },
    {
      id: 20,
      image: "src/assets/imgs/imgs/imgs28.jpg",
      category: "أجهزة, ميزان حرارة",
      name: "Object thermometer",
      star: 4.7,
      reveiw: 158,
      price: 210,
    },
    {
      id: 21,
      image: "src/assets/imgs/imgs/imgs29.jpg",
      category: "أقراص , حبوب",
      name: "CALCIUM 600mg + D3",
      star: 4.1,
      reveiw: 120,
      price: 150,
    },
    {
      id: 22,
      image: "src/assets/imgs/imgs/imgs30.jpg",
      category: "أقراص , حبوب",
      name: "VIT E CAPSULES",
      star: 4.2,
      reveiw: 342,
      price: 115,
    },
    {
      id: 23,
      image: "src/assets/imgs/imgs/imgs31.jpg",
      category: "معدات , مستلزمات طبية",
      name: "wibes",
      star: 4.9,
      reveiw: 110,
      price: 40,
    },
    {
      id: 24,
      image: "src/assets/imgs/imgs/imgs32.jpg",
      category: "معدات , مستلزمات طبية",
      name: "wibes",
      star: 4.2,
      reveiw: 30,
      price: 35,
    },
    {
      id: 25,
      image: "src/assets/imgs/imgs/imgs33.jpg",
      category: "معدات , مستلزمات طبية",
      name: "CORONA VIRUS test",
      star: 4.8,
      reveiw: 13490,
      price: 1095,
    },
    {
      id: 26,
      image: "src/assets/imgs/imgs/imgs34.jpg",
      category: "معدات , مستلزمات طبية",
      name: "Hand Sanitizer",
      star: 4.5,
      reveiw: 68,
      price: 75,
    },
    {
      id: 27,
      image: "src/assets/imgs/imgs/imgs35.jpg",
      category: "معدات , مستلزمات طبية",
      name: "Hand Sanitizer",
      star: 4.24,
      reveiw: 93,
      price: 70,
    },
    {
      id: 28,
      image: "src/assets/imgs/imgs/imgs36.jpg",
      category: "أجهزة , اشعة و معدات",
      name: "Nebuliser Esperanza",
      star: 4.25,
      reveiw: 80,
      price: 980,
    },
    {
      id: 29,
      image: "src/assets/imgs/imgs/imgs37.jpg",
      category: "معدات , مستلزمات طبية",
      name: "Bp Checker",
      star: 4.87,
      reveiw: 728,
      price: 230,
    },
    {
      id: 30,
      image: "src/assets/imgs/imgs/imgs38.jpg",
      category: "معدات , مستلزمات طبية",
      name: "blood test",
      star: 4.95,
      reveiw: 382,
      price: 15,
    },
    {
      id: 31,
      image: "src/assets/imgs/imgs/imgs39.jpg",
      category: "أجهزة , اشعة و معدات",
      name: "Patient Mnitor",
      star: 4.05,
      reveiw: 208,
      price: 12000,
    },
    {
      id: 32,
      image: "src/assets/imgs/imgs/imgs40.jpg",
      category: "معدات , مستلزمات طبية",
      name: "Aid Kit Emergency Box",
      star: 4.75,
      reveiw: 9,
      price: 730,
    },
    {
      id: 33,
      image: "src/assets/imgs/imgs/imgs41.jpg",
      category: "معدات , مستلزمات طبية",
      name: "رباط ضاغط",
      star: 4.0,
      reveiw: 38,
      price: 35,
    },
    {
      id: 34,
      image: "src/assets/imgs/imgs/imgs42.jpg",
      category: "معدات , مستلزمات طبية",
      name: "سماعة طبية",
      star: 3.58,
      reveiw: 18,
      price: 95,
    },
    {
      id: 35,
      image: "src/assets/imgs/imgs/imgs43.jpg",
      category: "معدات , مستلزمات طبية",
      name: "Baby Check",
      star: 4.15,
      reveiw: 2031,
      price: 10,
    },
    {
      id: 36,
      image: "src/assets/imgs/imgs/imgs44.jpg",
      category: "معدات , مستلزمات طبية",
      name: "ماسك طبي",
      star: 2.9,
      reveiw: 349,
      price: 30,
    },
    {
      id: 37,
      image: "src/assets/imgs/imgs/imgs45.jpg",
      category: "معدات , مستلزمات طبية",
      name: "ماسك طبي",
      star: 4.5,
      reveiw: 970,
      price: 5,
    },
  ];
  localStorage.setItem("products", JSON.stringify(products));
  const [inputData, setInputData] = useState("");
  const setProduct = useStore((state) => state.setProduct);
  const searchProduct = products.filter((product) => {
    return product.name.toLowerCase().includes(inputData.toLowerCase());
  });
  return (
    <div className="container mx-auto text-center">
      <p className="bg-[url('src/assets/imgs/imgs/imgs04.png')] bg-center bg-no-repeat p-10 text-xl font-bold">
        قائمة الأصناف
      </p>
      <input
        onChange={(e) => setInputData(e.target.value)}
        type="text"
        className="p-4 text-center text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 my-10 rounded-full py-2 px-20 focus:outline-none"
        placeholder="ابحث عن صنف"/>
      <div className="container mx-auto flex flex-wrap justify-center">
        {inputData == ""
          ? products.map((product) => (
              <div key={product.id} className="w-72 m-4 mb-10">
                <div className="text-center">
                  <img src={product.image} className="" alt="..." />
                  <div className="text-gray-500 ">{product.category}</div>
                  <h6 className="card-title">{product.name}</h6>
                  <div className="flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-yellow-300 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
                    </svg>
                    <p className="ms-2 text-sm font-bold text-gray-900 dark:text-slate-600">
                      {product.star}
                    </p>
                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <a className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-slate-600">
                      {product.reveiw} reviews
                    </a>
                  </div>
                  <h3 className="price mb-3 text-sky-700">
                    {product.price} L.E
                  </h3>
                  <Link
                    onClick={() => setProduct(product.id)}
                    to={"/payment"}
                    className="btn btn-primary bg-blue-500 px-24 py-2 rounded-lg hover:bg-blue-600 text-white">
                    اشتري الان
                  </Link>
                </div>
              </div>
            ))
          : searchProduct.map((product) => (
              <div key={product.id} className="w-72 m-4 mb-10">
                <div className="text-center">
                  <img src={product.image} className="" alt="..." />
                  <div className="text-gray-500 ">{product.category}</div>
                  <h6 className="card-title">{product.name}</h6>
                  <div className="flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-yellow-300 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
                    </svg>
                    <p className="ms-2 text-sm font-bold text-gray-900 dark:text-slate-600">
                      {product.star}
                    </p>
                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <a className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-slate-600">
                      {product.reveiw} reviews
                    </a>
                  </div>
                  <h3 className="price mb-3 text-sky-700">
                    {product.price} L.E
                  </h3>
                  <Link
                    onClick={() => setProduct(product.id)}
                    to={"/payment"}
                    className="btn btn-primary bg-blue-500 px-24 py-2 rounded-lg hover:bg-blue-600 text-white">
                    اشتري الان
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Product;
