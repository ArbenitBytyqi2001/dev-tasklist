import Link from "next/link";
import React from "react"
import getBooking from "./functions/getBooking";

async function getBookings() {
  const res = await fetch('http://host.docker.internal:5000/api/bookings', { cache: 'no-store', mode: 'no-cors' })
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Home: React.FC = async () => {

  const bookings = await getBookings()


  return (
    <div>
      <h1>Current booking count: {bookings.length}</h1>
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

export default Home;
