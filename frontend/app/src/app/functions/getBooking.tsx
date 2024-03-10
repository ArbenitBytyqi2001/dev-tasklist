export default async function getBooking(id) {
    console.log('Test ')
    const res = await fetch(`http://host.docker.internal:5000/api/bookings/${id}`);
    console.log(res)
    if (!res.ok) {
        throw new Error('Failed to fetch booking');
    }
    return res.json();
}