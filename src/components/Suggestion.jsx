import React from 'react'
import Tariff from './Tariff'

const Suggestion = ({ id, provider, tariffs, chekedTariff, checkedProvider }) => {
    const tariffsList = tariffs.map(tariff => <Tariff key={tariff.id} {...tariff} chekedTariff={chekedTariff} checkedProvider={checkedProvider} providerId={id}/>)
    return (
        <div className="suggestion">
            <div className="suggestion__title"><h3>{provider}</h3></div>
            <div className="suggestion__tariffs suggestion-tariffs">
                <div className="suggestion-tariffs__title">
                    Тарифы
                </div>
                <div className="suggestion-tariffs__list">
                    {tariffsList}
                </div>
            </div>
        </div>
    )
}

export default Suggestion
