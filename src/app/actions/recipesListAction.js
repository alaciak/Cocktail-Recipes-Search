import fetch from 'isomorphic-fetch';

export function changeQuery(query) {

  // const url = 'http://localhost:3000/drinks';
  const url = 'http://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + query;

  const fetchPromise = fetch(url).then(resp => {
    const contentType = resp.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return resp.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
  }).then((data) => {
    return data.drinks;
  });

  return {
    type: 'CHANGE_QUERY',
    payload: fetchPromise
  };
}
