import React, {Component} from 'react';
//import PropTypes from 'prop-types';
//import { render } from 'react-dom';

const Register= () => (
    <form >
      <p>Create an account</p>
      <input class="firstName" type="text"/>
      <input class="lastName" type="text"/>
      <input class="email" type="text"/>
      <input class="password" type="password"/>
      <input class="confirmPassword" type="password"/>
      <input class="createAccount" type="submit"/>
    </form>
);

 export default Register;
