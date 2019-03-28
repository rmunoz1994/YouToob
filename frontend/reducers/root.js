import sessionReducer from './session';
import entitiesReducer from './entities';
import errorsReducer from './errors';
import { combineReducers } from 'redux';

export default combineReducers({
    // entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer
});