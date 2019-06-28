import {createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
// import { createStore, applyMiddleware, compose } from 'redux';

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// + const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
// - const store = createStore(reducer, /* preloadedState, */ compose(
//     applyMiddleware(...middleware)
//   ));

const store = createStore(reducer,composeEnhancers(
    applyMiddleware(thunk)
));


export default store;