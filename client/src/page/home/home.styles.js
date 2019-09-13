import styled, { css } from 'styled-components';

import CustomButton from '../../components/custom-button/custom-button.component';

import mainStyle from '../../styles/main';
import T1S from '../../assets/T1/for-mobiles-900/t0.jpg';
import T1M from '../../assets/T1/for-big-devices-1200/t0.jpg';
import T1H from '../../assets/T1/for-big-devices-1800/t0.jpg';

const {
    variables: { blackLight, blackDark, white, blueAnimation },
    animations: { animationText, moveInLeft, moveInBottom, moveInRight, fadeIn },
    device: { mobile, mobileS, mobileLanscape, mobileSLanscape, bigScreen }
} = mainStyle;

const getAnimation = ({ toggleOnText }) => {
    return toggleOnText
        ? css`
              animation: ${animationText} 1.5s ease-in-out infinite alternate;
              color: ${blueAnimation};
          `
        : null;
};

export const HomeContainer = styled.div`
    padding: 10rem;
    height: 100vh;
    background-image: linear-gradient(to right bottom, ${blackLight}cc, ${blackDark}cc), url(${T1M});
    background-size: cover;
    background-position: center;
    position: relative;

    @media ${mobile}, ${mobileS}, ${mobileLanscape}, ${mobileSLanscape} {
        padding: 0;
        background-image: linear-gradient(to right bottom, ${blackLight}cc, ${blackDark}cc),
            url(${T1S});
    }

    @media ${bigScreen} {
        padding: 0;
        background-image: linear-gradient(to right bottom, ${blackLight}cc, ${blackDark}cc),
            url(${T1H});
    }
`;

export const HomeTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Pacifico', cursive;
    text-transform: uppercase;
    color: ${white};
    height: 80vh;
    backface-visibility: hidden;

    ${getAnimation};

    @media ${mobile} {
        height: 100vh;
    }

    @media ${mobileS} {
        height: 100vh;
    }

    @media ${mobileLanscape} {
        height: 90vh;
    }
`;

export const NumberText = styled.span`
    font-size: 10rem;
    padding: 0;

    animation: ${fadeIn} 1.5s ease-in-out;
`;

export const HomeMainText = styled.h1`
    text-align: center;
    font-size: 6rem;
    letter-spacing: 1rem;
    font-weight: 400;

    animation: ${moveInLeft} 1s ease-in-out;

    @media ${mobileS} {
        font-size: 5rem;
    }
`;

export const HomeSupText = styled.h1`
    font-size: 3rem;
    letter-spacing: 1.75rem;
    font-weight: 700;
    margin-bottom: 8rem;
    animation: ${moveInRight} 1s ease-in-out;

    @media ${mobile} {
        margin-bottom: 12rem;
    }
`;

export const CustomButtonContainer = styled(CustomButton)`
    animation: ${moveInBottom} 1s ease-in-out;
    font-size: 2rem;
`;
