import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {rootReducer, chatHistory} from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import {routerMiddleware} from 'connected-react-router';

const Store = createStore(rootReducer, 
  composeWithDevTools(applyMiddleware(thunk,routerMiddleware(chatHistory))));

export default Store;