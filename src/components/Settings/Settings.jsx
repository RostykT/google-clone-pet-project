import './Settings.css';
import {useState} from 'react';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
const Settings = () => {
  const [dark, setDark] = useState(false);
  const toggleMode = () => {
    setDark(!dark);
  };
  return (
    <div className="settings">
      <ul>
        <li>Search settings</li>
        <li>Advanced search</li>
        <li>Your data in Search</li>
        <li>Search history</li>
        <li>Search help</li>
        <li>Send feedback</li>
        <div className='settings_dark_light' onClick={toggleMode}>
           Theme:
          { dark ? <LightModeOutlinedIcon/> : <DarkModeOutlinedIcon/> }
        </div>
      </ul>
    </div>
  );
};

export default Settings;
