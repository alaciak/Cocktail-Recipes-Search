# Cocktail-Recipes-Search
site is published at https://alaciak.github.io/Cocktail-Recipes-Search/

## description
The single page web application has been created with React.js and Redux.
It allows searching for cocktails recipes fetched from the public API - TheCocktailDB.
The following features has been implemented so far:
* search option
* cocktail list is fetched from the public API
* on click image an enlarged image is open

### in order to run the app, use the following commands in console:
in order to download dependencies:
``` bash
npm install
```
in order to build the project on Windows:
``` bash
node_modules\.bin\webpack-dev-server --hot
```
in order to build the project on Linux:
``` bash
./node_modules/.bin/webpack-dev-server --hot
```

after successfully running the webpack server, the app should be available at: http://localhost:3001/

### in order to run the tests, use the following command in console:
``` bash
npm test
```

## technologies used:
* ES6
* React
* Redux - to manage application state
* Sass
* Fetch - to get the data from API
* Jest - to test React components in an easy way, using toMatchSnapshot method, and to test reducers and action creators
* Enzyme - testing tool for React to simplify managing components output (using shallow and toJson methods)
* Nock - to test action that fetches the data from the server
* Webpack - build tool

Using Redux together with React for such a small app may seem to be overwhelming, however it allows to keep and manage the state in the global application store and control how it changes and which components should have an access to that.
Creating more complex project structure for small apps can be time-consuming, but thanks to that we can easily separate smart and dumb components, reducers, actions and quickly write unit tests for them.
Using these technologies requires build tools, such as Webpack, which can be a bit challenging to configure.

Improvements to be implemented:
* tests for mapStateToProps and mapDispatchToProps functions if they become more complex
