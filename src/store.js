import { createStore } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

import { reducers } from "./components/reducers/index";


// const middleware = [thunk]
// applyMiddleware(thunk)
export const store= createStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),)


