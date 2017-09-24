import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import $ from 'jquery';
import 'slick-carousel';


import CarouselAlbum from '../carousel_items/carousel_album';

class AlbumCarousel extends React.Component {

  listAlbums = () => {
    return this.props.albums.map((album, i) => {
      return <CarouselAlbum key={i + Math.random()} album={album} />
    })
  }

  componentDidMount() {
    var sliderIdName = this.props.carouselTitle;
    var sliderId     = 'div[id="' + sliderIdName + '"]';

    $(sliderId).slick({
      adaptiveWidth: false,
      focusOnSelect: false,
      variableWidth: false,
      responsive: [
      {
        // fullhd
        breakpoint: 3000,
        settings: {
          infinite: false,
          arrows: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        // widescreen
        breakpoint: 1392,
        settings: {
          infinite: false,
          arrows: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        // desktop
        breakpoint: 1200,
        settings: {
          infinite: false,
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        // tablet
        breakpoint: 1008,
        settings: {
          infinite: false,
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        //most phones
        breakpoint: 768,
        settings: {
          infinite: false,
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        //most phones
        breakpoint: 500,
        settings: {
          infinite: false,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
    ]
    });




  }


  render() {

    let carouselTitle = this.props.carouselTitle

    return (
      <div key={carouselTitle} className="carousel container">
          <h1 className="title is-size-4 carousel-title">{carouselTitle}</h1>

          <div id={carouselTitle} className="slider">
            {this.listAlbums()}
          </div>
      </div>
    )
  }
}

export default AlbumCarousel;
