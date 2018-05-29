
import {welfare_type} from '../action/actionType';

const initialState = {
    pollen:[]
    
}

const pollenReducer = (state = initialState, action)=>{
    switch (action.type){
        case welfare_type.fetch_pollen:
            return {
                ...state, pollen: action.pollen.data || []
            }
        default:
            return state;
    }
}

export default pollenReducer;