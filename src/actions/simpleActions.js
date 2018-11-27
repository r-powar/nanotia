
export const simpleAction =  () => dispatch => {
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: 'a simple action'
    });
};