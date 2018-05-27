
import {fetch_welfare_type} from '../action/actionType';

const initialState = {
    data:{}
}

const signReducer = (state = initialState, action)=>{
    switch (action.type){
        case fetch_welfare_type:
            return {
                ...state, data: action.data
            }
        default:
            return state;
    }
}

export default signReducer;