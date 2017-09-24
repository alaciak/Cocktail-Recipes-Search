import React from 'react';
import SearchBox from './SearchBox.jsx';
import CocktailRecipesList from './CocktailRecipesList.jsx';
import CocktailFullImage from './CocktailFullImage.jsx';
import { ScrollToTopButton } from '../components/ScrollToTopButton.jsx';
import { Provider } from "react-redux";
import store from "../Store.jsx";

export class App extends React.Component {

  render() {
    return <div>
      <Provider store={ store }>
        <SearchBox />
      </Provider>
      <Provider store={ store }>
        <CocktailRecipesList />
      </Provider>
      <Provider store={ store }>
        <CocktailFullImage />
      </Provider>
      <ScrollToTopButton/>
    </div>;
  }
}
