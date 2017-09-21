import React from 'react';
import CocktailRecipe from './CocktailRecipe.jsx';

class CocktailRecipesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktailList: [],
      loading: true
    }
  }

  isEmpty(string) {
    return (!string || 0 === string.length);
  }

  getCocktailRecipe = query => {
    if(!this.isEmpty(query)) {
      // const url = 'http://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + query;
      const url = 'http://localhost:3000/drinks';
      fetch(url).then(resp => {
        const contentType = resp.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          return resp.json();
        }
        throw new TypeError("Oops, we haven't got JSON!");
      }).then(data => {
        this.setState({
          cocktailList: data,
          // cocktailList: data.drinks,
          loading: false
        });
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.getCocktailRecipe(nextProps.query);
  }

  render() {
    if (this.state.loading) {
      return null
    } else {
      let recipes = this.state.cocktailList.map((recipe) => {
        return <CocktailRecipe key={ recipe.idDrink } id={ recipe.idDrink } recipe={ recipe } showFullImage={ this.props.showFullImage }/>
      })
      return <section id='recipes-list'>
        <div className='container'>
          <p className='recipes-list_heading'>Your Cocktails</p>
          { recipes }
        </div>
      </section>;
    }
  }
}

module.exports = CocktailRecipesList;
