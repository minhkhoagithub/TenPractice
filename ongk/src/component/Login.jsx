import { useAuth } from "./AuthContext.jsx";
import { useState } from "react";

function Login() {
  const { login } = useAuth();
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (name.trim() === "") return alert("Nhập tên trước khi đăng nhập!");

    // Fake thông tin user
    login({
      id: Date.now(),
      name,
      email: `${name.toLowerCase()}@example.com`
    });
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <input
        type="text"
        placeholder="Nhập tên..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
}

export default Login;
