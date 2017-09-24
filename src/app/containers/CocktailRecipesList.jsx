import React from 'react';
import CocktailRecipe from '../components/CocktailRecipe.jsx';
import { connect } from "react-redux";
import { showImage } from "../actions/fullImageActions";

export class CocktailRecipesList extends React.Component {

  render() {
    if (this.props.loading) {
      return null;
    }
    if (!this.props.cocktailList) {
        return (
          <section id='recipes-list'>
            <div className='container recipes-list_not-found'>
              <p>Ooops it looks like we don't have this cocktail recipe for you...</p>
              <p>Why not try another search?</p>
            </div>
          </section>
        );
      } else {
        const recipes = this.props.cocktailList.map((recipe) => {
        return <CocktailRecipe key={ recipe.idDrink } id={ recipe.idDrink } recipe={ recipe } showFullImage={ this.props.showImage }/>
      });
      return (
        <section id='recipes-list'>
          <div className='container recipes-list'>
            <h1 className='col-12 recipes-list_heading'>Your Cocktails</h1>
            { recipes }
          </div>
        </section>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    cocktailList: state.recipesListReducer.cocktailList,
    loading: state.recipesListReducer.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      showImage: (url) => {
        dispatch(showImage(url));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CocktailRecipesList);
