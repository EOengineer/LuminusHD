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

import AlbumPurchaseTiles from './tiles/album_purchase_tile';
import AlbumProductionTiles from './tiles/album_production_tile';
import AlbumDescriptionTiles from './tiles/album_description_tile';
import AlbumArtworkTiles from './tiles/album_artwork_tile';
import AlbumAccoladesTiles from './tiles/album_accolades_tile';


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
        <section className="section">
          {album &&
            <div className="container-fluid has-text-right">
              <AlbumPurchaseTiles
                album={album}
              />
            </div>
          }
        </section>


        <section className="section is-dark-gradient">
        {album &&
          <div className="container-fluid">
            <AlbumDescriptionTiles
              mainContentTitle={"The Album"}
              mainContentSubtitle={["Some Studio", "Some Location", "Some Country"]}
              mainContent={album.description}
            />
          </div>
        }
        </section>

        <section className="section">
        {album &&
          <div className="container-fluid has-text-right">

            <AlbumProductionTiles
              mainContentTitle={"The Production"}
              mainContentSubtitle={["Some Studio", "Some Location", "Some Country"]}
              mainContent={album.description}
            />

          </div>
        }
        </section>



        <section className="section is-dark-gradient">
        {album &&
          <div className="album container-fluid">

            <AlbumArtworkTiles
              mainContentTitle={"The Artwork"}
              mainContentSubtitle={["Some Studio", "Some Location", "Some Country"]}
              mainContent={album.description}
            />
          </div>
        }
        </section>



        <section className="section">
        {album &&
          <div className="container-fluid has-text-right">

            <AlbumAccoladesTiles
              mainContentTitle={"Critical and Cultural Accolades"}
              mainContentSubtitle={["Some Studio", "Some Location", "Some Country"]}
              mainContent={album.description}
            />

          </div>
        }
        </section>

      </div>
    )
  }
}

export default Album;
