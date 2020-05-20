import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './../styles/LandingPage.css';
import { connect } from 'react-redux';

import logoIMG from './../image/logo.png';

function LandingPage({ logo }) {
  return (
    <div className='LandingPage'>
      <LandingPageLogo logo={logo} />
      <LandingPageButtonLogin />
      <LandingPageButtonRegister />
    </div>
  );
}


function LandingPageLogo() {
  return <img className='logo' alt='App Logo' src={logoIMG}></img>;
}


function LandingPageButtonLogin() {
  return (
    <div
      className='login'
      style={{ margin: 'auto', display: 'block', textAlign: 'center' }}
    >
      <a className='LandingPageBtn' href='/login'>
        LOGIN
      </a>
    </div>
  );
}

function LandingPageButtonRegister() {
  return (
    <div
      className='register'
      style={{ margin: 'auto', display: 'block', textAlign: 'center' }}
    >
      <a className='LandingPageBtn register' href='/register'>
        REGISTER
      </a>
    </div>
  );
}
LandingPage.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(LandingPage);
