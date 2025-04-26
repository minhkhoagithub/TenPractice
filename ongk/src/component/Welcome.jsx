import { useAuth } from "./AuthContext.jsx";

function Welcome() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Chào mừng, {user.name} 👋</h2>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Đăng xuất</button>
    </div>
  );
}

export default Welcome;
