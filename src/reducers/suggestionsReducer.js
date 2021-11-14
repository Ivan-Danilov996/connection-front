import { CHECK_TARIFF, CLEAR_TARIFF, SET_SUGGESTIONS } from "../actions/actionTypes";

const initialState = {
    suggestions: [],
    chekedTariff: null,
    checkedProvider: null
}


const suggestionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_TARIFF : {
            const {id, providerId} = action.payload 
            return {
                ...state, chekedTariff: id, checkedProvider: providerId
            }
        }
        case SET_SUGGESTIONS: {
            const {suggestions} = action.payload 
            return {
                ...state, suggestions
            }
        }
        case CLEAR_TARIFF: {
            return initialState
        }
        default:
            return state;
    }
}


export default suggestionsReducer