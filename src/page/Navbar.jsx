import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to={"/product"}>product</Link>
        <nav className="bg-gray-900 w-full py-4">
          <div className="flex justify-center items-center">
            <div className="flex items-center">
              <div className="logo w-40 mr-80">
                <img className="w-full" src="src/assets/imgs/1.png" alt="" />
              </div>
              <div className="links ml-4 ">
                <Link to={"/"} className="text-white ml-5">الصفحة الرئسية</Link>
                <Link to={"/"} className="text-white ml-5">العروض</Link>
                <Link to={"/"} className="text-white ml-5">الأخبار</Link>
                <Link to={"/"} className="text-white ml-5">الأصناف</Link>
                <Link to={"/"} className="text-white ml-5">تواصل معنا</Link>
              </div>
              {/* <!-- links section --> */}
            </div>
          </div>
        </nav>
    </div>
  );
}

export default Navbar;
