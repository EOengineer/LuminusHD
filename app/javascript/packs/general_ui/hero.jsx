import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Hero extends React.Component {

  render() {

    let mainTitle     = this.props.mainTitle
    let enhancedTitle = this.props.enhancedTitle
    let subtitle      = this.props.subtitle
    let background    = { background: 'url("/assets/turntable-hero.jpeg") center center', backgroundSize: 'cover' }

    return(
      <section style={background} className="hero is-medium is-dark">
        <div className="hero-body">
          <div className="container" >
            <h1 className="title">
              <span className="home-hero-thin">{mainTitle}</span>
              <span style={{color: 'black'}} className="home-hero-enhanced">{enhancedTitle}</span>
            </h1>
            <h2 style={{color: 'black'}} className="subtitle">
              {subtitle}
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
