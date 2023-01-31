import Slider from "react-slick";
import CardBg from "./common/cardBg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousel = ({ nftItem }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    // centerPadding: "10px",

    rows: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 875,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 0.6,
        },
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 pb-4">
      <Slider {...settings}>
        {nftItem.map((x) => (
          <div className="">
            <CardBg item={x} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
