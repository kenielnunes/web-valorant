/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import "global.css";
import { getAllAgents } from "../api/agents";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../../components/carrossel/Vertical";
import Container from "../../components/Layout/Container";
import { ButtonTitleAgent } from "../../components/buttons/ButtonTitleAgent";
import AgentBio from "../../components/agents/AgentBio";
import { Heptagon, SvgArrow } from "../../components/mouse-hover/styles";
import CardAgents from "@/components/agents/CardAgents";
import { Agent } from "@/interfaces/agent";
import SkillsBox from "@/components/agents/SkillsBox";
import gsap from "gsap";
import { Parallax } from "react-parallax";
import ScrollReveal from "scrollreveal";

export default function App() {
  const [agentsData, setAgentsData] = useState<Agent[]>([]);
  const [activeAgent, setActiveAgent] = useState<Agent>();
  console.log("🚀 ~ file: page.tsx:20 ~ App ~ activeAgent:", activeAgent);
  const [isMouseOverParent, setIsMouseOverParent] = useState(false);

  function setAgent(agentName: string) {
    const selectedAgent = agentsData.find(
      (agent: Agent) => agentName === agent?.displayName
    );
    setActiveAgent(selectedAgent);
  }

  const handleMouseEnter = () => {
    setIsMouseOverParent(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOverParent(false);
  };

  useEffect(() => {
    getAllAgents().then((response) => {
      const randomIndex = Math.floor(Math.random() * response.data.data.length);
      const randomAgent = response.data.data[randomIndex];
      setActiveAgent(randomAgent);
      setAgentsData(response.data.data);
    });
  }, []);
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

  function FollowMouse() {
    return (
      <div
        style={{
          position: "absolute",
          left: mouseCoords.x - 48,
          top: mouseCoords.y - 48,
        }}
      >
        {isMouseOverParent && (
          <Heptagon>
            <div className="items-center hidden md:flex h-full gap-2 justify-center md:flex-col">
              <div className="animate-up">
                <SvgArrow
                  className="rotate-90 md:rotate-180"
                  rotate={true}
                  src="/img/valorant-arrow.svg"
                />
              </div>
              <div className="animate-down mt-1 ">
                <SvgArrow
                  className="-rotate-90 md:rotate-0"
                  src="/img/valorant-arrow.svg"
                />
              </div>
            </div>
          </Heptagon>
        )}
      </div>
    );
  }

  const handleMouseMove = (e: any) => {
    setMouseCoords({ x: e.clientX, y: e.clientY });
  };

  const AnimationFade = (className: string) => {
    gsap.fromTo(
      className,
      { opacity: 0, scale: 0, duration: 0.6 },
      { opacity: 1, scale: 1 }
    );
  };

  const AnimationBottomToTopFade = (className: string) => {
    gsap.fromTo(
      className,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }
    );
  };

  // gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  // let smoother = ScrollSmoother.create({
  //   content: "#content",
  //   smooth: 3,
  //   effects: true,
  // });

  // smoother.effects("img", { speed: "auto" });

  useEffect(() => {
    AnimationFade(".agentImage");
    AnimationBottomToTopFade(".bioAgent");
  }, [activeAgent]);

  ScrollReveal().reveal(".1", { delay: 500, reset: true });

  return (
    <div
      id="content"
      className="relative w-screen h-screen bg-vavaRed overflow-hidden xl:overflow-auto bg-opacity-30 items-center justify-center"
    >
      <FollowMouse />

      <Container>
        <div className="flex flex-col justify-center h-full items-center">
          <div className="w-full relative flex flex-col xl:flex-row m-auto">
            <div
              className="max-w-full xl:w-2/3 flex flex-col lg:flex-row m-auto "
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Carousel>
                {agentsData.map((agent: Agent) => {
                  return (
                    <ButtonTitleAgent
                      onClick={() => setAgent(agent.displayName)}
                    >
                      {agent.displayName}
                    </ButtonTitleAgent>
                  );
                })}
              </Carousel>
              <div className="w-full xl:w-3/4 2xl:w-1/2 sm:left-32 pointer-events-none sm:translate-y-[-80%] lg:translate-y-[-70%] xl:translate-y-[-50%] top-[50%] 2xl:left-80 md:absolute">
                <img
                  className="agentImage"
                  src={activeAgent?.fullPortrait}
                  alt={activeAgent?.displayName}
                />
              </div>
            </div>

            <div className="xl:w-1/3 mt-10 lg:mt-0 boxBio">
              <AgentBio
                classAgent={activeAgent?.role.displayName}
                bio={activeAgent?.description}
              />
            </div>
          </div>

          {/* <div className="m-auto">
            <SkillsBox skills={activeAgent?.abilities} />;
          </div> */}
        </div>
      </Container>
    </div>
  );
}
