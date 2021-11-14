import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import formReducer from "../reducers/formReducer";
import formDataReducer from "../reducers/formDataReducer";
import fetchReducer from "../reducers/fetchReducer";
import appReducer from "../reducers/appReducer";
import suggestionsReducer from "../reducers/suggestionsReducer";
import modalReducer from "../reducers/modalReducer";

const reducer = combineReducers({
    formReducer,
    formDataReducer,
    fetchReducer,
    appReducer,
    suggestionsReducer,
    modalReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk))); 
export default store;