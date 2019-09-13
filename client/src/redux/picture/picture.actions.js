import PictureActionTypes from './picture.types';

export const fetchPicturesStart = mainFolder => forDevices => ({
    type: PictureActionTypes.FETCH_PICTURES_START,
    payload: `${mainFolder}/${forDevices}`
});

export const fetchPicturesSuccess = pictures => ({
    type: PictureActionTypes.FETCH_PICTURES_SUCCESS,
    payload: pictures
});

export const fetchPictureFailure = error => ({
    type: PictureActionTypes.FETCH_PICTURES_FAILURE,
    payload: error
});
