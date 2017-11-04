import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import RegistrationForm from '../components/registration_form';

document.addEventListener('DOMContentLoaded', () => {
  let rootElement = document.getElementById('registration')

  if (rootElement) {

    ReactDOM.render(
      <RegistrationForm />,
      rootElement,
    )

  }

})
