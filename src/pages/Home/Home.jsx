import './Home.css';
import SearchInput from '../../components/SearchInput/SearchInput';
import Logo from '../../assets/google_logo.png';
import {Link} from 'react-router-dom';

import AppsIcon from '@mui/icons-material/Apps';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import {useDispatch, useSelector} from 'react-redux';
import {appDropdownAction} from '../../redux/appDropdown/appDropdownSlice';
import AppMenuDropdown from '../../components/AppMenuDropdown/AppMenuDropdown';

import {signInWithGoogle} from '../../firabase/firebase';


const Home = () => {
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(appDropdownAction.toggleDropdown());
  };
  const hidden = useSelector((state) => state.dropdown.dropdownHidden);
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <AppsIcon className="home__appsIcon" onClick={toggle}/>
          {!hidden && <AppMenuDropdown />}
          <Button
            variant="contained"
            size="large"
            onClick={signInWithGoogle}>
            Sign In
          </Button>
          {/* <Avatar /> */}
        </div>
      </div>
      <div className="home__body">
        <img src={Logo} alt={'google_logo'}/>
        <div className="home__inputContainer">
          <SearchInput />
        </div>
      </div>
    </div>
  );
};

export default Home;
