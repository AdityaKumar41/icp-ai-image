import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { useAuth } from "../../Hooks/authHook";
import { useDropdown } from "../../Hooks/useDropdown";
import { useToggleMenu } from "../../Hooks/useTogglemenu";

import { FaBars, FaTimes } from "react-icons/fa";
import { LuWallet } from "react-icons/lu";
import { FaRegUserCircle, FaRegUser } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import Button from "../Elements/Button";

const Navbar = () => {
  const { principalId, isLoggedIn, credit, Login, Logout } = useAuth();
  const { isDropdownOpen, toggleDropdown, dropdownRef } = useDropdown();
  const { isOpen, toggleMenu } = useToggleMenu();

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#feature" },

  ];

  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(scrollY.get() > 150);
    };
    const unsubscribe = scrollY.on("change", handleScroll);
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.nav
      style={{
        backgroundColor: isScrolled
          ? "rgba(22, 27, 36, 1)"
          : "rgba(22, 27, 36, 0.8)",
      }}
      animate={{
        backgroundColor: isScrolled
          ? "rgba(22, 27, 36, 1)"
          : "rgba(22, 27, 36, 0.8)",
      }}
      transition={{ duration: 0.2, ease: "easeIn" }}
      className="navbar fixed top-0 z-[999] h-20 w-full transition-all"
    >
      <div className="flex h-full w-full justify-between px-5 md:px-10">
        <div className="logo text-fontPrimaryColor select-none px-3 py-2">
          <a href="/" className="text-2xl font-bold">
            IC-AI.
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <ul className="hidden md:flex text-md text-fontPrimaryColor justify-around gap-x-12 font-semibold tracking-widest">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:text-accentColor">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="text-fontPrimaryColor relative" ref={dropdownRef}>
                <div className="flex items-center justify-center gap-3">
                  <button className="text-fontPrimaryColor bg-secondaryColor flex items-center justify-center gap-2 rounded-lg px-4 py-2">
                    <LuWallet size={24} />
                    <div>{credit}</div>
                  </button>
                  <motion.button
                    onClick={toggleDropdown}
                    whileHover={{ scale: 1.075 }}
                    className="text-fontPrimaryColor bg-secondaryColor flex rounded-lg px-4 py-2"
                    type="button"
                  >
                    <FaRegUserCircle size={24} />
                  </motion.button>
                </div>
                {isDropdownOpen && (
                  <div className="bg-secondaryColor text-fontPrimaryColor absolute right-0 mt-2 w-80 rounded-lg px-5 py-2">
                    <div className="flex items-center justify-between border-b px-4 py-3 pb-4 text-sm">
                      <div className="truncate font-medium">
                        {principalId.slice(0, 8)}...
                      </div>
                      <div>free</div>
                    </div>
                    <ul className="border-b py-2 pb-4 text-sm">
                      <li>
                        <button
                          onClick={() => (window.location.href = "/profile")}
                          className="flex w-full items-center justify-start gap-2 px-4 py-2 hover:rounded-lg hover:bg-gray-600"
                        >
                          <FaRegUser size={20} />
                          <p>Profile</p>
                        </button>
                      </li>
                    </ul>
                    <div className="mt-4 h-auto w-full gap-x-2 border-b pb-4">
                      <div className="bg-accentColor3 text-fontPrimaryColor relative mb-4 flex w-full flex-col justify-between space-y-2 overflow-hidden rounded-xl p-4 text-sm">
                        <span className="text-fontPrimaryColor text-xs uppercase">
                          Basic
                        </span>
                        <span className="text-fontPrimaryColor absolute right-0 top-0 pr-6 text-lg">
                          Rp. 39.900
                        </span>
                        <div className="flex flex-row items-center space-x-3 pt-4">
                          <span className="text-base font-medium">
                            Get Balance up to 200.
                          </span>
                        </div>
                        <button className="bg-fontPrimaryColor flex items-center justify-center gap-x-4 rounded-full px-4 py-2 text-xs font-medium text-black">
                          <span>Next step</span>
                        </button>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between px-4 py-2 text-sm">
                      <p>term of service</p>
                      <button
                        onClick={Logout}
                        className="flex items-center justify-center gap-2 rounded-lg border-2 px-2 py-1 text-sm hover:bg-gray-600"
                      >
                        <TbLogout size={20} />
                        <p className="text-sm"> Log Out </p>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Button onClick={Login} variant="outline">
                Login
              </Button>
            )}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-fontPrimaryColor">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      <motion.div
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={{
          hidden: { height: 0, opacity: 0 },
          visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
        }}
        className={`absolute w-full overflow-hidden bg-secondaryColor ${isOpen ? "block" : "hidden"} md:hidden`}
      >
        <ul className="text-fontPrimaryColor flex flex-col items-center justify-center gap-y-5 p-4 text-lg font-semibold">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={toggleMenu}
                className="text-fontPrimaryColor hover:text-accentColor"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
