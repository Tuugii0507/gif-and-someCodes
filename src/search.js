import React, { useEffect, useState } from "react";
import axios from "axios";
import "./giphy.css";
// import Giphy from "./App";

const Search = ({ childSearch, setSearch }) => {
  const drrex = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="..."
        value={childSearch}
        onChange={drrex}
        className="input"
      />
    </div>
  );
};
export default Search;
