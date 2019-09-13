import { combineReducers } from 'redux';

import toogleReducer from './toggle-hidden/toggle-hidden.reducer';
import orientationReducer from './orientation/orientation.reducer';
import pictureReducer from './picture/picture.reducer';

const rootReducer = combineReducers({
    toggle: toogleReducer,
    orientation: orientationReducer,
    picture: pictureReducer
});

export default rootReducer;
