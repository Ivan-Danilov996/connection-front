import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchClose, setActiveModal } from '../../actions/actionCreators'
import Select from '../Select'
import "./modal.scss"


const Modal = ({ handleChange }) => {
    const { active } = useSelector(state => state.modalReducer)
    const { causesClose, userId } = useSelector(state => state.formDataReducer)
    const { causeClose } = useSelector(state => state.formReducer)
    const dispatch = useDispatch()
    const handleClick = (e) => {
        if (e.target.classList.contains('modal') || e.target.classList.contains('modal__close')) {
            dispatch(setActiveModal(false))
        } 
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setActiveModal(false))
        dispatch(fetchClose(userId, causeClose))
    }
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={handleClick}>
            <div className={active ? 'modal__content active' : 'modal__content'}>
                <form onSubmit={handleSubmit} className="modal__form">
                    <div className="form__row">
                        <label htmlFor="cause" className="label">Выберите причину завершения заявки</label>
                        <Select data={causesClose} handleChange={handleChange} name='cause-close' value={causeClose} />
                    </div>
                    <button type="submit" className="form__submit">Подтвердить</button>
                </form>
            </div>
        </div>
    )
}

export default Modal