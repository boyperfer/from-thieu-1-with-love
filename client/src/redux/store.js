import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddlewar from 'redux-saga';

import { fetchPicturesStart } from './picture/picture.sagas';

import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddlewar();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchPicturesStart);

export default store;
