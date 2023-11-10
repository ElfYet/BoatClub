import React from 'react'
import { Link } from 'react-router-dom'
import { Component } from 'react'
//import SubmitPDF from './SubmitPDF'
import PasswordAndConfirmPasswordValidation from './PasswordAndConfirmPasswordValidation'
import '../Styles/FormContainer.css'

//Fix the form fitment on the screen
class Register extends Component {
    render() {
      return (
            <div className="signup template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary">
                <div className='form_container_register p-5 rounded bg-white'>
                    <div className='text-center'>
                        <h1><strong>Join Our Boat Club!</strong></h1>
                    </div>
                    <form>
                        <h3 className='text-center'>Register</h3>

                        <div className='mb-2'>
                            <label htmlFor="fname">First Name</label>
                            <input type="text" placeholder='Enter First Name' className='form-control' required/>
                        </div>

                        <div className='mb-2'>
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" placeholder='Enter Last Name' className='form-control' required/>
                        </div>

                        <div className='mb-2'>
                            <label htmlFor="email">Email Address</label>
                            <input type="email" placeholder='Enter Email Name' className='form-control' required/>
                        </div>

                        <PasswordAndConfirmPasswordValidation />

                        <div className='mb-2'>
                            <label htmlFor="streetAddress">Street Address</label>
                            <input type="text" id="streetAddress" name="streetAddress" className='form-control' require/><br/>

                            <label htmlFor="city">City</label>
                            <input type="text" id="city" name="city" className='form-control' require/><br/>

                            <label htmlFor="state">State/Provinence</label>
                            <input type="text" id="state" name="state" className='form-control' require/><br/>
                        </div>

                        <div className='mb-2'>
                            <label htmlFor="pdfFile">Attach <strong>PDF</strong> of <strong>Boating Certificate</strong></label>
                            <input type="file" id="pdfFile" name='pdfFile' accept=".pdf" className='form-control'/>
                            <button type="btn btn-secondary" /* onclick={SubmitPDF()} */>Submit</button>
                        </div>

                        <div className='d-grid mt-2'>
                            <button className='btn btn-primary'>Register</button>
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