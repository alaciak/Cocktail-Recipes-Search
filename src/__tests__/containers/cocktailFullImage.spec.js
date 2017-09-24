import React from 'react';
import { CocktailFullImage } from '../../app/containers/CocktailFullImage.jsx';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('CocktailFullImage', () => {

  it('should not render if url is null', () => {

    const wrapper = shallow(
      <CocktailFullImage url={ null }/>
    );

    expect(toJson(wrapper)).toMatchSnapshot();

  });

  it('should render if url is passed', () => {

    const testUrl = 'http://cocktail-recipes-search.com/my-image.jpg';

    const wrapper = shallow(
      <CocktailFullImage url={ testUrl }/>
    );

    expect(toJson(wrapper)).toMatchSnapshot();

  });

});
