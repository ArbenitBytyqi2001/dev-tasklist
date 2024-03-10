import React from "react"
import getBooking from "../functions/getBooking";
import BackButton from "../components/BackButton";


export default async function BookingDetails({ params: { id } }) {
    try {
        console.log('id', id)
        const bookingData = await getBooking(id);
        console.log('this bookingdata', bookingData)
        return (
            <div>
                <h1>{`This Booking is with ${bookingData.doctor_name} For ${bookingData.service} and it ends on ${bookingData.end_time}`}</h1>
                <BackButton />
            </div>
        );
    } catch (error) {
        console.error('Error fetching booking:', error);
        return <div>Error: Failed to fetch booking</div>;
    }
}
