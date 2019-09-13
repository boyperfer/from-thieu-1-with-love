import PictureActionTypes from './picture.types';

const INITIAL_STATE = {
    pictures: null,
    isFetching: null,
    errorMessage: undefined,
    isVeChai: true
};

const pictureReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PictureActionTypes.FETCH_PICTURES_START:
            return {
                ...state,
                pictures: null,
                isFetching: true
            };
        case PictureActionTypes.FETCH_PICTURES_SUCCESS:
            return {
                ...state,
                pictures: action.payload,
                isFetching: false
            };
        case PictureActionTypes.FETCH_PICTURES_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default pictureReducer;
