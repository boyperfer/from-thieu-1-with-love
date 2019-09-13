import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { fetchPicturesStart } from '../../redux/picture/picture.actions';

import PictureDevice from '../../components/picture-devices/picture-devices.component';

import PortraitPage from '../portrait-page/portrait.component';

const PicturePage = ({ history }) => {
    const isLanscape = useSelector(({ orientation: { isLanscape } }) => isLanscape);
    console.log(history.location.pathname);
    const getMainFolderFetch = fetchPicturesStart(history.location.pathname);
    return (
        <div>
            {!isLanscape ? (
                <PortraitPage />
            ) : (
                <PictureDevice getMainFolderFetch={getMainFolderFetch} />
            )}
        </div>
    );
};
export default withRouter(PicturePage);
