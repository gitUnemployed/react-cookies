import { useState } from "react";
import { useCookies } from "react-cookie";

const Demo = () => {
  const [username, setUsername] = useState<string>("");
  const [cookies, setCookie, removeCookie] = useCookies(["username"]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSetCookie = () => {
    setCookie("username", username, { path: "/" });
    alert("Cookie has been set!");
  };

  const handleRemoveCookie = () => {
    removeCookie("username");
    alert("Cookie has been removed!");
  };
  return (
    <div>
      <h1>React Cookies Demo</h1>
      <form>
        <label>Username</label>
        <input type="text" value={username} onChange={handleChange} />
      </form>

      <div style={{ marginTop: "10px" }}>
        <button onClick={handleSetCookie}>Set Cookie</button>
        <button onClick={handleRemoveCookie} style={{ marginLeft: "10px" }}>
          Remove Cookie
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <p>
          Current Cookie Value:{" "}
          {cookies.username ? cookies.username : "No cookie set"}
        </p>
      </div>
    </div>
  );
};

export default Demo;
