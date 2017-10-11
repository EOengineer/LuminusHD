import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// Mocked data
import { fullStore } from './data/albums';

// Components
import Hero from './general_ui/hero';
import AlbumGrid from './grids/album_grid';
import CarouselLoader from './carousels/carousel_loader';



class AlbumList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      newReleases: [],
      featuredReleases: [],
      acclaimedReleases: []
    }
  }


  componentDidMount() {
    let albums = fullStore()
    // check cache or hit api with this.props.endpoint
    setTimeout(() => {
      this.setState({
        loaded: true,
        albums: albums,
      })
    }, 300);
  }

  render() {
    let loaded = this.state.loaded

    return (
      <div>

        <Hero
          mainTitle={this.props.title}
          enhancedTitle={""}
          imageUrl={this.props.imageUrl}
          subtitle={""}
        />

        {loaded ? <AlbumGrid
          key={"New-Releases"}
          identifier={"New-Releases"}
          carouselTitle={"New Releases"}
          albums={this.state.albums}
        /> : <CarouselLoader />}

      </div>
    )
  }
}

export default AlbumList;
