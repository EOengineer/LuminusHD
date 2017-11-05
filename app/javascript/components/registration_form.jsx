import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import axios from 'axios';

class RegistrationForm extends React.Component {

  submitCredentials = (e) => {
    let data       = {};
    data.users = {}
    data.users.email     = document.getElementById('email').value
    data.users.password  = document.getElementById('password').value
    data.users.password_confirmation = document.getElementById('password-confirmation').value
    data.authenticity_token    = document.querySelectorAll('meta[name="csrf-token"]')[0].content

    axios.post('/v1/users', data)
    .then(function (response) {
      console.log("registration", response)
      localStorage.setItem('access_token', response.data.auth_token)
      document.cookie="access_token=" + response.data.auth_token
      window.location.replace("http://localhost:3000/account")
    })
    .catch(function (error) {
      console.log("error", error);
    });
  }


  render() {

    return (
        <section className="hero is-info is-fullheight">

          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="column is-5 is-offset-4">
                <h1 className="title">
                  Create a FREE Account
                </h1>
                <h2 className="subtitle">
                   LuminusHD features the highest quality high definition audio in the industry.  Sign up for <strong>FREE</strong> to create favorites, wishlists, and more.
                </h2>

                <div className="form-field-spacer">
                  <div className="field">

                    <p className="control is-expanded">
                      <input id="first-name" className="input" type="text" placeholder="First name" />
                    </p>

                  </div>
                </div>

                <div className="form-field-spacer">
                  <div className="field">

                    <p className="control is-expanded">
                      <input id="last-name" className="input" type="text" placeholder="Last name" />
                    </p>

                  </div>
                </div>

                <div className="form-field-spacer">
                  <div className="field">

                    <p className="control is-expanded">
                      <input id="email" className="input" type="text" placeholder="Enter your email" />
                    </p>

                  </div>
                </div>

                <div className="form-field-spacer">
                  <div className="field">

                    <p className="control is-expanded">
                      <input id="password" className="input" type="password" placeholder="Enter your password" />
                    </p>

                  </div>
                </div>

                <div className="form-field-spacer">
                  <div className="field">

                    <p className="control is-expanded">
                      <input id="password-confirmation" className="input" type="password" placeholder="Password comfirmation" />
                    </p>

                  </div>
                  <p className="control has-text-centered">
                    <a className="button is-large is-info" onClick={this.submitCredentials} >
                      Sign In
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </section>
    )
  }
}

export default RegistrationForm;
