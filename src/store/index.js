
import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer/index'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(
      thunk,
    ),
  ));

export default store;