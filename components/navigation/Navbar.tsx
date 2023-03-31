"use client";
import React from "react";
import Drawer from "./Drawer";
import Link from "next/link";

// import { Container } from './styles';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const paths = [
    {
      pathname: "Agents",
      src: "/agents",
      targetBlank: false,
    },
    // {
    //   pathname: "Weapons",
    //   src: "/weapons",
    //   targetBlank: false,
    // },
    {
      pathname: "Github",
      src: "github.com/KenielDev",
      targetBlank: true,
    },
    {
      pathname: "LinkedIn",
      src: "https://www.linkedin.com/in/keniel-nunes/",
      targetBlank: true,
    },
  ];

  return (
    <div className="grid grid-cols-12 bg-vavaBlack text-white py-4">
      <div>
        <img src="" alt="icon" />
      </div>
      <ul className="flex text-2xl gap-6 col-span-4">
        {paths.map((path) => {
          return (
            <Link
              className={"hover:bg-gray-600 px-3  py-1 rounded"}
              href={path.src}
              target={path.targetBlank ? "_blank" : "_self"}
            >
              <li>{path.pathname}</li>
            </Link>
          );
        })}
      </ul>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div>oi 1</div>
        <div>oi 1</div>
        <div>oi 1</div>
      </Drawer>
    </div>
  );
};

export default Navbar;
