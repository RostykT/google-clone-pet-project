import './NotFound.css';
import Logo from '../../assets/google_logo.png';
import Error from '../../assets/robot-error.jpg';

const NotFound = () => {
  return (
    <div className="content">
      <div className="notFound__content">
        <div className="notFound__contentRight">
          <img src={Logo} alt='google-logo'/>
          <h3>
            404.
            That&lsquo;s an error
          </h3>
          <p className="notFoundPage__description">
            The requested URL was not found on this server.
          </p>
        </div>
        <div className="notFound__contentLeft">
          <img src={Error} alt="error-robot" />
        </div>
      </div>
    </div>

  );
};

export default NotFound;
