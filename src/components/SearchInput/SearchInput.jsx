import {useState} from 'react';
import PropTypes from 'prop-types';
import './SearchInput.css';

import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Tooltip from '@mui/material/Tooltip';
import KeyboardIcon from '@mui/icons-material/Keyboard';

import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {searchAction} from '../../redux/search/searchSlice';
import {appDropdownAction} from '../../redux/appDropdown/appDropdownSlice';


const SearchInput = ({buttonHidden}) => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const searchInput = (term) => {
    dispatch(searchAction.searchInput(term));
  };
  const toggle = () => {
    dispatch(appDropdownAction.toggleDropdown());
  };
    //   const removeInput = (term) => {
    //     dispatch(searchAction.removeInput(term));
    //   };
  const search = (e) => {
    e.preventDefault();
    history.push('/search');
    searchInput(input);
    toggle();
  };

  return (
    <form className="search">
      <div className="search__input">
        <Tooltip title="Search">
          <SearchIcon className="search__inputIcon" />
        </Tooltip>
        <input value={input} onChange={(e) => setInput(e.target.value)}/>
        <Tooltip title="transliteration">
          <KeyboardIcon className="search__inputIcon"/>
        </Tooltip>
        <Tooltip title="Search by voice">
          <MicIcon className="search__inputIcon"/>
        </Tooltip>
      </div>
      {!buttonHidden && (
        <div className="search__buttons">
          <Button type="submit" onClick={search}> Google Search</Button>
          <Button> I&apos;m Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
};
SearchInput.propTypes = {
  buttonHidden: PropTypes.bool,
};
SearchInput.defaultProps = {
  buttonHidden: false,
};

export default SearchInput;
