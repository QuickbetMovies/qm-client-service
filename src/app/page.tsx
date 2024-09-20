import RootLayout from "./layout";
import LoginForm from "@/components/login-form";

export default function Home(): JSX.Element {
  return (
    <RootLayout>
      <h1>Welcome to the Inlaze Next.js Starter!</h1>
      <LoginForm />
    </RootLayout>
  );
}
