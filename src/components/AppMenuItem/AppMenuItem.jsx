import React from 'react';
import './AppMenuItem.css';
import PropTypes from 'prop-types';


const AppMenuItem = ({image, alt, title}) => {
  return (
    <div className="appItem">
      <div className="appItem__content">
        <img src={image} alt={alt} className="appItem__icon" title='Translate'/>
        <p className="appItem__title">{title}</p>
      </div>
    </div>
  );
};

AppMenuItem.propTypes = {
  title: PropTypes.string,
  alt: PropTypes.string,
  image: PropTypes.string,
};

AppMenuItem.defaultProps = {
  title: '',
  alt: '',
  image: '',

};

export default AppMenuItem;
