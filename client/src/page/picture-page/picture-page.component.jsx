import React, { useEffect, lazy, Suspense } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import is from 'is_js';

import { selectIsFetching } from '../../redux/picture/picture.selectors';
import { selectIsLandscape } from '../../redux/orientation/orientation.selectors';

import { fetchPicturesStart } from '../../redux/picture/picture.actions';

import WithLoader from '../../components/with-loader/with-loader.component';

import Loader from '../../components/loader/loader.component';

const PictureDevice = lazy(() =>
    import('../../components/picture-devices/picture-devices.component')
);
const PortraitPage = lazy(() => import('../../page/portrait-page/portrait.component'));

const PictureDeviceLoader = WithLoader(PictureDevice);

const PicturePage = ({ history }) => {
    const isLanscape = useSelector(selectIsLandscape);
    const isFetching = useSelector(selectIsFetching);
    const dispatch = useDispatch();

    useEffect(() => {
        const isSafari = is.safari() ? '' : '/chrome';
        const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        const getPicForDevice =
            w <= 900
                ? 'for-mobiles-900'
                : w > 900 && w < 1600
                ? 'for-big-devices-1200'
                : 'for-big-devices-1800';
        const pictureFetch = fetchPicturesStart(history.location.pathname)(isSafari)(
            getPicForDevice
        );

        dispatch(pictureFetch);
        return () => {};
    }, [dispatch, history.location.pathname]);

    return (
        <div>
            <Suspense fallback={<Loader />}>
                {!isLanscape ? <PortraitPage /> : <PictureDeviceLoader isFetching={isFetching} />}
            </Suspense>
        </div>
    );
};
export default withRouter(PicturePage);
