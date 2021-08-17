import React from 'react';
import './Register.css';
import Form from './Form';

function Register() {
    return (
        <div className='register d-flex'>
            <div className='photo' >
                <img src='/images/union.png' alt='union' />
            </div>
            <div className='form' >
                <Form />
            </div>
        </div>
    )
}

export default Register;
