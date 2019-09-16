import { createSelector } from 'reselect';

const selectVideoT1 = ({ video }) => video;

export const selectIsFetchingVideo = createSelector(
    [selectVideoT1],
    ({ isFetching }) => isFetching
);

export const selectLinkVideo = createSelector(
    [selectVideoT1],
    ({ linkVideo }) => linkVideo
);
