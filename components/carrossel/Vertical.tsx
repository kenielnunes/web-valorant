import React from "react";
import Slider from "react-slick";

interface CarouselProps {
  children?: React.ReactNode;
  eventHover?: (event: React.MouseEvent<HTMLDivElement>) => void;
  vertical?: boolean;
}

export default function Carousel({ children }: CarouselProps) {
  const settings = {
    dots: false,
    vertical: true,
    speed: 500,
    verticalSwiping: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 325,
        settings: {
          slidesToShow: 1,
          vertical: false,
          verticalSwiping: false,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
    ],
  };
  return <Slider {...settings}>{children}</Slider>;
}
