import { useDispatch } from "react-redux";
import { login, logout } from "../store/authSlice";

function Login() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ username: "khoa123", email: "khoa@example.com" }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Đăng nhập</button>
      <button onClick={handleLogout}>Đăng xuất</button>
    </div>
  );
}

export default Login;
