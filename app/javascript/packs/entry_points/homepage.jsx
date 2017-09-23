import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Hero from '../general_ui/hero';
import AlbumCarousel from '../carousels/album_carousel';

class HomePage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      newReleases: ["test1","test2","test3","test4","test5","test6"]
    }
  }

  // componentDidMount() {
  //   // call api and set album state
  // }

  render() {
    return (
      <div>
        <Hero
          mainTitle={"Luminus"}
          enhancedTitle={"HD"}
          subtitle={"The standard in High Res Audio"}
        />

        <AlbumCarousel
          carouselTitle={"New Releases"}
          albums={this.state.newReleases}
        />

        <AlbumCarousel
          carouselTitle={"Featured Albums"}
          albums={this.state.newReleases}
        />

        <AlbumCarousel
          carouselTitle={"Critically Acclaimed"}
          albums={this.state.newReleases}
        />
      </div>
    )
  }
}

export default HomePage;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HomePage />,
    document.body.appendChild(document.createElement('div')),
  )
})
