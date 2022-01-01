import './Settings.css';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import {useDispatch, useSelector} from 'react-redux';
import {appDropdownAction} from '../../redux/appDropdown/appDropdownSlice';
import {darkModeAction} from '../../redux/darkMode/darkModeSlice';

const Settings = () => {
  const dispatch = useDispatch();
  const closeSettingsModal = () => {
    dispatch(appDropdownAction.closeSettingsModal());
  };
  const toggleDarkMode = () => {
    dispatch(darkModeAction.toggleDarkMode());
    closeSettingsModal();
  };
  const dark = useSelector((state) => state.darkMode.dark);

  return (
    <div className="settings">
      <ul>
        <li>Search settings</li>
        <li>Advanced search</li>
        <li>Your data in Search</li>
        <li>Search history</li>
        <li>Search help</li>
        <li>Send feedback</li>
        <div className='settings_dark_light' onClick={toggleDarkMode}>
           Theme:
          { dark ? <LightModeOutlinedIcon/> : <DarkModeOutlinedIcon/> }
        </div>
      </ul>
    </div>
  );
};

export default Settings;
