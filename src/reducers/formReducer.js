import { INPUT_CHANGE, CLEAR_FORM } from "../actions/actionTypes";

const initialState = {
    city: '',
    fio: '',
    address: '',
    cause: '',
    comment: '',
    tel: '',
    telAdditional: '',
    causeClose: ''
}


const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_CHANGE: {
            const value = action.payload
            return { ...state, ...value}
        }
        case CLEAR_FORM: {
            return initialState
        }
        default:
            return state;
    }
}


export default formReducer