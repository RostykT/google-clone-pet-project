import './UserModal.css';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';

import {useDispatch} from 'react-redux';
import {appDropdownAction} from '../../redux/appDropdown/appDropdownSlice';

import {auth} from '../../firabase/firebase';


const UserModal = () => {
  const dispatch = useDispatch();
  const toggleUserModal = () => {
    dispatch(appDropdownAction.toggleUserModal());
  };

  return (
    <div className='user' onClick={toggleUserModal}>
      <div className="userModal" onClick={(e) => e.stopPropagation()}>
        <div className="userModal__mainContent">
          <div className="userModal__mainContentPic">
            <Tooltip title='Profile'>
              <Avatar
                sx={{width: 110, height: 110}}
                alt={auth.currentUser?.multiFactor.user.displayName}
                src={auth.currentUser?.multiFactor.user.photoURL}
              />
            </Tooltip>
          </div>
          <div className="userModal__mainContentInfo">
            <p className="userModal__mainContentInfo_Name">
              {auth.currentUser?.multiFactor.user.displayName}
            </p>
            <p className="userModal__mainContentInfo_Email">
              {auth.currentUser?.multiFactor.user.email}
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
    </div>

  );
};

UserModal.propTypes = {
  currentUser: PropTypes.object,
};

UserModal.defaultProps = {
  currentUser: null,
};

export default UserModal;
