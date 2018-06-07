import {addReducer} from './addReducer';
import {welfareReducer} from './welfareReducer';
import {combineReducers} from 'redux';
import {newsReducer} from './newsReducer';

const reducer = combineReducers({addReducer,welfareReducer, newsReducer});

export default reducer;
