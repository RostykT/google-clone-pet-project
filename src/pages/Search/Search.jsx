import './Search.css';
import Logo from '../../assets/google_logo.png';
import LogoDarkMode from '../../assets/google_logo_dark_mode.png';
import {Link} from 'react-router-dom';
import SearchInput from '../../components/SearchInput/SearchInput';
import AppMenuDropdown from '../../components/AppMenuDropdown/AppMenuDropdown';
import UserModal from '../../components/UserModal/UserModal';

// import useGoogleSearch from '../../components/useGoogleSearch';

import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import FeedIcon from '@mui/icons-material/Feed';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import Avatar from '@mui/material/Avatar';
import AppsIcon from '@mui/icons-material/Apps';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';

import PropTypes from 'prop-types';
import {Fragment} from 'react';


import {useSelector, useDispatch} from 'react-redux';
import {appDropdownAction} from '../../redux/appDropdown/appDropdownSlice';
import {darkModeAction} from '../../redux/darkMode/darkModeSlice';

// mock data;
import response from '../../response';

import {signInWithGoogle} from '../../firabase/firebase';


const Search = ({currentUser}) => {
  const term = useSelector((state) => state.search.term);
  const dark = useSelector((state) => state.darkMode.dark);
  const hidden = useSelector((state) => state.dropdown.showAppModal);
  const userModal = useSelector((state) => state.dropdown.showUserModal);

  const dispatch = useDispatch();

  const toggleApp = () => {
    dispatch(appDropdownAction.toggleApp());
  };
  const closeAppModal = () => {
    dispatch(appDropdownAction.closeAppModal());
  };

  const toggleUserModal = () => {
    dispatch(appDropdownAction.toggleUserModal());
  };

  const toggleDarkMode = () => {
    dispatch(darkModeAction.toggleDarkMode());
  };
  // Mock api
  const data = response;

  // const {data} = useGoogleSearch(term);
  return (
    <div className="searchPage" data-theme={dark ? 'dark' : 'light'}>
      <div className="searchBody">
        <div className="searchPage__header">
          <div className="searchPage__headerLeft">
            <Link to='/'>
              <img
                src={ dark ? LogoDarkMode : Logo }
                alt='google-logo'
                className='searchPage__logo'
                onClick={closeAppModal}/>
            </Link>
            <div className="searchPage__headerBody">
              <SearchInput buttonHidden/>
              <div className='searchPage__options'>
                <div className='searchPage__optionsLeft'>
                  <div className='searchPage__option'>
                    <SearchSharpIcon />
                    <Link to="/all"> All </Link>
                  </div>
                  <div className='searchPage__option'>
                    <FeedIcon />
                    <Link to="/news"> News </Link>
                  </div>
                  <div className='searchPage__option'>
                    <ImageIcon />
                    <Link to="/images"> Images </Link>
                  </div>
                  <div className='searchPage__option'>
                    <LocalOfferIcon />
                    <Link to="/shopping"> Shopping </Link>
                  </div>
                  <div className='searchPage__option'>
                    <LocationOnSharpIcon />
                    <Link to="/maps"> Maps </Link>
                  </div>
                  <div className='searchPage__option'>
                    <MoreVertSharpIcon />
                    <Link to="/more"> More </Link>
                  </div>
                </div>
                <div className='searchPage__optionsRight'>
                  <div className='searchPage__option'>
                    <Link to="/settings"> Settings </Link>
                  </div>
                  <div className='searchPage__option'>
                    <Link to="/tools"> Tools </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="searchPage__headerRight">
            <SettingsIcon
              className="searchPage__settingsIcon"
              onClick={toggleDarkMode}
            />
            <AppsIcon className="searchPage__appsIcon" onClick={toggleApp}/>
            {hidden && <AppMenuDropdown />}
            {currentUser ? <Fragment>
              <Tooltip title={`${currentUser.multiFactor.user.displayName}`}>
                <Avatar
                  alt={currentUser.multiFactor.user.displayName}
                  src={currentUser.multiFactor.user.photoURL}
                  className="home__Avatar"
                  onClick={toggleUserModal}
                />
              </Tooltip>
              {userModal && <UserModal/>}
            </Fragment> : (
              <Button
                variant="contained"
                size="large"
                onClick={signInWithGoogle}>
                Sign In
              </Button>
            )}

          </div>
        </div>
        { term && (
          <div className='searchPage__results'>
            <p className='searchPage__resultCount'>
           About {data?.searchInformation.formattedTotalResults}
           results ({data?.searchInformation.formattedSearchTime} seconds)
            </p>
            {data?.items.map((item, key) => (
              <div className='searchPage__result' key={key}>
                <a className='searchPage__resulLink' href={item.link}>
                  {item.pagemap?.cse_image?.length > 0 &&
                 item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={ item.pagemap?.cse_image?.length > 0 &&
                            item.pagemap?.cse_image[0]?.src}
                      alt=""
                    />
                  )}
                  {item.displayLink}
                </a>
                <a href={item.link} className='searchPage__resultTitle'>
                  <h2>{item.title}</h2>
                </a>
                <p className='searchPage__resultSnippet'>
                  {item.snippet}
                </p>
              </div>
            ))}
          </div>
        )
        }
      </div>
    </div>
  );
};

Search.propTypes = {
  currentUser: PropTypes.object,
};

Search.defaultProps = {
  currentUser: null,
};

export default Search;
