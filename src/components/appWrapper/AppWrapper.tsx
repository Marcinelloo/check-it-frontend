import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import SearchInfo from "./searchInfo/SearchInfo";

import "./appWrapper.css";

const AppWrapper = () => {
  return (
    <main className="dashboard-wrapper">
      <Navigation />
      <section className="dashboard-view">
        <SearchInfo />
        <Outlet />
      </section>
    </main>
  );
};

export default AppWrapper;
