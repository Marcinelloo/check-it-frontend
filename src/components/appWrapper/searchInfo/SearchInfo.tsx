import React from "react";

import "./searchInfo.css";

const SearchInfo = () => {
  return (
    <section className="search-info-wrapper">
      <div className="search-bar-wrapper">
        <i className="fa-solid fa-magnifying-glass icon-search"></i>
        <input
          type="search"
          placeholder="Wpisz
        przedmiot..."
          className="search-input"
        />
      </div>
      <div className="user-info-wrapper">
        <h5>Adam Smith</h5>
        <i className="fa-solid fa-user button icon-user"></i>
        <button type="button" className="button button-error">
          <i className="fa-solid fa-door-closed"></i>
        </button>
      </div>
    </section>
  );
};

export default SearchInfo;
