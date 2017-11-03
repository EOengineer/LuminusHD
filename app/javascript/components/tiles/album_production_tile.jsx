import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class AlbumProductionTiles extends React.Component {

  render() {
    return (

      <div className="columns">
      <div className="column is-hidden-tablet">
          <article className="tile is-child">
            <div className="content">
              <p className="title has-text-right">{this.props.mainContentTitle}</p>
              <p className="is-size-6">Some Studio
                <span className="is-size-6"> | Some Location
                  <span className="is-size-6"> | Some Country</span>
                </span>
              </p>
              <div className="content content-has-dark-text">
                <div dangerouslySetInnerHTML={{__html: this.props.mainContent}} />
              </div>
            </div>
          </article>
        </div>
        <div className="column is-half-desktop">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-primary">
                <p className="title">Vertical...</p>
                <p className="subtitle">Top tile</p>
              </article>
              <article className="tile is-child notification is-warning">
                <p className="title">...tiles</p>
                <p className="subtitle">Bottom tile</p>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-info">
                <p className="title">Middle tile</p>
                <p className="subtitle">With an image</p>
                <figure className="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/640x480.png" />
                </figure>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-danger">
              <p className="title">Wide tile</p>
              <p className="subtitle">Aligned with the right tile</p>
              <div className="content">
                Content
              </div>
            </article>
          </div>
        </div>
        <div className="column is-half-desktop is-hidden-mobile">
          <article className="tile is-child">
            <div className="content">
              <p className="title has-text-right">{this.props.mainContentTitle}</p>
              <p className="is-size-6">Some Studio
                <span className="is-size-6"> | Some Location
                  <span className="is-size-6"> | Some Country</span>
                </span>
              </p>
              <div className="content content-has-dark-text">
                <div dangerouslySetInnerHTML={{__html: this.props.mainContent}} />
              </div>
            </div>
          </article>
        </div>
      </div>

    )
  }
}

export default AlbumProductionTiles;