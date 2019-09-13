import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

import mainStyle from '../../styles/main';

const {
    device: { bigScreen }
} = mainStyle;

const getCard = ({ isVeChai }) => {
    return isVeChai
        ? css`
              background-position: 50% 15%;
          `
        : css`
              background-position: 50% 50%;
          `;
};

export const DeckContainer = styled(animated.div)`
    position: absolute;
    width: 100vw;
    height: 100vh;
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CardContainer = styled(animated.div)`
    display: flex;
    justify-items: center;
    align-items: center;
    background-color: #ffffff;
    box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);
    height: 90vh;
    width: 80vw;
    border-radius: 10px;
    max-width: 900px;
    max-height: 600px;

    @media ${bigScreen} {
        max-width: 1200px;
        max-height: 800px;
    }
`;

export const Card = styled.div`
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    ${getCard};
`;
