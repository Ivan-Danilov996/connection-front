import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchСonfirmation } from '../actions/actionCreators'

const Сonfirmation = () => {
    const { suggestions, chekedTariff, checkedProvider } = useSelector(state => state.suggestionsReducer)
    const { city, fio, address, cause, comment, tel, telAdditional } = useSelector(state => state.formReducer)
    const provider = suggestions.find(suggestion => suggestion.id === checkedProvider)
    const { name, price, services } = provider.tariffs.find(tariff => tariff.id === chekedTariff)
    const { cities, causes, userId } = useSelector(state => state.formDataReducer)
    const cityName = cities.find(cityData => cityData.id === city)
    const causeName = causes.find(causeData => causeData.id === cause)

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(fetchСonfirmation(userId))
    }

    return (
        <div className="confirmation">
            <h1>Подтверждение заявки</h1>
            <div className="confirmation__fio">ФИО: {fio}</div>
            <div className="confirmation__address">Адрес: {address}</div>
            <div className="confirmation__city">Город: {cityName.name}</div>
            <div className="confirmation__cause">Причина звонка: {causeName.name}</div>
            <div className="confirmation__comment">Комментарий: {comment}</div>
            <div className="confirmation__tel">Телефон: {tel}</div>
            <div className="confirmation__tel-additional">Доп. телефон: {telAdditional}</div>
            <div className="confirmation__provider">Провайдер: {provider.provider}</div>
            <div className="confirmation__tariff tariff">
                <div className="tariff__name">Тариф: {name}</div>
                <div className="tariff__price">Цена: {price}p</div>
                <div className="tariff__services services">
                    <div className="services__title">Сервисы</div>
                    <ul className="services__list">
                        {services.map((service, i) => <li key={i}>{service}</li>)}
                    </ul>
                </div>
            </div>
            <button onClick={handleClick} className="confirmation__btn">Подтвердить</button>
        </div>
    )
}

export default Сonfirmation
