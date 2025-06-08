import React from 'react';

const SearchFilter = ({ searchTerm, setSearchTerm, selectedType, setSelectedType, carTypes }) => {
  return (
    <div className="search-filter">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search cars by make or model..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="filter-container">
        <select 
          value={selectedType} 
          onChange={(e) => setSelectedType(e.target.value)}
          className="filter-select"
        >
          <option value="">All Types</option>
          {carTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;