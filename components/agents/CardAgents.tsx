import React from "react";

interface CardAgentsProps {
  image: string;
  name: string;
  country: string;
  skills: string[];
  bgImage: string;
  gradient: string;
}

export default function CardAgents({
  image,
  bgImage,
  name,
  gradient,
  country,
  skills,
}: CardAgentsProps) {
  return (
    <div
      style={{
        backgroundImage: `url("${bgImage}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#333333",
      }}
      className="h-[400px] rounded-tl-xl border border-black w-full  relative"
    >
      <div
        style={{ WebkitTextStroke: "1px #fff" }}
        className="absolute cursor-default -left-36 font-black w-full text-transparent top-28 text-8xl rotate-90"
      >
        {name}
      </div>
      <div className="h-full w-full">
        <img className="w-full flex h-full" src={image} alt="agent" />
      </div>
    </div>
  );
}
