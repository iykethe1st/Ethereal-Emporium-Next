import Slider from "react-slick";
import CardBg from "./common/cardBg";
import CardSm from "./common/cardSm";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = ({ nftItem }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    dots: false,
    arrows: false,
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

export const CarouselSm = ({ nftItem }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    dots: false,
    arrows: false,

    // centerPadding: "10px",

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
            <CardSm item={x} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
