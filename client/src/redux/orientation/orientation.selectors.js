import { createSelector } from 'reselect';

const selectOrientation = ({ orientation }) => orientation;

export const selectIsLandscape = createSelector(
    [selectOrientation],
    ({ isLandscape }) => isLandscape
);
