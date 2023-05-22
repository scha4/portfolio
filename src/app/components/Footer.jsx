import React from "react";
import config from "../index.json";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Footer = () => {
  const footer = config.footer;
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="footer px-8 py-16 flex justify-center align-center flex-col bg-white">
      <div className="mx-auto text-3xl  mb-8 space-x-10 flex">
        <a rel="noreferrer" href={footer.twitter} target="_blank">
          <AiOutlineTwitter size={48} className="fill-blue-400" />
        </a>
        <a rel="noreferrer" href={footer.linkedin} target="_blank">
          <AiOutlineLinkedin size={48} className="fill-blue-400" />
        </a>
        <a rel="noreferrer" href={footer.github} target="_blank">
          <AiOutlineGithub size={48} className="fill-blue-400" />
        </a>
      </div>
      <span className="text-sm text-center text-blue-400">
        © {getYear()}
        <a href="https://www.dylanarveson.com">Sam Cha</a>
      </span>
    </div>
  );
};

export default Footer;
