import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const menuItems = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#feature" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
  ];

  return (
    <footer className="bg-altprimaryColor py-10">
      <div className="container mx-auto px-6 text-fontPrimaryColor">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mb-0">
            <h1 className="text-3xl font-bold">
              <a href="#Home">IC-AI.</a>
            </h1>
          </div>
          <ul className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-10">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:text-accentColor">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 text-center text-xs font-light">
          <p>Copyright © 2024 IC-AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
