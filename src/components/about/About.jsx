import React from "react";
import "./about.css";

const About = () => {
  return (
    <div name="about" className="w-full h-screen ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Om mig
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          dolorum obcaecati possimus iusto cum qui. Voluptate quas ab aut minus
          perspiciatis blanditiis quos, tempore earum voluptatum explicabo
          consequatur eligendi sint?
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi fugit
          velit asperiores debitis quidem iste saepe assumenda, consequatur,
          libero ipsa molestias deserunt? Obcaecati, deserunt dolore modi
          repellat quos rem excepturi cumque inventore fugiat repudiandae quis
          sequi iusto ut tenetur illo hic quam, aliquam suscipit, eligendi odit
          ipsa. Ipsum, amet vel!
        </p>
      </div>
    </div>
  );
};

export default About;
