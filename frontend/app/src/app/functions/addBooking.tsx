import { Booking } from "../types";

export const addBooking = async (booking: Booking): Promise<Booking> => {
    try {
      const res = await fetch("http://host.docker.internal:5000/api/bookings", {
        cache: 'no-store', 
        mode: 'no-cors' ,
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(booking)
      });
  
      if (!res.ok) {
        throw new Error("Failed to add booking");
      }
  
      const text = await res.text(); 
      console.log("Response:", text);
  
      const newBooking = await res.json();
      return newBooking;
    } catch (error) {
      console.error("Error adding booking:", error);
      throw error;
    }
  };
  