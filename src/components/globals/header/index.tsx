"use client";

import React from "react";
import { MdMenu, MdClose } from "react-icons/md";
import Image from "next/image";
import Logo from "@/img/logo.png";

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <nav className="font-inter absolute top-0 z-[999] w-full">
      <div className="mx-auto max-w-screen-xl">
        <div
          className={`grid w-full grid-cols-2 items-center px-4 py-4 lg:grid-cols-3 lg:p-10`}
        >
          <a href={"#"} onClick={() => setShowMenu(false)}>
            <Image
              src={Logo}
              alt="Logo"
              width={160}
              height={40}
              className="w-24 cursor-pointer lg:w-40"
            />
          </a>
          <div
            className={`itemce fixed left-0 top-0 z-[999] h-screen w-screen items-center bg-[#E09AC0] text-white lg:flex lg:h-full ${
              showMenu ? "" : "translate-x-full"
            } transition-all duration-300 lg:static lg:h-auto lg:w-auto lg:translate-x-0 lg:bg-transparent`}
          >
            <button
              className="absolute right-10 top-10 hidden max-lg:z-[1000] max-lg:block"
              onClick={() => setShowMenu(false)}
            >
              <MdClose size={36} />
            </button>
            <div className="flex h-full w-full flex-col items-center justify-center gap-10 text-2xl backdrop-blur-sm lg:flex-row lg:text-lg xl:text-xl">
              <NavItem>
                <a href={"#about-us"} onClick={() => setShowMenu(false)}>
                  About Us
                </a>
              </NavItem>
              <NavItem>
                <a href={"#solutions"} onClick={() => setShowMenu(false)}>
                  Solutions
                </a>
              </NavItem>
              <NavItem>
                <a href={"#privacy"} onClick={() => setShowMenu(false)}>
                  Privacy
                </a>
              </NavItem>
            </div>
          </div>
          <div className="hidden items-center justify-end lg:flex">
            <button className="rounded-lg bg-gradient-to-bl from-[#F5F5F7]/0 to-[#F5F5F7]/30 px-5 py-3 uppercase text-white transition-all duration-150 hover:bg-[#F5F5F7]/30">
              <span>Start Free Trial</span>
            </button>
          </div>
          <button
            className="ml-auto text-white lg:hidden"
            onClick={() => setShowMenu(true)}
          >
            <MdMenu size={36} />
          </button>
        </div>
      </div>
    </nav>
  );
};

type NavItemTypes = {
  children: React.ReactNode;
};

const NavItem = (data: NavItemTypes) => {
  const { children } = data;

  return (
    <div className="relative py-1 text-white transition-all duration-150 hover:text-black">
      {children}
    </div>
  );
};

export default Header;
