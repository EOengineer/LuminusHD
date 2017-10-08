import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

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
    let currentAlbum   = fullStore.filter((item) => {
      return item.id === currentAlbumId
    })

    if (!currentAlbum) {
      // call api here if store doesnt have album for some reason
    }
    console.log("current album", currentAlbum)
    this.setState({album: currentAlbum[0], albumArt: sliderImages });
  }

  updateSelectedTab(selectedTab) {

    this.setState({selectedTab: selectedTab})
  }


  componentDidMount() {
    this.getAlbum()
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
                    <h1 className="title is-size-5">{album.title}
                      <span className="is-size-6"> | {album.artist}
                        <span className="is-size-6"> | 1980</span>
                      </span>
                    </h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub works as well!</p>
                    <br/>
                    <p> Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
                    <br />
                    <p>Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub works as well! nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque</p>

                  </div>

                </div>
              </div>
            </div>
          }
        </section>

        <section className="section">
          <div className="tabs is-centered is-boxed">
            <ul>
            <li className={this.state.selectedTab === "art" ? "is-active" : ""} onClick={this.updateSelectedTab.bind(this, "art")}>
                <a>
                  <span id="art" className="icon is-small"><i className="fa fa-film"></i></span>
                  <span>Album Art</span>
                </a>
              </li>
              <li className={this.state.selectedTab === "music" ? "is-active" : ""} onClick={this.updateSelectedTab.bind(this, "music")}>
                <a>
                  <span id="music" className="icon is-small"><i className="fa fa-music"></i></span>
                  <span>Music</span>
                </a>
              </li>
            </ul>
          </div>

          {this.state.selectedTab === "art" &&
          <div className="container restrict has-text-centered" id="art-content">
            <h1 className="title is-4">View the high quality album art included with your purchase.</h1>
            {this.state.albumArt.length > 0 ? <ImageCarousel identifier="art" carouselTitle="Album Artwork" images={this.state.albumArt} /> : <CarouselLoader />}
          </div>
          }

          {this.state.selectedTab === "music" &&
          <div className="container restrict has-text-centered">
            <h1 className="title is-4">View the available tracks and formats for this album.</h1>
            {this.state.albumTracks.length > 0 ? <TrackTable tracks={this.state.albumTracks} /> : <div>loading</div>}
          </div>
          }

        </section>

      </div>
    )
  }
}

export default Album;
