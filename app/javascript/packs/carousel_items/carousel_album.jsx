import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


class CarouselAlbum extends React.Component {

  render() {

    return (
      <div className="carousel-item carousel-album">
          <h1 className="title is-size-7">{this.props.album.title}</h1>


          <figure className="image is-square">
            <img src={this.props.album.image_url} />
          </figure>

      </div>
    )
  }
}

export default CarouselAlbum;
