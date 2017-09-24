import React from 'react';
import CocktailRecipe from '../../app/components/CocktailRecipe.jsx';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('CocktailRecipe', () => {

  it('should render if recipe object is passed', () => {

    const recipe = {
      strDrink: 'test',
      strCategory: 'testCategory',
      strAlcoholic: 'testAlcoholic',
      strDrinkThumb: 'testDrinkThumb',
      strInstructions: 'testInstructions'
    };

    const wrapper = shallow(
      <CocktailRecipe recipe={ recipe }/>
    );

    expect(toJson(wrapper)).toMatchSnapshot();

  });

});
