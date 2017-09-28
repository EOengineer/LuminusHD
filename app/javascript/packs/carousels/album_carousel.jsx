import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import '../styles/albums/overrides.scss';

import $ from 'jquery';
import 'slick-carousel';




import CarouselAlbum from '../carousel_items/carousel_album';

class AlbumCarousel extends React.Component {

  listAlbums = () => {
    return this.props.albums.map((album, i) => {
      return <CarouselAlbum key={i + Math.random()} album={album} />
    })
  }

  getResponsiveConfig() {
    let responsive = [
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
    return responsive
  }


  componentDidMount() {
    this.$el      = $(this.el);
    let elementId = this.$el[0].id

    this.$el.slick({
      adaptiveWidth: false,
      focusOnSelect: false,
      variableWidth: false,
      accessibility: false,
      touchMove: true,
      swipe: true,
      slide: "#" + elementId + " .option",
      responsive: this.getResponsiveConfig()
    });
  }


  render() {

    let carouselTitle = this.props.carouselTitle
    let carouselKey   = this.props.identifier

    return (
      <div key={carouselKey} className="carousel container">
          <h1 className="title is-size-4 carousel-title">{carouselTitle}</h1>


          <div id={carouselKey} ref={el => this.el = el} className="js-slider">
            {this.listAlbums()}
          </div>

          <div className="prev_next"></div>

      </div>
    )
  }
}

export default AlbumCarousel;
