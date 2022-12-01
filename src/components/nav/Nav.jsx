import React, { useState } from "react";
import "./nav.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Krlogo from "../../assets/kr_logo.png";
import { Link } from "react-scroll";

const Nav = () => {
  const [burger, setBurger] = useState(false);

  const links = [
    {
      id: 1,
      link: "Kompetencer",
    },
    {
      id: 2,
      link: "Projekter",
    },
    {
      id: 3,
      link: "Om mig",
    },
    {
      id: 4,
      link: "Kontakt",
    },
  ];

  return (
    <nav
      className="fixed flex justify-between items-center w-full h-20 px-12 bg-[#FFFBBF] text-[#152F55]
      font-medium"
    >
      <div>
        <img src={Krlogo} alt="KR logo" style={{ width: "50px" }} />
      </div>

      {/* navbar */}

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-9 cursor-pointer capitalize font-bold text-xl text-[#152F55] hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/*burger*/}
      <div
        onClick={() => setBurger(!burger)}
        className="cursor-pointer pr-4 -z10 text-[#152F55] md:hidden"
      >
        {burger ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/*mobile mnu*/}
      {burger && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#FFFBBF] to-[#FFFCCC] text-[#152F55]">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
