import OrientationActionTypes from './orientation.types';

const INITIAL_STATE = {
    isLanscape: window.matchMedia('(orientation: portrait)').matches ? false : true
};

const orientationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OrientationActionTypes.CHANGE_ORIENTATION:
            return {
                ...state,
                isLanscape: !state.isLanscape
            };
        default:
            return state;
    }
};

export default orientationReducer;
