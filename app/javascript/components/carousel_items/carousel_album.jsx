import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import {
  Link
} from 'react-router-dom'


class CarouselAlbum extends React.Component {

  render() {

    let albumId     = this.props.album.id
    let relativeUrl = `/albums/${albumId}`
    let flexClass   = this.props.flex ? " grid-cell" : "" ;

    return (
      <Link to={relativeUrl}>
        <div className={"carousel-item carousel-album option " + flexClass} >

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
