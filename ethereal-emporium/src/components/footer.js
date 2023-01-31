import Image from "next/image";

const Footer = () => {
  return (
    <section className="bg-black bg-opacity-50 text-white">
      <section className="grid grid-cols-1  items-end lg:justify-between justify-items-center lg:flex py-16 px-4 md:px-24 gap-8">
        <div className="flex flex-col gap-4 max-w-[22rem]">
          <Image src="/Group-20.png" height="50" width="50" alt="thefund" />
          <h1>THEFUND</h1>
          <span>
            TheFund is the world's first non-fungible token (NFT) marketplace
            for both digital and physical assets
          </span>
        </div>
        <div className="flex justify-between gap-8 jusify-between w-[25rem] items-start md:mt-[2rem] px-8">
          <ul className="grid grid-cols-1 gap-2 cursor-pointer">
            <li className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-500 hover:to-slate-500 active:from-red-600 active:to-slate-600">
              Company
            </li>
            <li>About</li>
            <li>Careers</li>
            <li>Ventures</li>
            <li>Grants</li>
          </ul>
          <ul className="grid grid-cols-1 gap-2 cursor-pointer">
            <li className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-500 hover:to-slate-500 active:from-red-600 active:to-slate-600">
              Statistics
            </li>
            <li>Rankings</li>
            <li>Activity</li>
          </ul>
          <ul className="grid grid-cols-1 gap-2 cursor-pointer">
            <li className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-500 hover:to-slate-500 active:from-red-600 active:to-slate-600">
              Resources
            </li>
            <li>About</li>
            <li>Careers</li>
            <li>Ventures</li>
            <li>Grants</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 md:mt-[2.5rem]">
          <h1>Follow me on:</h1>
          <div className="grid grid-cols-3 gap-6 ">
            <Image src="/Group-26.png" height="50" width="50" alt="thefund" />
            <Image src="/Group-27.png" height="50" width="50" alt="thefund" />
            <Image src="/Group-28.png" height="50" width="50" alt="thefund" />
            <Image src="/Group-29.png" height="50" width="50" alt="thefund" />
            <Image src="/Group-30.png" height="50" width="50" alt="thefund" />
            <Image src="/Group-31.png" height="50" width="50" alt="thefund" />
          </div>
        </div>
      </section>
      <div className="text-center pb-8 px-4 text-sm">
        Made by Ikenna Udemezue. See repo{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-500 hover:to-slate-500 active:from-red-600 active:to-slate-600 cursor-pointer">
          here
        </span>
      </div>
    </section>
  );
};

export default Footer;
