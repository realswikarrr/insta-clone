import React, { ReactNode } from "react";
import NavBar from "../navbar";

type Props = {
  children: ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <div className="max-w-[821px] mx-auto mt-5 w-full ">{children}</div>
    </>
  );
};

export default Main;
