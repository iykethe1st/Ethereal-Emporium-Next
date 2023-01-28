import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./common/searchbar";
import { TiThMenu } from "react-icons/ti";
import { BiWalletAlt } from "react-icons/bi";
import Button from "./common/button";

const Navbar = ({ setScreen }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 700
        ? setIsSmallScreen(true)
        : setIsSmallScreen(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navItems = [
    {
      id: 0,
      item: "Explore",
      link: "/explore",
    },
    {
      id: 1,
      item: "Activity",
      link: "/activity",
    },
    {
      id: 2,
      item: "Resources",
      link: "/resources",
    },
    {
      id: 3,
      item: "Account",
      link: "/account",
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#8F8E95] bg-opacity-10 flex-wrap w-full flex items-center justify-between px-4 md:px-8 lg:px-20 py-4">
      <Image src="/logo.png" alt="logo" width="30" height="30"></Image>

      {!isSmallScreen && (
        <div className="">
          <SearchBar label="Seach items, collections, accounts" />
        </div>
      )}

      <TiThMenu
        className={`${
          !open ? "ring-1" : "ring-2"
        } h-8 w-8 ring-gray-300 rounded lg:hidden`}
        onClick={() => {
          setOpen(!open);
        }}
      />

      <section
        className={`${
          open ? "block w-full ease-in delay-150" : "hidden"
        } lg:flex lg:items-center lg:w-auto  lg:justify-between`}
      >
        <ul className="lg:flex lg:gap-2 items-center text-md lg:text-base">
          {navItems.map((nav) => (
            <li
              key={nav.id}
              className="p-2 lg: md:px-2 block text-start border-b-[0.5px] lg:border-0 border-neutral-800"
            >
              <Link
                className="hover:text-slate-800 active:text-black"
                href={nav.link}
              >
                {nav.item}
              </Link>
            </li>
          ))}
        </ul>
        <Button icon={<BiWalletAlt />} label="Connect Wallet" />
      </section>
    </nav>
  );
};

export default Navbar;
