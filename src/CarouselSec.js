import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomCard from "./CustomCard";

function CarouselSec({ albums }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  // console.log(children);

  return (
    <div style={{width: "95%"}}>
      <Slider {...settings}>
        {albums.map((data) => (
          <CustomCard key={data.id} children={data} />
        ))}
      </Slider>
    </div>
  );
}

export default CarouselSec;