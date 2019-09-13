import VideoActionTypes from './video-t1.types';

export const fetchVideoStart = () => ({
    type: VideoActionTypes.FETCH_VIDEO_START
});

export const fetchVideoSuccess = linkVideo => ({
    type: VideoActionTypes.FETCH_VIDEO_SUCCESS,
    payload: linkVideo
});

export const fetchVideoError = error => ({
    type: VideoActionTypes.FETCH_VIDEO_FAILURE,
    payload: error
});
