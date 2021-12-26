import './Home.css';
import SearchInput from '../../components/SearchInput/SearchInput';
import {Link} from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import Logo from '../../assets/google_logo.png';


const Home = () => {
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
          <AppsIcon className="home__appsIcon"/>
          <Avatar />
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
