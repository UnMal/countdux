import * as actionType from '../constants/countConstant';

const initialState = 0;

export default function countReducer(state=initialState, action) {
    switch (action.type) {
        case actionType.INIT_COUNTER:  
            return state = 0;
        case actionType.SET_COUNTER:
            return state = action.payload;  
        case actionType.INCREMENT_COUNTER:  
            return state += 1;
        case actionType.DECREMENT_COUNTER:
            return state -= 1;    
        default:
            return state;
    }
}