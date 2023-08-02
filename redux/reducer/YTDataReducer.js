import * as ytDataAcTypes from "../action-type/YTDataActionType"

const initialState = {

    homeMusicVideo:[],
    homeMusicVideoLoading: false,
    homeMusicVideoError: "",

    searchResult:[],
    searchResultLoading: false,
    searchResultError: "",

    status: ""
    
}

const YTDataReducer = (state = initialState, action)=>{
    
    switch (action.type) {

        case ytDataAcTypes.GET_YT_DATA_REQUEST:
            return {
                ...state,
                homeMusicVideoLoading: true,
                status: "",
            };

        case ytDataAcTypes.GET_YT_DATA_SUCCESS:
            return {
                ...state,
                homeMusicVideo: action.payload,
                homeMusicVideoLoading: false,
                status: action.status,
            };

        case ytDataAcTypes.GET_YT_DATA_FAILED:
            return {
                ...state,
                homeMusicVideoError: action.payload,
                homeMusicVideoLoading: false,
                status: action.status,
            };

        default:
            return state
    }


}

export default YTDataReducer