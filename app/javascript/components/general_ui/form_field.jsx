import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


class FormField extends React.Component {

  render() {
    return (
      <div className="form-field-spacer">
        <div className="field">

          <p className="control is-expanded">
            <input id={this.props.id} className="input" type={this.props.type} placeholder={"Enter your " + this.props.title } />
          </p>
          {this.props.errors &&
            <div className="notification is-danger">{this.props.errors.map((error, i) => {return <p key={i}>{this.props.title + " " + error}</p>})}</div>
          }

        </div>
      </div>
    )
  }
}

export default FormField;
