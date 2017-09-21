import React from 'react';
import SearchBox from './SearchBox.jsx';
import CocktailRecipesList from './CocktailRecipesList.jsx';
import CocktailFullImage from './CocktailFullImage.jsx';
import ScrollToTopButton from './ScrollToTopButton.jsx';

class CocktailRecipePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        query: '',
        scrollToTopButtonDisplay: 'none',
        cocktailFullImageUrl: null
      }
    }

  handleOnChangeRecipe = text => {
    this.setState({
      query: text,
      scrollToTopButtonDisplay: 'block'
    });
  }

  showFullImage = url => {
    this.setState({
      cocktailFullImageUrl: url
    });
  }

  closeFullImage = e => {
    this.setState({
      cocktailFullImageUrl: null
    });
  }

  render() {
    return <div>
      <SearchBox onChangeRecipe={ this.handleOnChangeRecipe }/>
      <CocktailRecipesList query={ this.state.query } showFullImage={ this.showFullImage }/>
      <CocktailFullImage url={ this.state.cocktailFullImageUrl } closeFullImage={ this.closeFullImage }/>
      <ScrollToTopButton display={ this.state.scrollToTopButtonDisplay } />
    </div>;
  }
}

 module.exports = CocktailRecipePage;
