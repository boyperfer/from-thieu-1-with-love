import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { toggleBackground } from '../../redux/toggle-hidden/toggle-hidden.action';

import {
    NavigationBackground,
    NavigationContainer,
    NavigationItems,
    NavigationLogo,
    NavigationList,
    NavigationNav,
    NavigationControl,
    NavigationLink
} from './navigation-button.styles';

const NavigationButton = ({ history }) => {
    const toggleOnBackground = useSelector(({ toggle: { onBackground } }) => onBackground);
    const dispatch = useDispatch();

    return (
        <NavigationContainer>
            <NavigationControl onClick={() => dispatch(toggleBackground())}>
                <NavigationLogo on={toggleOnBackground} />
            </NavigationControl>
            <NavigationBackground on={toggleOnBackground} />
            <NavigationNav on={toggleOnBackground}>
                <NavigationList>
                    <NavigationItems one>
                        <NavigationLink
                            onClick={() => {
                                history.push('/van-nghe');
                                dispatch(toggleBackground());
                            }}
                            on={toggleOnBackground ? 1 : 0}
                        >
                            Văn nghệ
                        </NavigationLink>
                    </NavigationItems>
                    <NavigationItems two>
                        <NavigationLink
                            onClick={() => {
                                history.push('/ve-chai');
                                dispatch(toggleBackground());
                            }}
                            on={toggleOnBackground ? 1 : 0}
                        >
                            Gom ve chai
                        </NavigationLink>
                    </NavigationItems>
                    <NavigationItems three>
                        <NavigationLink
                            onClick={() => {
                                history.push('/mat-thu');
                                dispatch(toggleBackground());
                            }}
                            on={toggleOnBackground ? 1 : 0}
                        >
                            Giải mật thư
                        </NavigationLink>
                    </NavigationItems>
                    <NavigationItems four>
                        <NavigationLink
                            onClick={() => {
                                history.push('/xem-phim');
                                dispatch(toggleBackground());
                            }}
                            on={toggleOnBackground ? 1 : 0}
                        >
                            Di xem phim
                        </NavigationLink>
                    </NavigationItems>
                </NavigationList>
            </NavigationNav>
        </NavigationContainer>
    );
};

export default withRouter(NavigationButton);
