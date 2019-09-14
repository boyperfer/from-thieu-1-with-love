import styled, { css } from 'styled-components';

import mainStyle from '../../styles/main';

const {
    device: { mobileLanscape, mobileSLanscape, mobile, mobileS },
    variables: { black, white }
} = mainStyle;

const iphoneSystem = css`
    @media ${mobileLanscape} {
        line-height: unset;
        font-size: 8rem;
    }

    @media ${mobileSLanscape} {
        line-height: unset;
        font-size: 7rem;
    }
`;

const androidSystem = css`
    line-height: unset;
    font-size: 3.5rem;
`;

const getSystem = ({ system }) => {
    return system === 'iOS' ? `${iphoneSystem}` : `${androidSystem}`;
};

export const VideoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;

    position: relative;
    &::before,
    &::after {
        z-index: -1;
        position: absolute;
        content: '';
        bottom: 2.5rem;
        left: 13%;
        width: 45%;
        top: 70%;
        min-width: 43rem;
        height: 3.5rem;
        background: #777;
        box-shadow: 0 8.5rem 3rem #777;
        transform: rotate(-9deg);
    }

    &::after {
        transform: rotate(9deg);
        right: 13%;
        left: auto;
    }

    @media ${mobile}, ${mobileS} {
        /* fontsize 5px */
        &::before,
        &::after {
            z-index: unset;
            position: unset;
            content: unset;
            bottom: unset;
            left: unset;
            width: unset;
            top: unset;
            max-width: unset;
            height: unset;
            background: unset;
            box-shadow: unset;
            transform: unset;
        }

        &::after {
            transform: unset;
            right: unset;
            left: unset;
        }
    }

    @media ${mobileLanscape}, ${mobileSLanscape} {
        /* fontsize 5px */
        &::before,
        &::after {
            z-index: -1;
            position: absolute;
            content: '';
            bottom: 5rem;
            left: 10%;
            width: 50%;
            top: 70%;
            max-width: 60rem;
            height: 4rem;
            background: #777;
            box-shadow: 0 12rem 4rem #777;
            transform: rotate(-10deg);
        }

        &::after {
            transform: rotate(10deg);
            right: 10%;
            left: auto;
        }
    }
`;

export const VideoContent = styled.video`
    width: 80vw;
    border: none;
    outline: none;
    object-fit: cover;
    top: -2px;
    height: 375px;

    @media ${mobileLanscape}, ${mobileSLanscape} {
        height: 60vh;
        width: 80vw;
    }

    &::cue {
        color: ${white};
        background-color: transparent;
        border: none;
        font-size: 3.5rem;
        font-family: 'Martel Sans', sans-serif;
        text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
        line-height: 1;
        /* text-shadow: 6px 6px 0px rgba(0,0,0,0.2); */
        ${getSystem}
    }
`;

export const VideoSource = styled.source``;
