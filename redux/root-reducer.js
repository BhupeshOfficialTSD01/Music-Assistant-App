import {combineReducers} from "redux";
import YTDataReducer from "./reducer/YTDataReducer";
export const RootReducer = combineReducers({
    ytDataReducer: YTDataReducer
})