import './Home.css';
import SearchInput from '../../components/SearchInput/SearchInput';
import Logo from '../../assets/google_logo.png';
import {Link} from 'react-router-dom';
import {Fragment} from 'react';
import PropTypes from 'prop-types';

import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';


import {useDispatch, useSelector} from 'react-redux';
import {appDropdownAction} from '../../redux/appDropdown/appDropdownSlice';
import AppMenuDropdown from '../../components/AppMenuDropdown/AppMenuDropdown';
import UserModal from '../../components/UserModal/UserModal';
import Settings from '../../components/Settings/Settings';

import {signInWithGoogle} from '../../firabase/firebase';

const Home = ({currentUser}) => {
  const dispatch = useDispatch();

  const closeAppModal = () => {
    dispatch(appDropdownAction.closeAppModal());
  };

  const closeUserModal = () => {
    dispatch(appDropdownAction.closeUserModal());
  };

  const closeSettingsModal = () => {
    dispatch(appDropdownAction.closeSettingsModal());
  };

  const toggleApp = () => {
    dispatch(appDropdownAction.toggleApp());
    closeSettingsModal();
    closeUserModal();
  };

  const toggleSettings = () => {
    dispatch(appDropdownAction.toggleSettings());
    closeAppModal();
    closeUserModal();
  };

  const toggleUserModal = () => {
    dispatch(appDropdownAction.toggleUserModal());
    closeAppModal();
    closeSettingsModal();
  };

  const showAppModal = useSelector((state) => state.dropdown.showAppModal);
  const dark = useSelector((state) => state.darkMode.dark);
  const userModal = useSelector((state) => state.dropdown.showUserModal);
  const showSettingsModal = useSelector((state) =>
    state.dropdown.showSettingsModal);

  return (
    <div className="home" data-theme={dark ? 'dark' : 'light'}>
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <AppsIcon className="home__appsIcon" onClick={toggleApp}/>
          {showAppModal && <AppMenuDropdown />}
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
      <div className="home__body">
        <img src={Logo} alt={'google_logo'}/>
        <div className="home__inputContainer">
          <SearchInput />
        </div>
      </div>
      <div className="home__footer">
        <div className="home__footerLeft"></div>
        <div className="home__footerRight">
          { showSettingsModal && <Settings />}
          <div className="home__footerRight_variant">
            <p>Privacy</p>
            <p>Terms</p>
            <p onClick={toggleSettings}>Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  currentUser: PropTypes.object,
};

Home.defaultProps = {
  currentUser: null,
};
export default Home;
