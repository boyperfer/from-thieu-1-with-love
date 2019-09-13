import React from 'react';

import { LoaderContainer, Dot1Container, Dot2Container, Dot3Container } from './loader.style';

const Loader = () => {
    return (
        <LoaderContainer>
            <Dot1Container />
            <Dot2Container />
            <Dot3Container />
        </LoaderContainer>
    );
};

export default Loader;
