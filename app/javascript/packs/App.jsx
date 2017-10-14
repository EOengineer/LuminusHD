import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Navigation from './general_ui/navigation';
import HomePage from './Homepage';
import AlbumList from './AlbumList';
import Album from './Album';

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(
    <Router>
      <div>
        <Navigation />

        <Route
        exact path="/"
        component={HomePage} />


        <Route
          exact path="/new-releases"
          render={(props) => (
          <AlbumList
            endpoint="new-releases"
            title="New Releases"
            imageUrl="https://static.pexels.com/photos/1774/technology-music-sound-audio.jpg" />
        )} />

        <Route
          exact path="/featured-releases"
          render={(props) => (
          <AlbumList
            endpoint="featured-releases"
            title="Featured Releases"
            imageUrl="https://static.pexels.com/photos/9137/night-vintage-music-bokeh.jpg" />
        )} />

        <Route
          exact path="/acclaimed-releases"
          render={(props) => (
          <AlbumList
            endpoint="acclaimed-releases"
            title="Critically Acclaimed"
            imageUrl="https://static.pexels.com/photos/320335/pexels-photo-320335.jpeg" />
        )} />

        <Route path="/albums/:id" component={Album} />

      </div>
    </Router>,

    document.getElementById('root-home'),
  )
})
