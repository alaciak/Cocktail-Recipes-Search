import React from 'react';

class CocktailRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: this.props.recipe.strDrinkThumb
    }
  }

  handleOnClickShowImage = e => {
    if (typeof this.props.showFullImage === 'function') {
      this.props.showFullImage(this.state.imageUrl);
    }
  }

  render() {
    const ingredientsList = [];
    for (let i = 1; i <= 15; i++) {
      if (this.props.recipe['strIngredient' + i]) {
        const ingredient = <li key={i}>{`${this.props.recipe['strIngredient' + i]} (${this.props.recipe['strMeasure' + i]})`}</li>;
        ingredientsList.push(ingredient);
      }
    }

    return (
      <div className='row '>
        <div>{ this.props.recipe.strDrink }</div>
        <div>{ this.props.recipe.strCategory }</div>
        <div>{ this.props.recipe.strAlcoholic }</div>
        <div><img className='recipe-image' src={ this.props.recipe.strDrinkThumb } onClick={ this.handleOnClickShowImage }></img>
        </div>
        <div>
          <ul>{ ingredientsList }</ul>
        </div>
        <div>{ this.props.recipe.strInstructions }</div></div>
    );
  }
}

module.exports = CocktailRecipe;
