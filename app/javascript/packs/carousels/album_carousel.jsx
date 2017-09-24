import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import $ from 'jquery';
import 'slick-carousel';


import CarouselAlbum from '../carousel_items/carousel_album';

class AlbumCarousel extends React.Component {

  listAlbums = () => {
    return this.props.albums.map((album, i) => {
      return <CarouselAlbum key={i} album={album} />
    })
  }

  buildResponsiveSettings = () => {

    let settings = [
      {
        // fullhd
        breakpoint: 3000,
        settings: {
          slidesToShow: 5,
          dots: true
        }
      },
      {
        // widescreen
        breakpoint: 1392,
        settings: {
          slidesToShow: 4,
          dots: true
        }
      },
      {
        // desktop
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          dots: true
        }
      },
      {
        // tablet
        breakpoint: 1008,
        settings: {
          slidesToShow: 3,
          dots: true
        }
      },
      {
        //most phones
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        //most phones
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      },
    ]

    return settings;
  }

  componentDidMount() {
    let slider         = this.refs.slider;
    let carouselConfig = {
      infinite: false,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      adaptiveWidth: true,
      responsive: this.buildResponsiveSettings()
    };


    $(slider).slick(carouselConfig)
  }

  render() {

    let carouselTitle = this.props.carouselTitle

    return (
      <section className="section is-bold is-light">
        <div className="container">
          <h1 className="title is-size-4 carousel-title">{carouselTitle}</h1>

          <div ref="slider">
            {this.listAlbums()}
          </div>
        </div>
      </section>
    )
  }
}

export default AlbumCarousel;
