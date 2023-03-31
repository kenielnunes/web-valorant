import React from "react";

interface ButtonTitle {
  children?: React.ReactNode;
  onClick: () => void;
}

export function ButtonTitleAgent({ children, ...rest }: ButtonTitle) {
  return (
    <button
      {...rest}
      className={`text-[90px] lg:text-[120px]  text-center md:text-left leading-[103px] duration-300 md:hover:translate-x-4 focus:text-vavaRed`}
    >
      {children}
    </button>
  );
}
