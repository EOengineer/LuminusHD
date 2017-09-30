import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import '../styles/overrides.scss';

import $ from 'jquery';
import 'slick-carousel';

import { BeatLoader, CircleLoader } from 'react-spinners';
import CarouselAlbumLoader from '../carousel_items/carousel_album_loader';


class CarouselLoader extends React.Component {

  listAlbumLoaders = () => {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
      return <CarouselAlbumLoader key={i} />
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

  initializeSlider() {
    this.$el      = $(this.el);

    if (this.$el[0] && !this.$el.hasClass('slick-initalized')) {
      let elementId = this.$el[0].id

      this.$el.slick({
        adaptiveWidth: false,
        focusOnSelect: false,
        variableWidth: false,
        accessibility: false,
        touchMove: true,
        swipe: true,
        responsive: this.getResponsiveConfig()
      });

    }
  }

  componentDidMount() {
    this.initializeSlider()
  }

  componentDidUpdate(prevProps, prevState) {
    this.initializeSlider()
  }


  render() {

    return (
      <div className="carousel container">

        <div ref={el => this.el = el} className="js-slider">
          {this.listAlbumLoaders()}
        </div>

      </div>
    )
  }
}

export default CarouselLoader;
