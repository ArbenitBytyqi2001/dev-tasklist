import Link from "next/link";
import React from "react";
import { getBookings } from "../functions/getAllBookings";

const BookingList = async () => {
  const bookings = await getBookings();

  return (
    <div className="booking-list-container">
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id} className="booking-item">
            <Link href={`${booking.id}`}>
              <p className="booking-link text-white border border-white px-2 py-1 inline-block my-2">
                A Booking on {booking.date} starting at {booking.start_time}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;
