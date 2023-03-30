"use client";
import React from "react";
import Drawer from "./Drawer";

// import { Container } from './styles';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button
        className="bg-green-600 text-white rounded px-4 py-1"
        onClick={() => setIsOpen(true)}
      >
        open
      </button>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div>oi 1</div>
        <div>oi 1</div>
        <div>oi 1</div>
      </Drawer>
    </>
  );
};

export default Navbar;
