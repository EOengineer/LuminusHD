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
      return <CarouselAlbum key={i} album={album} flex={true} />
    })
  }


  render() {

    let carouselTitle = this.props.carouselTitle
    let carouselKey   = this.props.identifier
    let loaded        = this.props.albums.length > 0

    return (
      <div className="carousel container">

        <h1 className="title has-text-white is-size-4 carousel-title">{carouselTitle}</h1>

        <div className="grid">
          {this.listAlbums()}
        </div>

      </div>
    )
  }
}

export default AlbumGrid;
