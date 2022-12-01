import React from "react";
import "./header.css";
import MIG from "../../assets/mig.jpg";
import HeaderSocials from "./HeaderSocials";
import { BsArrowDown } from "react-icons/bs";

const Header = () => {
  return (
    <header name="home" className="h-screen w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-ful">
          <h1 className="text-[#5FC699] text-4xl sm:text-7xl font-bold">
            Hej, Kasper Ravnløkke her!
          </h1>
          <h5 className="text-[#77FFC4] py-4 max-w-md ">
            Jeg studerer til multimediedesigner, med en drøm om blive Frontend
            developer
          </h5>
        </div>
        <div className=" flex">
          <img
            src={MIG}
            alt="Kasper Ravnløkke, KRMP"
            className="rounded-full mx-auto w-2/3 md:w-full"
          />
          <HeaderSocials />
          <button className="hidden lg:flex flex-col-reverse ml-10 animate-bounce">
            <BsArrowDown size={30} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
