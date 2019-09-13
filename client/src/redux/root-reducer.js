import { combineReducers } from 'redux';

import toogleReducer from './toggle-hidden/toggle-hidden.reducer';
import orientationReducer from './orientation/orientation.reducer';
import pictureReducer from './picture/picture.reducer';
import videoReducer from './video-t1/video-t1.reducer';

const rootReducer = combineReducers({
    toggle: toogleReducer,
    orientation: orientationReducer,
    picture: pictureReducer,
    video: videoReducer
});

export default rootReducer;
