import React, { Children } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import SearchInfo from "./searchInfo/SearchInfo";

import "./appWrapper.css";

type Props = {
  children?: string | JSX.Element | JSX.Element[];
};

const AppWrapper = ({ children }: Props) => {
  return (
    <main className="dashboard-wrapper">
      <Navigation />
      <section className="dashboard-view">
        <SearchInfo />
        {children}
        <Outlet />
      </section>
    </main>
  );
};

export default AppWrapper;
