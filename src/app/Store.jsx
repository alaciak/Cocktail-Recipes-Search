import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import recipesListReducer from "./reducers/recipesListReducer.jsx";
import fullImageReducer from "./reducers/fullImageReducer.jsx";

export default createStore(
    combineReducers({
        recipesListReducer,
        fullImageReducer
    }),
    {},
    applyMiddleware(createLogger(), thunk, promise())
);
