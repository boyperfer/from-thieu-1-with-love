import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPicturesStart } from '../../redux/picture/picture.actions';

import WithLoader from '../../components/with-loader/with-loader.component';
import PictureDevice from '../../components/picture-devices/picture-devices.component';

import PortraitPage from '../portrait-page/portrait.component';

const PictureDeviceLoader = WithLoader(PictureDevice);

const PicturePage = ({ history }) => {
    const isLanscape = useSelector(({ orientation: { isLanscape } }) => isLanscape);
    const isFetching = useSelector(({ picture: { isFetching } }) => isFetching);

    const dispatch = useDispatch();

    // const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    // const getPicForDevice =
    //     w <= 900
    //         ? 'for-mobiles-900'
    //         : w > 900 && w < 1600
    //         ? 'for-big-devices-1200'
    //         : 'for-big-devices-1800';
    useEffect(() => {
        const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        const getPicForDevice =
            w <= 900
                ? 'for-mobiles-900'
                : w > 900 && w < 1600
                ? 'for-big-devices-1200'
                : 'for-big-devices-1800';
        const pictureFetch = fetchPicturesStart(history.location.pathname)(getPicForDevice);

        dispatch(pictureFetch);
        return () => {};
    }, [dispatch, history.location.pathname]);

    return (
        <div>
            {!isLanscape ? <PortraitPage /> : <PictureDeviceLoader isFetching={isFetching} />}
        </div>
    );
};
export default withRouter(PicturePage);
