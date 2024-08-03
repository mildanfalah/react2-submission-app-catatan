import React from "react";
import PropTypes from "prop-types";

function SearchBar() {
  return (
    <section className="search-bar">
      <input type="text" placeholder="Cari berdasarkan judul ..." />
    </section>
  );
}

SearchBar.propTypes = {
  input: PropTypes.string,
};

export default SearchBar;
