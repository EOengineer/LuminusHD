import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { newReleases,
         featuredReleases,
         acclaimedReleases } from './data/albums';

import Hero from './general_ui/hero';
import AlbumCarousel from './carousels/album_carousel';

class HomePage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      newReleases: newReleases,
      featuredReleases: featuredReleases,
      acclaimedReleases: acclaimedReleases
    }
  }



  render() {
    return (
      <div>
        <Hero
          mainTitle={"Luminus"}
          enhancedTitle={"HD"}
          subtitle={"The standard in High Res Audio"}
        />

        <AlbumCarousel
          key={"New-Releases"}
          identifier={"New-Releases"}
          carouselTitle={"New Releases"}
          albums={this.state.newReleases}
        />

        <AlbumCarousel
          key={"Featured-Releases"}
          identifier={"Featured-Releases"}
          carouselTitle={"Featured Albums"}
          albums={this.state.featuredReleases}
        />

        <AlbumCarousel
          key={"Critically-Acclaimed"}
          identifier={"Critically-Acclaimed"}
          carouselTitle={"Critically Acclaimed"}
          albums={this.state.acclaimedReleases}
        />

        <AlbumCarousel
          key={"Pink-Floyd"}
          identifier={"Pink-Floyd"}
          carouselTitle={"Because you purchased Pink Floyd"}
          albums={this.state.newReleases}
        />

        <AlbumCarousel
          key={"Elvis"}
          identifier={"Elvis"}
          carouselTitle={"Because you purchased Elvis"}
          albums={this.state.featuredReleases}
        />

        <AlbumCarousel
          key={"the-Beatles"}
          identifier={"the-Beatles"}
          carouselTitle={"Because you purchased the Beatles"}
          albums={this.state.acclaimedReleases}
        />

      </div>
    )
  }
}

export default HomePage;
