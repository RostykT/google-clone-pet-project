import './NotFound.css';
import Logo from '../../assets/google_logo.png';

const NotFound = () => {
  return (
    <div className="notFoundPage">
      <img src={Logo} alt='google-logo'/>
      <div className="notFoundPage__text">
        <h3>
          <b>404.</b>
          That&lsquo;s an error
        </h3>
        <p className="notFoundPage__description">
        The requested URL was not found on this server.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
