

import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../Firebase";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Signup
  const signup = async () => {
    if (!email || !password) {
      alert("Please enter email & password");
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signup success:", res.user);
      alert("Signup Successful");
    } catch (err) {
      alert(err.message);
    }
  };

  // Login
  const login = async () => {
    if (!email || !password) {
      alert("Please enter email & password");
      return;
    }

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log("Login success:", res.user);
      alert("Login Successful");
    } catch (err) {
      alert(err.message);
    }
  };

  // Google Login
  const googleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);
      console.log("Google login:", res.user);
      alert("Google Login Successful");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Firebase Authentication</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={signup}>Signup</button>
      <button onClick={login}>Login</button>

      <hr />

      <button onClick={googleLogin}>Login with Google</button>
    </div>
  );
}
