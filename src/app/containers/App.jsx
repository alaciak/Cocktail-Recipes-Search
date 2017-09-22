import React from 'react';
import SearchBox from '../components/SearchBox.jsx';
import CocktailRecipesList from '../components/CocktailRecipesList.jsx';
import CocktailFullImage from '../components/CocktailFullImage.jsx';
import ScrollToTopButton from '../components/ScrollToTopButton.jsx';
import { Provider } from "react-redux";
import store from "../Store.jsx";

class App extends React.Component {

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

 module.exports = App;
