import sessionReducer from './session';
import { combineReducers } from 'redux';

export default combineReducers({
    session: sessionReducer
});