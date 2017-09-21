import React from 'react';

class CocktailFullImage extends React.Component {

  handleOnClickClose = e => {
    e.preventDefault();
    if(typeof this.props.closeFullImage === 'function') {
      this.props.closeFullImage();
    }
  }

  render() {
    if(this.props.url === null) {
      return null
    } else {
      return (
        <div className='fullScreen'>
          <div ><img src={ this.props.url }></img></div>
          <button type='button' className='fullScreen-button_close' onClick={ this.handleOnClickClose }>CLOSE</button>
        </div>
      )
    }
  }
}

module.exports = CocktailFullImage;
