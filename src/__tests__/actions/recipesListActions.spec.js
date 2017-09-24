import { changeQuery } from '../../app/actions/recipesListActions';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import promise from 'redux-promise-middleware';

describe('recipesListAction', () => {

  const middlewares = [promise()];
  const mockStore = configureMockStore(middlewares);

  it('should dispatch CHANGE_QUERY_PENDING and CHANGE_QUERY_FULFILLED when fetching data', () => {
    nock('http://www.thecocktaildb.com/')
      .get('/api/json/v1/1/search.php?s=banana')
      .reply(200, { body: []});

    const expectedActions = ['CHANGE_QUERY_PENDING', 'CHANGE_QUERY_FULFILLED'];
    const store = mockStore({cocktailList: []});

    store.dispatch(changeQuery('banana')).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions.map(action => action.type)).toEqual(expectedActions);
    });

  });

});
