import * as types from '../actions/types';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
    return type.slice(-8) === '_SUCCESS';
}

export default function  apiStatus(state = initialState.apiCallInProgress, actions) {
    if(actions.type === types.BEGIN_API_CALL){
        return state + 1;
    }else if(actionTypeEndsInSuccess(actions.type)){
        return state - 1;
    }

    return state;
}