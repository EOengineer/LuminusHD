import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Hero extends React.Component {

  render() {

    let mainTitle     = this.props.mainTitle
    let enhancedTitle = this.props.enhancedTitle
    let subtitle      = this.props.subtitle

    return(
      <section className="hero is-dark">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              <span className="home-hero-thin">{mainTitle}</span>
              <span className="home-hero-enhanced">{enhancedTitle}</span>
            </h1>
            <h2 className="subtitle">
              {subtitle}
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
