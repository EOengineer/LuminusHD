import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


import $ from 'JQuery';

class CarouselAlbum extends React.Component {

  render() {

    return (
      <div className="testing">
          <h1 className="title">album title</h1>

          <div className="carousel-item carousel-album">
            {this.props.title}
          </div>

      </div>
    )
  }
}

export default CarouselAlbum;
