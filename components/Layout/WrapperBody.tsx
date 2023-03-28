import React from "react";

interface Props {
  backgroundImage?: string;
  children?: React.ReactNode;
}

const WrapperBody: React.FC<Props> = ({ backgroundImage, children }) => {
  return (
    <div className="bg-cover h-screen overflow-hidden bg-center bg-no-repeat">
      <div className="flex h-full items-center justify-center bg-vavaRed bg-opacity-60 text-center text-white">
        <div className="text-xl">{children}</div>
      </div>
    </div>
  );
};

export default WrapperBody;
