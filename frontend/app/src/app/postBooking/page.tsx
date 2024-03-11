"use client"
import React, { useState } from "react";

const PostBooking: React.FC = () => {
  const [formData, setFormData] = useState({
    service: "",
    doctor_name: "",
    start_time: "",
    end_time: "",
    date: ""
  });


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await fetch("http://host.docker.internal:5000/api/bookings", {
        cache: 'no-store',
        mode: 'no-cors',
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error("Failed to submit booking");
      }

      console.log("Booking submitted successfully", formData);
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto my-2">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-2">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="service">
            Service:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="service"
              type="text"
              name="service"
              value={formData.service}
              onChange={handleChange}
              placeholder="Service"
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="doctor_name">
            Doctor Name:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="doctor_name"
              type="text"
              name="doctor_name"
              value={formData.doctor_name}
              onChange={handleChange}
              placeholder="Doctor Name"
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="start_time">
            Start Time:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="start_time"
              type="time"
              name="start_time"
              value={formData.start_time}
              onChange={handleChange}
              placeholder="Start Time"
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="end_time">
            End Time:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="end_time"
              type="time"
              name="end_time"
              value={formData.end_time}
              onChange={handleChange}
              placeholder="End Time"
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Date:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostBooking;
