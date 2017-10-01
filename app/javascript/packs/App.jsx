import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import HomePage from './Homepage';
import Album from './Album';

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/album/:id" component={Album} />
      </div>
    </Router>,

    document.getElementById('root-home'),
  )
})
