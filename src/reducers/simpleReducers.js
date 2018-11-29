import initialState from './initialState';
import * as types from '../actions/types';

const simpleReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FRONT_PAGE: {

            const posts = action.payload.map((val) => {
                return Object.assign({}, val);
            });

            return Object.assign({}, state, {posts});
        }
        case types.SINGLE_POST: {
            let singlePost = {};
            let articleLimit = action.articleLimit;
            let response = action.payload;

            singlePost.title = response.title;
            singlePost.content = response.content;
            singlePost.author = response.author.display_name;
            singlePost.readTime = response.read_time;

            return Object.assign({}, state, {singlePost, articleLimit});
        }
        default:
            return state;
    }
};

export default simpleReducer;