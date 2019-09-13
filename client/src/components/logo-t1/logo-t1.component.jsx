import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { toggleBackground } from '../../redux/toggle-hidden/toggle-hidden.action';

import { Logo, LogoContainer } from './logo-t1.style';

const LogoT1 = ({ history, isHome }) => {
    const toggleOnBackground = useSelector(({ toggle: { onBackground } }) => onBackground);
    const dispatch = useDispatch();

    return history.location.pathname === '/' ? (
        <LogoContainer
            toggleOnBackground={toggleOnBackground}
            onClick={() => {
                history.push('./');
            }}
            isHome={isHome}
        >
            <Logo />
        </LogoContainer>
    ) : (
        <LogoContainer
            toggleOnBackground={toggleOnBackground}
            onClick={() => {
                history.push('./');
                dispatch(toggleBackground());
            }}
            isHome={isHome}
        >
            <Logo />
        </LogoContainer>
    );
};

export default withRouter(LogoT1);
