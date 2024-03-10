export default async function getBooking(id) {
    const res = await fetch(`http://host.docker.internal:5000/api/bookings/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch booking');
    }
    return res.json();
}