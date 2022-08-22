import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default Main;
