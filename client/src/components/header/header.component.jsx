import React from 'react';
import { withRouter } from 'react-router-dom';

import NavigationButton from '../navigation-button/navigation-button.component';
import LogoT1 from '../logo-t1/logo-t1.component';

import { HeaderContainer, LogoContainer } from './header.styles';

const Header = ({ history }) => {
    return (
        <HeaderContainer>
            <NavigationButton />
            <LogoContainer>
                {history.location.pathname === '/' ? <LogoT1 isHome /> : <LogoT1 />}
            </LogoContainer>
        </HeaderContainer>
    );
};

export default withRouter(Header);
