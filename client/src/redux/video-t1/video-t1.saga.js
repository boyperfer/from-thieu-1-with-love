import { takeLatest, put, call } from 'redux-saga/effects';

import { storage, getDownloadVideoUrl } from '../../firebase/firebase.utils';

import { fetchVideoError, fetchVideoSuccess } from './video-t1.actions';

import PictureActionTypes from '../picture/picture.types';

export function* fetchVideoAsync() {
    try {
        const storageRef = storage.ref();
        const fileFirebase = storageRef.child('video/t1.mp4');
        const getVideo = yield call(getDownloadVideoUrl, fileFirebase);
        yield put(fetchVideoSuccess(getVideo));
    } catch (error) {
        yield put(fetchVideoError(error.message));
    }
}

export function* fetchVideoStart() {
    yield takeLatest(PictureActionTypes.FETCH_PICTURES_SUCCESS, fetchVideoAsync);
}
