import ToggleActionTypes from './toggle-hidden.types';

const INITIAL_STATE = {
    onText: false,
    onBackground: false
};

const toggleReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ToggleActionTypes.TOGGLE_TEXT:
            return {
                ...state,
                onText: !state.onText
            };
        case ToggleActionTypes.TOGGLE_BACKGROUND:
            return {
                ...state,
                onBackground: !state.onBackground
            };
        default:
            return state;
    }
};

export default toggleReducer;
