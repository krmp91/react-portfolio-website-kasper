import React from "react";
import "./experience.css";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";
import ai from "../../assets/ai.svg";
import ps from "../../assets/ps.svg";
import ae from "../../assets/ae.svg";
import xd from "../../assets/xd.svg";

const Experience = () => {
  const kompetencer = [
    {
      id: 1,
      src: html,
      title: "HTML",
      Style: "shadow-[#FFFBBF]",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      Style: "shadow-[#FFFBBF]",
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      Style: "shadow-[#FFFBBF]",
    },
    {
      id: 4,
      src: react,
      title: "REACT",
      Style: "shadow-[#FFFBBF]",
    },
    {
      id: 5,
      src: ai,
      title: "ILLUSTRATOR",
      Style: "shadow-[#FFFBBF]",
    },
    {
      id: 6,
      src: ps,
      title: "PHOTOSHOP",
      Style: "shadow-[#FFFBBF]",
    },
    {
      id: 7,
      src: ae,
      title: "AFTER EFFECT",
      Style: "shadow-[#FFFBBF]",
    },
    {
      id: 8,
      src: xd,
      title: "ADOBE XD",
      Style: "shadow-[#FFFBBF] ",
    },
  ];

  return (
    <div name="experience" className="w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-[#FFFBBF]">
        <div>
          <p className="text-4xl font-bold border-b-4 border-[#FFFBBF] p-2 inline">
            Kompetencer
          </p>
          <p className="py-6">
            Det her er hvad jeg har arbejdet med på studiet
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {kompetencer.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
