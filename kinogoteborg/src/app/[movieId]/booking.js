import React, { useState } from 'react';

export default function BookingModal() {
    const [bookingState, setBookingState] = useState('intro');

    switch(bookingState) {
        case 'intro':
            return (
                <div>
                    <h2>Welcome to our booking system!</h2>
                    <button onClick={() => setBookingState('bookingForm')}>Book Now</button>
                </div>
            );
        case 'bookingForm':
            return (
                <div>
                    <h2>Booking Form</h2>
                    {/* Add your booking form here */}
                    <button onClick={() => setBookingState('confirmation')}>Confirm Booking</button>
                    <button onClick={() => setBookingState('intro')}>Cancel</button>
                </div>
            );
        case 'confirmation':
            return (
                <div>
                    <h2>Confirmation</h2>
                    <p>Your booking has been confirmed!</p>
                    <button onClick={() => setBookingState('intro')}>Close</button>
                </div>
            );
        default:
            return null;
    }
}
