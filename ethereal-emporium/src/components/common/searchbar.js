import Image from "next/image";

const SearchBar = ({ label, setScreen }) => {
  return (
    <div className="flex">
      <div className="relative">
        {setScreen ? (
          <input
            className="bg-inherit px-12 py-2 rounded-full w-[20rem]  ring-2  caret-cyan-600"
            type="text"
            placeholder={label}
          />
        ) : (
          <input
            className="bg-inherit px-12 py-2 rounded-full w-[25rem]  ring-2  caret-cyan-600"
            type="text"
            placeholder={label}
          />
        )}
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <Image src="/search.png" width="24" height="24" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
