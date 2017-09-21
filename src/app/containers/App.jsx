import React from 'react';
import ReactDOM from 'react-dom';
import CocktailRecipePage from '../components/CocktailRecipePage.jsx';
import '../scss/style.scss';


class App extends React.Component {

  render() {
    return <div className='col-12'>
      <CocktailRecipePage />
    </div>
  }
}

document.addEventListener('DOMContentLoaded', function() {

  ReactDOM.render(
    <App/>, document.querySelector('#app'));
});
