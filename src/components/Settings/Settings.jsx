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
        <li onClick={toggleMode}>Dark theme:
          {!dark ?
            <span>
              On <DarkModeOutlinedIcon className="light_mode"/>
            </span> :
            <span>
              Off <LightModeOutlinedIcon className="light_mode"/>
            </span>
          }
        </li>
      </ul>
    </div>
  );
};

export default Settings;
