import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import '../styles/overrides.scss';

import { responsiveSettings } from '../data/responsive';

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
        responsive: responsiveSettings
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
