import HeroIcon from "../../public/hero-icon.png";
import Image from "next/image";
import ButtonDarkLg from "./common/buttonDarkLg";
import ButtonLightLg from "./common/buttonLightLg";
import Link from "next/link";
import Title from "./common/title";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${HeroIcon})` }}
      className="bg-cover hero bg-center h-[35rem] lg:h-[45rem] relative overflow-hidden px-4 md:px-24"
    >
      <div className="absolute -top-[12rem] -right-[8rem]">
        <Image width="850" height="850" src="/hero-icon.png" alt="hero" />
      </div>

      <div className="absolute z-5 top-[8rem] md:top-[15rem] flex flex-col items-center lg:items-start gap-4">
        <span className="text-slate-400 text-sm">
          Exclusive NFT for Digital and Real-world Assets
        </span>
        <Title label="This is my demo website, you can only create an account, login, or connect your testnet wallet and mint an NFT." />
        <div className="flex gap-4 md:gap-12">
          <ButtonLightLg label="Explore" />
          <ButtonDarkLg label="Create" />
        </div>
        <Link
          className="flex my-8 gap-2 hover:text-slate-400 active:text-slate-500"
          href="#"
        >
          <Image width="25" height="25" alt="play" src="/play.png" />
          Learn more about new drops
        </Link>
      </div>
    </section>
  );
};

export default Hero;
