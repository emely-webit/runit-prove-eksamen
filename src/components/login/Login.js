import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthDataContext } from "../context/AuthDataContext";

const Login = () => {
  const history = useHistory();
  const { onLogin } = useContext(AuthDataContext);
  const loginSubmit = (e) => {
    e.preventDefault();
    let url = "http://localhost:5021/login/login";
    fetch(url, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        brugernavn: e.target.brugernavn.value,
        password: e.target.password.value,
      }),
    })
      .then((data) => {
        console.log(data);
        onLogin();
        alert("Du er nu logget ind");
        history.push("/admin");
      })
      .catch((err) => {
        alert("Der er en fejl i dit login: " + err);
      });
  };

  return (
    <section className="ml-3 mt-4 p-3 bg-white w-85">
      <h1>Login her</h1>
      <form onSubmit={loginSubmit}>
        <input
          type="brugernavn"
          name="brugernavn"
          placeholder="brugernavn"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input type="submit" placeholder="login" />
      </form>
    </section>
  );
};

export default Login;
