import Image from "next/image";

const CardSm = ({ item }) => {
  return (
    <div>
      <div className="flex relative overflow-hidden">
        <div
          key={item.id}
          className="rounded-3xl bg-gradient-to-r p-0.5 from-green-400 to-blue-500 overflow-hidden"
        >
          <div className="flex flex-col items-center rounded-3xl h-full bg-gradient-to-r from-green-700 to-blue-800 pb-8 shadow-black shadow-lg overflow-hidden">
            <div className="flex flex-col items-center relative  rounded-4xl h-[18rem]  w-[15rem]">
              <div className="">
                <Image height="217" width="240" alt="nft" src={item.img} />
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-between gap-2 p-4 bg-slate-900 border-green-400 border-b border-x w-10/12">
                  <Image height="36" width="37" alt="token" src={item.token} />
                  <div className="flex flex-col w-11/12">
                    <h1 className="font-bold text-sm">{item.name}</h1>

                    <span className="text-[0.6rem]">
                      By{" "}
                      <span className="bg-clip-text bg-gradient-to-r text-transparent from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 active:from-green-600 active:to-blue-600 cursor-pointer">
                        {item.creator}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-start bg-slate-900 px-4 py-2 rounded-b-xl border-x border-b border-green-400 w-10/12">
                  <h1 className="text-[0.7rem]">Price</h1>
                  <span className="text-[0.8rem] w-[14rem] mx-auto ">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSm;
