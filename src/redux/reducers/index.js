import { combineReducers } from "redux";
import courses from './courseReducer';
import authors from './authorReducer';
import apiCalls from './apiStatusReducer';

const rootReducers = combineReducers({
    courses,
    authors,
    apiCalls
});

export default rootReducers;

