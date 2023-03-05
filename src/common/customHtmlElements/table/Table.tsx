import React from "react";
import "./table.css";

type Props = {
  columns: [];
  rows: [[]];
};

const Table: React.FC<Props> = ({ rows, columns }: Props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((columns, i) => (
            <th key={i}>{columns}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((element, i) => (
              <td key={i}>{element}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
