import React from 'react';
import { changeQuery } from '../actions/recipesListAction';
import { connect } from "react-redux";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Search for your cocktail by name...'
    }
  }

  handleOnClickSearch = event => {
    event.preventDefault();
    this.setState({
      text: ''
    });
  }

  handleOnChangeSearch = event => {
    event.preventDefault();
    this.setState({
      text: event.target.value
    });
  }

  handleOnClick = event => {
    if(this.state.text !== 'Search for your cocktail by name...') {
      this.props.changeQuery(this.state.text);
    }
  }

  handleOnKeyPress = event => {
    if(event.key === 'Enter') {
      this.handleOnClick(event.target.value);
      }
    }


  render() {
    return  <div className='container search-box'>
        <div className='row'>
          <input className='col-10' type='text' value={ this.state.text } onChange={ this.handleOnChangeSearch } onClick={ this.handleOnClickSearch } onKeyPress={ this.handleOnKeyPress } ></input>
          <div className='search-button col-1' onClick={ this.handleOnClick } >Let's go!</div>
        </div>
      </div>;
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeQuery: (query) => {
            dispatch(changeQuery(query));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
