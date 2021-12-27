import './AppMenuDropdown.css';
import AppMenuItem from '../AppMenuItem/AppMenuItem';
import Firebase from '../../assets/firebase.png';
import Documents from '../../assets/documents.png';
import YouTube from '../../assets/youtube.png';
import Sheets from '../../assets/sheets.png';
import Gmail from '../../assets/gmail.png';
import Keep from '../../assets/keep.png';
import Drive from '../../assets/drive.png';
import Maps from '../../assets/maps.png';
import Photo from '../../assets/photo.png';
import Calendar from '../../assets/calendar.png';
import Meets from '../../assets/meets.png';
import Duo from '../../assets/duo.png';
import Chats from '../../assets/chats.png';
import Chrome from '../../assets/chrome.png';
import Slides from '../../assets/slides.png';
import News from '../../assets/news.png';
import TensorFlow from '../../assets/tensor-flow.png';

import {Link} from 'react-router-dom';

// TODO: DRY, fix it
const AppMenuDropdown = () => {
  return (
    <div className="dropdown">
      <Link to='/firebase'>
        <AppMenuItem
          image={Firebase}
          alt='google-firebase'
          title='Firebase' />
      </Link>
      <Link to='/news'>
        <AppMenuItem
          image={News}
          alt='google-news'
          title='News' />
      </Link>
      <Link to='/tensorflow'>
        <AppMenuItem
          image={TensorFlow}
          alt='google-tensorglow'
          title='Tensor Flow' />
      </Link>
      <Link to='/duo'>
        <AppMenuItem
          image={Duo}
          alt='google-duo'
          title='Duo' />
      </Link>
      <Link to='/chats'>
        <AppMenuItem
          image={Chats}
          alt='google-chats'
          title='Chats' />
      </Link>
      <Link to='/chrome'>
        <AppMenuItem
          image={Chrome}
          alt='google-chrome'
          title='Chrome' />
      </Link>
      <Link to='/slides'>
        <AppMenuItem
          image={Slides}
          alt='google-slides'
          title='Slides' />
      </Link>
      <Link to='/documents'>
        <AppMenuItem
          image={Documents}
          alt='google-documents'
          title='Documents' />
      </Link>
      <Link to='/youtube'>
        <AppMenuItem
          image={YouTube}
          alt='You-tube'
          title='You Tube' />
      </Link>
      <Link to='/sheets'>
        <AppMenuItem
          image={Sheets}
          alt='google-sheets'
          title='Sheets' />
      </Link>
      <Link to='/gmail'>
        <AppMenuItem
          image={Gmail}
          alt='google-gmail'
          title='Gmail' />
      </Link>
      <Link to='/keep'>
        <AppMenuItem
          image={Keep}
          alt='google-keep'
          title='Keep' />
      </Link>
      <Link to='/drive'>
        <AppMenuItem
          image={Drive}
          alt='google-drive'
          title='Drive' />
      </Link>
      <Link to='/maps'>
        <AppMenuItem
          image={Maps}
          alt='google-maps'
          title='Maps' />
      </Link>
      <Link to='/photo'>
        <AppMenuItem
          image={Photo}
          alt='google-photo'
          title='Photo' />
      </Link>
      <Link to='/calendar'>
        <AppMenuItem
          image={Calendar}
          alt='google-calendar'
          title='Calendar' />
      </Link>
      <Link to='/meets'>
        <AppMenuItem
          image={Meets}
          alt='google-meets'
          title='Meets' />
      </Link>
    </div>
  );
};

export default AppMenuDropdown;
