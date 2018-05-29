import addReducer from './addReducer';
import signReducer from './signReducer';
import pollenReducer from './pollenReducer';
import {combineReducers} from 'redux';

const reducer = combineReducers({addReducer,signReducer,pollenReducer});

export default reducer;
