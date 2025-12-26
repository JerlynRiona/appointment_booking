import { useState } from "react";

function Admin() {
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [message, setMessage] = useState("");

  const createSlot = async () => {
    const res = await fetch("http://localhost:5000/api/slot/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date, startTime, endTime })
    });

    const data = await res.json();
    setMessage(data.message);

    setDate("");
    setStartTime("");
    setEndTime("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin – Create Slots</h2>

      <input
        placeholder="Date (eg: 26-06-2025)"
        value={date}
        onChange={e => setDate(e.target.value)}
      /><br /><br />

      <input
        placeholder="Start Time (eg: 10:00 AM)"
        value={startTime}
        onChange={e => setStartTime(e.target.value)}
      /><br /><br />

      <input
        placeholder="End Time (eg: 10:30 AM)"
        value={endTime}
        onChange={e => setEndTime(e.target.value)}
      /><br /><br />

      <button onClick={createSlot}>Create Slot</button>

      {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
  );
}

export default Admin;
