import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import {
  Link
} from 'react-router-dom'

class Navigation extends React.Component {


  linkActiveListener() {
    // Get all "navbar-burger" elements
      var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
          $el.addEventListener('click', function () {
            // Get the target from the "data-target" attribute
            var target = $el.dataset.target;
            var $target = document.getElementById(target);

            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

          });
        });
      }
  }



  componentDidMount() {
    this.linkActiveListener()
  }

  render() {

    return(
      <nav className="navbar is-dark">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src="http://bulma.io/images/bulma-logo-white.png" alt="LuminusHD: The ultimate in HighRes Audio" width="112" height="28" />
          </Link>

          <a className="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
            <span className="icon" style={{color: "#333"}}>
              <i className="fa fa-lg fa-github"></i>
            </span>
          </a>

          <div className="navbar-burger burger" data-target="navMenuTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navMenuTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <Link to="/" className="navbar-link ">
                Albums
              </Link>
              <div className="navbar-dropdown is-boxed">
                <Link to="/new-releases" className="navbar-item ">
                  New Releases
                </Link>
                <Link to="/featured-releases" className="navbar-item ">
                  Featured Releases
                </Link>
                <Link to="/acclaimed-releases" className="navbar-item ">
                  Critically Acclaimed
                </Link>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link " href="http://bulma.io/blog/">
                Artists
              </a>
              <div id="blogDropdown" className="navbar-dropdown is-boxed" data-style={{width: "18rem"}}>
                <a className="navbar-item " href="/documentation/overview/start/">
                  New Artists
                </a>
                <a className="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">
                  Featured Artists
                </a>
                <a className="navbar-item " href="http://bulma.io/documentation/columns/basics/">
                  Critically Acclaimed
                </a>
              </div>
            </div>
          </div>



          <div className="navbar-end">
            <a className="navbar-item is-hidden-desktop-only" href="https://github.com/jgthms/bulma" target="_blank">
              <span className="icon" style={{color: "#333"}}>
                <i className="fa fa-lg fa-github"></i>
              </span>
            </a>

            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="bd-tw-button button"
                    data-social-network="Twitter"
                    data-social-action="tweet"
                    data-social-target="http://bulma.io"
                    target="_blank"
                    href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=http://bulma.io&via=jgthms">
                    <span className="icon">
                      <i className="fa fa-twitter"></i>
                    </span>
                    <span>
                      Tweet
                    </span>
                  </a>
                </p>
                <p className="control">
                  <a className="button is-primary" href="/login">
                    <span className="icon">
                      <i className="fa fa-sign-in"></i>
                    </span>
                    <span>Sign In</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>

    )
  }
}

export default Navigation;
