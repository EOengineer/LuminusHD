import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class TrackTable extends React.Component {


  getTracks() {
    return this.props.tracks.map((track) => {
      return(
        <tr key={track.id} >
          <th>{track.id}</th>
          <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">{track.title}</a> <strong>(C)</strong></td>
          <td>{track.length}</td>
          <td></td>
        </tr>
      )
    })
  }


  render() {
    return(
      <table className="table is-striped is-fullwidth is-narrow">
        <thead>
          <tr>
            <th><abbr title="Position">#</abbr></th>
            <th>Title</th>
            <th><abbr title="Time">Time</abbr></th>
            <th><abbr title="Single">Single</abbr></th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th><abbr title="Position">#</abbr></th>
            <th>Title</th>
            <th><abbr title="Time">Time</abbr></th>
            <th><abbr title="Single">Single</abbr></th>
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
