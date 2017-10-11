import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


// Styles
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import '../styles/overrides.scss';

// Data
import { responsiveGridSettings } from '../data/responsive';

// JS Deps
import $ from 'jquery';
import 'slick-carousel';


// Components
import CarouselAlbum from '../carousel_items/carousel_album';



class AlbumGrid extends React.Component {

  listAlbums = () => {
    return this.props.albums.map((album, i) => {
      return <CarouselAlbum key={i + Math.random()} album={album} />
    })
  }


  initializeSlider() {
    this.$el       = $(this.el);
    let albumCount = this.props.albums.length
    let columns    = 4

    if (this.$el[0] && !this.$el.hasClass('slick-initalized')) {
      let elementId = this.$el[0].id

      this.$el.slick({
        adaptiveWidth: false,
        focusOnSelect: false,
        variableWidth: false,
        accessibility: false,
        rows: Math.trunc(albumCount / columns),
        slidesPerRow: columns,
        responsive: responsiveGridSettings(albumCount)
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

    let carouselTitle = this.props.carouselTitle
    let carouselKey   = this.props.identifier
    let loaded        = this.props.albums.length > 0

    return (
      <div key={carouselKey} className="carousel container">
          {loaded &&
            <h1 className="title is-size-4 carousel-title">{carouselTitle}</h1>
          }



          {loaded &&
            <div id={carouselKey} ref={el => this.el = el} className="js-slider">
              {this.listAlbums()}
            </div>
          }


      </div>
    )
  }
}

export default AlbumGrid;
