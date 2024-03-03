import React, { useState } from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/BoatClub.css'


// Add alert message when email or password is wrong***
function Login() {
    const navigate = useNavigate(); // Hook for navigation

    const [formData, setFormData] = useState ({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData ({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/login', {
                ...formData,
            });
            console.log('Login response:', response.data);

            // If login is success, redirect to account page
            navigate('/account');
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="login template d-flex justify-content-center align-items-center bg-color">
            <div className='form_container_login p-5 rounded bg-light'>
                <form onSubmit={handleLogin}>
                    <h3 className='text-center fw-bold'>Log In</h3>

                    <div className='mb-2'>
                        <label htmlFor="email">Email</label>
                        <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Enter Email' className='form-control'/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="password">Password</label>
                        <input type='password' name='password' value={formData.password} onChange={handleChange} placeholder='Enter Password' className='form-control'/>
                    </div>

                    <div className='d-grid'>
                        <button className='btn btn-primary'>Login</button>
                    </div>

                    <p className='text-end mt-2'>
                        Forgot Password?<Link to="/registration" className='ms-2'>Register </Link>
                    </p>

                </form>
            </div>
        </div>
    )
}

export default Login;


