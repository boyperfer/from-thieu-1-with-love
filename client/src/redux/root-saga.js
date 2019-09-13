import { all, call } from 'redux-saga/effects';

import { fetchPicturesStart } from './picture/picture.sagas';
import { fetchVideoStart } from './video-t1/video-t1.saga';

export default function* rootSaga() {
    yield all([call(fetchPicturesStart), call(fetchVideoStart)]);
}
