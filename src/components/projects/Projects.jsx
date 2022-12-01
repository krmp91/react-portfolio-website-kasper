import React from "react";
import "./projects.css";
import projekt1 from "../../assets/arrayProjects/projekt1.png";
import projekt2 from "../../assets/arrayProjects/projekt2.png";
import projekt3 from "../../assets/arrayProjects/projekt3.png";
import projekt4 from "../../assets/arrayProjects/projekt4.png";
import projekt5 from "../../assets/arrayProjects/projekt5.png";
import projekt6 from "../../assets/arrayProjects/projekt6.png";

const Projects = () => {
  const projekter = [
    {
      id: 1,
      src: projekt1,
    },
    {
      id: 2,
      src: projekt2,
    },
    {
      id: 3,
      src: projekt3,
    },
    {
      id: 4,
      src: projekt4,
    },
    {
      id: 5,
      src: projekt5,
    },
    {
      id: 6,
      src: projekt6,
    },
  ];

  return (
    <div name="projects" className=" w-full text-[#FFFBBF] md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 ">Projekter</p>
          <p className="py-6"> Se mine projekter her </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projekter.map(({ id, src }) => (
            <div key={id} className="shadow-sm shadow-[#FFFBBF] rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration">Demo</button>
                <button className="w-1/2 px-6 py-3 m-4 duration">Koden</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
