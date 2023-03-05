import React from "react";
import { useNavigate } from "react-router-dom";
import { SETTINGS } from "../../common/constants/settings";
import "./settings.css";

const Settings: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="settings__wrapper">
      {SETTINGS.map((setting) => (
        <div
          className="setting__item__wrapper"
          onClick={() => navigate(setting.link)}
        >
          <h3>{setting.label}</h3>
          <i className={setting.icon} />
        </div>
      ))}
    </main>
  );
};

export default Settings;
