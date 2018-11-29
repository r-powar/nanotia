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

        //check the storage capacity & set the limit accordingly
        const storageLen = localStorage.length;
        let limit = false;
        if(storageLen > 4){
          limit = true;
        }


        let article = JSON.parse(localStorage.getItem(value));

        //set storage value for article
        if(!article){
            localStorage.setItem(value, "1")
        }

        fetch(api.singlePost + value).then((response) => {
            return response.json();
        }).then((data) => {
            dispatch({
                type: types.SINGLE_POST,
                payload: data.posts[0],
                articleLimit: limit
            })
        })
    }
}

