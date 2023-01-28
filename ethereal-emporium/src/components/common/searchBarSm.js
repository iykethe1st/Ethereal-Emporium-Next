import Image from "next/image";

const SearchBarSm = ({ label }) => {
  return (
    <div className="flex mx-auto">
      <div className="relative">
        <input
          className="bg-inherit px-10 py-1 rounded-full w-[18rem]  ring-2  caret-cyan-600 text-[0.8rem]"
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

export default SearchBarSm;
