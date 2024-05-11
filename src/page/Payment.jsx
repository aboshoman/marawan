import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Product from "./Product";
import { useStore } from "../zustand/useStore";

function Payment() {
  const [productRefresh, setProductRefresh] = useState(false);

  const products = JSON.parse(localStorage.getItem("products"));
  const productId = useStore((state) => state.productId);
  localStorage.setItem("product", JSON.stringify(products[productId]));
  const product = JSON.parse(localStorage.getItem("product"));
  useEffect(() => {  if (window.performance) {
    if (performance.navigation.type == 1) {
      setProductRefresh(true)
    }
  }}, []);

  return (
    <div className="container flex justify-center items-center w-full mt-24 bg-white">
      {productRefresh ? (
        <div className="justify-around flex">
          <div className="col-md-6">
            <div className=" bg-gray-100 h-auto mb-56 mx-16">
              <div>
                <div className="">
                  <div className="p-0" id="headingTwo">
                    <h2 className="mb-0">
                      <button
                        className="leading-4 text-left drop-shadow p-3 rounded-none border-b-0"
                        type="button"
                        data-toggle="#"
                        data-target="##Two"
                        aria-expanded="false"
                        aria-controls="#Two"
                      >
                        <div className="flex items-center justify-around ml-6 w-64 px-5">
                          <span>Paypal</span>
                          <img
                            src="src/assets/imgs/imgs/paypal.png"
                            width={"40PX"}
                          />
                        </div>
                      </button>
                    </h2>
                  </div>
                  <div className="flex justify-around items-center">
                    <input
                      type="text"
                      className="px-10 text-center py-3 mb-6"
                      placeholder="Paypal email"
                    />
                  </div>
                </div>

                <div>
                  <div className="p-0">
                    <h2 className="mb-0" />
                    <div className="flex items-center justify-around">
                      <span>Credit card</span>
                      <div className="flex ">
                        <img src="src/assets/imgs/imgs/visa.png" width={40} />
                        <img src="src/assets/imgs/imgs/Mcard.png" width={40} />
                        <img src="src/assets/imgs/imgs/stripe.png" width={40} />
                      </div>
                    </div>
                    <button />
                    <h2 />
                  </div>

                  <div className=" grid justify-around items-center text-center">
                    <span className="font-weight-normal card-text">
                      Card Number
                    </span>
                    <div className="input">
                      <i className="fa fa-credit-card"></i>
                      <input
                        type="text"
                        className="px-6 py-2 text-center font-mono"
                        placeholder="0000 0000 0000 0000"
                        maxLength={16}
                      />

                      <div className="row mt-3 mb-3">
                        <div className="col-md-6">
                          <span className="font-weight-normal card-text">
                            Expiry Date
                          </span>
                          <div className="input">
                            <i className="fa fa-calendar"></i>
                            <input
                              type="text"
                              className="px-6 py-2 text-center"
                              placeholder="MM/YY"
                              maxLength={5}
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <span className="font-weight-normal card-text">
                            CVC/CVV
                          </span>
                          <div className="input">
                            <i className="fa fa-lock"></i>
                            <input
                              type="text"
                              className="px-6 py-2 text-center"
                              placeholder="000"
                              maxLength={3}
                            />
                          </div>
                        </div>
                      </div>

                      <span className=" text-gray-500 text-sm">
                        <i className="fa fa-lock"></i> Your transaction is
                        secured with ssl certificate
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div dir="rtl" className="bg-gray-100">
              <hr className="mt-0 line" />
              <div className="w-72 m-4 mb-10">
                <div className="card text-center">
                  <img src={product.image} className="card-img-top" alt="..." />
                  <div className="text-gray-500 ">{product.category}</div>
                  <h6 className="card-title">{product.name}</h6>
                  {/* <!-- STAR RATING  --> */}
                  <div className="flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-yellow-300 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
                    </svg>
                    <p className="ms-2 text-sm font-bold text-gray-900 dark:text-slate-600">
                      {product.star}
                    </p>
                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <a className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-slate-600">
                      {product.reveiw}
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <div className="flex justify-between mb-2">
                  <span>سعر الصنف</span>
                  <span>{product.price}-</span>
                </div>
              </div>

              <hr className="mt-0 line" />

              <div className="p-3 flex justify-between">
                <div className="flex flex-column">
                  <span>الاجمالي</span>
                </div>
                <span>${products.price}</span>
              </div>

              <div className="p-3 text-center">
                <button className="btn btn-primary px-32 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">
                  تأكيد
                </button>
                <div className="text-center text-blue-800 decoration-slate-200 hover:text-blue-950 mt-1">
                  <a href="#">هل لديك برومو خصم </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : productId == -1 ? (
        <div className="h-screen">
          <h2 className="text-4xl"> Please select item </h2>
        </div>
      ) : (
        <div className="justify-around flex">
          <div className="col-md-6">
            <div className=" bg-gray-100 h-auto mb-56 mx-16">
              <div>
                <div className="">
                  <div className="p-0" id="headingTwo">
                    <h2 className="mb-0">
                      <button
                        className="leading-4 text-left drop-shadow p-3 rounded-none border-b-0"
                        type="button"
                        data-toggle="#"
                        data-target="##Two"
                        aria-expanded="false"
                        aria-controls="#Two"
                      >
                        <div className="flex items-center justify-around ml-6 w-64 px-5">
                          <span>Paypal</span>
                          <img
                            src="src/assets/imgs/imgs/paypal.png"
                            width={"40PX"}
                          />
                        </div>
                      </button>
                    </h2>
                  </div>
                  <div className="flex justify-around items-center">
                    <input
                      type="text"
                      className="px-10 text-center py-3 mb-6"
                      placeholder="Paypal email"
                    />
                  </div>
                </div>

                <div>
                  <div className="p-0">
                    <h2 className="mb-0" />
                    <div className="flex items-center justify-around">
                      <span>Credit card</span>
                      <div className="flex ">
                        <img src="src/assets/imgs/imgs/visa.png" width={40} />
                        <img src="src/assets/imgs/imgs/Mcard.png" width={40} />
                        <img src="src/assets/imgs/imgs/stripe.png" width={40} />
                      </div>
                    </div>
                    <button />
                    <h2 />
                  </div>

                  <div className=" grid justify-around items-center text-center">
                    <span className="font-weight-normal card-text">
                      Card Number
                    </span>
                    <div className="input">
                      <i className="fa fa-credit-card"></i>
                      <input
                        type="text"
                        className="px-6 py-2 text-center font-mono"
                        placeholder="0000 0000 0000 0000"
                        maxLength={16}
                      />

                      <div className="row mt-3 mb-3">
                        <div className="col-md-6">
                          <span className="font-weight-normal card-text">
                            Expiry Date
                          </span>
                          <div className="input">
                            <i className="fa fa-calendar"></i>
                            <input
                              type="text"
                              className="px-6 py-2 text-center"
                              placeholder="MM/YY"
                              maxLength={5}
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <span className="font-weight-normal card-text">
                            CVC/CVV
                          </span>
                          <div className="input">
                            <i className="fa fa-lock"></i>
                            <input
                              type="text"
                              className="px-6 py-2 text-center"
                              placeholder="000"
                              maxLength={3}
                            />
                          </div>
                        </div>
                      </div>

                      <span className=" text-gray-500 text-sm">
                        <i className="fa fa-lock"></i> Your transaction is
                        secured with ssl certificate
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div dir="rtl" className="bg-gray-100">
              <hr className="mt-0 line" />
              <div className="w-72 m-4 mb-10">
                <div className="card text-center">
                  <img
                    src={products[productId].image}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="text-gray-500 ">
                    {products[productId].category}
                  </div>
                  <h6 className="card-title">{products[productId].name}</h6>
                  {/* <!-- STAR RATING  --> */}
                  <div className="flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-yellow-300 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
                    </svg>
                    <p className="ms-2 text-sm font-bold text-gray-900 dark:text-slate-600">
                      {products[productId].star}
                    </p>
                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <a className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-slate-600">
                      {products[productId].reveiw}
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <div className="flex justify-between mb-2">
                  <span>سعر الصنف</span>
                  <span>{products[productId].price}-</span>
                </div>
              </div>

              <hr className="mt-0 line" />

              <div className="p-3 flex justify-between">
                <div className="flex flex-column">
                  <span>الاجمالي</span>
                </div>
                <span>${products[productId].price}</span>
              </div>

              <div className="p-3 text-center">
                <button className="btn btn-primary px-32 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">
                  تأكيد
                </button>
                <div className="text-center text-blue-800 decoration-slate-200 hover:text-blue-950 mt-1">
                  <a href="#">هل لديك برومو خصم </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
