import addReducer from './addReducer';
import {signReducer, pollenReducer} from './welfareReducer';
import {combineReducers} from 'redux';

const reducer = combineReducers({addReducer,signReducer,pollenReducer});

export default reducer;
