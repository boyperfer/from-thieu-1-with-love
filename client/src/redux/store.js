import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddlewar from 'redux-saga';

import rootSage from './root-saga';

import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddlewar();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSage);

export default store;
