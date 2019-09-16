import { createSelector } from 'reselect';

const selectToggle = ({ toggle }) => toggle;

export const selectOnBackground = createSelector(
    [selectToggle],
    ({ onBackground }) => onBackground
);

export const selectOnText = createSelector(
    [selectToggle],
    ({ onText }) => onText
);
