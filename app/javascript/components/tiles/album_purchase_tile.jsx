import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class AlbumPurchaseTiles extends React.Component {

  render() {
    let pitch = this.props.album.description.split("<br/>")[0];

    return (
      <div className="columns is-centered">

        <div className="column is-one-half-tablet">
          <div className="image is-square is-xl">
            <img src={this.props.album.image_url}></img>
          </div>
        </div>

        <div className="column is-one-fifth-tablet is-offset-one-fifth-tablet is-three-fifths-desktop">
          <article>
            <div className="content">
              <p className="title has-text-right">{this.props.album.title}</p>

              <div className="content content-has-dark-text">
                <div dangerouslySetInnerHTML={{__html: pitch}} />

                <br />

                <p>Available now in the revolutionary MQA High Resolution Audio Format</p>
              </div>

            </div>
          </article>
          <div className="payment-bar">
            <div>
              <span className="payment-options button is-size-5 album-price has-text-weight-light">$19.99
                <button className="button is-medium is-success has-text-white"><i className="fa fa-paypal" aria-hidden="true"></i>PayPal</button>
                <button className="button is-medium is-success has-text-white"><i className="fa fa-cc-stripe" aria-hidden="true"></i>Stripe</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AlbumPurchaseTiles;
