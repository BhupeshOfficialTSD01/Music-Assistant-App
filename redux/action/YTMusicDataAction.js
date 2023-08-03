import * as types from "../action-type/YtMusicDataActionType";
import axios from "axios";

export const getYTMusicData = () => async (dispatch) => {
  dispatch({
    type: types.GET_YT_MUSIC_DATA_REQUEST,
    payload: {},
  });

  try {
    const options = {
      method: 'GET',
      url: 'https://youtube-music-api-detailed.p.rapidapi.com/get_watch_playlist',
      params: {
        video_id: '1A7Qw88As64' //RS0FhoKAHvA << another id
      },
      headers: {
        'X-RapidAPI-Key': '8bdc4df19bmsh9353f593b736454p1ba45bjsn4feaa8704ff3',
        'X-RapidAPI-Host': 'youtube-music-api-detailed.p.rapidapi.com'
      }
    };
    const response = await axios.request(options)
      console.log("Action Response", response.data);
      dispatch({
        type: types.GET_YT_MUSIC_DATA_SUCCESS,
        payload: response.data,
        status: response.status,
      });
    //   console.log("Music Response2 ", response.data);

  } catch (error) {
    console.log("music error ",error)
    dispatch({
      type: types.GET_YT_MUSIC_DATA_FAILED,
      payload: error.response.data.message,
      status: error.response.status,
    });
  }
};
