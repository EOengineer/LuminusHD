import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import axios from 'axios';

// import { BeatLoader, CircleLoader } from 'react-spinners';


class SignInForm extends React.Component {

  submitCredentials = (e) => {
    let email    = document.getElementById('email').value
    let password = document.getElementById('password').value
    console.log("email val", email.value)
    console.log("pass val", password.value)

    axios.post('/authenticate', {
      email: email,
      password: password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

      console.log("this", this)
    }


  render() {
    return (
        <section className="hero is-info is-fullheight">

          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="column is-6 is-offset-3">
                <h1 className="title">
                  Sign In
                </h1>
                <h2 className="subtitle">
                   LuminusHD features the highest quality high definition audio in the industry.  Sign in to create favorites, wishlists, and more.
                </h2>

                <div className="box">
                  <div className="field is-grouped">

                    <p className="control is-expanded">
                      <input id="email" className="input" type="text" placeholder="Enter your email" />
                    </p>

                    <p className="is-expanded">
                      <input id="password" className="input" type="text" placeholder="Enter your password" />
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

export default SignInForm;
