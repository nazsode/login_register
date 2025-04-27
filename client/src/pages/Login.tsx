import React, { useState } from "react";
import { useAuthStore } from "../store";
import { axiosInstance } from "../api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // bebem çok kombinasyon denedim bu çalıştı mı? direkt port yazmadım 5000 yazdım
      const response = await axiosInstance.post("/auth/login", {
        //bebem bura login tarayıcıda registerdayız ikisini de değiştiriyom ki
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      useAuthStore
        .getState()
        .setUser({ _id: "user_id", username, token: response.data.token });
      navigate("/home");
    } catch (error) {
      console.error("Login failed", error);
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
