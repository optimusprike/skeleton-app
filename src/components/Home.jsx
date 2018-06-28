import React from 'react';
// import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';

const Home = () => (
  <div>
    <p>Home</p>
    <a href = "/login" id="login">Login</a>
    <br></br>
    <a href = "/register" id="register">Register</a>
  </div>
);

export default withRouter(Home);
