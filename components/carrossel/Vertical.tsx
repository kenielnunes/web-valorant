import React from "react";
import Slider from "react-slick";

interface CarouselProps {
  children?: React.ReactNode;
  eventHover?: (event: React.MouseEvent<HTMLDivElement>) => void;
  vertical?: boolean;
}

export default function Carousel({ children, vertical }: CarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return <Slider {...settings}>{children}</Slider>;
}
