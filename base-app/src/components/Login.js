import React from "react";
import googleIcon from "../assets/google-icon 1.png";
import appleIcon from "../assets/apple 1.png";
import git from "../assets/mweb-git.png";
import twitter from "../assets/mweb-twitter.png";
import linkedIn from "../assets/mweb-linkedin.png";
import discord from "../assets/mweb-discord.png";

function Login() {
  return (
    <div className="md:w-[50%] w-auto flex flex-col justify-center items-center md:p-0 ml-[22px] mr-[22px] pt-[15px]">
      <div className="flex flex-col justify-start lg:w-[50%] md:w-[70%] w-full ">
        <div className="font-[Montserrat] font-bold md:text-[36px] text-[24px]">
          <span>Sign In</span>
        </div>
        <div className="font-[Lato] font-normal md:text-[16px] text-[12px] mb-4">
          <span>Sign in to your account</span>
        </div>
        <div className="flex gap-5 font-[Montserrat] lg:text-[12px] text-[10px] text-[#858585]">
          <div className="bg-white rounded-[10px] pt-1 pb-1 lg:pl-5 lg:pr-5 pl-3 pr-3 md:w-auto w-[153px]">
            <button className="flex items-center md:gap-3 lg:gap-1 gap-1">
              <img src={googleIcon} alt="googleIcon" className="md:w-auto w-3" />
              Sign in with Google
            </button>
          </div>
          <div className="bg-white rounded-[10px] pt-1 pb-1 lg:pl-5 lg:pr-5 pl-3 pr-3 md:w-auto w-[153px]">
            <button className="flex items-center md:gap-3 lg:gap-1 gap-1">
              <img src={appleIcon} alt="appleIcon" className="md:w-auto w-3" />
              Sign in with Apple
            </button>
          </div>
        </div>
        <form className="bg-white mt-5 rounded-[10px] p-6 font-[Lato] text-[16px]">
          <div>
            <label htmlFor="name">Email address</label>
          </div>
          <div className="mt-3 mb-3">
            <input
              type="text"
              value="johndoe@gmail.com"
              name="email"
              className="bg-[#F5F5F5] rounded-[10px] p-[10px] w-full"
            />
          </div>
          <div className="mt-5">
            <label htmlFor="password">Password</label>
          </div>
          <div className="mt-3 mb-3">
            <input
              type="password"
              value="••••••••"
              name="password"
              className="bg-[#F5F5F5] rounded-[10px] p-[10px] w-full"
            />
          </div>
          <div className="mb-4 mt-4">
            <span className="text-[#346BD4]">Forgot password?</span>
          </div>
          <button className="bg-[#605BFF] text-white w-full text-center rounded-[10px] pt-2 pb-2">
            Sign In
          </button>
        </form>
        <div className="text-center mt-4">
        <p className="font-[lato] text-[16px] text-[#858585]">
          Don’t have an account?{" "}
          <span className="text-[#346BD4] md:inline block mt-3">Register here</span>
        </p>
        </div>
        <div className="w-full h-[33.33%] md:hidden flex justify-center items-end md:pt-0 mt-6">
          <div className="flex w-[45%] md:pb-7 justify-center md:items-start items-center">
            <img src={git} alt="Git" className="mr-4 w-[28px] h-[28px]" />
            <img
              src={twitter}
              alt="Twitter"
              className="mr-3 w-[27px] h-[26px]"
            />
            <img src={linkedIn} alt="LinkedIn" className="mr-2 w-[23.25px] h-[22px]" />
            <img src={discord} alt="discord" className="w-[22.75] h-[24.38px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
