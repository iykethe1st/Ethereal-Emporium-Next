import Title from "./common/title";
import { Carousel } from "./carousel";

const HiddenJems = () => {
  const nft = [
    {
      id: 0,
      name: "ZombieClub Token",
      token: "/Ellipse1.png",
      img: "/Rectangle1.png",
      creator: "ZombieLab",
      description: `Zombie Lab is a collection of 10,000 animated NFTs. Each NFT is
            unique and resides on the Ethereum blockchain. Your Zombie Lab
            Club NFT will double as your club membership.`,
    },
    {
      id: 1,
      name: "Meta Bounty Hunters",
      token: "/Ellipse2.png",
      img: "/Rectangle2.png",
      creator: "B30898",
      description: `Meta Bounty Hunters is a first of its kind  community and collective 
      of elite members who share a community-first mindset and are focused on 
      giving back to its NFT holders through the Reflection Rewards.`,
    },
    {
      id: 2,
      name: "Treeverse Plots",
      token: "/Ellipse3.png",
      img: "/Rectangle3.png",
      creator: "Treeverse_Wallet",
      description: `Treeverse is an open-world, fantasy MMORPG with a MOBA-style 
      combat system. Slay beasts, forge mighty weapons, lure the biggest fish, 
      form guilds, defeat dungeons`,
    },
    {
      id: 1,
      name: "Meta Bounty Hunters",
      token: "/Ellipse2.png",
      img: "/Rectangle2.png",
      creator: "B30898",
      description: `Meta Bounty Hunters is a first of its kind  community and collective 
      of elite members who share a community-first mindset and are focused on 
      giving back to its NFT holders through the Reflection Rewards.`,
    },
  ];

  return (
    <section className="flex flex-col gap-10">
      <div className="flex justify-between items-center px-4 md:px-24">
        <Title label="Hidden Gems" />
        <span className="bg-clip-text bg-gradient-to-r text-transparent from-blue-700 to-cyan-900 hover:from-blue-800 hover:to-slate-800 active:from-red-900 active:to-slate-900 cursor-pointer">
          View all
        </span>
      </div>
      <Carousel nftItem={nft} />
    </section>
  );
};

export default HiddenJems;
