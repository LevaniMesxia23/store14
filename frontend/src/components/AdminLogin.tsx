import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    if (username === 'admin' && password === 'admin') {

      window.location.href = '/admin';
    } else {
      Swal.fire({
        title: "Login Failed",
        text: "Invalid credentials. Please try again.",
        icon: "error"
      });
    }
  };

  return (
    <div className="admin-login">
      <h1>Admin Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;
