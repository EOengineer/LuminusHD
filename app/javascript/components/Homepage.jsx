import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = "application/json";
if (localStorage.getItem("access_token")) {
  axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("access_token");
}

// Mocked data
import { newReleases,
         featuredReleases,
         acclaimedReleases,
         becausePF,
         becauseElvis,
         becauseBeatles } from './data/albums';

// Components
import Hero from './general_ui/hero';
import AlbumCarousel from './carousels/album_carousel';
import CarouselLoader from './carousels/carousel_loader';



class HomePage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      newReleases: [],
      featuredReleases: [],
      acclaimedReleases: [],
      becausePF: [],
      becauseElvis: [],
      becauseBeatles: []
    }
  }


  componentDidMount() {

    axios.get('/v1/home/carousels')
      .then((response) =>{
        this.setState({
          loading: false,
          newReleases: response.data.newReleases,
          featuredReleases: response.data.featuredReleases,
          acclaimedReleases: response.data.acclaimedReleases,
          becausePF: response.data.because_1,
          becauseElvis: response.data.because_2,
          becauseBeatles: response.data.because_3
        })
      })
  }

  render() {
    let loaded = this.state.loaded

    return (
      <div>
        <Hero
          mainTitle={"Luminus"}
          enhancedTitle={"HD"}
          imageUrl={"https://static.pexels.com/photos/164828/pexels-photo-164828.jpeg"}
          subtitle={"The standard in High Res Audio"}
        />

        {!this.state.loading ? <AlbumCarousel
          key={"New-Releases"}
          needsHeadroom={true}
          identifier={"New-Releases"}
          carouselTitle={"New Releases"}
          albums={this.state.newReleases}
        /> : <CarouselLoader />}


        {!this.state.loading ? <AlbumCarousel
          key={"Featured-Releases"}
          identifier={"Featured-Releases"}
          carouselTitle={"Featured Albums"}
          albums={this.state.featuredReleases}
        /> : <CarouselLoader />}


        {!this.state.loading ? <AlbumCarousel
          key={"Critically-Acclaimed"}
          identifier={"Critically-Acclaimed"}
          carouselTitle={"Critically Acclaimed"}
          albums={this.state.acclaimedReleases}
        /> : <CarouselLoader />}


        <AlbumCarousel
          key={"Pink-Floyd"}
          identifier={"Pink-Floyd"}
          carouselTitle={"Because you purchased Pink Floyd"}
          albums={this.state.becausePF}
        />

        <AlbumCarousel
          key={"Elvis"}
          identifier={"Elvis"}
          carouselTitle={"Because you purchased Elvis"}
          albums={this.state.becauseElvis}
        />

        <AlbumCarousel
          key={"the-Beatles"}
          identifier={"the-Beatles"}
          carouselTitle={"Because you purchased the Beatles"}
          albums={this.state.becauseBeatles}
        />

      </div>
    )
  }
}

export default HomePage;
