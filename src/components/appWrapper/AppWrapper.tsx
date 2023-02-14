import React from "react";
import { Outlet } from "react-router-dom";
import "./appWrapper.css";
import Navigation from "./navigation/Navigation";
import SearchInfo from "./searchInfo/SearchInfo";

const AppWrapper = () => {
  return (
    <main>
      <Navigation />
      <section>
        <SearchInfo />
        <Outlet />
      </section>
    </main>
  );
};

export default AppWrapper;
