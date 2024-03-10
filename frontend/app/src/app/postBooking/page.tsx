import { useState } from 'react';

  

export default function PostBooking() {

  return (
    <div>
      <form >
        <label>
          Service:
          <input type="text" name="service" required />
        </label>
        <label>
          Doctor Name:
          <input type="text" name="doctor_name" required />
        </label>
        <label>
          Start Time:
          <input type="text" name="start_time" required />
        </label>
        <label>
          End Time:
          <input type="text" name="end_time" required />
        </label>
        <label>
          Date:
          <input type="date" name="date" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
