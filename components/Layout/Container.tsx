import React from "react";

interface ContainerProp {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProp) {
  return <div className="max-w-[75%] m-auto h-full relative">{children}</div>;
}
