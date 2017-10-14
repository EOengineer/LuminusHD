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
      return <CarouselAlbum key={i} album={album} />
    })
  }

  // componentWillReceiveProps(nextProps) {
  //   this.$el       = $(this.el);
  //   console.log("element", this.$el.length)

  //   if (this.$el.length > 0) {
  //     this.$el.slick('unslick')

  //     console.log("ummm recieve", responsiveGridSettings(nextProps.albums.length))
  //     this.$el.slick({
  //       adaptiveWidth: false,
  //       focusOnSelect: false,
  //       variableWidth: false,
  //       accessibility: false,
  //       rows: 1,
  //       //slidesPerRow: 5,
  //       slidesToShow: nextProps.albums.length,
  //       responsive: responsiveGridSettings(nextProps.albums.length)
  //     });
  //   }

  // }

  initializeSlider = (refresh=false) => {
    this.$el       = $(this.el);
    let albumCount = this.props.albums.length
    let columns    = 5

    if (this.$el[0]) {
      console.log(this.$el)
      //this.$el.slick('unslick')

      let elementId = this.$el[0].id
      //console.log("ummm", responsiveGridSettings(albumCount))
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
    console.log("album grid mounting", this.props)
    //this.initializeSlider()
  }

  componentDidUpdate(prevProps, prevState) {
    // this.$el       = $(this.el);
    // console.log(this.$el)
    console.log("album grid updating", this.props)
    //this.initializeSlider()
  }


  render() {

    let carouselTitle = this.props.carouselTitle
    let carouselKey   = this.props.identifier
    let loaded        = this.props.albums.length > 0

    return (
      <div className="carousel container">

            <h1 className="title is-size-4 carousel-title">{carouselTitle}</h1>





            <div id={carouselKey} ref={el => this.el = el} className="js-slider">
              {this.listAlbums()}
            </div>



      </div>
    )
  }
}

export default AlbumGrid;
