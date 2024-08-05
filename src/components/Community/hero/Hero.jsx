import "../style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sliderData } from "./sliderData";

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="hero-slider-img">
      <Slider {...settings}>
        {sliderData.map((item, i) => (
          <div
            key={i}
            className="relative w-full min-h-[450px] sm:min-h-[550px] md:min-h-[650px] flex items-center justify-center"
          >
            <div className="absolute bg-black/50 z-10 top-0 left-0 w-full h-full" />
            <img
                src={item.bgImg}
                alt=""
                className="w-full h-full object-cover absolute top-0 left-0 z-0"
              />
              <div className="relative top-3 sm:top-16 md:-top-10 z-10 text-center text-white p-4">
                {item.content}
              </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
