import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

//import $ from 'jquery';
//import 'slick-carousel';


import CarouselAlbum from '../carousel_items/carousel_album';

class AlbumCarousel extends React.Component {

  listAlbums = () => {
    return this.props.albums.map((album, i) => {
      return <CarouselAlbum key={i + Math.random()} album={album} />
    })
  }


  render() {

    let carouselTitle = this.props.carouselTitle
    let carouselKey   = this.props.identifier

    return (
      <div key={carouselKey} className="carousel container">
          <h1 className="title is-size-4 carousel-title">{carouselTitle}</h1>

          <div id={carouselKey} className="js-slider">
            {this.listAlbums()}
          </div>

          <div className="prev_next"></div>

      </div>
    )
  }
}

export default AlbumCarousel;
