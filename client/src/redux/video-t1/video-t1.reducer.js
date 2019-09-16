import VideoActionTypes from './video-t1.types';

const INITIAL_STATE = {
    isFetching: true,
    linkVideo: '',
    message: ''
};

const videoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case VideoActionTypes.FETCH_VIDEO_START:
            return {
                ...state,
                isFetching: true
            };
        case VideoActionTypes.FETCH_VIDEO_SUCCESS:
            return {
                ...state,
                isFetching: false,
                linkVideo: action.payload
            };
        case VideoActionTypes.FETCH_VIDEO_FAILURE:
            return {
                ...state,
                isFetching: false,
                message: action.payload
            };
        default:
            return state;
    }
};

export default videoReducer;
