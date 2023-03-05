import React, { useState } from "react";
import ButtonAdd from "../../common/customHtmlElements/buttonAdd/ButtonAdd";
import Table from "../../common/customHtmlElements/table/Table";
import "./user.css";

const User: React.FC<any> = () => {
  const [mode, setMode] = useState();
  const [user, setUser] = useState({});
  const [rows, setRows] = useState();
  const [columns, setColumns] = useState();

  const handleAdd = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <main className="user__wrapper">
      <div className="btn__wrapper">
        <ButtonAdd handleClick={handleAdd} label="User" />
      </div>
      <Table rows={[[]]} columns={[]} />
      {}
    </main>
  );
};

export default User;
