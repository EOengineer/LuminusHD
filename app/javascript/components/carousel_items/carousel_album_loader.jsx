import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { BeatLoader, CircleLoader } from 'react-spinners';


class CarouselAlbumLoader extends React.Component {
  render() {
    return (
      <div className="carousel-item carousel-album option">
        <div style={{width: '0px', marginLeft: 'auto', marginRight: 'auto', marginTop: '14em', marginBottom: '10em'}}>
          <CircleLoader
            size={20}
            color={'red'}
            loading={true}
          />
        </div>
      </div>
    )
  }
}

export default CarouselAlbumLoader;
