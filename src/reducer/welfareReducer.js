import {welfare_type} from '../action/actionType';

const defaultState = {
    signData:{},
    pollen:[],
}

//签到信息
export const welfareReducer = (state = defaultState, action)=>{
    switch (action.type){
        case welfare_type.signInfo:
            return {
                ...state, signData: action.signData
            }
        case welfare_type.pollen:
        return {
            ...state, pollen: action.pollen.data || []
        }
        default:
            return state;
    }
}



