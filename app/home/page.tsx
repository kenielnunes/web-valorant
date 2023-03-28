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

export default function App() {
  const [agentsData, setAgentsData] = useState<Agent[]>([]);
  const [activeAgent, setActiveAgent] = useState<Agent>();
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
            <div className="flex items-center h-full gap-2 justify-center flex-col">
              <div className="animate-up">
                <SvgArrow rotate={true} src="/img/valorant-arrow.svg" />
              </div>

              <div className="animate-down mt-1">
                <SvgArrow src="/img/valorant-arrow.svg" />
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

  return (
    <div
      style={{
        backgroundImage: `url("/img/background.png")`,
        backgroundPosition: "center",
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-screen bg-vavaRed h-screen "
    >
      {/* <div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <FollowMouse />
      </div> */}
      {/* <video className="w-full min-h-[70%]" preload="true" muted loop autoPlay>
        <source
          src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt29d7c4f6bc077e9e/5eb26f54402b8b4d13a56656/agent-background-generic.mp4"
          type="video/mp4"
        />
      </video> */}
      <Container>
        <div className="flex  flex-col xl:flex-row h-full w-full items-center">
          {/* <div
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex"
          ></div> */}
          <div className="w-full">
            <Carousel>
              {agentsData.map((agent: Agent) => {
                return (
                  <div className="flex items-center justify-center">
                    <CardAgents
                      image={agent.fullPortrait}
                      name={agent.displayName}
                      country={"Country"}
                      skills={[]}
                      bgImage={agent.background}
                      gradient={""}
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>

          {/* <div className="absolute -top-56 -right-32 w-1/2">
              <AgentBio
                classAgent={activeAgent?.role?.displayName}
                bio={activeAgent?.description}
              />
            </div> */}
        </div>
      </Container>
    </div>
  );
}
