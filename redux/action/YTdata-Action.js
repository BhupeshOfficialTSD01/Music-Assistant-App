import axios from "axios";
import * as types from "../action-type/YTDataActionType"
import { API_KEY } from "../action-type/ServerConstants";

export const getAllYTData = ()=> async (dispatch)=> {
  // console.log("KEY", API_KEY)
  dispatch({
    type: types.GET_YT_DATA_REQUEST,
    payload: {},
  });
  
  try{

    const options = {
      method: 'GET',
      url: 'https://youtube-v31.p.rapidapi.com/search',
      params: {
        q: 'latest music',
        part: 'snippet,id',
        regionCode: 'IN',
        maxResults: '50',
        order: 'date'
      },
      headers: {
        'X-RapidAPI-Key': '6bba4e7217msh9293e3eac1702d0p1d098bjsn26d00b2162d7',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    };

      
        
        const response = await axios.request(options).then((response)=>{
          console.log("Response",response.data)
          dispatch({
            type: types.GET_YT_DATA_SUCCESS,
            payload: response.data,
            status: response.status
        
        })
        })
        console.log("response.data",response.data);
      

    }catch(error){
      console.log('error',error.response.data.message)
      dispatch({
        type: types.GET_YT_DATA_FAILED,
        payload: error.response.data.message,
        status: error.response.status
    });
    }

} 

