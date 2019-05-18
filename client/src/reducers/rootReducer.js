import { combineReducers } from "redux";
import { surveys } from './surveys';
import surveyInfo from './info';

const rootReducers = combineReducers({
    surveys,
    surveyInfo
});

export default rootReducers;