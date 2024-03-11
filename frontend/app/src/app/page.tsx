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
      <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">BOOK NOW</button>
      </Link>
    </div>
  );
};

export default Home;
