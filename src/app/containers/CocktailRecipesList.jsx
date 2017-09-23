import React from 'react';
import CocktailRecipe from '../components/CocktailRecipe.jsx';
import { connect } from "react-redux";
import { showImage } from "../actions/fullImageAction";

class CocktailRecipesList extends React.Component {

  render() {
    if (this.props.loading) {
      return null
    } else {
      let recipes = this.props.cocktailList.map((recipe) => {
        return <CocktailRecipe key={ recipe.idDrink } id={ recipe.idDrink } recipe={ recipe } showFullImage={ this.props.showImage }/>
      });
      return <section id='recipes-list'>
        <div className='container'>
          <p className='recipes-list_heading'>Your Cocktails</p>
          { recipes }
        </div>
      </section>;
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
