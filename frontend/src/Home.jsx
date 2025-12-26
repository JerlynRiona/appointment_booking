import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Education Consultation Booking</h1>
      <p>Select your role</p>

      <div className="btn-group">
        <button onClick={() => navigate("/login")}>User</button>
        <button onClick={() => navigate("/admin")}>Admin</button>
      </div>
    </div>
  );
}
