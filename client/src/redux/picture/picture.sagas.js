import { takeLatest, call, put } from 'redux-saga/effects';

import { storage } from '../../firebase/firebase.utils';

import { fetchPicturesSuccess, fetchPictureFailure } from './picture.actions';

import { getDownloadPictureURL } from '../../firebase/firebase.utils';

import PictureActionTypes from './picture.types';

export function* fetchPicturesAsync() {
    try {
        const storageRef = storage.ref();
        const listRef = storageRef.child(`thieu/van-nghe/for-big-devies-1200`);
        const listAll = yield listRef.listAll();
        const getPicture = yield call(getDownloadPictureURL, listAll);
        console.log(getPicture);
        yield put(fetchPicturesSuccess(getPicture));
    } catch (error) {
        yield put(fetchPictureFailure(error.massage));
    }
}

export function* fetchPicturesStart() {
    yield takeLatest(PictureActionTypes.FETCH_PICTURES_START, fetchPicturesAsync);
}
