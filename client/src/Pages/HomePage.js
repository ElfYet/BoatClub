import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
      return (
            <div>
                <h1 className='text-center'>Welcome to the Home Page!</h1> <br />
                <div className='text-center'>
                    <h3>Traversal Links</h3>
                    <Link to="/account">
                        <button>Account</button>
                    </Link>
                    <Link to="/booking">
                        <button>Booking</button>
                    </Link>
                </div>
                {/* Home page content */}
            </div>
        );
    };
};

export default HomePage;

/*
            <div>
                <p className='text-end mt-2'>
                    <Link to="/account" className='ms-2'>Acount Page</Link>
                </p>
            </div>
            <div>
                <p className='text-end mt-2'>
                    <Link to="/booking" className='ms-2'>Booking Page</Link>
                </p>
            </div>
*/