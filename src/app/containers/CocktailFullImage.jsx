import React from 'react';
import { hideImage } from '../actions/fullImageAction';
import { connect } from "react-redux";

export class CocktailFullImage extends React.Component {

  handleOnClickClose = e => {
    e.preventDefault();
      this.props.hideImage();
  }

  render() {
    if(this.props.url === null) {
      return null
    } else {
      return (
        <div className='fullScreen' onClick={ this.handleOnClickClose }>
          <div ><img src={ this.props.url } alt='cocktail image big' onClick={ e => e.stopPropagation()}></img></div>
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
