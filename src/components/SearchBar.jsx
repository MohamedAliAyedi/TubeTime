import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, TextField } from '@mui/material';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <Paper
      sx={{
        pl: 2,
        boxShadow: 'none',
        width: '40%',
        mr: { sm: 5 },
      }}
    >
       <TextField
          id="outlined-basic"
          className="inputRound"
          placeholder="Search ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            width: '100%',
            borderRadius: '40px',
          }}
          InputProps={{
            endAdornment: (
              <IconButton onClick={onhandleSubmit} sx={{ p: '10px', color: '#d0de4c' }} aria-label='search'>
              <SearchIcon />
            </IconButton>
              ),
          }}
        />
    </Paper>
  );
};

export default SearchBar;
