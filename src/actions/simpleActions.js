import * as types from './types';
import api from '../endpoints/endpoints';

export function frontPageItems(){
    return (dispatch) => {
        //make a request to the API
        fetch(api.frontPage).then((response) => {
            return response.json()
        }).then((data) => {
            dispatch({
                type: types.FRONT_PAGE,
                payload: data.posts
            })
        })
    }
}

export function singlePostItem(value) {
    return (dispatch) => {
        fetch(api.singlePost + value).then((response) => {
            return response.json();
        }).then((data) => {
            dispatch({
                type: types.SINGLE_POST,
                payload: data.posts[0]
            })
        })
    }
}

