import { showImage, hideImage } from '../../app/actions/fullImageActions';

describe('fullImageAction', () => {

  const testUrl = 'http://cocktail-recipes-search.com/my-image.jpg';

  it('should return SHOW_IMAGE action', () => {
    expect(showImage(testUrl)).toEqual({
      type: 'SHOW_IMAGE',
      payload: testUrl
    });
  });

  it('should return HIDE_IMAGE', () => {
    expect(hideImage()).toEqual({
      type: 'HIDE_IMAGE',
      payload: null
    });
  });

});
