import {combineReducers} from "redux";
import YTDataReducer from "./reducer/YTDataReducer";
import YTMusicReducer from "./reducer/YTMusicReducer";
export const RootReducer = combineReducers({
    ytDataReducer: YTDataReducer,
    ytmusicReducer: YTMusicReducer
})