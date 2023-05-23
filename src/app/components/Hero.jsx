"use client";
import React from "react";
import config from "../index.json";
import { TypeAnimation } from "react-type-animation";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { Link } from "react-scroll";
const Hero = () => {
  const hero = config.hero;
  const footer = config.footer;
  const about = config.about;

  return (
    <section className="h-screen bg-white  ">
      <div className="px-8 md:px-32 flex flex-col justify-center  ">
        <h1 className="text-3xl flex  mt-32 md:text-5xl md:mt-64 font-bold tracking-wide">
          Hi, my name is
          <span className=" ml-3 whitespace-nowrap bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
            {hero.name}
          </span>
        </h1>
        <div className="flex justify-start">
          <h1 className=" text-3xl  md:text-6xl mt-4 font-bold tracking-wide">
            <p>I&apos;m a</p>
            <div className="pt-4 whitespace-nowrap bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              <TypeAnimation
                sequence={[
                  "Front-end Developer.",
                  2000, // Waits 1s
                  "React-Developer.",
                  2500, // Waits 2s
                  "Teacher.",
                  2500,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </div>
          </h1>
        </div>
        <Link
          to="About"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="text-2xl font-bold p-0.5 mt-6 w-44 bg-gradient-to-r from-blue-400  to-indigo-500  "
        >
          <div className="bg-white ">
            <span className="block text-center py-0.5 px-2  bg-white font-bold bg-gradient-to-r from-blue-400  to-indigo-800 bg-clip-text text-transparent  hover:text-blue-300 delay-100">
              Learn More
            </span>
          </div>
        </Link>
        <div className="flex gap-4 mt-3">
          <a rel="noreferrer" href={footer.twitter} target="_blank">
            <AiOutlineTwitter
              size={40}
              className="fill-slate-600 hover:fill-blue-600"
            />
          </a>
          <a rel="noreferrer" href={footer.github} target="_blank">
            <AiOutlineGithub
              size={40}
              className="fill-slate-600 hover:fill-blue-600"
            />
          </a>
          <a rel="noreferrer" href={footer.linkedin} target="_blank">
            <AiOutlineLinkedin
              size={40}
              className="fill-slate-600 hover:fill-blue-600"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
