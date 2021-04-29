import React, { useState } from "react";

function SearchBox(props) {
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/name/${name}`);
  };

  return (
    <form className="header__search" onSubmit={submitHandler}>
      <input
        type="text"
        name="q"
        id="q"
        onChange={(e) => setName(e.target.value)}
        placeholder="Search for products"
      />
      <button className="header__searchIcon" type="submit">
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
}

export default SearchBox;
