
import {fetch_welfare_type} from '../action/actionType';

const initialState = {
    signData:{}
}

const signReducer = (state = initialState, action)=>{
    switch (action.type){
        case fetch_welfare_type:
            return {
                ...state, signData: action.signData
            }
        default:
            return state;
    }
}

export default signReducer;