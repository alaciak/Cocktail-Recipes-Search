import fullImageReducer from '../../app/reducers/fullImageReducer';

describe('fullImageReducer', () => {

  const testUrl = 'http://cocktail-recipes-search.com/my-image.jpg';

  it('should return initial state', () => {
    expect(fullImageReducer(undefined, {})).toEqual({
      url: null
    });
  });

  it('should handle SHOW_IMAGE', () => {
    expect(fullImageReducer(undefined, {
      type: 'SHOW_IMAGE',
      payload: testUrl
    })).toEqual({
      url: testUrl
    });
  });

  it('should handle HIDE_IMAGE', () => {
    expect(fullImageReducer({
      url: testUrl
    }, {
      type: 'HIDE_IMAGE'
    })).toEqual({
      url: null
    });
  });

});
