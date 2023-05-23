"use client";
import React from "react";
import config from "../index.json";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";

export default function Header() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const navigation = config.navigation;
  const about = config.about;
  return (
    <>
      <div className="">
        <div className="flex relative justify-between items-center ">
          <Image
            src="/samchalogo.png"
            alt="about"
            className="ml-4 mt-4"
            width={90}
            height={90}
          />
          <ul className="hidden md:flex px-8 lg:px-32 gap-x-10 content-center ">
            {navigation.map((item) => (
              <li
                className="mt-6 cursor-pointer font-bold  hover:text-blue-400 delay-100 "
                key={item.title}
              >
                <Link
                  to={item.title}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="md:hidden mr-2" onClick={handleClick}>
            {!nav ? <MdMenu size={45} /> : <MdClose size={45} />}
          </div>
        </div>

        <ul
          className={
            !nav
              ? "hidden"
              : " delay-100 from bg-slate-200  w-full px-8 text-blue-500 font-bold flex flex-col h-48 space-y-3 place-content-evenly rounded-b-lg border-2 border-blue-500 absolute "
          }
        >
          {navigation.map((item) => (
            <li className="mt-2 cursor-pointer" key={item.title}>
              <Link
                to={item.title}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
