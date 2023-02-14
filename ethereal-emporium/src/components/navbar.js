import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./common/searchbar";
import { TiThMenu } from "react-icons/ti";
import { BiWalletAlt } from "react-icons/bi";
import ButtonDark from "./common/buttonDark";
import ButtonLight from "./common/buttonLight";
import { CiUser } from "react-icons/ci";

const Navbar = ({ user }) => {
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
  ];
  const [open, setOpen] = useState(false);

  return (
    <nav className="text-white absolute z-20 bg-black bg-opacity-30 flex-wrap w-full flex items-center tracking-tight justify-between py-4 transform transition duration-500 ease-in-out">
      <a href="/">
        {" "}
        <Image
          className="ml-4 md:ml-8 lg:ml-20"
          src="/logo.png"
          alt="logo"
          width="30"
          height="30"
        ></Image>
      </a>

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
        } lg:flex lg:items-center lg:w-auto lg:justify-between backdrop-blur-sm px-4 md:px-8 lg:px-20`}
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
          {!user && (
            <li className="py-1 lg:py-0">
              <div
                className="group relative inline-block text-left"
                tabindex="-1 bg-gradient-to-r hover:from-green-800 hover:to-slate-600 active:from-green-900 active:to-slate-700"
              >
                <span className="rounded-md shadow-sm">
                  <button
                    className="active:shadow-outline-blue inline-flex w-full justify-center rounded-md border border-gray-300   px-4 py-2 text-sm font-medium leading-5  focus-within:border-transparent focus-within:outline focus-within:outline-2 focus-within:outline-blue-500 hover:text-gray-400 active:bg-gray-50 active:text-gray-800"
                    type="button"
                    aria-haspopup="true"
                  >
                    <span>Account</span>

                    <svg
                      className="ml-2 -mr-1 h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </span>
                <div className="invisible origin-top-right -translate-y-2 scale-95 transform opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100">
                  <div
                    className="absolute right-0 ml-8 mt-2 w-28 origin-top-right divide-y divide-gray-100 rounded-md border border-gray-200 bg-white shadow-lg outline-none"
                    role="menu"
                  >
                    <div className="py-1">
                      <a
                        href="/sign-in"
                        className="flex w-full justify-between px-4 py-2 text-left text-sm leading-5 text-gray-700 focus-visible:outline-1 focus-visible:outline-blue-500"
                        role="menuitem"
                      >
                        Log In
                      </a>
                    </div>
                    <div className="py-1">
                      <a
                        href="/sign-up"
                        className="flex w-full justify-between px-4 py-2 text-left text-sm leading-5 text-gray-700 focus-visible:outline-1 focus-visible:outline-blue-500"
                        role="menuitem"
                      >
                        Sign Up
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )}
          {user && (
            <div
              className="group relative inline-block text-left"
              tabindex="-1"
            >
              <span className="rounded-md shadow-sm">
                <button
                  className="active:shadow-outline-blue inline-flex w-full justify-center rounded-md border border-gray-300  px-4 py-2 text-sm font-medium leading-5 focus-within:border-transparent focus-within:outline focus-within:outline-2 focus-within:outline-blue-500 hover:text-gray-500 active:bg-gray-50 active:text-gray-800"
                  type="button"
                  aria-haspopup="true"
                >
                  <CiUser className="w-5 h-5 hover:text-slate-300 active:text-slate-400" />

                  <svg
                    className="ml-2 -mr-1 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </span>
              <div className="invisible origin-top-right -translate-y-2 scale-95 transform opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100">
                <div
                  className="absolute left-0 mt-2 w-38 origin-top-right divide-y divide-gray-100 rounded-md border border-gray-200 bg-white shadow-lg outline-none"
                  role="menu"
                >
                  <div className="px-4 py-3">
                    <p className="text-sm leading-5">Signed in as</p>
                    <p className="truncate text-sm font-medium leading-5 text-gray-900">
                      {user.email}
                    </p>
                  </div>

                  <div className="py-1">
                    <a
                      href="/logout"
                      className="flex w-full justify-between px-4 py-2 text-left text-sm leading-5 text-gray-700 focus-visible:outline-1 focus-visible:outline-blue-500"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          <li className="pt-2 lg:pt-0">
            <ButtonDark icon={<BiWalletAlt />} label="Connect Wallet" />
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
