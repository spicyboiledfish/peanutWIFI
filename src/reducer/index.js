import {addReducer} from './addReducer';
import {welfareReducer} from './welfareReducer';
import {combineReducers} from 'redux';

const reducer = combineReducers({addReducer,welfareReducer});

export default reducer;
