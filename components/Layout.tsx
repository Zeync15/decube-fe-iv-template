import React, { ReactNode } from "react";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="sticky"><Header /></div>
      <div className="flex-grow">{children}</div>
      <div className="">Footer</div>
    </div>
  );
};

export default Layout;
