import React from "react";
import Navbar from "./Navbar";
import FileUploader from "./FileUploader";

function Upload() {
  return (
    <div className="md:flex md:flex-row  flex-col h-screen bg-[#F8FAFF]">
      <div className="md:w-[20%] lg:w-[15%] bg-white flex flex-col">
        <Navbar />
      </div>
      <div className="md:w-[80%] lg:w-[85%] md:px-9"><FileUploader /></div>
    </div>
  );
}

export default Upload;
