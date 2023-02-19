import React, { useContext } from "react";
import { useRef, useState, useEffect } from "react";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errorRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errormsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    useRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventdefault();
    console.log(user, pwd);
    setUser("");
    setPwd("");
    setSuccess("");
  };

  return (
    <section>
      <p
        ref={errorRef}
        className={errorMsg ? "errormsg" : "offscreen"}
        aria-alive="assertive"
      >
        {errorMsg}
      </p>
      <h1>Sing in</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="usernae">Username:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.Value)}
          value={user}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.Value)}
          value={pwd}
          required
        />
        <button>Sing in</button>
      </form>
    </section>
  );
};
