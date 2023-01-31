import ButtonDarkLg from "./common/buttonDarkLg";
import useWindowWidth from "./common/windowWidth";

const Media = () => {
  return (
    <section className="flex flex-col items-center py-16 gap-12">
      <h1 className="text-4xl font-bold">What are NFTs?</h1>
      <h1 className="px-4 bg-clip-text bg-gradient-to-r text-transparent from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 active:from-green-600 active:to-blue-600">
        Watch a 3 min video to get a quick take of what NFTs are and how they
        work
      </h1>
      <iframe
        width={!useWindowWidth() ? "700" : "315"}
        height="315"
        src="https://www.youtube.com/embed/Mn8rJlRbuvs"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <ButtonDarkLg label="Explore the Marketplace" />
    </section>
  );
};

export default Media;
