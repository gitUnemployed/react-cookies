import { useCookies } from "react-cookie";

const Login = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user-data"]);

  const userData = cookies["user-data"] ? cookies["user-data"] : null;

  const dummyResponse = {
    name: "example name",
    token: "dummy-token",
    email: "example@example.com",
    role: "user",
    phone: "9999999999",
  };

  const handleLogin = () => {
    setCookie("user-data", JSON.stringify(dummyResponse), { path: "/" });
  };

  const handleRemoveCookie = () => {
    removeCookie("user-data");
  };

  return (
    <div>
      <h1>React Cookies Demo</h1>
      <form>
        <div>
          <label>Email</label>
          <input type="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>
      </form>

      <div style={{ marginTop: "10px" }}>
        <button onClick={handleLogin}>Login</button>
      </div>

      {userData && (
        <div>
          <h5>Username: {userData.name}</h5>
          <h5>Email: {userData.email}</h5>
          <h5>Phone: {userData.phone}</h5>
        </div>
      )}

      {userData && (
        <button onClick={handleRemoveCookie} style={{ marginLeft: "10px" }}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Login;
