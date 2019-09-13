import styled from 'styled-components';

import NhathoS from '../../assets/NT/NTS.jpg';
import NhathoM from '../../assets/NT/NTM.jpg';

import mainStyle from '../../styles/main';

const {
    variables: { blackDark, blackLight, white },
    device: { mobile, mobileS }
} = mainStyle;

export const PortraitPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: linear-gradient(to right bottom, ${blackLight}cc, ${blackDark}cc),
        url(${NhathoM});
    background-repeat: no-repeat;
    height: 100vh;
    background-position: center;
    @media ${mobile}, ${mobileS} {
        background-image: linear-gradient(to right bottom, ${blackLight}cc, ${blackDark}cc),
            url(${NhathoS});
    }
`;

export const TextContainer = styled.div`
    display: flex;
    color: ${white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Martel Sans', sans-serif;
    height: 80vh;
`;

export const Text = styled.span`
    font-size: 4rem;
    text-align: center;
    line-height: 4;
`;
