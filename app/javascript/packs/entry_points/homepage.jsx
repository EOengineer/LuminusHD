import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Hero from '../general_ui/hero';
import AlbumCarousel from '../carousels/album_carousel';

import $ from 'jquery';
import 'slick-carousel';

import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import '../styles/albums/overrides.scss';

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
      ],
      featuredReleases: [
        {title: "London Calling", artist: "The Clash", image_url: "http://www.billboard.com/files/styles/900_wide/public/media/The-Clash-London-Calling-album-covers-billboard-1000x1000.jpg"},
        {title: "Bitches Brew", artist: "Miles Davis", image_url: "http://www.billboard.com/files/styles/900_wide/public/media/Miles-Davis-Bitches-Brew-album-covers-billboard-1000x1000.jpg"},
        {title: "L.A Woman", artist: "The Doors", image_url: "https://i.pinimg.com/736x/64/bb/1d/64bb1d2113a723001322b246684d1868--great-albums-groupes.jpg"},
        {title: "War", artist: "U2", image_url: "https://i.pinimg.com/736x/6c/79/5a/6c795ab06aca882c3c4aaf2bbeb5afc6---s-music-albums.jpg"},
        {title: "the Great Twenty-Eight", artist: "Chuck Berry", image_url: "https://i.pinimg.com/736x/3d/54/fd/3d54fdf0229d9051cb810e4f671e83d8--music-album-covers-music-albums.jpg"},
        {title: "Magic Bus", artist: "The Who", image_url: "https://i.pinimg.com/736x/73/ae/b9/73aeb91cfa4cb8064af45e596961e0f4--buses--s.jpg"}
      ],
      acclaimedReleases: [
        {title: "Abbey Road", artist: "The Beatles", image_url: "https://imgix.ranker.com/user_node_img/20/388771/original/abbey-road-albums-photo-u2?w=650&q=50&fm=jpg&fit=crop&crop=faces"},
        {title: "Wasting Light", artist: "Foo Fighters", image_url: "http://www.thrashhits.com/wpress/wp-content/uploads/2011/12/FooFightersWastingLightalbumcoverartworkpackshot400pxThrashHits.jpg"},
        {title: "Road to Run", artist: "the Ramones", image_url: "https://i.pinimg.com/236x/2e/e6/73/2ee673b5e36bd913b69029ebc3ec663d--ramones-cover-art.jpg"},
        {title: "The Complete Recordings", artist: "Robert Johnson", image_url: "https://bluesman-wpengine.netdna-ssl.com/wp-content/uploads/2012/06/Robert-Johnson.png"},
        {title: "Billie Holiday", artist: "Billy Holiday", image_url: "https://i.pinimg.com/736x/05/82/fb/0582fb87140cca7ee2e062292a41cc8f--billie-holiday-jazz-blues.jpg"},
        {title: "King of Cool", artist: "Ray Charles", image_url: "https://www.music-bazaar.com/album-images/vol17/790/790797/2643458-big/King-Of-Cool-The-Genius-Of-Ray-Charles-CD2-cover.jpg"}
      ]
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   $(window).on('resize orientationchange', function() {
  //     $('.js-slider').slick('unslick');
  //     $('.js-slider').slick('resize');
  // //$('.js-slider').slick('setPosition');
  //   });
  // }

  componentDidMount() {

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


    // call api and set album state
    $(document).ready(function() {

      $('#New-Releases' ).slick({
        adaptiveWidth: false,
        focusOnSelect: false,
        variableWidth: false,
        slide: "#New-Releases .option",
        appendArrows: "#New-Releases .prev_next",
        prevArrow: '<a>Previous</a>',
        nextArrow: '<a>Next</a>',
        responsive: responsive
      });

      $('#Featured-Releases' ).slick({
        adaptiveWidth: false,
        focusOnSelect: false,
        variableWidth: false,
        slide: "#Featured-Releases .option",
        appendArrows: "#Featured-Releases .prev_next",
        prevArrow: '<a>Previous</a>',
        nextArrow: '<a>Next</a>',
        responsive: responsive
      });


      $('#Critically-Acclaimed' ).slick({
        adaptiveWidth: false,
        focusOnSelect: false,
        variableWidth: false,
        slide: "#Critically-Acclaimed .option",
        appendArrows: "#Critically-Acclaimed .prev_next",
        prevArrow: '<a>Previous</a>',
        nextArrow: '<a>Next</a>',
        responsive: responsive
      });
    });

    $(window).on('resize orientationchange', function() {
      $('#New-Releases').slick('resize');
      $('#Featered-Releases').slick('resize');
      $('#Critically-Acclaimed').slick('resize');
    });
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
