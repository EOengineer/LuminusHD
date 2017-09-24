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
      newReleases: [
        {title: "Dark Side of the Moon", artist: "Pink Floyd", image_url: "http://cdn.funcheap.com/wp-content/uploads/2010/07/pink-floyd-dark-side-of-the-moon-cover1-250x250.jpg"},
        {title: "Elvis Live", artist: "Elvis", image_url: "https://images-na.ssl-images-amazon.com/images/I/71dqLGaMq9L._SL1500_.jpg"},
        {title: "Led Zeppelin", artist: "Led Zeppelin", image_url: "https://i.pinimg.com/736x/9d/28/8c/9d288cbc40188edb60c2f5d4f544a5d2--led-zeppelin-album-covers-led-zeppelin-albums.jpg"},
        {title: "No Enemies", artist: "Flobots", image_url: "https://static1.squarespace.com/static/587fa93e440243130a3e38bd/t/59122d299f7456c6ce41a75d/1494363443528/NOENEMIES+Album+Cover+%28square%29.jpg"},
        {title: "In Utero", artist: "Nirvana", image_url: "https://upload.wikimedia.org/wikipedia/en/e/e5/In_Utero_%28Nirvana%29_album_cover.jpg"},
        {title: "Underground", artist: "Thelonius Monk", image_url: "https://images-na.ssl-images-amazon.com/images/I/91ezK8hczEL._SY355_.jpg"}
      ]
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
          key={"New Releases"}
          carouselTitle={"New Releases"}
          albums={this.state.newReleases}
        />

        <AlbumCarousel
          key={"Featured Albums"}
          carouselTitle={"Featured Albums"}
          albums={this.state.newReleases}
        />

        <AlbumCarousel
          key={"Critically Acclaimed"}
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
