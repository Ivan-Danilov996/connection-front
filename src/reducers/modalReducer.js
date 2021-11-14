import {
    SET_ACTIVE_MODAL
} from '../actions/actionTypes'

const initialState = { active: false}

export default function modalReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE_MODAL: {
            const {active} = action.payload
            return {...state, active}
        }
        default:
            return state;
    }
}