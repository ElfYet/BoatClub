import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/FormContainer.css'


// Add alert message when email or password is wrong***
function Login() {
    return (
        <div className="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary">
            <div className='form_container_login p-5 rounded bg-white'>
                <form>
                    <h3 className='text-center'>Log In</h3>
                    <div className='mb-2'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Enter Email' className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter Password' className='form-control'/>
                    </div>
                    {/*
                    <div>
                        <input type="checkbox" className='custom-control custom-checkbox form-check-inline' id="check"/>
                        <label htmlFor="Check" className='custom-input-label ms-2'>Remember me</label>
                    </div>
                    */}
                    <div className='d-grid'>
                        <button className='btn btn-primary'>Login</button>
                    </div>
                    <p className='text-end mt-2'>
                        Forgot <a href="">Password?</a><Link to="/registration" className='ms-2'>Register </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;


