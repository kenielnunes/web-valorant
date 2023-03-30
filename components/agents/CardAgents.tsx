import React from "react";
import SkillsBox, { Skills, SkillsBoxProps } from "./SkillsBox";

interface CardAgentsProps {
  image: string;
  name: string;
  country: string;
  skills: Skills[];
  bgImage: string;
  gradient: string;
  onClick?: () => void;
}

export default function CardAgents({
  image,
  bgImage,
  name,
  gradient,
  country,
  skills,
  onClick,
}: CardAgentsProps) {
  return (
    <div
      onClick={onClick}
      style={{
        // backgroundImage: `url("${bgImage}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // backgroundColor: "#333333",
      }}
      className="rounded-tl-xl  border-black w-[85%] h-[50vh] relative"
    >
      <div
        style={{ WebkitTextStroke: "2px #fff" }}
        className="absolute cursor-default -left-64 font-black w-full text-transparent top-60 text-8xl rotate-90"
      >
        {name}
      </div>
      <div className="h-full w-full">
        <img className="w-full flex h-full" src={image} alt="agent" />
      </div>
      <div>
        <SkillsBox skills={skills} />
      </div>
    </div>
  );
}
