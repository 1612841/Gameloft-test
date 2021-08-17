import React, { useState } from 'react';
import './Form.css';

function Form () {

    const [values, setValues] = useState({
        name: '',
        email: '',
        country: '',
        platform: '',
        confirm: false,
        agreeReceive: false,
        selected: ''

    })

    const submitForm =(e) => {
        alert('Current State is:' + JSON.stringify(values));
        e.preventDefault();
        
    };

    const handleChange = (event) => {
        var {name, value} = event.target;
            setValues({
                ...values,
                [name]: value
            });
    }
    return (
        <> 
            <form onSubmit={submitForm} className='forms'>
            <h1>Stay in the Know!</h1>
            <p>Don't get left behind!</p>
                <input
                    placeholder='Name'
                    type="text"
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                />
                <input
                    placeholder='Email'
                    type="email"
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                />
                <select
                    value={values.country}
                    onChange={handleChange}
                    name='country'>
                    <option value="France" name='France'>France</option>
                    <option value="Vietnam" name='Vietnam'>Viet Nam</option>
                    <option value="Finland" name='Finland'>Finland</option>
                </select>
                <select
                    value={values.platform}
                    onChange={handleChange}
                    name='platform'>
                    <option >-- Choose --</option>
                    <option value="Windows" name='Windows'>Windows</option>
                    <option value="MacOs" name='MacOs'>MacOs</option>
                    <option value="IOS" name='IOS'>IOS</option>
                </select>
                <div className='checkconfirm d-flex'>
                    <input type='checkbox' value={!values.confirm} name='confirm' id='check' onChange={handleChange}/> 
                    <p>By signing up, i confirm that i am 13 years old or older, i agree to the Gameloft Terms and Conditions</p>
                </div>
                <div className='checkreceive d-flex'>
                    <input type='checkbox' value={!values.agreeReceive} name='agreeReceive' id='check' onChange={handleChange} /> 
                    <p >I agree to receive promotional offers relating to all Gameloft games and services</p>
                </div>
                <button type="submit" >
                    Button
                </button>
            </form>
        </>
    );
}

export default Form;
