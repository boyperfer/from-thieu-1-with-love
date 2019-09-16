import PictureActionTypes from './picture.types';

const INITIAL_STATE = {
    images: null,
    isFetching: false,
    errorMessage: undefined,
    isVeChai: true,
    linkPicture: ''
};

const pictureReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PictureActionTypes.FETCH_PICTURES_START:
            return {
                ...state,
                images: null,
                isFetching: true,
                linkPicture: action.payload
            };
        case PictureActionTypes.FETCH_PICTURES_SUCCESS:
            return {
                ...state,
                images: action.payload,
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
