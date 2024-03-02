import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
//import SubmitPDF from './SubmitPDF'
import PasswordAndConfirmPasswordValidation from './PasswordAndConfirmPasswordValidation';
import '../Styles/BoatClub.css';

function Register() {
    const navigate = useNavigate(); // Hook for navigation
    
        const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ' ',
        streetAddress: '',
        city: '',
        state: '',
    });

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
};

const handleSubmit = async (e) => {
    e.preventDefault();

    // Combine streetAddress, city, and state into a single address
    const address = `${formData.streetAddress}, ${formData.city}, ${formData.state}`;

    try {
        const response = await axios.post('http://localhost:3001/registration', {
            ...formData,
            address: address,
        });

        console.log('Server response:', response.data);

        // If registration is success, redirect to account page
        navigate('/account');
    } catch (error) {
        console.error('Error submitting registration:', error);
    }
};

    return (
        <div className="signup template d-flex justify-content-center align-items-center bg-color">
            <div className='form_container_register p-5 rounded bg-white'>
                <div className='text-center fw-bolder'>
                    <h1><strong>Join Our Boat Club!</strong></h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <h3 className='text-center fw-bold'>Register</h3>

                    <div className='mb-2'>
                        <label htmlFor="fname">First Name</label>
                        <input type="text" value={formData.first_name} onChange={handleChange} name='first_name' placeholder='Enter First Name' className='form-control' required/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" value={formData.last_name} onChange={handleChange} name='last_name' placeholder='Enter Last Name' className='form-control' required/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" value={formData.email} onChange={handleChange} name='email' placeholder='Enter Email Name' className='form-control' required/>
                    </div>

                    <PasswordAndConfirmPasswordValidation />

                    <div className='mb-2'>
                        <label htmlFor="streetAddress">Street Address</label>
                        <input type="text" value={formData.streetAddress} onChange={handleChange} id="streetAddress" name="streetAddress" placeholder='Enter Street Address' className='form-control' required/><br/>

                        <label htmlFor="city">City</label>
                        <input type="text" value={formData.city} onChange={handleChange} id="city" name="city" placeholder='Enter City' className='form-control' required/><br/>

                        <label htmlFor="state">State/Provinence</label>
                        <input type="text" value={formData.state} onChange={handleChange} id="state" name="state" placeholder='Enter State' className='form-control' required/><br/>
                    </div>

                    <div className='d-grid mt-2'>
                        <button className='btn btn-primary' type='submit'>Register</button>
                    </div>  

                    <p className='text-end mt-2'>
                        Already Registered?<Link to="/login" className='ms-2'>Login </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;

/*
class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            first_name: '',
            last_name: '',
            address: '',
            email: '',
            password: ' ',
        };

        // Bind the event handlers
        this.handleSignIn = this.handleSignIn.bind(this);
    }

    // Function to handle form submission
    async handleSignIn() {
        try {
            // Combine street, city, and state into a single address
            const address = `${this.state.streetAddress}, ${this.state.city}, ${this.state.state}`;

            const formData = new FormData();
            formData.append('first_name', this.state.first_name);
            formData.append('last_name', this.state.last_name);
            formData.append('address', address);
            formData.append('email', this.state.email);
            formData.append('password', this.state.password);

            console.log(formData);

            const response = await axios.post('http://localhost:3001/registration', {
                method: 'POST',
                body: formData,
                Headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json(); // Parse JSON data
            // Handle the response from the server as needed
            console.log(data);

        } catch (error) {
            // Handle errors, e.g., display an error message to the user
            console.error('Error signing in: ', error.message);
        }
    }

    render() {
      return (
            <div className="signup template d-flex justify-content-center align-items-center bg-color">
                <div className='form_container_register p-5 rounded bg-white'>
                    <div className='text-center'>
                        <h1><strong>Join Our Boat Club!</strong></h1>
                    </div>
                    <form>
                        <h3 className='text-center'>Register</h3>

                        <div className='mb-2'>
                            <label htmlFor="fname">First Name</label>
                            <input type="text" 
                            value={this.state.first_name} onChange={(e) => this.setState({ first_name: e.target.value })}
                            placeholder='Enter First Name' className='form-control' required/>
                        </div>

                        <div className='mb-2'>
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" 
                            value={this.state.last_name} onChange={(e) => this.setState({ last_name: e.target.value })}
                            placeholder='Enter Last Name' className='form-control' required/>
                        </div>

                        <div className='mb-2'>
                            <label htmlFor="email">Email Address</label>
                            <input type="email" 
                            value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}
                            placeholder='Enter Email Name' className='form-control' required/>
                        </div>

                        <PasswordAndConfirmPasswordValidation />

                        <div className='mb-2'>
                            <label htmlFor="streetAddress">Street Address</label>
                            <input type="text" 
                            value={this.state.streetAddress} onChange={(e) => this.setState({ streetAddress: e.target.value })}
                            id="streetAddress" name="streetAddress" placeholder='Enter Street Address' className='form-control' require/><br/>

                            <label htmlFor="city">City</label>
                            <input type="text" 
                            value={this.state.city} onChange={(e) => this.setState({ city: e.target.value })}
                            id="city" name="city" placeholder='Enter City' className='form-control' require/><br/>

                            <label htmlFor="state">State/Provinence</label>
                            <input type="text" 
                            value={this.state.state} onChange={(e) => this.setState({ state: e.target.value })}
                            id="state" name="state" placeholder='Enter State' className='form-control' require/><br/>
                        </div>

                        <div className='d-grid mt-2'>
                            <button className='btn btn-primary' type="submit" onClick={this.handleSignIn}>Register</button>
                        </div>  

                        <p className='text-end mt-2'>
                            Already Registered?<Link to="/login" className='ms-2'>Login </Link>
                        </p>
                    </form>
                </div>
            </div>
      );
    };
};

export default Register;
*/