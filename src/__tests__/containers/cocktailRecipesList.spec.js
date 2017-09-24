import React from 'react';
import { CocktailRecipesList } from '../../app/containers/CocktailRecipesList.jsx';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('CocktailRecipesList', () => {

  it('should not render if loading is true', () => {

    const wrapper = shallow(<CocktailRecipesList loading = { true }/>);

    expect(toJson(wrapper)).toMatchSnapshot();

  });

  it('should render recipes list not found if fetched cocktail list is undefinded', () => {

    const testCocktailList = undefined;

    const wrapper = shallow(<CocktailRecipesList cocktailList = { undefined }/>);

    expect(toJson(wrapper)).toMatchSnapshot();

  });

  it('should render recipes list if fetched cocktail list is not empty', () => {

    const testCocktailList = [{idDrink: 'cocktail - 1'}, {idDrink: 'cocktail - 2'}, {idDrink: 'cocktail - 3'}];

    const wrapper = shallow(<CocktailRecipesList cocktailList = { testCocktailList }/>);

    expect(toJson(wrapper)).toMatchSnapshot();

  });

});
