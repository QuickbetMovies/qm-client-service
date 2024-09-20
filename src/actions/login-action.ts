"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const LoginAction = async (formData: FormData) => {
  const fields = {
    Email: formData.get("Email"),
    Password: formData.get("Password"),
  };
  const res = await fetch("http://172.18.0.2:8080/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });
  console.log(res)

  const data = await res.json();
  cookies.apply("token", data.data.token);
  revalidatePath("/");
};

export default LoginAction;
