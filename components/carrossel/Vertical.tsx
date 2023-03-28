import React from "react";
import Slider from "react-slick";

interface Carousel {
  children?: React.ReactNode;
  eventHover?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export default function VerticalMode({ children, eventHover }: Carousel) {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    acessibility: true,
  };
  return <Slider {...settings}>{children}</Slider>;
}
