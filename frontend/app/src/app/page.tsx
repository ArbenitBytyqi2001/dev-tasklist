import Link from "next/link";
import React from "react"
import getBooking from "./functions/getBooking";
import { getBookings } from "./functions/getAllBookings";
import BookingList from "./components/BookingsList";


const Home: React.FC = async () => {
  const bookings = await getBookings()


  return (
    <div>
      <h1>Current booking count: {bookings.length}</h1>
      <BookingList />
      <Link href="postBooking"> 
      <button>BOOK NOW</button>
      </Link>
    </div>
  );
};

export default Home;
