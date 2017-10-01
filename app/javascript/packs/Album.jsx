import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// Mocked data
import { fullStore } from './data/albums';

// // Components
// import Hero from './general_ui/hero';
// import AlbumCarousel from './carousels/album_carousel';
// import CarouselLoader from './carousels/carousel_loader';



class Album extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      album: null
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

    this.setState({album: currentAlbum[0]});
  }


  componentDidMount() {
    this.getAlbum()
  }

  render() {

    console.log(this.props)
    let album = this.state.album
    let albumImageStyle = {
      //width: '350px',
      //height: '350px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }

    return (
      <div>
        <section className="hero is-medium is-dark">
          {album &&
            <div className="hero-body">
              <div className="container">
                <div className="columns">

                  <div className="column">
                    <div style={albumImageStyle} className="image is-square">
                      <img src={album.image_url}></img>
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

        <div className="tabs is-centered is-boxed">
          <ul>
            <li className="is-active">
              <a>
                <span className="icon is-small"><i className="fa fa-image"></i></span>
                <span>Pictures</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small"><i className="fa fa-music"></i></span>
                <span>Music</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small"><i className="fa fa-film"></i></span>
                <span>Videos</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small"><i className="fa fa-file-text-o"></i></span>
                <span>Documents</span>
              </a>
            </li>
          </ul>
        </div>

      </div>
    )
  }
}

export default Album;
