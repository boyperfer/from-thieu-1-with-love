import styled, { css } from 'styled-components';

import mainStyle from '../../styles/main';

const {
    variables: { white, black, blueAnimation, tertiaryDark, tertiaryLight },
    utils: { boxShadow }
} = mainStyle;

const customButton = css`
    padding: 2rem 4rem;
    font-size: 3rem;
    text-transform: uppercase;
    border-radius: 10rem;
    outline: none;
    cursor: pointer;
    position: relative;
    text-align: center;

    &:active,
    &:hover {
        transform: translateY(-0.3rem);
        ${boxShadow};

        &::after {
            transform: scale(1.5);
            opacity: 0;
        }
    }

    &:active {
        transform: translate(-0.1rem);
        box-shadow: 0 0.5rem 1rem ${black}33;
    }

    &::after {
        content: '';
        width: 100%;
        height: 100%;
        border-radius: 10rem;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all 0.4s;
    }
`;

const whiteButton = css`
    ${customButton}
    background-color: ${white};
    color: ${tertiaryLight};

    ::after {
        background-color: ${white};
    }
`;

const blueButton = css`
    ${customButton};
    background-color: ${tertiaryDark};
    color: ${white};
`;

const buttonAfterAnimation = css`
    ${customButton};
    background-color: ${blueAnimation};
    color: ${white};

    &::after {
        background-color: ${blueAnimation};
    }
`;

const getButton = ({ isWhiteButton, toggleOnText }) => {
    if (toggleOnText) return buttonAfterAnimation;
    return isWhiteButton ? whiteButton : blueButton;
};

export const ButtonContainer = styled.button`
    transition: all 0.2;
    ${getButton};
`;
