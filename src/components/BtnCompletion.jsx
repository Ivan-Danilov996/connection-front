import React from 'react'
import { useDispatch } from 'react-redux'
import { setActiveModal } from '../actions/actionCreators'

const BtnCompletion = () => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(setActiveModal(true))
    }
    return (
        <button onClick={handleClick} className="btn-completion">Завершить заявку</button>
    )
}

export default BtnCompletion
