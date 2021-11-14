import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProvider } from '../actions/actionCreators'
import Suggestion from './Suggestion'

const Suggestions = () => {

    const dispatch = useDispatch()
    const { suggestions, chekedTariff, checkedProvider } = useSelector(state => state.suggestionsReducer)
    const { userId } = useSelector(state => state.formDataReducer)

    const suggestionsList = suggestions.map(suggestion => <Suggestion key={suggestion.id} {...suggestion} chekedTariff={chekedTariff} checkedProvider={checkedProvider} />)

    const handleClick = () => {
        dispatch(fetchProvider({provider: checkedProvider, tariff: chekedTariff, userId}))
    }
    return (
        <>
            <div className='suggestions'>
                <div className="suggestions__list">
                    {suggestionsList}
                </div>
            </div>
            {
                checkedProvider ?
                    <button className='suggestions__btn' onClick={handleClick}>Подтвердить</button> :
                    <button className='suggestions__btn' disabled>Подтвердить</button>
            }

        </>
    )
}

export default Suggestions
