import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuLogo from "../assets/MenuLogo.png";
import Category from "../assets/Category.png";
import UploadIcon from "../assets/Chart.png";
import Ticket from "../assets/Ticket.png";
import Schedule from "../assets/Schedule.png";
import Calendar from "../assets/Calendar.png";
import Notification from "../assets/Notification.png";
import Setting from "../assets/Setting.png";

const Navbar = () => {
  //const [nav, setNav] = useState(false);

  const menuItems = [
    {
      icon: <img src={Category} alt="Category" size={24} className="mr-4" />,
      text: "Dashboard",
    },
    {
      icon: (
        <img src={UploadIcon} alt="UploadIcon" size={24} className="mr-4" />
      ),
      text: "Upload",
    },
    {
      icon: <img src={Ticket} alt="Ticket" size={24} className="mr-4" />,
      text: "Invoice",
    },
    {
      icon: <img src={Schedule} alt="Schedule" size={24} className="mr-4" />,
      text: "Schedule",
    },
    {
      icon: <img src={Calendar} alt="Calendar" size={24} className="mr-4" />,
      text: "Calendar",
    },
    {
      icon: (
        <img src={Notification} alt="Notification" size={24} className="mr-4" />
      ),
      text: "Notification",
    },
    {
      icon: <img src={Setting} alt="Setting" size={24} className="mr-4" />,
      text: "Settings",
    },
  ];

  return (
    <div className="flex justify-between items-center p-4 shadow-sm">
      {/* Left side */}
      {/* <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
      </div>     */}

      {/* Mobile Menu */}
      {/* Overlay */}
      {/* {!nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )} */}

      {/* Side drawer menu */}
      {/* <div
        className={
          !nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      > */}
      <div className="fixed top-0 left-0 h-screen bg-white z-10 duration-300">
        <h2 className="p-4">
          <span className="font-semibold font-[Nunito] text-[24px] text-[#030229]">Base</span>
        </h2>
        <nav>
          <ul className="flex flex-col text-[#9A9AA9]">
            {menuItems.map(({ icon, text }, index) => {
              return (
                <div key={index} className=" py-4">
                  <li className="font-semibold font-[Nunito] text-[16px] flex cursor-pointer mx-auto p-2 pl-4 hover:text-[#605BFF] hover:bg-[rgb(172,169,255)] hover:bg-[linear-gradient(90deg,_rgba(172,169,255,1)_0%,_rgba(255,255,255,1)_14%,_rgba(255,255,255,1)_100%)]">
                    {icon} {text}
                  </li>
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
