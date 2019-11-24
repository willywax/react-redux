import * as authorApi from '../../api/authorApi';
import * as types from './types';
import { beginApiCall } from "./apiStatusAction";
export function loadAuthorsSuccessfully(authors){
    return {
        type: types.LOAD_AUTHORS_SUCCESS, authors
    }
}

export function loadAuthors(){
    return function(dispatch){
        dispatch(beginApiCall);
        return authorApi.getAuthors().then(authors=>{
            dispatch(loadAuthorsSuccessfully(authors));
        }).catch(error=>{
            throw error;
        })
    }
}