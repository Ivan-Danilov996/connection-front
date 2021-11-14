import { FETCH_REQUEST, FETCH_FAILURE, FETCH_SUCCESS } from "../actions/actionTypes";

const initialState = {
    loading: true,
    error: false,
}


const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case FETCH_FAILURE: {
            return {
                ...state,
                loading: false,
                error: true
            }
        } 
        case FETCH_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false
            }
        }
        default:
            return state;
    }
}


export default fetchReducer