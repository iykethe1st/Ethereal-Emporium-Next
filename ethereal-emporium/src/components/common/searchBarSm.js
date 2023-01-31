import Image from "next/image";

const SearchBarSm = ({ label }) => {
  return (
    <div className="flex mx-auto bg-transparent">
      <div className="relative bg-transparent">
        <input
          className="bg-transparent px-10 py-1 rounded-full w-full  ring-2  caret-cyan-600 text-[0.8rem]"
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
