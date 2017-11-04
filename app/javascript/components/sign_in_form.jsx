import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


class SignInForm extends React.Component {

  submitCredentials = (e) => {
    let params = new URLSearchParams();
    params.append("email", document.getElementById('email').value)
    params.append("password", document.getElementById('password').value)
    console.log("email val", email)
    console.log("pass val", password)

    axios.post('/authenticate', params)
    .then(function (response) {
      console.log("good", response)
      document.cookie="JWT=" + response.data.auth_token
      window.location.replace("http://localhost:3000")
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
