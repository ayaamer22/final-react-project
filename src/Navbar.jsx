import React from 'react';

const Navbar = ({ onSearch }) => {
  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.search.value;
    onSearch(query);
  };

  return (
    <nav className="navbar">
      <div className="logo">Product Market</div>
      <form onSubmit={handleSearch} className="search-form">
        <input type="text" name="search" placeholder="Search products" />
        <button type="submit">Search</button>
      </form>
      <button className="nav-button" onClick={() => onSearch('')}>Products</button>
      <button className="nav-button" onClick={() => onSearch('')}>Category</button>
    </nav>
  );
};

export default Navbar;