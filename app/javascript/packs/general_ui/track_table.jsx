import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class TrackTable extends React.Component {


  getTracks() {
    return this.props.tracks.map((track, i) => {
      return(
        <div key={track.id}>
          <p className="has-text-white">
          {track.title + ' '}
          {track.time}
          </p>
        </div>
      )
    })
  }


  render() {
    return(
      <div>

        {this.getTracks()}

      </div>
    )
  }

}


export default TrackTable;
