import Link from "next/link";
import React from "react"
import { getBookings } from "../functions/getAllBookings";


const BookingList: React.FC = async () => {
const bookings = await getBookings()

  return (
    <div>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            <Link href={`${booking.id}`}>
                A Booking on {booking.date} starting at {booking.start_time}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;
