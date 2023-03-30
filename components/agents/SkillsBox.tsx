import React from "react";

export interface Skills {
  description: string;
  displayIcon: string;
  displayName: string;
  slot: string;
}

export interface SkillsBoxProps {
  skills: Skills[] | undefined;
}

export default function SkillsBox({ skills }: SkillsBoxProps) {
  return (
    <div className="flex gap-2 left-0 w-full right-0">
      {skills?.map((skill) => {
        return (
          <div
            className="border border-black rounded-tl-md bg-[#333333] relative flex items-center  w-80 h-32"
            key={skill.displayName}
          >
            <div className="flex flex-col text-white  p-4">
              <div className="text-3xl">{skill.slot}</div>
              <div className="text-lg">{skill.displayName}</div>
            </div>

            <div className="h-[90%] w-32 bg-vavaRed mt-auto ml-auto"></div>
            <img
              className="w-[30%] absolute right-4 top-5"
              src={skill.displayIcon}
              alt={skill.displayName}
            />
          </div>
        );
      })}
    </div>
  );
}
