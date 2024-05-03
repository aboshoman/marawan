import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
      <footer className="bg-gray-800">
        {/* <!-- navbar section --> */}
        <div className="flex justify-evenly items-center px-4 py-2">
          <div className="flex items-center ">
            <a href="tel:01114996232" className="text-white mr-7">
              <i className="fas fa-phone"></i> (+20) 011 1499 62 32
            </a>
        <p className="text-muted mb-0 py-2 text-slate-400">&copy; 2024 osimTeam All risghts reserved.</p>
            <a href="mailto:shefaamanger@gmail.com" className="text-white">
              <i className="fas fa-envelope mx-5"></i> shefaa@gmail.com
            </a>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default Layout;
