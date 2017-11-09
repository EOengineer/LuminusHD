import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import axios from 'axios'

axios.defaults.headers.common['Content-Type'] = "application/json";
if (localStorage.getItem("access_token")) {
  axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("access_token");
}

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
      albums: []
    }
  }

  combineTextEntries(ctrl, fnc, args){
    if (ctrl.updateDelayTimeout ){
        window.clearTimeout(ctrl.updateDelayTimeout );
    }
    ctrl.updateDelayTimeout = setTimeout( function(){fnc.apply(this, args);}, 500);
  }


  sendSearch = (term) => {
    let endpoint = this.props.endpoint
    return axios.get(`/v1/${endpoint}?q=${term}`)
    .then((response) => {
      this.setState({
        albums: response.data
      })
    })
  }

  search = (e) => {
    let searchTerm = e.target.value
    this.combineTextEntries(this, this.sendSearch, [searchTerm])
  }


  componentDidMount() {
    let endpoint = this.props.endpoint
    axios.get(`/v1/${endpoint}`)
    .then((response) => {
      this.setState({
        albums: response.data
      })
    })
  }




  render() {
    return (
      <div>

        <Hero
          mainTitle={this.props.title}
          imageUrl={this.props.imageUrl}
        />


          <section className="section no-padding">
            <div className="container">
              <div className="field is-pulled-right has-addons">

                <div className="control">
                  <input onChange={this.search} className="input is-pulled-right is-forefront" type="text" placeholder="search" name="q"></input>
                </div>
                <div className="control">
                  <a className="button is-info">
                    Search
                  </a>
                </div>
              </div>
            </div>
          </section>

        <AlbumGrid
          identifier={"New-Releases"}
          carouselTitle={this.props.title}
          albums={this.state.albums}
        />

      </div>
    )
  }
}

export default AlbumList;
