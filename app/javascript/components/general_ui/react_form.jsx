import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


class ReactForm extends React.Component {

  render() {

    return(
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-5 is-offset-4">

            {this.props.heading &&
              <h1 className="title">
                {this.props.heading}
              </h1>
            }

            {this.props.subHeading &&
              <h2 className="subtitle">
                {this.props.subHeading}
              </h2>
            }

            {this.props.children}

          </div>
        </div>
      </div>
    )
  }
}

export default ReactForm;
