import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class CarouselImage extends React.Component {

  render() {

    let image = this.props.image
    //let relativeUrl = `/album/${albumId}`

    return (

      <div className="carousel-item option">

        <div className="image is-square">
          <img src={image.image_url}></img>
        </div>

      </div>

    )
  }
}

export default CarouselImage;
