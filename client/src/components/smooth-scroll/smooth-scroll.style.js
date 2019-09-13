import styled from 'styled-components';
import { Link } from 'react-scroll';

import { ReactComponent as LogoArrowDown } from '../../assets/arrows/arrow-down.svg';
import { ReactComponent as LogoArrowUp } from '../../assets/arrows/arrow-up.svg';

export const SmoothScrollContainer = styled.div`
    display: flex;
    position: fixed;
    top: 1rem;
`;

export const ArrowContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100vw;
`;

export const LinkContainer = styled(Link)`
    list-style: none;
`;

export const ArrowDown = styled(LogoArrowDown)`
    width: 10rem;
    height: 10rem;
`;

export const ArrowUp = styled(LogoArrowUp)`
    width: 10rem;
    height: 10rem;
`;
