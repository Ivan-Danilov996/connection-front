import React from 'react'
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAppealForm, inputChange } from '../actions/actionCreators';
import Select from './Select';

const Form = ({handleChange}) => {

    const dispatch = useDispatch()



    const { city, fio, address, cause, comment, tel, telAdditional } = useSelector(state => state.formReducer)
    const { cities, causes } = useSelector(state => state.formDataReducer)

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = { city, fio, address, cause, comment, tel, telAdditional }
        dispatch(fetchAppealForm(data))
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__row">
                <label htmlFor="city" className="label">Город</label>
                <Select data={cities} handleChange={handleChange} name='city' value={city}/>
            </div>
            <div className="form__row">
                <label htmlFor="fio" className="label">ФИО</label>
                <input id="fio" name="fio" value={fio} required onChange={handleChange} />
            </div>
            <div className="form__row">
                <label htmlFor="address" className="label">Адрес</label>
                <input id="address" name="address" value={address} required onChange={handleChange} />
            </div>
            <div className="form__row">
                <label htmlFor="cause" className="label">Причина звонка</label>
                <Select data={causes} handleChange={handleChange} name='cause' value={cause}/>
            </div>
            <div className="form__row">
                <label htmlFor="comment" className="label">Комментарий к звонку</label>
                <textarea id="comment" name="comment" value={comment} onChange={handleChange}></textarea>
            </div>
            <div className="form__row">
                <label htmlFor="tel" className="label">Контактный номер телефона</label>
                <InputMask id="tel" name="tel" mask="+7(999) 999-99-99" value={tel} maskChar="_" required onChange={handleChange} />
            </div>
            <div className="form__row">
                <label htmlFor="telAdditional" className="label">Дополнительный номер телефона</label>
                <InputMask id="telAdditional" name="telAdditional" mask="+7(999) 999-99-99" value={telAdditional} maskChar="_" onChange={handleChange} />
            </div>
            <div className="form__row">
                <button type="submit" >Сохранить</button>
            </div>

        </form>
    )
}

export default Form
