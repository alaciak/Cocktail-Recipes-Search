import fullImageReducer from '../../app/reducers/fullImageReducer';

describe('fullImageReducer', () => {
  it('should return initial state', () => {
    expect(fullImageReducer(undefined, {})).toEqual({
      url: null
    });
  });

  it('should handle SHOW_IMAGE', () => {
    expect(fullImageReducer(undefined, {
      type: 'SHOW_IMAGE',
      payload: 'http://cocktail-recipes-search.com/my-image.jpg'
    })).toEqual({
      url: 'http://cocktail-recipes-search.com/my-image.jpg'
    });
  });

  it('should handle HIDE_IMAGE', () => {
    expect(fullImageReducer({
      url: 'http://cocktail-recipes-search.com/my-image.jpg'
    }, {
      type: 'HIDE_IMAGE'
    })).toEqual({
      url: null
    });
  });

});
