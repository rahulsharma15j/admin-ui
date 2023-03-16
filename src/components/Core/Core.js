import React from "react";
import "./Core.css";
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";
import Table from "../Table/Table";
import DeleteButton from "../DeleteButton/DeleteButton";

const Core = () => {
  return (
    <div className="core">
      <h1>Admin UI</h1>
      <Search />
      <Table />
      <div className="row">
        <DeleteButton />
        <Pagination />
      </div>
    </div>
  );
};

export default Core;
