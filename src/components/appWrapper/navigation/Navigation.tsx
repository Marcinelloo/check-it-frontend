import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NAVIGATION_ELEMENTS } from "../../../common/constants/navigation";

import "./navigation.css";

const Navigation: React.FC<any> = () => {
  const navigate = useNavigate();

  const currentURL = window.location.pathname.split("/")[1];
  return (
    <section className="navigation-wrapper">
      {NAVIGATION_ELEMENTS.map((element) => (
        <i
          className={`fa-solid ${element.icon} ${
            currentURL === element.name && "icon-current"
          }  icon-nav`}
          onClick={() => navigate(element.link)}
        ></i>
      ))}
    </section>
  );
};

export default Navigation;
