import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import axios from 'axios';

// Mocked data
import { fullStore } from './data/albums';
import { sliderImages } from './data/images';
import { albumTracks } from './data/tracks';

import CarouselLoader from './carousels/carousel_loader';
import ImageCarousel from './carousels/image_carousel';
import TrackTable from './general_ui/track_table';

class Album extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      album: null,
      albumArt: [],
      albumTracks: albumTracks(),
      selectedTab: "art"
    }
  }

  getAlbum = () => {
    let currentAlbumId = Number.parseInt(this.props.match.params.id)
    let currentAlbum   = fullStore().filter((item) => {
      return item.id === currentAlbumId
    })

    if (!currentAlbum) {
      // call api here if store doesnt have album for some reason
    }

    this.setState({album: currentAlbum[0], albumArt: sliderImages });
  }

  updateSelectedTab(selectedTab) {
    this.setState({selectedTab: selectedTab})
  }


  componentDidMount() {
    const albumId = this.props.match.params.id
    axios.get(`/v1/albums/${albumId}`)
    .then((response) => {
      this.setState({
        album: response.data,
        albumArt: sliderImages
      })
    })
  }

  render() {

    let album = this.state.album
    let albumImageStyle = {
      marginLeft: 'auto',
      marginRight: 'auto'
    }

    return (
      <div>
        <section className="section restrict-height is-clearfix">
          {album &&
            <div className="content">
              <div className="container">
                <div className="columns restrict-height">

                  <div className="column">
                    <div style={albumImageStyle} className="image restrict-height">
                      <img className="restrict-width" style={{marginLeft: 'auto', marginRight: 'auto'}} src={album.image_url}></img>
                    </div>
                  </div>

                  <div className="column">
                    <p className="title has-text-weight-light">$19.99</p>
                    <p>Purchase {album && album.title} in revolutionary MQA format and experience the Highest Quality representation, exactly as {album && album.artist.name} intended.</p>
                    <button className="button is-large is-success has-text-weight-light">Buy Album</button>
                  </div>

                </div>
              </div>
            </div>
          }
        </section>


        <section className="section is-dark-gradient">
        {album &&
          <div className="container-fluid">
            <p className="title has-text-white">The Album</p>
            <p className="title is-size-5 has-text-white">{album.title}
              <span className="is-size-6 has-text-white"> | {album.artist.name}
                <span className="is-size-6 has-text-white"> | 1980</span>
              </span>
            </p>
            <div dangerouslySetInnerHTML={{__html: album.description}} />
            {this.state.album.tracks.length > 0 ? <TrackTable tracks={this.state.album.tracks} /> : <div>loading</div>}
          </div>
        }
        </section>

        <section className="section">
        {album &&
          <div className="container-fluid has-text-right">
            <p className="title has-text-right">The Production</p>
            <p className="title is-size-5">Some Studio
              <span className="is-size-6"> | Some Location
                <span className="is-size-6"> | Some Country</span>
              </span>
            </p>

            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub works as well!</p>
            <br/>
            <p className=""> Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
            <br />
            <p className="">Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub works as well! nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque</p>
            <br />
            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub works as well!</p>
            <br/>
            <p className=""> Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
            <br />
            <p className="">Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub works as well! nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque</p>

            <div className="image-frame-right">
              <img className=" is-square right-aligned" src="https://d2s36jztkuk7aw.cloudfront.net/sites/default/files/tile/image/original_128.jpg"></img>
            </div>

          </div>
        }
        </section>


        <section className="section is-dark-gradient">
        {album &&
          <div className="album container-fluid">
            <p className="title has-text-white">The Artwork</p>
            <div className="container restrict has-text-white has-text-centered" id="art-content">
              {this.state.albumArt.length > 0 ? <ImageCarousel identifier="art" images={this.state.albumArt} /> : <CarouselLoader />}
            </div>
            <div dangerouslySetInnerHTML={{__html: album.description}} />
          </div>
        }
        </section>

      </div>
    )
  }
}

export default Album;
