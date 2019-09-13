import styled, { css } from 'styled-components';

import mainStyle from '../../styles/main';

const {
    variables: { tertiaryDark, tertiaryLight },
    animations: { bounce }
} = mainStyle;

const getDot = css`
    display: inline-block;
    background-color: ${tertiaryDark};
    width: 0;
    height: 0;
    margin: 0 0.8rem;
    border-radius: 50%;
    transform: translate3d(0);
    animation: ${bounce} 0.4s infinite alternate;
`;

export const Dot1Container = styled.span`
    ${getDot}
`;
export const Dot2Container = styled.div`
    ${getDot}
    background-color: ${tertiaryLight};
    animation-delay: 0.2s;

`;

export const Dot3Container = styled.div`
    ${getDot}
    animation-delay: 0.4s;
`;

export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
