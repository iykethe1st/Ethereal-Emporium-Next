import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./common/searchbar";
import { TiThMenu } from "react-icons/ti";

const Navbar = ({ setScreen }) => {
  const navItems = [
    {
      id: 0,
      item: "About Us",
      link: "/about-us",
    },
    {
      id: 1,
      item: "Home",
      link: "/",
    },
    {
      id: 2,
      item: "Pricing",
      link: "/pricing",
    },
    {
      id: 3,
      item: "Blog",
      link: "/blog/home",
    },
    {
      id: 4,
      item: "Contact",
      link: "/contact-us",
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-[#8F8E95] bg-opacity-10 flex-wrap w-full flex items-center justify-between px-4 md:px-8 lg:px-20 py-4">
      <Image src="/logo.png" width="30" height="30"></Image>
      {!setScreen && (
        <SearchBar
          setScreen={setScreen}
          label="Seach items, collections, and accounts"
        />
      )}

      {setScreen && (
        <TiThMenu
          className={`${
            !open ? "ring-1" : "ring-2"
          } h-8 w-8 ring-gray-300 rounded`}
          onClick={() => {
            setOpen(!open);
          }}
        />
      )}

      <section
        className={`${
          open ? "block w-full ease-in delay-150" : "hidden"
        } lg:flex lg:items-center lg:w-auto `}
      >
        <ul className="lg:flex lg:justify-between items-center text-md lg:text-base">
          {navItems.map((nav) => (
            <li
              key={nav.id}
              className="p-1 lg: md:px-4 block text-start border-b-[0.5px] lg:border-0 border-neutral-800"
            >
              <Link
                className="hover:text-slate-800 active:text-black"
                href={nav.link}
              >
                {nav.item}
              </Link>
            </li>
          ))}
          <Link href="/login">
            {" "}
            <button className="ml-3 my-3 block text-white px-4 active:bg-[#FF8F50] hover:bg-[#FF7A30] bg-[#FF6610] ring-1 ring-[#FF7A30] shadow-sm shadow-slate-600 rounded">
              Sign in
            </button>
          </Link>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
