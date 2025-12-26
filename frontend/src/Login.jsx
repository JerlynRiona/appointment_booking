import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    // TEMP SIMPLE LOGIN (for UI demo)
    if (email && password) {
      navigate("/booking");
    } else {
      alert("Enter email and password");
    }
  };

  return (
    <div className="container">
      <h2>User Login</h2>

      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

      <button onClick={login}>Login</button>
    </div>
  );
}
