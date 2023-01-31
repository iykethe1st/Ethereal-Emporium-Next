import Title from "./common/title";
import { CarouselSm } from "./carousel";

const TopCollections = () => {
  const nft = [
    {
      id: 0,
      name: "Women Guardians",
      token: "/Ellipse6.png",
      img: "/Rectangle6.png",
      creator: "Organization Woman",
      price: "0.1eth",
    },
    {
      id: 0,
      name: "Ape Episode #128",
      token: "/Ellipse10.png",
      img: "/Rectangle7.png",
      creator: "Bored Ape Yatch Club",
      price: "2.756eth",
    },
    {
      id: 0,
      name: "Azuki #95",
      token: "/Ellipse7.png",
      img: "/Rectangle8.png",
      creator: "Azuki",
      price: "1.9eth",
    },
    {
      id: 0,
      name: "Yolk Folks #187",
      token: "/Ellipse8.png",
      img: "/Rectangle9.png",
      creator: "Fofo Prophet",
      price: "1.46eth",
    },
    {
      id: 0,
      name: "Earth MoonCake",
      token: "/Ellipse9.png",
      img: "/Rectangle10.png",
      creator: "MoonCakes",
      price: "0.953eth",
    },
    {
      id: 0,
      name: "OG Floppy Disk",
      token: "/Ellipse10.png",
      img: "/Rectangle11.png",
      creator: "The Transmissionites",
      price: "2.756eth",
    },
    {
      id: 0,
      name: "Ape Episode #128",
      token: "/Ellipse11.png",
      img: "/Rectangle12.png",
      creator: "Bored Ape Yatch Club",
      price: "2.756eth",
    },
    {
      id: 0,
      name: "Ape Episode #128",
      token: "/Ellipse10.png",
      img: "/Rectangle13.png",
      creator: "Bored Ape Yatch Club",
      price: "2.756eth",
    },
  ];

  return (
    <section className="flex flex-col gap-4 my-8 ">
      <div className="flex justify-between items-center px-4 md:px-24">
        <Title label="Top Collections" />
        <span className="bg-clip-text bg-gradient-to-r text-transparent from-blue-400 to-cyan-400 hover:from-blue-500 hover:to-slate-500 active:from-red-600 active:to-slate-600 cursor-pointer">
          View all
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 py-8">
        <CarouselSm nftItem={nft} />
      </div>
    </section>
  );
};

export default TopCollections;
