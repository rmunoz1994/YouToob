import { SHOW_SIDE_BAR } from '../actions/ui_actions';
import { combineReducers } from 'redux';
import modal from './modal_reducer';

const initialState = {
    sideBarOpen: false
};

const uiReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case SHOW_SIDE_BAR:
            return Object.assign({}, state, {
                sideBarOpen: true
            });
        default:
            return state;
    }
};

export default combineReducers({
    uiReducer,
    modal
});