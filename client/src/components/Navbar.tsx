import React from "react";
import { useAuthStore } from "../store";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleLoginNavbar = () => {
    navigate("/login");
  };

  return (
    <nav>
      <h1>My App</h1>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLoginNavbar}>Login</button>
      )}
    </nav>
  );
};

export default Navbar;
