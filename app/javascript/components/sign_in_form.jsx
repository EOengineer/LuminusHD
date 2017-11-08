import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import ReactForm from './general_ui/react_form'
import FormField from './general_ui/form_field'
import FormButton from './general_ui/form_button'
import axios from 'axios';


class SignInForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      errors: {}
    }
  }


  InvalidCredentialsMessage = () => {
    this.setState({
      readyForSubmit: false,
      errors: {
        authentication: "Email or Password is Invalid."
      }
    })
  }

  submitCredentials = (e) => {
    let data = {}
    data.email = document.getElementById('email').value
    data.password = document.getElementById('password').value
    data.authenticity_token = document.querySelectorAll('meta[name="csrf-token"]')[0].content


    axios.post('/v1/sessions', data)
    .then(function (response) {
      localStorage.setItem('access_token', response.data.auth_token)
      document.cookie="access_token=" + response.data.auth_token
      window.location.replace("http://localhost:3000")
    })
    .catch((error) => {
      if (error.response.status === 401) {
        this.InvalidCredentialsMessage()
      }
      console.log(error.response)
    })

  }


  render() {

    return (
        <section className="hero is-info is-fullheight">

          <ReactForm
            heading="Sign In"
            subHeading="LuminusHD features the highest quality high definition audio in the industry.  Sign in to create favorites, wishlists, and more."
          >

            {this.state.errors.authentication &&
              <div className="notification is-danger">{this.state.errors.authentication}</div>
            }


            <FormField id="email" title="email" type="text" />

            <FormField id="password" title="password" type="password" />

            <FormButton text="Sign In" submitHandler={this.submitCredentials} />


          </ReactForm>

        </section>
    )
  }
}

export default SignInForm;
