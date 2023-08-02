import { applyMiddleware, createStore } from "redux";
import { RootReducer } from "./root-reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(RootReducer,composeWithDevTools(applyMiddleware(thunk)));