import React from "react";
import logo from "../assets/logoEllipse.png";
import logoStrike from "../assets/logoStrike.png";
import git from "../assets/Git.png";
import twitter from "../assets/twitter.png";
import linkedIn from "../assets/linkedin.png";
import discord from "../assets/discord.png";

function BaseInfo() {
  return (
    <div className="md:w-[50%] w-full bg-[#605BFF] base-info-container">
      <div className="flex md:flex-col flex-row h-full md:w-full w-[328px] pl-[22px]">
        <div className="md:w-full w-[21%] h-[33.33%] pt-7 md:pb-0 pb-7">
          <div className="relative">
            <div>
              <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="absolute md:bottom-[25px] bottom-[9px] md:-left-[3px] left-0">
              <img src={logoStrike} alt="logostrike" className="strike" />
            </div>
          </div>
        </div>
        <div className="md:w-full md:h-[33.33%] h-auto w-full flex md:justify-center items-center text-white md:font-[Montserrat] font-[Nunito] font-bold md:text-[72px] text-[20px]">
          BASE
        </div>
        <div className="w-full h-[33.33%] md:flex hidden justify-center items-end">
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
