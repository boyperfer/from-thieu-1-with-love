import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 1001;
    /* width: 100vw; */
    top: 1rem;
    left: 1rem;
    backface-visibility: hidden;
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100vw;
`;
