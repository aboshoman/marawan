import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#ffffff] w-full py-3">
      <div className="flex justify-between">
        <div className="logo w-40 ms-20">
          <img
            className="w-full cursor-pointer"
            src="src/assets/imgs/1.png"
            alt=""
          />
        </div>
        <div className="ml-4 me-20">
          <Link
            to={"/"}
            className="font-bold  text-lg ml-5 hover:text-sky-400 transition-all"
          >
            الصفحة الرئسية
          </Link>
          <Link
            to={"/product"}
            className="font-bold text-lg ml-5 hover:text-sky-400 transition-all"
          >
            الأدوية
          </Link>
          <Link
            to={"/payment"}
            className="font-bold text-lg ml-5 hover:text-sky-400 transition-all"
          >
            payment
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
