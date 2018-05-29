
import {welfare_type} from '../action/actionType';

const initialState = {
    signData:{}
}

const signReducer = (state = initialState, action)=>{
    switch (action.type){
        case welfare_type.fetch_signInfo:
            return {
                ...state, signData: action.signData
            }
        default:
            return state;
    }
}

export default signReducer;