import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
      <footer class="bg-gray-800">
        {/* <!-- navbar section --> */}
        <div class="flex justify-between items-center px-4 py-2">
          <div class="flex items-center">
            <a href="tel:01114996232" class="text-white mr-4">
              <i class="fas fa-phone"></i> (+20) 011 1499 62 32
            </a>
            <a href="mailto:shefaamanger@gmail.com" class="text-white">
              <i class="fas fa-envelope"></i> shefaa@gmail.com
            </a>
          </div>
          {/* <!-- social icons  --> */}
          <div class="flex items-center">
            <a href="#" class="text-white mr-2">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" class="text-white mr-2">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="text-white mr-2">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="text-white">
              <i class="fab fa-google-plus-g"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
