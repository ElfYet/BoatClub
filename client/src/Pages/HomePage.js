import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/BoatClub.css'

function HomePage() {
      return (
        <div className='bg bg-light' style={{backgroundImage: `require(${'../Assets/Boat04'})`}}>
            <div className='text-center'>
                <h1 className='mt-2 text-uppercase fw-bolder'>boating without owning</h1>
                <h2 className='text-uppercase fw-bold'>only at skyline boat club</h2>
                <Link to='/registration'>
                    <button className='btn btn-primary mt-4'>Start Boating Today</button>
                </Link>
            </div><br />
            <br />
            <div>
                <h3 className='text-center text-uppercase fw-bold'>benefits that you can enjoy:</h3>
                <div className='container'>
                    <div className='row fs-5'>
                        <div className='px-5 col-md-6 mt-3'>
                            <ul>
                            <li><strong>No Dock Fees </strong>or Insurance</li>
                            <li><strong>No Cleaning </strong>or Maintenance</li>
                            <li><strong>Unlimited </strong>Use</li>
                            </ul>
                        </div>

                        <div className='px-5 col-md-6 mt-3'>
                            <ul>
                            <li>Boats are <strong>Fueled and Ready</strong></li>
                            <li>Full <strong>Dock Staff</strong> to Assist You</li>
                            <li>Pick <strong>Any</strong> Kind of Boat</li>
                            </ul>
                        </div>
                    </div><br />
                    </div>
                </div>


            <div><h3 className='px-5 text-uppercase text-center fw-bold'>how skyline boating works... in 3 easy steps</h3></div>
            <div className='px-5 container'>
                <div className='row'>
                    <div className='col-md-4 mt-4 border rounded border-primary'>
                    <h5 className='text-uppercase text-center fw-bold'>step 1: book your boat</h5><hr className='d-md-none' />
                    <div className='px-5'><img src={require('../Assets/Reservation01.jpeg')} alt='Booking Boat' className='img-fluid mt-2'></img></div>
                    <p className='mt-2 fs-6'>Pick your day and boat. Submit the reservation. </p>
                    </div>

                    <div className='col-md-4 mt-4 border rounded border-primary'>
                    <h5 className='text-uppercase text-center fw-bold'>step 2: pick up your boat</h5><hr className='d-md-none' />
                    <div className='px-5'><img src={require('../Assets/Boat04.jpeg')} alt='Choosing Boat' className='img-fluid mt-2'></img></div>
                    <p className='mt-2 fs-6'>Your boat is in the water when you arrive, filled up with gas and ready to go.</p>
                    </div>

                    <div className='col-md-4 mt-4 border rounded border-primary'>
                    <h5 className='text-uppercase text-center fw-bold'>step 3: enjoy your boat</h5><hr className='d-md-none' />
                    <div className='px-5'><img src={require('../Assets/Boat05.jpeg')} alt='Enjoying Boat' className='img-fluid mt-2'></img></div>
                    <p className='mt-2 fs-6'>When you're done, just bring the boat back to the club. we'll take it from there.</p>
                    </div>
                </div>
            </div><br />

            <div><h3 className='px-5 text-uppercase text-center fw-bold'>boat as often as you like, when and where you want!</h3></div>
            <div><h3 className='px-5 text-uppercase text-center mt-3'>don't wait, register today!</h3></div>
            <div className='text-center mb-5'>
            <Link to='/registration'>
                <button className='btn btn-primary mt-3'>Start Boating Today</button>
            </Link>
            </div>
        </div>
    );
};

export default HomePage;
