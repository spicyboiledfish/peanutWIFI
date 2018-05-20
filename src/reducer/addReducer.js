
import add_action_type from '../action/actionType';

const initialState = {
    count:0
}

const addReducer = (state = initialState, action)=>{
    switch (action.type){
        case add_action_type:
            return {
                ...state, count: state.count+1
            }
        default:
            return state;
    }
}

export default addReducer;