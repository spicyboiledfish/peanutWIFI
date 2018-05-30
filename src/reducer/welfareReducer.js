import {welfare_type} from '../action/actionType';

//签到信息
export const signReducer = (state = {signData:{}}, action)=>{
    switch (action.type){
        case welfare_type.signInfo:
            return {
                ...state, signData: action.signData
            }
        default:
            return state;
    }
}


//花粉福利
export const pollenReducer = (state = {pollen:[]}, action)=>{
    switch (action.type){
        case welfare_type.pollen:
            return {
                ...state, pollen: action.pollen.data || []
            }
        default:
            return state;
    }
}


