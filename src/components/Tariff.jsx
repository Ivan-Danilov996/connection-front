import React from 'react'
import { useDispatch } from 'react-redux'
import { checkTariff } from '../actions/actionCreators'

const Tariff = ({id, name, price, services, chekedTariff, checkedProvider, providerId }) => {
    const servicesList = services.map((service, i) => <li key={i}>{service}</li>)
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(checkTariff(id, providerId))
    }
    return (
        <div className="suggestion-tariffs__item tariff">
            <div className="tariff__name">{name}</div>
            <div className="tariff__price">Цена: {price} р</div>
            <div className="services">
                <ul className="services__list">
                    {servicesList}
                </ul>
            </div>
            {chekedTariff === id? <button disabled>Выбрано</button> : <button onClick={handleClick}>Подключить</button>}
            
        </div>
    )
}

export default Tariff
