import React from 'react';
import PropTypes from 'prop-types';


const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          {appName.toLowerCase()}
        </h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
  );
};
Banner.propTypes = {
  appName: PropTypes.string,
  token: PropTypes.any,


};
export default Banner;
