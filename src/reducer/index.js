import addReducer from './addReducer';
import signReducer from './signReducer';
import {combineReducers} from 'redux';

const reducer = combineReducers({addReducer,signReducer});

export default reducer;
