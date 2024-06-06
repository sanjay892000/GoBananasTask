// src/components/SearchBar.js
import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = (props) => {
  const { searchTerm, onSearchChange } = props;
  return (
    <TextField
      label="Search"
      variant="outlined"
      fullWidth
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      style={{ marginBottom: '20px' }}
    />
  );
};

export default SearchBar;
