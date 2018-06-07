import {news_type} from '../action/actionType';

const defaultState = {
    bannerList:[],
}

//banner信息
export const newsReducer = (state = defaultState, action)=>{
    switch (action.type){
        case news_type.banner:
            return {
                ...state, bannerList: action.bannerList
            }
        default:
            return state;
    }
}



