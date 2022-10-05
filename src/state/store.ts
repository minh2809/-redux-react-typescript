import { legacy_createStore as createStore } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

export const store = createStore(reducers, {}, applyMiddleware(thunk));
