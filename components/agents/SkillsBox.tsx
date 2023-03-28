import React from "react";

export interface Skills {
  description: string;
  displayIcon: string;
  displayName: string;
  slot: string;
}

export interface SkillsBoxProps {
  skills: Skills[];
}

export default function SkillsBox({ skills }: SkillsBoxProps) {
  return (
    <div className="flex gap-2 absolute bottom-20">
      {skills.map((skill) => {
        return (
          <div className="border  p-4" key={skill.displayName}>
            <img src={skill.displayIcon} alt={skill.displayName} />
          </div>
        );
      })}
    </div>
  );
}
