import styled, { css } from 'styled-components';

const vanNghePage = css`
    display: grid;
    grid-template-rows: min-content 40rem max-content 30rem;
    grid-template-areas:
        'pic'
        'sp'
        'video'
        'sp2';
    div:nth-child(2) {
        grid-area: pic;
    }

    div:nth-child(3) {
        grid-area: video;
    }
`;

const otherPages = css`
    display: block;
`;

const getPage = ({ isVanNghe }) => {
    return isVanNghe ? `${vanNghePage}` : `${otherPages}`;
};

export const PictureDeviceContainer = styled.div`
    ${getPage}
`;
