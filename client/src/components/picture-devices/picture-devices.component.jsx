import React from 'react';
import { withRouter } from 'react-router-dom';
import { Element } from 'react-scroll';
import { useSelector } from 'react-redux';

import CollectionPicture from '../../components/collection-picture/collection-picture.component';
import Header from '../../components/header/header.component';
import SmoothScroll from '../../components/smooth-scroll/smooth-scroll.component';
import VideoT1 from '../../components/video-t1/video-t1.component';

import WithLoader from '../../components/with-loader/with-loader.component';

import { PictureDeviceContainer } from './picture-devices.style';

const VideoT1Loader = WithLoader(VideoT1);

const PictureDevice = ({ history }) => {
    const isVanNghe = history.location.pathname === '/van-nghe' ? true : false;
    const isFetching = useSelector(({ picture: { isFetching } }) => isFetching);

    return (
        <PictureDeviceContainer isVanNghe={isVanNghe}>
            <Header />
            <Element name='picture'>
                <CollectionPicture />
            </Element>
            {history.location.pathname === '/van-nghe' ? (
                <div>
                    <Element name='video'>
                        <VideoT1Loader isFetching={isFetching} />
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
