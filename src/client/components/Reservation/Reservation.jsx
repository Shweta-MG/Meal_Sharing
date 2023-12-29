import React, { useState } from 'react';
import './Reservation.css';

const Reservation = () => {

    const [formData, setFormData] = useState({
        guestNumber: '',
        date: '',
        name: '',
        phone: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const ReservationformSubmit = (event) => {
        event.preventDefault();
        const url = 'c';

        fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },z
            body: JSON.stringify(formData)
          })
            .then((response) => response.text())
            .then((data) => {
                console.log(data);

                showSuccessAlert();
                console.log('Form submitted successfully');

                setFormData({
                    guestNumber: '',
                    date: '',
                    name: '',
                    phone: '',
                    email: ''
                })
            })
            .catch((error) => {
              console.error('Error while submitting form', error);
            });
    }

    const showSuccessAlert = () => {
        window.alert('Reservation has been successfully created!');
    }





    return (  
        <div>
           
            <form action="post"
                className='Reservation_Form_Container'
                onSubmit={ReservationformSubmit}>
                <div>
                </div>
                    <label htmlFor="reservation">Book a table</label>
                    
                <input type="number"
                    name="reservation"
                    id="Number_Person"
                    placeholder='Number of Guest'
                    value={formData.guestNumber}
                    onChange={handleChange}
                />
                    
                <input type="date"
                    name="reservation"
                    id="date_booking"
                    placeholder='Date of Booking'
                    value={formData.date} onChange={handleChange}
                />
                    
                <input type="text"
                    name="reservation"
                    id="booking_Name"
                    placeholder='Your Name'
                    value={formData.name}
                    onChange={handleChange}
                />
                    
                <input type="text"
                    name="reservation"
                    id="booking_Phone"
                    placeholder='Contact Number'
                    value={formData.phone}
                    onChange={handleChange}
                />
                    
                <input type="text"
                    name="reservation"
                    id="booking_email"
                    placeholder='Email Address'
                    value={formData.email}
                    onChange={handleChange}
                /> 
                    
                <button type="submit" > Submit </button>
            </form>
        </div>
    );
}
 
export default Reservation;

