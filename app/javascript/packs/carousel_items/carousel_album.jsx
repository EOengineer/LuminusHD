import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { BeatLoader, CircleLoader } from 'react-spinners';

class CarouselAlbum extends React.Component {

  render() {

    return (
      <div className="carousel-item carousel-album option">
          <h1 className="title is-size-7">{this.props.album.title}</h1>

          <div className="image is-square">
            <img src={this.props.album.image_url}></img>
          </div>

      </div>
    )
  }
}

export default CarouselAlbum;
