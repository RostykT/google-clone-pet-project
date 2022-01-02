import './UserModal.css';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

import {auth} from '../../firabase/firebase';


const UserModal = () => {
  const user = auth.currentUser;
  console.log(user);
  return (
    <div className="userModal">
      <div className="userModal__mainContent">
        <div className="userModal__mainContentPic">
          <Tooltip title='Profile'>
            <Avatar
              sx={{width: 110, height: 110}}
              alt={user.multiFactor.user.displayName}
              src={user.multiFactor.user.photoURL}
            />
          </Tooltip>
        </div>
        <div className="userModal__mainContentInfo">
          <p className="userModal__mainContentInfo_Name">
            {user.multiFactor.user.displayName}
          </p>
          <p className="userModal__mainContentInfo_Email">
            {user.multiFactor.user.email}
          </p>
        </div>
        <div className='userModal__mainContentInfo_button'>
            Manage Your Google Account
        </div>
      </div>
      <div className="userModal__account">
        <div className="userModal__account_button">
          <PersonAddAltIcon />
          <p>Add another account</p>
        </div>
      </div>
      <div className="userModal__auth">
        <button onClick={()=>auth.signOut()}>
          <p>Sign out</p>
        </button>
      </div>
      <div className="userModal__footer">
        <div className="userModal__footerLeft">Privacy Policy</div>
        <div className="userModal__footerRight"> Terms of Service</div>
      </div>
    </div>
  );
};

export default UserModal;
