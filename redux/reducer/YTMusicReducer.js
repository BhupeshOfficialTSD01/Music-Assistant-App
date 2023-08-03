import * as types from "../action-type/YtMusicDataActionType";

const initialState = {
  musicData: [],
  getMusicLoading: false,
  getMusicError: "",
  status: "",
};

const YTMusicReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_YT_MUSIC_DATA_REQUEST:
      return {
        ...state,
        getMusicLoading: true,
        status: "",
      };

    case types.GET_YT_MUSIC_DATA_SUCCESS:
      return {
        ...state,
        musicData: action.payload,
        getMusicLoading: false,
        status: action.status,
      };

    case types.GET_YT_MUSIC_DATA_FAILED:
      return {
        ...state,
        getMusicError: action.payload,
        getMusicLoading: false,
        status: action.status,
      };

    default:
      return state
  }
};
export default YTMusicReducer;
