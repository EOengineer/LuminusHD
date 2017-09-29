import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import HomePage from './Homepage';

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(

    <HomePage />,

    document.getElementById('root-home'),
  )
})
