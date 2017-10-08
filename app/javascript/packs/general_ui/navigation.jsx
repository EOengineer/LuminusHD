import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import {
  Link
} from 'react-router-dom'

class Navigation extends React.Component {

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
                <Link to="/albums/new-releases" className="navbar-item ">
                  New Releases
                </Link>
                <Link to="/albums/featured-releases" className="navbar-item ">
                  Featured Releases
                </Link>
                <Link to="/albums/critically-acclaimed" className="navbar-item ">
                  Critically Acclaimed
                </Link>
                <a className="navbar-item " href="http://bulma.io/documentation/layout/container/">
                  Layout
                </a>
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
                <a className="navbar-item " href="http://bulma.io/documentation/layout/container/">
                  Layout
                </a>

              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link " href="/documentation/overview/start/">
                Genres
              </a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item " href="/documentation/overview/start/">
                  Acoustic
                </a>
                <a className="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">
                  Blues
                </a>
                <a className="navbar-item " href="http://bulma.io/documentation/columns/basics/">
                  Classical
                </a>
                <a className="navbar-item " href="http://bulma.io/documentation/layout/container/">
                  Jazz
                </a>
                <a className="navbar-item " href="http://bulma.io/documentation/form/general/">
                  Pop
                </a>
                <a className="navbar-item " href="http://bulma.io/documentation/elements/box/">
                  Rock
                </a>
              </div>
            </div>

            { false &&
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link " href="/documentation/overview/start/">
                  Account
                </a>
                <div className="navbar-dropdown is-boxed">
                  <a className="navbar-item " href="/documentation/overview/start/">
                    Overview
                  </a>
                  <a className="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">
                    Modifiers
                  </a>
                  <a className="navbar-item " href="http://bulma.io/documentation/columns/basics/">
                    Columns
                  </a>
                  <a className="navbar-item " href="http://bulma.io/documentation/layout/container/">
                    Layout
                  </a>
                  <a className="navbar-item " href="http://bulma.io/documentation/form/general/">
                    Form
                  </a>
                  <a className="navbar-item " href="http://bulma.io/documentation/elements/box/">
                    Elements
                  </a>
                </div>
              </div>
            }

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
