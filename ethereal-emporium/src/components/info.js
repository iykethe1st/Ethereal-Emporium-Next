import Title from "./common/title";

const Info = () => {
  const info = [
    {
      id: 0,
      header: "Set up your wallet",
      icon: "/wallet.png",
      content: `Once you've set up your wallet of choice, 
            connect it to TrustFund by clicking the wallet icon in the top right corner`,
    },
    {
      id: 1,
      header: "Create your collection",
      icon: "/triangle.png",
      content: `Click My Collections and set up your collection. Add social links, a description, 
      profile & banner images, and set a secondary sales fee.`,
    },
    {
      id: 2,
      header: "Add your NFTs",
      icon: "/picture.png",
      content: `Upload your work (image, video, audio, or 3D art), add a title and description, 
      and customize your NFTs with properties, stats, and unlockable content.`,
    },
    {
      id: 3,
      header: "List them for sale",
      icon: "/bag.png",
      content: `Choose between auctions, fixed-price listings, and declining-price listings. 
      You choose how you want to sell your NFTs, and we help you sell them!`,
    },
  ];
  return (
    <section className="flex flex-col gap-10 py-16 px-4 md:px-24 bg-gradient-to-r from-teal-900 to-sky-900">
      <div className="flex justify-between items-center">
        <Title label="Create and sell your NFTs" />
      </div>
      <div className="grid grid-cols-1 md:flex gap-12 md:justify-between justify-items-center">
        {info.map((item) => (
          <div className="grid grid-cols-1 gap-2 md:items-center justify-items-center w-[14rem]">
            <img src={item.icon} alt={item.header} />
            <h1 className="font-bold">{item.header}</h1>
            <span className="text-sm tracking-tight">{item.content}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Info;
