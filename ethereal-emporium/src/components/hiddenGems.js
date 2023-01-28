import Title from "./common/title";

const HiddenJems = () => {
  return (
    <section className="grid grid-cols-1">
      <div className="flex justify-between px-6 md:px-24 items-center">
        <Title label="Hidden Gems" />
        <span className="bg-clip-text bg-gradient-to-r text-transparent from-blue-700 to-cyan-900 hover:from-blue-800 hover:to-slate-800 active:from-red-900 active:to-slate-900 cursor-pointer">
          View all
        </span>
      </div>
    </section>
  );
};

export default HiddenJems;
