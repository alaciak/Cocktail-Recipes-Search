import React from 'react';
import { hideImage } from '../actions/fullImageActions';
import { connect } from "react-redux";

export class CocktailFullImage extends React.Component {

  handleOnClickClose = event => {
    event.preventDefault();
      this.props.hideImage();
  }

  render() {
    if(!this.props.url) {
      return null
    } else {
      return (
        <div className='fullScreen' onClick={ this.handleOnClickClose }>
          <div ><img src={ this.props.url } alt='cocktail image big' onClick={ event => event.stopPropagation()}></img></div>
          <button type='button' className='fullScreen-button_close' onClick={ this.handleOnClickClose }>CLOSE</button>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    url: state.fullImageReducer.url
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      hideImage: () => {
          dispatch(hideImage());
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CocktailFullImage);
