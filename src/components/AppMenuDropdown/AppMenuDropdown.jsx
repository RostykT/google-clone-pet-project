import './AppMenuDropdown.css';
import AppMenuItem from '../AppMenuItem/AppMenuItem';
import TranslateLogo from '../../assets/google_translate.png';
import DocsLogo from '../../assets/google_docs.png';
import YouTubeLogo from '../../assets/youtube_logo.png';
import SheetsLogo from '../../assets/google_sheets.png';
import GmailLogo from '../../assets/gmail_logo.png';
import KeepLogo from '../../assets/google_keep.png';
import DriveLogo from '../../assets/google_drive.png';
import MapsLogo from '../../assets/maps_logo.png';
import PhotoLogo from '../../assets/google_photo_logo.png';
import CalendarLogo from '../../assets/google_calendar.png';
import MeetsLogo from '../../assets/meets_logo.png';

import {Link} from 'react-router-dom';

const AppMenuDropdown = () => {
  return (
    <div className="dropdown">
      <Link to='/translate'>
        <AppMenuItem
          image={TranslateLogo}
          alt='google-translate'
          title='Translate' />
      </Link>
      <Link to='/documents'>
        <AppMenuItem
          image={DocsLogo}
          alt='google-documents'
          title='Documents' />
      </Link>
      <Link to='/youtube'>
        <AppMenuItem
          image={YouTubeLogo}
          alt='You-tube'
          title='You Tube' />
      </Link>
      <Link to='/sheets'>
        <AppMenuItem
          image={SheetsLogo}
          alt='google-sheets'
          title='Sheets' />
      </Link>
      <Link to='/gmail'>
        <AppMenuItem
          image={GmailLogo}
          alt='google-gmail'
          title='Gmail' />
      </Link>
      <Link to='/keep'>
        <AppMenuItem
          image={KeepLogo}
          alt='google-keep'
          title='Keep' />
      </Link>
      <Link to='/drive'>
        <AppMenuItem
          image={DriveLogo}
          alt='google-drive'
          title='Drive' />
      </Link>
      <Link to='/maps'>
        <AppMenuItem
          image={MapsLogo}
          alt='google-maps'
          title='Maps' />
      </Link>
      <Link to='/photo'>
        <AppMenuItem
          image={PhotoLogo}
          alt='google-photo'
          title='Photo' />
      </Link>
      <Link to='/calendar'>
        <AppMenuItem
          image={CalendarLogo}
          alt='google-calendar'
          title='Calendar' />
      </Link>
      <Link to='/meets'>
        <AppMenuItem
          image={MeetsLogo}
          alt='google-meets'
          title='Meets' />
      </Link>
    </div>
  );
};

export default AppMenuDropdown;
