import React from 'react';

const CocktailRecipe = (props) => {

  const ingredientsList = [];
  for (let i = 1; i <= 15; i++) {
    if (props.recipe['strIngredient' + i]) {
      const ingredient = <li key={i}>{`${props.recipe['strIngredient' + i]} (${props.recipe['strMeasure' + i]})`}</li>;
      ingredientsList.push(ingredient);
    }
  }

  return (
    <div className='row '>
      <div>{ props.recipe.strDrink} </div>
      <div>{ props.recipe.strCategory }</div>
      <div>{ props.recipe.strAlcoholic }</div>
      <div>
        <img className='recipe-image' src={ props.recipe.strDrinkThumb } onClick={ () => props.showFullImage(props.recipe.strDrinkThumb) }></img>
      </div>
      <div>
        <ul>{ ingredientsList }</ul>
      </div>
      <div>{ props.recipe.strInstructions }</div>
    </div>
  );
}

module.exports = CocktailRecipe;
