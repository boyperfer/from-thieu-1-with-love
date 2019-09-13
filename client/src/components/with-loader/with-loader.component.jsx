import React from 'react';

import { WithLoaderContainer, LoaderContainer, LogoLoading } from './with-loader.style';

const WithLoader = WrappedComponent => {
    const spinner = ({ isFetching, ...otherProps }) => {
        return isFetching ? (
            <WithLoaderContainer>
                <LoaderContainer>
                    <LogoLoading />
                </LoaderContainer>
            </WithLoaderContainer>
        ) : (
            <WrappedComponent {...otherProps} />
        );
    };
    return spinner;
};

export default WithLoader;
