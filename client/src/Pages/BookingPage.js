import React, { useState } from 'react';
import DatePicker from 'react-datepicker'
import Select from 'react-select';

import YachtImageSlider from '../Components/YachtImageSlider';
import PontoonImageSlider from '../Components/PontoonImageSlider';
import JetboatImageSlider from '../Components/JetboatImageSlider';
import { YachtData, PontoonData, JetboatData } from '../Assets/SliderData';


import "react-datepicker/dist/react-datepicker.module.css";
import '../Styles/BoatClub.css';
import axios from 'axios';


const boatOptions = [
    { value: 'Nauti_Bouy' , label: 'Nauti Bouy' },
    { value: 'Ship_Faced' , label: 'Ship Faced' },
    { value: 'Aquaholic' , label: 'Aquaholic' },
];

const BookingPage = () => {

    const [selectedOption, setSelectedOption] = useState(null);


    const [bookingDate, setBookingDate] = useState(new Date());

    const handleBooking = async (req, res) => {
        /*
        if (req.session && req.session.member) {
            const member_id = req.session.member.member_id; // Get member_id from session
        }
        console.loge('Member ID:', member_id);
        */

        const boat_id = selectedOption ? selectedOption.value : null;

        try {
            const response = await axios.post('http://localhost:3001/booking', {
                //member_id,
                boat_id,
                booking_date: bookingDate.toISOString().split('T')[0], // Format the date as 'YYYY-MM-DD'
            });

            console.log('Booking successful:', response.data);
        } catch (error) {
            console.error('Error making booking:', error);
        }
    };

    return (
        <div>
            <div className='d-incline-flex' >
                <div className='mt-4 col-12 col-sm-6 col-lg-8'>
                <h3>Select a boat</h3>
                <Select className='select-size'
                defaultValue={selectedOption} onChange={setSelectedOption} options={boatOptions} />
                </div>

                <div className='mt-3 col-6 col-lg-4'>
                <h3>Select a date</h3>
                <DatePicker className='datepicker-margin'
                selected={bookingDate} onChange={(date) => setBookingDate(date)}></DatePicker>
                </div>
                <div className='bookbtn-margin mt-3'>
                    <button className='btn btn-primary' type='book' onClick={handleBooking}>Book Now</button>
                </div>  
            </div><hr />


            <div><h2><strong>Available Boats to choose from:</strong></h2></div>
            <div>
                <h3 align='center'><strong>Nauti Bouy</strong></h3>
                <YachtImageSlider slides={YachtData} />
            </div><hr/>

            <div>
                <h3 align='center'><strong>Ship Faced</strong></h3>
                <PontoonImageSlider slides={PontoonData} />
            </div><hr/>

            <div>
                <h3 align='center'><strong>Aquaholic</strong></h3>
                <JetboatImageSlider slides={JetboatData} />
            </div>
        </div>

    );
};

export default BookingPage;