import Image from "next/image";

const CardBg = ({ item }) => {
  return (
    <div className="flex relative pb-4">
      {/* {content.map((item) => ( */}
      <div
        key={item.id}
        className="rounded-3xl bg-gradient-to-r p-0.5 from-green-400 to-blue-500 "
      >
        <div className="flex flex-col items-center px-4 rounded-3xl h-full bg-slate-900 pb-8 shadow-black shadow-lg">
          <div className="flex flex-col items-center gap-2 relative  rounded-4xl h-[29rem] ">
            <div className="pt-2">
              <Image height="230" width="230" alt="nft" src={item.img} />
            </div>
            <div className="absolute z-2 top-[13rem]">
              <Image height="60" width="60" alt="token" src={item.token} />
            </div>
            <div className="flex flex-col items-center">
              <div className="flex gap-1 mt-8">
                <h1 className="font-bold">{item.name}</h1>
                <Image height="15" width="25" alt="nft" src="/vector.png" />
              </div>
              <span className="text-[0.8rem]">
                Created by{" "}
                <span className="bg-clip-text bg-gradient-to-r text-transparent from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 active:from-green-600 active:to-blue-600 cursor-pointer">
                  {item.creator}
                </span>
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[0.8rem] w-[14rem] mx-auto ">
                {item.description}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};

export default CardBg;
