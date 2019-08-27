import React from 'react';
import Button from '../shared/Button';

const Countries = (props) => {
    const displayCountries = () => {
        console.log(props)
        props.history.push('/countries')
    }
    return (
        <div className="content">
            <p className="text">Want to know more about countries in the world?</p>
            <Button text='View Countries' onClick={() => {displayCountries()}}/>
        </div>
    )
}

export default Countries;