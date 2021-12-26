import React from 'react';
import './SearchInput.css';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Tooltip from '@mui/material/Tooltip';
import KeyboardIcon from '@mui/icons-material/Keyboard';

const SearchInput = () => {
  return (
    <form className="search">
      <div className="search__input">
        <Tooltip title="Search">
          <SearchIcon className="search__inputIcon" />
        </Tooltip>
        <input />
        <Tooltip title="transliteration">
          <KeyboardIcon className="search__inputIcon"/>
        </Tooltip>
        <Tooltip title="Search by voice">
          <MicIcon className="search__inputIcon"/>
        </Tooltip>
      </div>
      <div className="search__buttons">
        <Button type="submit"> Google Search</Button>
        <Button> I&apos;m Feeling Lucky</Button>
      </div>
    </form>
  );
};

export default SearchInput;
