import { takeLatest, call, put, select } from 'redux-saga/effects';

import { storage } from '../../firebase/firebase.utils';

import { fetchPicturesSuccess, fetchPictureFailure } from './picture.actions';

import { getDownloadPictureURL } from '../../firebase/firebase.utils';

import PictureActionTypes from './picture.types';

const getLink = ({ picture: { getLink } }) => getLink;

export function* fetchPicturesAsync() {
    try {
        const getLinkUrl = yield select(getLink);
        const storageRef = storage.ref();
        const listRef = storageRef.child(`thieu/${getLinkUrl}`);
        const listAll = yield listRef.listAll();
        const getPicture = yield call(getDownloadPictureURL, listAll);
        yield put(fetchPicturesSuccess(getPicture));
    } catch (error) {
        yield put(fetchPictureFailure(error.massage));
    }
}

export function* fetchPicturesStart() {
    yield takeLatest(PictureActionTypes.FETCH_PICTURES_START, fetchPicturesAsync);
}
