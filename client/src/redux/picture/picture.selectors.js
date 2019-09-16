import { createSelector } from 'reselect';

const selectPicture = ({ picture }) => picture;

export const selectIsFetching = createSelector(
    [selectPicture],
    ({ isFetching }) => isFetching
);

export const selectImages = createSelector(
    [selectPicture],
    ({ images }) => images
);

export const selectIsVeChai = createSelector(
    [selectPicture],
    ({ isVeChai }) => isVeChai
);

export const selectIsFetchingDeck = createSelector(
    [selectPicture],
    ({ picture }) => !!picture
);
