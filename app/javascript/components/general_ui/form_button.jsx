import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


class FormButton extends React.Component {

  render() {
    return(
      <p className="control has-text-centered">
        <a className="button is-large is-primary" onClick={this.props.submitHandler} >
          {this.props.text}
        </a>
      </p>
    )
  }
}

export default FormButton;
