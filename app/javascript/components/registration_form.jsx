import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import axios from 'axios';

class RegistrationForm extends React.Component {

  submitCredentials = (e) => {
    let email  = document.getElementById('email').value
    let password = document.getElementById('password').value
    let password_confirm = document.getElementById('password-confirmation').value

    axios.post('/register', {users: {email: email, password: password, password_confirmation: password_confirm}})
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

    let csrf = document.querySelectorAll('meta[name="csrf-token"]')

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

                <div className="box">
                  <div className="field is-grouped">

                    <p className="control is-expanded">
                      <input id="email" className="input" type="text" placeholder="Enter your email" />
                    </p>

                  </div>
                </div>

                <div className="box">
                  <div className="field is-grouped">

                    <p className="control is-expanded">
                      <input id="password" className="input" type="password" placeholder="Enter your password" />
                    </p>

                  </div>
                </div>

                <div className="box">
                  <div className="field is-grouped">

                    <p className="control is-expanded">
                      <input id="password-confirmation" className="input" type="password" placeholder="Password comfirmation" />
                    </p>

                    <p className="control">
                      <a className="button is-info" onClick={this.submitCredentials} >
                        Sign In
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
    )
  }
}

export default RegistrationForm;
