import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PictureDevice from '../../components/picture-devices/picture-devices.component';

import PortraitPage from '../portrait-page/portrait.component';

const PicturePage = ({ history }) => {
    const isLanscape = useSelector(({ orientation: { isLanscape } }) => isLanscape);
    return <div>{!isLanscape ? <PortraitPage /> : <PictureDevice />}</div>;
};
export default withRouter(PicturePage);
