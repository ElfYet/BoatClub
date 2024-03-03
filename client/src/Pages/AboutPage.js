import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <h1 className='text-center'>About Page</h1> <br />
            <h3 className='px-5'>Project Description</h3>
            <p className='px-5'>
                This project utilizes REACTJS, CSS and Bootstrap for the client-side, while using Express and NodeJS for the server-side.
                The overall purpose of this project was to learn the art of Full Stack Development with the help of the CEN 4930 course  
                offered at Florida Gulf Coast University.
            </p>
            <h3 className='px-5'>Website Purpose</h3>
            <p className='px-5'>
                The idea behind the website is to offer a boat club membership that allows members to register by providing their
                first and last name, email, address, password, pdf copy of boating certificate, as well as a payment method for a monthly
                subscription. The registered members can login to their account and go into a booking page where
                they can book dates for a boat of their choice. Within the account page, the member will see a display showing 
                what boats they have already booked and the corresponding dates. The members will have the additional ability to then 
                go back and change the date for the booking or fully cancel it. 
                <br/>
                The website will give the boat club owner and staff a separate 
                admin account that has the added functionalities of checking all bookings each user has made, as well as the option for 
                adding or deleting available boats.
                <br/>
                Note that not all project requirements are currently implemented, features will be added over time.
            </p>
        </div>
    );
};

export default AboutPage;