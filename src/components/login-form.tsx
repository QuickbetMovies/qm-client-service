"use client";
import LoginAction from "@/actions/login-action";

const LoginForm = () => {
  return (
    <form action={LoginAction}>
      <input type="email" name="Email" />
      <input type="password" name="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
