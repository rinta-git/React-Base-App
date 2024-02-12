import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import notification from "../assets/notification_sm.png";
import profile from "../assets/profile.png";
import UploadIcon from "../assets/Chart.png";
import { MdDashboard } from "react-icons/md";
import { HiMiniTicket } from "react-icons/hi2";
import { RiFileList2Fill, RiSettings3Fill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { IoNotifications } from "react-icons/io5";
import MenuLogo from "../assets/MenuLogo.png";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const currentPath = useLocation();
  console.log(currentPath.pathname);
  const toggleMenu = () => {
    setNav(!nav);
  };
  const menuItems = [
    {
      path: "/dashboard",
      icon: <MdDashboard size={24} className="mr-4" />,
      text: "Dashboard",
    },
    {
      path: "/upload",
      icon: (
        <img src={UploadIcon} alt="UploadIcon" size={24} className="mr-4 " />
      ),
      text: "Upload",
    },
    {
      path: "/invoice",
      icon: <HiMiniTicket size={24} className="mr-4" />,
      text: "Invoice",
    },
    {
      path: "/schedule",
      icon: <RiFileList2Fill size={24} className="mr-4 rounded-xl" />,
      text: "Schedule",
    },
    {
      path: "/calendar",
      icon: <SlCalender size={24} className="mr-4 rounded-sm" />,
      text: "Calendar",
    },
    {
      path: "/notification",
      icon: <IoNotifications size={24} className="mr-4" />,
      text: "Notification",
    },
    {
      path: "/settings",
      icon: <RiSettings3Fill size={24} className="mr-4" />,
      text: "Settings",
    },
  ];

  useEffect(() => {
    window.innerWidth <= 768 ? setNav(false) : setNav(true);
  }, []);
  return (
    <div className="md:h-screen bg-white">
      <div className="md:flex grid grid-cols-12 items-center m-4">
        <div className="sm:col-span-10 col-span-8 flex  items-center">
          <AiOutlineMenu
            className="md:hidden block cursor-pointer mr-4"
            onClick={toggleMenu}
          />
          <div
            className="bg-cover bg-no-repeat md:h-[42px] md:w-[42px] h-[30px] w-[30px]"
            style={{ backgroundImage: `url(${MenuLogo})` }}
          ></div>
          <h2 className="p-4">
            <span className="font-semibold font-[Nunito] md:text-[24px] text-[20px] text-[#030229]">
              Base
            </span>
          </h2>
        </div>
        <div className="sm:col-span-2 col-span-4">
          <div className="flex justify-end md:hidden">
            {nav ? (
              <AiOutlineClose onClick={toggleMenu} />
            ) : (
              <>
                <span className="mx-3 self-center cursor-pointer">
                  <img src={notification} alt="notification" />
                </span>
                <span className="mx-3 self-center cursor-pointer">
                  <img src={profile} alt="profile" />
                </span>
              </>
            )}
          </div>
        </div>
      </div>
      {nav && (
        <nav>
          <ul className="flex flex-col text-[#9A9AA9]">
            {menuItems.map(({ path, icon, text }, index) => {
              return (
                <div key={index} className="py-2">
                  <li className="font-semibold font-[Nunito] text-[16px] cursor-pointer mx-auto p-2 pl-4  hover:text-[#605BFF] hover:bg-[rgb(172,169,255)] hover:bg-[linear-gradient(90deg,_rgba(172,169,255,1)_0%,_rgba(255,255,255,1)_14%,_rgba(255,255,255,1)_100%)] ">
                    <NavLink
                      to={path}
                      className={
                        currentPath.pathname === path
                          ? "text-[#605BFF] flex"
                          : "flex"
                      }
                    >
                      {icon} {text}
                    </NavLink>
                  </li>
                </div>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
