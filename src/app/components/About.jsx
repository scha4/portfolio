import React from "react";
import config from "../index.json";
import Image from "next/image";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
} from "react-icons/si";
const About = () => {
  const about = config.about;
  return (
    <div
      id="About"
      className="px-8 md:px-32 pb-32 content-center bg-gradient-to-r from-blue-400  to-indigo-600"
    >
      <h1 className="pt-12 uppercase font-bold text-center text-white text-bold text-4xl">
        {about.title}
      </h1>
      <div className="mt-16 flex flex-col md:flex-row align-center items-center">
        <div className="w-1/2 flex justify-center content-center">
          <Image
            src={about.image}
            alt="about"
            className="shadow-lg border-2 border-white "
            width={400}
            height={400}
          />
        </div>
        <div className="pt-8 md:py-0 md:w-1/2 text-white md:ml-4 text-center md:text-left">
          <div className="about__primary">
            <span>{about.primary}</span>
          </div>
          <div className="mt-6">
            <span>{about.secondary}</span>
          </div>
          <div className="mt-6">
            <span>{about.third}</span>
          </div>
          <div className="mt-6">
            <span>{about.fourth}</span>
          </div>
          <div className="flex gap-2">
            <AiFillHtml5 size={40} />
            <FaCss3Alt size={40} />
            <SiJavascript size={40} />
            <SiTailwindcss size={40} />
            <SiBootstrap size={40} />
            <SiRedux size={40} />
          </div>
          <div className="mt-6 mx-auto md:mx-0 border-2 border-white py-1 px-2 w-36 text-center font-bold">
            <a
              href="/frontendresume.pdf"
              target="_blank"
              aria-label="Download Resume"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
