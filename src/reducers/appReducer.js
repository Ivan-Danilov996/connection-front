import { CHANGE_VIEW } from "../actions/actionTypes";

const initialState = {
    currentView: 'form'
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_VIEW: {
            const view = action.payload
            return { ...state, currentView: view}
        }
        default:
            return state;
    }
}


export default appReducer