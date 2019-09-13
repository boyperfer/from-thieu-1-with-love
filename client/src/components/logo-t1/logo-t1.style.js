import styled, { css } from 'styled-components';

import { ReactComponent as Icon } from '../../assets/Logo/thieu1.svg';

import mainStyle from '../../styles/main';

const {
    device: { mobile, mobileS, mobileLanscape },
    animations: { fadeIn }
} = mainStyle;

const getLogo = ({ isHome, toggleOnBackground }) => {
    return isHome
        ? css`
              visibility: visible;
          `
        : toggleOnBackground
        ? css`
              animation: ${fadeIn} 1.5s ease-in-out;
              /* visibility: visible; */
          `
        : css`
              visibility: hidden;
              display: none;
          `;
};

export const LogoContainer = styled.div`
    /* position: fixed; */
    /* top: 3rem; */
    /* right: 6rem; */
    z-index: 2000;
    /* width: 100vw; */
    /* height: 100vh; */
    margin-right: 4rem;
    /* width: 100vw; */
    /* height: 100vh; */
    ${getLogo}
    @media ${mobile} {
        /* top: 2rem; */
        /* right: 2rem; */
    }

    @media ${mobileS} {
        /* top: 1rem; */
        /* right: 1rem; */
    }
`;

export const Logo = styled(Icon)`
    /* position: absolute;
    top: 3rem;
    right: 6rem; */
    width: 15rem;
    height: 15rem;

    @media ${mobileLanscape}, ${mobile}, ${mobileS} {
        width: 20rem;
        height: 20rem;
    }
`;
