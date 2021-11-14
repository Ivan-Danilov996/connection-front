import {
    INPUT_CHANGE,
    FETCH_APPEAL_FORM_REQUEST,
    FETCH_APPEAL_FORM_SUCCESS,
    FETCH_APPEAL_FORM_FAILURE,
    FETCH_FORM_DATA_SUCCESS,
    FETCH_REQUEST,
    FETCH_FAILURE,
    FETCH_SUCCESS,
    CHANGE_VIEW,
    CHECK_TARIFF,
    SET_ACTIVE_MODAL,
    CLEAR_FORM,
    CLEAR_TARIFF,
    SET_USER_ID,
    SET_SUGGESTIONS
} from './actionTypes'

export const setUserId = (userId) => (
    {
        type: SET_USER_ID, payload: { userId }
    }
)

export const setSuggestions = (suggestions) => (
    {
        type: SET_SUGGESTIONS, payload: { suggestions }
    }
)

export const clearForm = () => (
    {
        type: CLEAR_FORM
    }
)

export const clearTariff = () => (
    {
        type: CLEAR_TARIFF
    }
)

export const setActiveModal = (active) => (
    {
        type: SET_ACTIVE_MODAL, payload: { active }
    }
)


export const checkTariff = (id, providerId) => (
    {
        type: CHECK_TARIFF, payload: {
            id, providerId
        }
    }
)

export const inputChange = (name, value) => (
    {
        type: INPUT_CHANGE, payload: {
            [name]: value
        }
    }
)

export const changeView = (payload) => (
    {
        type: CHANGE_VIEW, payload
    }
)

export const fetchAppealFormRequest = () => (
    {
        type: FETCH_APPEAL_FORM_REQUEST
    }
)

export const fetchAppealFormSuccess = () => (
    {
        type: FETCH_APPEAL_FORM_SUCCESS
    }
)

export const fetchAppealFormFailure = () => (
    {
        type: FETCH_APPEAL_FORM_FAILURE
    }
)

export const fetchRequest = () => (
    {
        type: FETCH_REQUEST
    }
)

export const fetchFormDataSuccess = (data) => (
    {
        type: FETCH_FORM_DATA_SUCCESS,
        payload: data
    }
)

export const fetchFailure = () => (
    {
        type: FETCH_FAILURE
    }
)

export const fetchSuccess = () => (
    {
        type: FETCH_SUCCESS
    }
)

const url = 'http://connection/'

export const fetchFormData = () => async dispatch => {
    dispatch(fetchRequest());
    try {
        const response = await fetch(url)
        const result = await response.json();
        dispatch(fetchFormDataSuccess(result));
        dispatch(inputChange('city', result.cities[0].id));
        dispatch(inputChange('cause', result.causes[0].id));
        dispatch(fetchSuccess());
    } catch (e) {
        dispatch(fetchFailure());
    }
}

export const fetchClose = (id, causeClose) => async dispatch => {
    dispatch(fetchRequest());
    try {
        const response = await fetch(`${url}close?id=${id}&causeClose=${causeClose}`)
        dispatch(changeView('form'))
        dispatch(clearForm())
        dispatch(clearTariff())
        dispatch(fetchSuccess());
    } catch (e) {
        dispatch(fetchFailure());
    }
}

export const fetchСonfirmation = (id) => async dispatch => {
    dispatch(fetchRequest());
    try {
        const response = await fetch(`${url}confirmation?id=${id}`)
        dispatch(changeView('form'))
        dispatch(clearForm())
        dispatch(clearTariff())
        dispatch(fetchSuccess());
    } catch (e) {
        dispatch(fetchFailure());
    }
}

export const fetchProvider = (data) => async dispatch => {
    dispatch(fetchRequest());
    try {
        const response = await fetch(`${url}provider`, {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            body: JSON.stringify(data)
        })
        // const result = await response.json();
        dispatch(changeView('info'))
        dispatch(fetchSuccess());
    } catch (e) {
        dispatch(fetchFailure());
    }
}

export const fetchAppealForm = (data) => async dispatch => {

    //dispatch(fetchAppealFormRequest());
    dispatch(fetchRequest());
    try {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            body: JSON.stringify(data)
        })
        const result = await response.json();

        const userId = result.userId
        const suggestions = Object.values(result.suggestions)

        suggestions.forEach(sug => {
            const tariffs = Object.values(sug.tariffs)
            sug.tariffs = tariffs
            sug.tariffs.forEach(tariff => {
                const services = Object.values(tariff.services)
                tariff.services = services
            })
        })

        dispatch(setUserId(userId));
        dispatch(setSuggestions(suggestions));
        dispatch(changeView('suggestions'))
        dispatch(fetchSuccess());
    } catch (e) {
        dispatch(fetchFailure());
    }
}