import Link from "next/link";
import Image from "next/image";
import SearchBar from "./common/searchbar";

const Navbar = ({ setScreen }) => {
  return (
    <nav className="bg-[#8F8E95] bg-opacity-10">
      <div className="flex gap-4 py-4 px-4 md:px-8 lg:px-28 justify-between">
        <Image src="/logo.png" width="30" height="30"></Image>
        {!setScreen && (
          <SearchBar
            setScreen={setScreen}
            label="Seach items, collections, and accounts"
          />
        )}

        {/* <Link href="/">Home</Link>
        <Link href="/about">About</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
