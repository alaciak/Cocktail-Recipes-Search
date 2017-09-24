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
      <div className='row recipes-list_element'>
        <div className='col-6 recipes-list_main'>
          <h4>{ props.recipe.strDrink } </h4>
          <p>Category: { props.recipe.strCategory }</p>
          <p>Type: { props.recipe.strAlcoholic }</p>
          <div className='recipes-list_image'>
            <img  src={ props.recipe.strDrinkThumb } alt='cocktail image small' onClick={ () => props.showFullImage(props.recipe.strDrinkThumb) }></img>
          </div>
          <p>[click image to enlarge]</p>
        </div>
        <div className='col-6 recipes-list_ingredients'>
          <p className='recipes-list_ingredients_heading'>Ingredients:</p>
          <ul>{ ingredientsList }</ul>
          <p className='recipes-list_ingredients_heading'>Instructions:</p>
          <p className='recipes-list_ingredients_instructions'>{ props.recipe.strInstructions }</p>
        </div>
      </div>
  );
};

module.exports = CocktailRecipe;
