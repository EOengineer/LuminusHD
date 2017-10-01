import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class CarouselAlbum extends React.Component {

  render() {

    let albumId     = this.props.album.id
    let relativeUrl = `/album/${albumId}`

    return (
      <Link to={relativeUrl}>
      <div className="carousel-item carousel-album option">

          <div className="image is-square">
            <img src={this.props.album.image_url}></img>
          </div>

          <h1 className="title is-size-7">{this.props.album.title}</h1>

      </div>
      </Link>
    )
  }
}

export default CarouselAlbum;
