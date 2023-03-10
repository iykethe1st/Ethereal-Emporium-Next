import Image from "next/image";

const SearchBar = ({ label }) => {
  return (
    <div className="flex">
      <div className="relative">
        <input
          className="bg-inherit px-12 py-2 rounded-full w-[22rem]  ring-2  caret-cyan-600 text-[0.76rem]"
          type="text"
          placeholder={label}
        />

        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <Image src="/search.png" alt="search-icon" width="24" height="24" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
