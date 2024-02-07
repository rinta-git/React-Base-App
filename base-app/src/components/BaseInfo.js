import React from "react";
import logo from "../assets/logoEllipse.png";
import logoStrike from "../assets/logoStrike.png";
import git from "../assets/Git.png";
import twitter from "../assets/twitter.png";
import linkedIn from "../assets/linkedin.png";
import discord from "../assets/discord.png";

function BaseInfo() {
  return (
    <div className="w-[50%] bg-[#605BFF] base-info-container">
      <div className="flex flex-col h-full">
        <div className="w-full h-[33.33%] pt-7 pl-7 ">
          <div className="relative">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className="absolute bottom-[25px] -left-[3px]">
              <img src={logoStrike} alt="logostrike" />
            </div>
          </div>
        </div>
        <div className="w-full h-[33.33%] flex justify-center items-center  text-white font-[Montserrat] font-bold text-[72px]">
          BASE
        </div>
        <div className="w-full h-[33.33%] flex justify-center items-end">
          <div className="flex w-[45%] pb-7 justify-center">
            <img src={git} alt="Git" className="mr-4 h-[44px] w-[44px]" />
            <img
              src={twitter}
              alt="Twitter"
              className="mr-3 h-[42px] w-[42px]"
            />
            <img src={linkedIn} alt="LinkedIn" className="mr-2 h-[48px]" />
            <img src={discord} alt="discord" className="h-[48px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BaseInfo;
