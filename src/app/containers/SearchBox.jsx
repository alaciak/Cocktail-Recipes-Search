import React from 'react';
import { changeQuery } from '../actions/recipesListActions';
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
    if(this.state.text !== '') {
      this.props.changeQuery(this.state.text);
    }
  }

  handleOnKeyPress = event => {
    if(event.key === 'Enter') {
      this.handleOnClick(event);
      }
    }


  render() {
    return  <div className='container search-box'>
        <div className='row'>
          <input className='search-box_input' type='search' value={ this.state.text } onChange={ this.handleOnChangeSearch } onClick={ this.handleOnClickSearch } onKeyPress={ this.handleOnKeyPress } ></input>
          <div className='search-box_button' onClick={ this.handleOnClick } >Search!</div>
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
