import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import axios from 'axios'

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
      albums: []
    }
    this.search = this.search.bind(this)
  }

  search(e) {
    //console.log("e", e)
    let endpoint = this.props.endpoint
    let searchTerm = e.target.value

    if (searchTerm.length > 2) {
      axios.get(`/v1/${endpoint}?q=${searchTerm}`)
      .then((response) => {
        this.setState({
          albums: response.data
        })
      })
    }
  }


  componentDidMount() {
    console.log("mount", this.state.albums)
    let endpoint = this.props.endpoint
    axios.get(`/v1/${endpoint}`)
      .then((response) => {
        this.setState({
          loaded: true,
          albums: response.data
        })
      })
  }


  componentDidUpdate(prevProps, prevState) {
    console.log("album list updated", this.state.albums)
    // this.setState({
    //   albums
    // })
  }

  render() {
    let loaded = this.state.loaded

    return (
      <div>

        <Hero
          mainTitle={this.props.title}
          imageUrl={this.props.imageUrl}
        />


          <section className="section">
            <div style={{maxWidth: "400px", marginLeft: "auto", marginRight: "auto"}} className="field has-addons">

              <div className="control">
                <input onChange={this.search} className="input" type="text" placeholder="search" name="q"></input>
              </div>
              <div className="control">
                <a className="button is-info">
                  Search
                </a>
              </div>
            </div>
          </section>

        <AlbumGrid
          identifier={"New-Releases"}
          carouselTitle={"New Releases"}
          albums={this.state.albums}
        />

      </div>
    )
  }
}

export default AlbumList;
