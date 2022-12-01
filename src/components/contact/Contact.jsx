import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen p-4 text-[#FFFBBF]">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 border-[#FFFBBF]">
            Kontakt mig her!
          </p>
          <p className="py-6 text-2xl">Skriv venligst en besked herunder</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Navn"
              className="p-2 text-xl border-2 rounded-md text-[#152F55] focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className=" text-xl my-5 p-2 border-2 rounded-md text-[#152F55] focus:outline"
            />
            <textarea
              name="message"
              placeholder="Skriv din besked her...."
              rows="10"
              className="p-2 text-xl border-2 rounded-md text-[#152F55] focus:outline-none"
            ></textarea>

            <button className="text-[#152F55] bg-gradient-to-b from-[#5FC699] to-[#77FFC4] px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Lad os ta' en snak!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
