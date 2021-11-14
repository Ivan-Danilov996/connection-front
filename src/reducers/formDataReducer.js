import { FETCH_FORM_DATA_SUCCESS, SET_USER_ID } from "../actions/actionTypes";

const initialState = {
    cities: [],
    causes: [],
    causesClose: [],
    userId: '',
}

const formDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FORM_DATA_SUCCESS: {
            const data = action.payload
            return {
                ...state,
                ...data
            }
        }
        case SET_USER_ID: {
            const { userId } = action.payload
            return {
                ...state,
                userId
            }
        }
        default:
            return state;
    }
}


export default formDataReducer