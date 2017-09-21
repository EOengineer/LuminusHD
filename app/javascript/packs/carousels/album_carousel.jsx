import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import $ from 'jquery';
import 'slick-carousel';


import CarouselAlbum from '../carousel_items/carousel_album';

class AlbumCarousel extends React.Component {

  listAlbums = () => {
    return this.props.albums.map((album, i) => {
      return <CarouselAlbum key={i} title={album} />
    })
  }

  componentDidMount() {
    let slider         = this.refs.slider;
    let carouselConfig = {
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: true
    };



    $(slider).slick(carouselConfig)
  }

  render() {

    let carouselTitle = this.props.carouselTitle

    return (
      <section className="section">
        <div className="container">
          <h1 className="title">{carouselTitle}</h1>

          <div ref="slider">
            {this.listAlbums()}
          </div>
        </div>
      </section>
    )
  }
}

export default AlbumCarousel;
