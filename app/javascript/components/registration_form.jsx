import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import ReactForm from './general_ui/react_form'
import FormField from './general_ui/form_field'
import FormButton from './general_ui/form_button'
import axios from 'axios';

class RegistrationForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      errors: {}
    }
  }

  submitCredentials = (e) => {
    let data   = {}
    data.users = {}
    data.users.first_name = document.getElementById('first-name').value
    data.users.last_name = document.getElementById('last-name').value
    data.users.email     = document.getElementById('email').value
    data.users.password  = document.getElementById('password').value
    data.users.password_confirmation = document.getElementById('password-confirmation').value
    data.authenticity_token    = document.querySelectorAll('meta[name="csrf-token"]')[0].content
    let self = this

    axios.post('/v1/users', data)
    .then(function (response) {
      console.log("registration", response)
      localStorage.setItem('access_token', response.data.auth_token)
      document.cookie="access_token=" + response.data.auth_token
      window.location.replace("http://localhost:3000/account")
    })
    .catch(function (error) {
      console.log("error", error.response);
      if (error.response.status === 422) {
        self.setState({
          errors: error.response.data.errors
        })
      }
    });
  }


  render() {
    console.log("state", this.state.errors)
    return (
        <section className="hero is-info is-fullheight">

          <ReactForm
            heading="Create a FREE account">

            <FormField id="first-name" title="first name" type="text" errors={this.state.errors.first_name} />

            <FormField id="last-name" title="last name" type="text" errors={this.state.errors.last_name} />

            <FormField id="email" title="email" type="text" errors={this.state.errors.email} />

            <FormField id="password" title="password" type="password" errors={this.state.errors.password} />

            <FormField id="password-confirmation" title="password confirmation" type="password" errors={this.state.errors.password_confirmation} />

            <FormButton text="Sign Up" submitHandler={this.submitCredentials} />

          </ReactForm>

        </section>
    )
  }
}

export default RegistrationForm;
