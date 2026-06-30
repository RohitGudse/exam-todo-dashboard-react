import React from "react";

const SearchTask = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search Task..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "20px",
        borderRadius: "8px",
        border: "1px solid #ccc",
      }}
    />
  );
};

export default SearchTask;