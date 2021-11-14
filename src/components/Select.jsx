import React from 'react'

const Select = ({data, handleChange, name, value}) => {

    const options = data.map(({id, name}) => <option key={id} value={id}>{name}</option>)

    const setName = (name) => {
        if(name === 'city') {
            return 'Выберите город'
        } else if(name === 'cause') {
            return 'Выберите причину звонка'
        } else {
            return 'Выберите причину завершения заявки'
        }
    }
    
    return (
        <select id={name} name={name} required value={value} onChange={handleChange}>
            <option disabled>{setName(name)}</option>
            {options}
        </select>
    )
}

export default Select
