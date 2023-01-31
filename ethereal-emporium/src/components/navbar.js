import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./common/searchbar";
import { TiThMenu } from "react-icons/ti";
import { BiWalletAlt } from "react-icons/bi";
import ButtonDark from "./common/buttonDark";
import ButtonLight from "./common/buttonLight";

const Navbar = ({}) => {
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
  ];
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute z-20 bg-[#8F8E95] bg-opacity-10 flex-wrap w-full flex items-center justify-between py-4 transform transition duration-500 ease-in-out">
      <Image
        className="ml-4 md:ml-8 lg:ml-20"
        src="/logo.png"
        alt="logo"
        width="30"
        height="30"
      ></Image>

      {!isSmallScreen && (
        <div className="">
          <SearchBar label="Search items, collections, accounts" />
        </div>
      )}

      <TiThMenu
        className={`${
          !open ? "ring-1" : "ring-2"
        } h-8 w-8 ring-gray-300 rounded lg:hidden transform transition duration-500 ease-in-out mr-4 md:mr-8`}
        onClick={() => {
          setOpen(!open);
        }}
      />

      <section
        className={`${
          open ? "block w-full" : "hidden"
        } lg:flex lg:items-center lg:w-auto  lg:justify-between backdrop-blur-sm px-4 md:px-8 lg:px-20`}
      >
        <ul className="lg:flex lg:gap-2 items-center text-sm w-full">
          {navItems.map((nav) => (
            <li
              key={nav.id}
              className="p-2 lg: md:px-2 block text-start border-b-[0.5px] lg:border-0 border-neutral-800"
            >
              <Link
                className="hover:text-slate-400 active:text-slate-500"
                href={nav.link}
              >
                {nav.item}
              </Link>
            </li>
          ))}
          <li className="py-1 lg:py-0">
            <ButtonLight label="Account" />
          </li>
          <li className="pt-2 lg:pt-0">
            <ButtonDark icon={<BiWalletAlt />} label="Connect Wallet" />
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
