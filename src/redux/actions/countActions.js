import * as actionType from '../constants/countConstant';

export const initCounter = () => (dispatch)=>{
    if (localStorage.getItem("count")===null) {        
        localStorage.setItem("count", 0);
        dispatch({
            type: actionType.INIT_COUNTER,
        });
    } else {
        dispatch({
            type: actionType.SET_COUNTER,
            payload: parseInt(localStorage.getItem("count"))
        });
    }
}

export const incrementCounter = () => (dispatch) => {
    let count = parseInt(localStorage.getItem("count"));
    localStorage.setItem("count", count+1);
    dispatch({
        type: actionType.INCREMENT_COUNTER,
    });
}

export const decrementCounter = () => (dispatch) => {
    let count = parseInt(localStorage.getItem("count"));
    localStorage.setItem("count", count-1);
    dispatch({
        type: actionType.DECREMENT_COUNTER,
    });
}