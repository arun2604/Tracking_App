// AdminLoginPage.jsx
import { useState } from "react";
import { Lock } from "lucide-react";
import "./AdminLoginPage.css";

function AdminLoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      onLogin();
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <div className="icon-circle">
            <Lock className="lock-icon" />
          </div>
          <h2>Admin Login</h2>
          <p>Access the admin dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          {error && <div className="error-msg">{error}</div>}

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="demo-credentials">
          <p>Demo credentials:</p>
          <p>
            Username: <strong>admin</strong> <br />
            Password: <strong>admin123</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminLoginPage;
