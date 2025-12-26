import { useNavigate } from "react-router-dom";

export default function RoleSelect() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Select Role</h2>

      <button
        style={{ margin: "10px", padding: "10px 20px" }}
        onClick={() => navigate("/login/user")}
      >
        User
      </button>

      <button
        style={{ margin: "10px", padding: "10px 20px" }}
        onClick={() => navigate("/login/admin")}
      >
        Admin
      </button>
    </div>
  );
}
