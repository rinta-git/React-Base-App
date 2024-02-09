import React from "react";
import logo from "../assets/Ellipse__Upload.png";
import logoStrike from "../assets/strike_upload.png";
import Navbar from "./Navbar";

function Upload() {
  return (
    <div className="flex h-screen bg-[#F8FAFF]">
      <div className="w-[15%] border border-black bg-white flex flex-col">
        <Navbar />
      </div>
      <div className="w-[85%]"></div>
    </div>
  );
}

export default Upload;
