import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import SignInForm from '../components/sign_in_form';

document.addEventListener('DOMContentLoaded', () => {
  let rootElement = document.getElementById('auth')

  if (rootElement) {

    ReactDOM.render(
      <SignInForm />,
      rootElement,
    )

  }

})
