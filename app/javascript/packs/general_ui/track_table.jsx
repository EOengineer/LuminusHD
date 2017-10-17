import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class TrackTable extends React.Component {


  getTracks() {
    return this.props.tracks.map((track, i) => {
      return(
        <tr key={track.id} >
          <th>{i}</th>
          <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">{track.title}</a></td>
          <td>{track.time}</td>
          <td>

          {track.single &&
            <span className="icon has-text-success">
              <i className="fa fa-check-square"></i>
            </span>
          }

          </td>
          <td>
            <a className="button is-primary is-outlined">AIFF</a>
            <a className="button is-info is-outlined">WAV</a>
            <a className="button is-success is-outlined">FLAC</a>
          </td>
        </tr>
      )
    })
  }


  render() {
    return(
      <table className="table is-striped is-fullwidth is-narrow">
        <thead>
          <tr>
            <th><abbr title="Position"></abbr></th>
            <th>Title</th>
            <th>Time</th>
            <th><abbr title="Single">Single</abbr></th>
            <th>Formats</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th><abbr title="Position"></abbr></th>
            <th>Title</th>
            <th><abbr title="Time">Time</abbr></th>
            <th><abbr title="Single">Single</abbr></th>
            <th>Formats</th>
          </tr>
        </tfoot>
        <tbody>

          {this.getTracks()}

        </tbody>
      </table>
    )
  }



}


export default TrackTable;
