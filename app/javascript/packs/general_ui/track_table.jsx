import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class TrackTable extends React.Component {


  getTracks() {
    let columns = {}
    let breakpoint = Math.round(this.props.tracks.length / 2)
    columns["firstHalf"] = []
    columns["secondHalf"] = []

    this.props.tracks.forEach((track, i) => {
      if (i < breakpoint) {columns["firstHalf"].push(track)}
      else {columns["secondHalf"].push(track)}
    })
    return columns
  }


  render() {
    return(
      <div className="track-list">
          <div className="level has-text-white flex-left">
            <div className="level-item">
              <p className="">Title</p>
            </div>
            <div className="level-item">
              <p className="">Time</p>
            </div>
            <div className="level-item">
              <p className="">Single</p>
            </div>
          </div>
          {this.props.tracks.map((track, i) => {
            return (
              <div className="level has-text-white flex-left">
                <div className="level-item">
                  <p className="">{track.title}</p>
                </div>
                <div className="level-item">
                  <p className="">{track.time}</p>
                </div>
                <div className="level-item">
                  <p className="">{track.single}</p>
                </div>
              </div>
            )
          })}
      </div>
    )
  }

}


export default TrackTable;
