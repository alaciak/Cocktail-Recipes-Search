import recipesListReducer from '../../app/reducers/recipesListReducer';

describe('recipesListReducer', () => {

  const testList = ['cocktail-1', 'cocktail-2', 'cocktail-3']

  it('should return initial state', () => {
    expect(recipesListReducer(undefined, {})).toEqual({
      cocktailList: [],
      loading: true
    });
  });

  it('should handle CHANGE_QUERY_FULFILLED', () => {
    expect(recipesListReducer(undefined, {
      type: 'CHANGE_QUERY_FULFILLED',
      payload: testList
    })).toEqual({
      cocktailList: testList,
      loading: false
    });
  });

});
