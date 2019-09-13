import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Element } from 'react-scroll';
import { useDispatch } from 'react-redux';

import CollectionPicture from '../../components/collection-picture/collection-picture.component';
import Header from '../../components/header/header.component';
import SmoothScroll from '../../components/smooth-scroll/smooth-scroll.component';
import VideoT1 from '../../components/video-t1/video-t1.component';

import { PictureDeviceContainer } from './picture-devices.style';

const PictureDevice = ({ history, getMainFolderFetch }) => {
    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const dispatch = useDispatch();

    const getScreen =
        w <= 900
            ? 'for-mobiles-900'
            : w >= 900 && w <= 1600
            ? 'for-big-devices-1200'
            : 'for-big-devices-1600';
    const getSizeDevice = getMainFolderFetch(getScreen);
    useEffect(() => {
        dispatch(getSizeDevice);
        return () => {};
    }, [dispatch, getSizeDevice]);
    const isVanNghe = history.location.pathname === '/van-nghe' ? true : false;
    return (
        <PictureDeviceContainer isVanNghe={isVanNghe}>
            <Header />
            <Element name='picture'>
                <CollectionPicture />
            </Element>
            {history.location.pathname === '/van-nghe' ? (
                <div>
                    <Element name='video'>
                        <VideoT1 />
                    </Element>
                    <SmoothScroll />
                </div>
            ) : (
                <div />
            )}
        </PictureDeviceContainer>
    );
};

export default withRouter(PictureDevice);
