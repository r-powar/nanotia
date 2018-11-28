import initialState from './initialState';
import  * as types from '../actions/types';

const simpleReducer = (state= initialState, action) => {
    switch (action.type) {
        case types.FRONT_PAGE: {

            const posts =  action.payload.map((val) => {
                return Object.assign({}, val);
            });

            return Object.assign({}, state, {posts});
        }
        default:
            return state;
    }
};

export default simpleReducer;