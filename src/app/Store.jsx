import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import recipesListReducer from "./reducers/recipesListReducer";
import fullImageReducer from "./reducers/fullImageReducer";

export default createStore(
    combineReducers({
        recipesListReducer,
        fullImageReducer
    }),
    {},
    applyMiddleware(createLogger(), thunk, promise())
);
