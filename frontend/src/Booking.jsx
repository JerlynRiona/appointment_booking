import { useEffect, useState } from "react";

export default function Booking() {
  const userId = "TEMP_USER_ID"; // replace later with login user
  const [slots, setSlots] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const fetchSlots = async () => {
    const res = await fetch("http://localhost:5000/api/slot");
    setSlots(await res.json());
  };

  const fetchBookings = async () => {
    const res = await fetch(`http://localhost:5000/api/booking/user/${userId}`);
    setBookings(await res.json());
  };

  useEffect(() => {
    fetchSlots();
    fetchBookings();
  }, []);

  const bookSlot = async () => {
    await fetch("http://localhost:5000/api/booking/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, slotId: selectedSlot._id })
    });
    setSelectedSlot(null);
    fetchSlots();
    fetchBookings();
  };

  const cancelBooking = async (bookingId) => {
    await fetch("http://localhost:5000/api/booking/cancel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bookingId })
    });
    fetchSlots();
    fetchBookings();
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Available Slots</h2>

      {slots.map(slot => (
        <div
          key={slot._id}
          onClick={() => !slot.isBooked && setSelectedSlot(slot)}
          style={{
            margin: 10,
            padding: 10,
            background: slot.isBooked ? "#ff6b6b" : "#6bff95",
            cursor: slot.isBooked ? "not-allowed" : "pointer"
          }}
        >
          <b>{slot.consultantName}</b><br />
          {slot.consultationType}<br />
          {slot.date} {slot.startTime}-{slot.endTime}
        </div>
      ))}

      {selectedSlot && (
        <button onClick={bookSlot}>Book Selected Slot</button>
      )}

      <hr />

      <h2>My Bookings</h2>

      {bookings.map(b => (
        <div key={b._id} style={{ border: "1px solid black", margin: 10, padding: 10 }}>
          <b>{b.consultantName}</b><br />
          {b.consultationType}<br />
          {b.date} {b.startTime}-{b.endTime}<br />
          <button onClick={() => cancelBooking(b._id)}>Cancel</button>
        </div>
      ))}
    </div>
  );
}
